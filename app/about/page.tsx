import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { CTASection } from "@/components/ui/cta-section";
import { JsonLd } from "@/components/ui/json-ld";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { valueCards } from "@/lib/constants";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/schemas";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Evolve Local AI | Ambler, Pennsylvania",
  description:
    "AI implementation built for local businesses, by a local team in Ambler, PA. Direct setup, clear communication, ongoing support.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema("/about")} />
      <JsonLd
        data={
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ])
        }
      />
      <section className="pt-28 pb-16">
        <Container>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }]} />
          <h1 className="max-w-4xl font-serif-display text-5xl leading-tight tracking-tight text-[var(--color-ink)] sm:text-6xl">
            Local AI implementation with clear communication and practical results.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--color-muted)]">
            Evolve Local AI is built for real-world local business operations. We install, configure, and support AI systems that reduce daily operational load.
          </p>
        </Container>
      </section>
      <section className="pb-16">
        <Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative min-h-80 overflow-hidden rounded-[20px] border border-black/10 bg-[var(--color-card)]">
            <Image
              src="/images/ambler-theater.jpg"
              alt="Ambler Theater sign in Ambler, Pennsylvania"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
              priority
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent px-4 pb-4 pt-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/80">Ambler, Pennsylvania</p>
            </div>
          </div>
          <div>
            <h2 className="font-serif-display text-4xl text-[var(--color-ink)]">Our story and mission</h2>
            <p className="mt-4 text-sm leading-8 text-[var(--color-muted)]">
              We are based in Ambler, PA and have spent years helping businesses improve operations through technology. Evolve Local AI launched after seeing how quickly larger organizations were adopting automation while local businesses were left with fragmented tools and unclear guidance.
            </p>
            <p className="mt-4 text-sm leading-8 text-[var(--color-muted)]">
              Our focus is straightforward: practical AI systems that do real work, delivered in plain English, with direct support when you need it.
            </p>
            <p className="mt-4 text-sm leading-8 text-[var(--color-muted)]">
              We serve businesses throughout Ambler, Montgomery County, and the greater Philadelphia area, and we also support remote clients across Pennsylvania and the U.S.
            </p>
          </div>
        </Container>
      </section>
      <section className="pb-16">
        <Container>
          <h2 className="font-serif-display text-4xl text-[var(--color-ink)]">Values and approach</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {valueCards.map((value) => (
              <article key={value.title} className="rounded-xl border border-black/10 bg-[var(--color-card)] p-5">
                <h3 className="font-serif-display text-2xl text-[var(--color-ink)]">{value.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{value.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="pb-16">
        <Container className="rounded-[20px] border border-black/10 bg-[var(--color-card)] p-8">
          <h2 className="font-serif-display text-4xl text-[var(--color-ink)]">Why local matters</h2>
          <p className="mt-4 text-sm leading-8 text-[var(--color-muted)]">
            Local businesses run on speed, trust, and personal relationships. Your AI setup should support that reality, not force enterprise complexity into your day. We design AI workflows around your team, your customers, and your market.
          </p>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
