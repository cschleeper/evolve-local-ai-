import Link from "next/link";
import type { ComponentType } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  tags: string[];
  href: string;
};

export function ServiceCard({ icon: Icon, title, description, tags, href }: ServiceCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-[16px] border border-black/10 bg-[var(--color-card)] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_40px_-28px_rgb(8_8_12/0.55)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,var(--color-accent),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[var(--color-accent)]/8 blur-2xl" />

      <div className="mb-5 inline-flex rounded-xl border border-black/10 bg-white p-2.5 text-[var(--color-accent)] shadow-[0_10px_16px_-14px_rgb(0_0_0/0.6)]">
        <Icon className="h-5 w-5" />
      </div>

      <h3 className="mb-3 font-serif-display text-[1.65rem] leading-tight text-[var(--color-ink)]">{title}</h3>
      <p className="mb-6 text-sm leading-7 text-[var(--color-muted)]">{description}</p>

      <div className="mb-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-black/10 bg-white px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-muted)]"
          >
            {tag}
          </span>
        ))}
      </div>

      <Link
        href={href}
        className={cn(
          "inline-flex items-center gap-2 text-sm font-medium text-[var(--color-ink)]",
          "hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]",
        )}
      >
        Explore {title} service <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}
