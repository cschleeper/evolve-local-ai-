import Image from "next/image";
import { valueCards } from "@/lib/constants";
import { Container } from "@/components/ui/container";

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-[var(--color-ink)] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_18%,rgba(196,93,44,0.24),transparent_34%)]" />
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative min-h-80 overflow-hidden rounded-[22px] border border-white/15 bg-white/6">
            <Image
              src="/images/ambler-theater.jpg"
              alt="Ambler Theater sign in Ambler, Pennsylvania"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
              priority={false}
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent px-4 pb-4 pt-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/80">Ambler, Pennsylvania</p>
            </div>
          </div>

          <div>
            <p className="eyebrow text-white/70">About Evolve Local AI</p>
            <h2 className="mt-4 font-serif-display text-4xl leading-tight sm:text-[3.2rem]">
              AI implementation built for local businesses, by a local team.
            </h2>
            <p className="mt-5 text-sm leading-8 text-white/80 sm:text-base">
              Evolve Local AI is based in Ambler, Pennsylvania and focused on practical implementation. We started this company because local businesses across Montgomery County were hearing nonstop AI hype but getting very little real rollout support.
            </p>
            <p className="mt-4 text-sm leading-8 text-white/80 sm:text-base">
              Large platforms are designed for enterprise teams. We build practical systems for owners and small teams who need faster response times, cleaner operations, and better follow-through.
            </p>
            <p className="mt-4 text-sm leading-8 text-white/80 sm:text-base">
              You get direct setup, clear communication, and ongoing support from a local partner who cares about execution quality.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {valueCards.map((value) => (
                <article key={value.title} className="rounded-xl border border-white/15 bg-white/6 p-4">
                  <h3 className="font-serif-display text-xl">{value.title}</h3>
                  <p className="mt-2 text-sm text-white/75">{value.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
