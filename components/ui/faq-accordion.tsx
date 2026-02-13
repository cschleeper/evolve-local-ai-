"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type FAQ = { question: string; answer: string };

export function FAQAccordion({ items }: { items: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const isOpen = open === idx;
        return (
          <div key={item.question} className="overflow-hidden rounded-[14px] border border-black/10 bg-[var(--color-card)] shadow-sm">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              onClick={() => setOpen(isOpen ? null : idx)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${idx}`}
            >
              <span className="pr-4 font-medium text-[var(--color-ink)]">{item.question}</span>
              <ChevronDown className={cn("h-5 w-5 shrink-0 transition-transform", isOpen && "rotate-180 text-[var(--color-accent)]")} />
            </button>
            {isOpen ? (
              <div id={`faq-panel-${idx}`} className="border-t border-black/10 px-5 py-4 text-sm leading-7 text-[var(--color-muted)]">
                {item.answer}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
