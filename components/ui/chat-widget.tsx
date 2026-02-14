"use client";

import { useMemo, useState } from "react";
import { MessageSquare, Send, X } from "lucide-react";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type ApiMessage = {
  role: "user" | "assistant";
  content: string;
};

function getOrCreateVisitorId() {
  const key = "evolve_local_ai_chat_visitor_id";
  const existing = window.localStorage.getItem(key);
  if (existing) {
    return existing;
  }
  const generated =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `visitor-${Date.now()}`;
  window.localStorage.setItem(key, generated);
  return generated;
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hi. I am your AI Assistant. Tell me what you need help with and I can point you to the right next step.",
    },
  ]);

  const apiMessages = useMemo<ApiMessage[]>(
    () =>
      messages
        .filter((message) => message.role === "user" || message.role === "assistant")
        .map((message) => ({ role: message.role, content: message.content })),
    [messages],
  );

  async function sendMessage() {
    const trimmed = input.trim();
    if (!trimmed || sending) {
      return;
    }

    const userMessage: ChatMessage = { role: "user", content: trimmed };
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput("");
    setError(null);
    setSending(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: getOrCreateVisitorId(),
        messages: [...apiMessages, userMessage],
      }),
    }).catch(() => null);

    if (!res) {
      setError("Connection issue. Please try again.");
      setSending(false);
      return;
    }

    const data = await res.json().catch(() => null);
    if (!res.ok || !data?.reply) {
      setError(data?.error || "Assistant unavailable right now.");
      setSending(false);
      return;
    }

    setMessages((current) => [
      ...current,
      { role: "assistant", content: String(data.reply) },
    ]);
    setSending(false);
  }

  return (
    <div className="fixed bottom-5 right-5 z-[80]">
      {open ? (
        <div className="w-[min(92vw,380px)] rounded-[18px] border border-black/12 bg-[var(--color-card)] shadow-[0_24px_42px_-26px_rgb(8_8_12/0.45)]">
          <div className="flex items-center justify-between border-b border-black/10 px-4 py-3">
            <div>
              <p className="font-serif-display text-xl text-[var(--color-ink)]">
                AI Assistant
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
                Live chat support
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full p-1 text-[var(--color-muted)] hover:bg-black/5"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="max-h-[360px] space-y-3 overflow-y-auto px-4 py-3">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={
                  message.role === "user"
                    ? "ml-auto w-fit max-w-[88%] rounded-2xl rounded-br-md bg-[var(--color-ink)] px-3 py-2 text-sm text-white"
                    : "mr-auto w-fit max-w-[88%] rounded-2xl rounded-bl-md border border-black/10 bg-white px-3 py-2 text-sm text-[var(--color-ink)]"
                }
              >
                {message.content}
              </div>
            ))}
            {sending ? (
              <div className="mr-auto w-fit max-w-[88%] rounded-2xl rounded-bl-md border border-black/10 bg-white px-3 py-2 text-sm text-[var(--color-muted)]">
                Thinking...
              </div>
            ) : null}
          </div>

          {error ? (
            <p className="px-4 pb-2 text-xs text-[var(--color-accent)]">{error}</p>
          ) : null}

          <div className="border-t border-black/10 p-3">
            <form
              onSubmit={(event) => {
                event.preventDefault();
                void sendMessage();
              }}
              className="flex items-center gap-2"
            >
              <label htmlFor="site-chat-input" className="sr-only">
                Ask a question
              </label>
              <input
                id="site-chat-input"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about services, pricing, or setup..."
                className="w-full rounded-full border border-black/15 bg-white px-3 py-2 text-sm text-[var(--color-ink)] outline-none focus:border-[var(--color-accent)]"
              />
              <button
                type="submit"
                disabled={sending || !input.trim()}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-ink)] text-white transition-colors hover:bg-[var(--color-accent)] disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-[var(--color-ink)] px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[var(--color-accent)]"
        >
          <MessageSquare className="h-4 w-4" />
          Chat with AI
        </button>
      )}
    </div>
  );
}
