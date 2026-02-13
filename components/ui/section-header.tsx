import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
};

export function SectionHeader({ label, title, subtitle, centered }: SectionHeaderProps) {
  return (
    <header className={cn("mb-12 space-y-4", centered && "mx-auto max-w-3xl text-center")}>
      {label ? (
        <p className="eyebrow inline-flex items-center gap-2 text-[var(--color-accent)]">
          <span className="h-px w-6 bg-[var(--color-accent)]/55" />
          {label}
        </p>
      ) : null}
      <h2 className="font-serif-display text-4xl leading-tight tracking-tight text-[var(--color-ink)] sm:text-[3.15rem]">
        {title}
      </h2>
      {subtitle ? <p className="text-base leading-8 text-[var(--color-muted)] sm:text-lg">{subtitle}</p> : null}
    </header>
  );
}
