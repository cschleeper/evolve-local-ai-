import { NextResponse } from "next/server";
import { z } from "zod";

const messageSchema = z.object({
  role: z.enum(["user", "assistant", "system"]),
  content: z.string().min(1).max(4000),
});

const chatRequestSchema = z.object({
  messages: z.array(messageSchema).min(1).max(30),
  user: z.string().min(3).max(128).optional(),
});

type GatewayResponse = {
  type?: string;
  id?: string;
  ok?: boolean;
  payload?: unknown;
  error?: { message?: string };
};

type GatewayClient = {
  request: (method: string, params: Record<string, unknown>) => Promise<GatewayResponse>;
  close: () => void;
};

function normalizeGatewaySocketUrl(url: string) {
  const trimmed = url.trim().replace(/\/+$/, "");
  if (trimmed.startsWith("wss://") || trimmed.startsWith("ws://")) {
    return trimmed;
  }
  if (trimmed.startsWith("https://")) {
    return `wss://${trimmed.slice("https://".length)}`;
  }
  if (trimmed.startsWith("http://")) {
    return `ws://${trimmed.slice("http://".length)}`;
  }
  return `ws://${trimmed}`;
}

function extractText(value: unknown): string | null {
  if (typeof value === "string") {
    const clean = value.trim();
    return clean ? clean : null;
  }

  if (Array.isArray(value)) {
    for (const item of value) {
      const text = extractText(item);
      if (text) return text;
    }
    return null;
  }

  if (!value || typeof value !== "object") return null;
  const record = value as Record<string, unknown>;

  const directKeys = ["reply", "content", "text", "message", "output"];
  for (const key of directKeys) {
    const text = extractText(record[key]);
    if (text) return text;
  }

  const nestedKeys = [
    "assistant",
    "result",
    "response",
    "final",
    "data",
    "messages",
    "entries",
    "history",
    "items",
    "payload",
  ];
  for (const key of nestedKeys) {
    const text = extractText(record[key]);
    if (text) return text;
  }

  return null;
}

function findLatestAssistantText(value: unknown): string | null {
  if (!Array.isArray(value)) return null;
  for (let i = value.length - 1; i >= 0; i -= 1) {
    const item = value[i];
    if (!item || typeof item !== "object") continue;
    const record = item as Record<string, unknown>;
    const role = typeof record.role === "string" ? record.role.toLowerCase() : "";
    if (role !== "assistant") continue;
    const text = extractText(record.content) ?? extractText(record.message) ?? extractText(record.text);
    if (text) return text;
  }
  return null;
}

function createGatewayClient(url: string): Promise<GatewayClient> {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(url);
    const pending = new Map<
      string,
      {
        resolve: (value: GatewayResponse) => void;
        reject: (error: Error) => void;
        timer: ReturnType<typeof setTimeout>;
      }
    >();
    let requestId = 0;

    const cleanupPending = (error: Error) => {
      for (const entry of pending.values()) {
        clearTimeout(entry.timer);
        entry.reject(error);
      }
      pending.clear();
    };

    ws.addEventListener("open", () => {
      resolve({
        request(method, params) {
          return new Promise((resolveRequest, rejectRequest) => {
            requestId += 1;
            const id = `site-${requestId}`;
            const timer = setTimeout(() => {
              pending.delete(id);
              rejectRequest(new Error(`Gateway timeout for ${method}.`));
            }, 15000);

            pending.set(id, { resolve: resolveRequest, reject: rejectRequest, timer });

            ws.send(
              JSON.stringify({
                type: "req",
                id,
                method,
                params,
              }),
            );
          });
        },
        close() {
          cleanupPending(new Error("Gateway client closed."));
          ws.close();
        },
      });
    });

    ws.addEventListener("message", (event) => {
      const raw = typeof event.data === "string" ? event.data : "";
      if (!raw) return;

      const parsed = JSON.parse(raw) as GatewayResponse;
      if (parsed.type !== "res" || typeof parsed.id !== "string") return;

      const match = pending.get(parsed.id);
      if (!match) return;

      clearTimeout(match.timer);
      pending.delete(parsed.id);
      match.resolve(parsed);
    });

    ws.addEventListener("error", () => {
      cleanupPending(new Error("Gateway socket error."));
      reject(new Error("Gateway socket error."));
    });

    ws.addEventListener("close", () => {
      cleanupPending(new Error("Gateway socket closed."));
    });
  });
}

export async function POST(req: Request) {
  const gatewayUrl = process.env.OPENCLAW_GATEWAY_URL;
  const gatewayToken = process.env.OPENCLAW_GATEWAY_TOKEN;
  const agentId = process.env.OPENCLAW_AGENT_ID || "main";

  if (!gatewayUrl || !gatewayToken) {
    return NextResponse.json(
      { error: "Chat service is not configured yet." },
      { status: 503 },
    );
  }

  const body = await req.json().catch(() => null);
  const parsed = chatRequestSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid request payload." },
      { status: 400 },
    );
  }

  const socketUrl = normalizeGatewaySocketUrl(gatewayUrl);
  const client = await createGatewayClient(socketUrl).catch(() => null);
  if (!client) {
    return NextResponse.json(
      { error: "Could not reach chat gateway." },
      { status: 502 },
    );
  }

  const sessionKey = `agent:${agentId}:${parsed.data.user || "website"}`;

  const connectResponse = await client
    .request("connect", {
      minProtocol: 3,
      maxProtocol: 3,
      client: {
        id: "evolve-local-ai-site",
        version: "1.0.0",
        mode: "webchat",
        platform: "vercel",
        instanceId: `site-${Date.now()}`,
      },
      role: "operator",
      scopes: ["operator.admin"],
      auth: {
        token: gatewayToken,
      },
    })
    .catch(() => null);

  if (!connectResponse || connectResponse.ok !== true) {
    client.close();
    return NextResponse.json(
      {
        error: "Gateway returned an error.",
        details: connectResponse?.error?.message || "Failed to connect to gateway RPC.",
      },
      { status: 502 },
    );
  }

  const latestUserMessage = parsed.data.messages
    .filter((message) => message.role === "user")
    .at(-1)?.content;

  const sendAttempts: Array<Record<string, unknown>> = [
    { sessionKey, message: latestUserMessage },
    { sessionKey, text: latestUserMessage },
    { sessionKey, input: latestUserMessage },
    { sessionKey, messages: parsed.data.messages },
  ];

  let sendResponse: GatewayResponse | null = null;
  for (const attempt of sendAttempts) {
    // Skip malformed attempts if user input is unexpectedly absent.
    if (!attempt.message && !attempt.text && !attempt.input && !attempt.messages) {
      continue;
    }
    const response = await client.request("chat.send", attempt).catch(() => null);
    if (response?.ok === true) {
      sendResponse = response;
      break;
    }
  }

  if (!sendResponse) {
    client.close();
    return NextResponse.json(
      { error: "Gateway rejected chat request." },
      { status: 502 },
    );
  }

  const directReply = extractText(sendResponse.payload);
  if (directReply) {
    client.close();
    return NextResponse.json({ reply: directReply });
  }

  const historyResponse = await client
    .request("chat.history", { sessionKey, limit: 40 })
    .catch(() => null);

  const content =
    findLatestAssistantText((historyResponse?.payload as Record<string, unknown> | undefined)?.entries) ??
    findLatestAssistantText((historyResponse?.payload as Record<string, unknown> | undefined)?.messages) ??
    extractText(historyResponse?.payload);

  client.close();

  if (!content) {
    return NextResponse.json(
      { error: "Gateway response did not include assistant content." },
      { status: 502 },
    );
  }

  return NextResponse.json({ reply: content });
}
