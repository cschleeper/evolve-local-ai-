import { cn } from "@/lib/utils";

type ProcessStepProps = {
  index: number;
  title: string;
  description: string;
};

export function ProcessStep({ index, title, description }: ProcessStepProps) {
  return (
    <article className="relative rounded-[16px] border border-black/10 bg-[var(--color-card)] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]/55 hover:shadow-sm">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white font-mono text-sm text-[var(--color-accent)]">
        {index + 1}
      </div>
      <h3 className="mb-2 font-serif-display text-[1.7rem] leading-tight text-[var(--color-ink)]">{title}</h3>
      <p className="text-sm leading-7 text-[var(--color-muted)]">{description}</p>
      <span
        className={cn(
          "hidden lg:block",
          "absolute -right-7 top-1/2 h-px w-14 -translate-y-1/2 bg-black/20",
          index === 3 && "hidden",
        )}
      />
    </article>
  );
}
