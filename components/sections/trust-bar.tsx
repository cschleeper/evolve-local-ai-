import { trustStats } from "@/lib/constants";
import { Container } from "@/components/ui/container";

export function TrustBar() {
  return (
    <section className="pb-20">
      <Container>
        <div className="rounded-[20px] border border-black/10 bg-[var(--color-card)] p-6 shadow-sm sm:p-7">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trustStats.map((stat) => (
              <div key={stat.label} className="text-center lg:border-r lg:border-black/10 lg:last:border-none lg:px-5">
                <p className="font-serif-display text-4xl text-[var(--color-ink)] sm:text-[2.7rem]">{stat.value}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-muted)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
