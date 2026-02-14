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

  const payload = {
    model: `openclaw:${agentId}`,
    messages: parsed.data.messages,
    user: parsed.data.user,
    stream: false,
  };

  const response = await fetch(
    `${gatewayUrl.replace(/\/$/, "")}/v1/chat/completions`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${gatewayToken}`,
      },
      body: JSON.stringify(payload),
    },
  ).catch(() => null);

  if (!response) {
    return NextResponse.json(
      { error: "Could not reach chat gateway." },
      { status: 502 },
    );
  }

  if (!response.ok) {
    const details = await response.text().catch(() => "");
    return NextResponse.json(
      {
        error: "Gateway returned an error.",
        status: response.status,
        details: details.slice(0, 500),
      },
      { status: 502 },
    );
  }

  const data = await response.json().catch(() => null);
  const content =
    data?.choices?.[0]?.message?.content && typeof data.choices[0].message.content === "string"
      ? data.choices[0].message.content
      : null;

  if (!content) {
    return NextResponse.json(
      { error: "Gateway response did not include assistant content." },
      { status: 502 },
    );
  }

  return NextResponse.json({ reply: content });
}
