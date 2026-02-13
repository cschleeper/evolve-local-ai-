"use client";

import { motion } from "framer-motion";

const lines = [
  "Good morning. 3 new leads overnight.",
  "✓ Replied to 12 customer emails",
  "↻ Website chatbot handled 47 questions",
  "✓ Weekly report generated and sent",
  "Scheduled: social posts for this week",
  "Monitoring inbox for urgent items...",
];

export function TerminalAnimation() {
  return (
    <div className="relative overflow-hidden rounded-[22px] border border-white/20 bg-[linear-gradient(170deg,#111118,#0a0a0f)] p-5 text-sm text-white shadow-[0_28px_55px_-30px_rgb(0_0_0/0.85)] sm:p-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(196,93,44,0.2),transparent_35%)]" />
      <div className="relative mb-5 flex items-center gap-2 border-b border-white/10 pb-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#fb7185]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#facc15]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#4ade80]" />
        <p className="ml-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/70">AI Assistant Activity</p>
      </div>
      <div className="relative space-y-2.5 font-mono text-xs leading-6 sm:text-sm">
        {lines.map((line, index) => (
          <motion.p
            key={line}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.38, duration: 0.35 }}
          >
            <span className="text-[var(--color-accent)]">→ </span>
            {line}
          </motion.p>
        ))}
        <motion.span
          aria-hidden
          className="inline-block h-4 w-2 bg-[var(--color-accent)]"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1 }}
        />
      </div>
    </div>
  );
}
