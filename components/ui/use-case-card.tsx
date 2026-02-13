import type { ComponentType } from "react";

type UseCaseCardProps = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

export function UseCaseCard({ icon: Icon, title, description }: UseCaseCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-[16px] border border-black/10 bg-[var(--color-card)] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-[linear-gradient(90deg,var(--color-accent),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="mb-4 inline-flex rounded-lg border border-black/10 bg-white p-2 text-[var(--color-accent)]">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mb-2 font-serif-display text-2xl leading-tight text-[var(--color-ink)]">{title}</h3>
      <p className="text-sm leading-7 text-[var(--color-muted)]">{description}</p>
    </article>
  );
}
