import Link from "next/link";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

type PackageCardProps = {
  name: string;
  subtitle: string;
  price: string;
  features: string[];
  cta: string;
  href: string;
  featured?: boolean;
};

export function PackageCard({ name, subtitle, price, features, cta, href, featured }: PackageCardProps) {
  return (
    <article
      className={cn(
        "group relative rounded-[22px] border border-black/10 bg-[var(--color-card)] p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_40px_-28px_rgb(8_8_12/0.65)]",
        featured && "border-[var(--color-accent)]/65 bg-[linear-gradient(180deg,rgba(196,93,44,0.08),rgba(255,253,248,0.95)_28%)] shadow-lg",
      )}
    >
      {featured ? (
        <span className="absolute -top-3 left-6 rounded-full bg-[var(--color-accent)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-white">
          Most Popular
        </span>
      ) : null}

      <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">{name}</p>
      <h3 className="mt-2 font-serif-display text-[2.1rem] leading-tight text-[var(--color-ink)]">{subtitle}</h3>
      <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{price}</p>

      <ul className="mt-6 space-y-3.5">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm leading-7 text-[var(--color-ink)]">
            <Check className="mt-1 h-4 w-4 shrink-0 text-[var(--color-accent)]" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href={href}
        className={cn(
          "mt-8 inline-flex w-full items-center justify-center rounded-full px-4 py-3 text-sm font-medium transition-colors",
          featured
            ? "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-deep)]"
            : "bg-[var(--color-ink)] text-white hover:bg-[var(--color-accent)]",
        )}
      >
        {cta}
      </Link>
    </article>
  );
}
