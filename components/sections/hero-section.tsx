import Link from "next/link";
import { ArrowRight, CalendarCheck2, ShieldCheck, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FloatingBadge } from "@/components/ui/floating-badge";
import { TerminalAnimation } from "@/components/ui/terminal-animation";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-24 pt-40 sm:pt-44">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_84%_8%,rgba(196,93,44,0.18),transparent_42%)]" />
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/35 bg-[var(--color-accent)]/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-accent)]">
              <Sparkles className="h-3.5 w-3.5" />
              Now serving Pennsylvania businesses
            </span>

            <h1 className="mt-6 max-w-4xl font-serif-display text-5xl leading-[1.02] tracking-[-0.023em] text-[var(--color-ink)] sm:text-6xl lg:text-[4.15rem]">
              Your business deserves an <em className="text-[var(--color-accent)]">AI employee</em> that gets real work done.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-[1.07rem]">
              We install, configure, and maintain AI assistants for local businesses. From conversion-focused website chatbots to a dedicated AI that runs on its own computer, we build the system and keep it running for Pennsylvania businesses across Ambler, Montgomery County, and the Greater Philadelphia area.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-6 py-3 text-sm font-medium text-white hover:bg-[var(--color-accent)]"
              >
                Book Free Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/#services"
                className="rounded-full border border-black/20 bg-white/75 px-6 py-3 text-sm font-medium text-[var(--color-ink)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                See What&apos;s Possible
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <article className="panel p-4">
                <p className="eyebrow text-[var(--color-muted)]">Response Speed</p>
                <p className="mt-2 text-sm leading-6 text-[var(--color-ink)]">After-hours questions get answered instantly.</p>
              </article>
              <article className="panel p-4">
                <p className="eyebrow text-[var(--color-muted)]">Owner Time</p>
                <p className="mt-2 text-sm leading-6 text-[var(--color-ink)]">Less manual admin and more focus on customers.</p>
              </article>
              <article className="panel p-4">
                <p className="eyebrow text-[var(--color-muted)]">Control</p>
                <p className="mt-2 text-sm leading-6 text-[var(--color-ink)]">Private deployment options on hardware you control.</p>
              </article>
            </div>
          </div>

          <div className="relative">
            <TerminalAnimation />
            <FloatingBadge
              label="24/7 Active"
              className="absolute -left-3 top-5 rounded-full border border-black/10 bg-white px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-ink)] shadow-sm"
            />
            <FloatingBadge
              label="Private & Local"
              className="absolute -bottom-4 right-3 rounded-full border border-black/10 bg-white px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-ink)] shadow-sm"
            />

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="panel flex items-center gap-2.5 p-3 text-sm text-[var(--color-ink)]">
                <CalendarCheck2 className="h-4 w-4 text-[var(--color-accent)]" />
                Daily business briefing sent at 6:30 AM
              </div>
              <div className="panel flex items-center gap-2.5 p-3 text-sm text-[var(--color-ink)]">
                <ShieldCheck className="h-4 w-4 text-[var(--color-accent)]" />
                Local data controls with managed support
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
