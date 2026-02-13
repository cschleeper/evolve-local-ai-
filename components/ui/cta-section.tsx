import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/constants";
import { formatPhoneForHref } from "@/lib/utils";

export function CTASection() {
  return (
    <section className="py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[24px] border border-[var(--color-accent)]/35 bg-[linear-gradient(120deg,#cf7142,#bc5928)] px-6 py-12 text-white shadow-[0_28px_45px_-26px_rgb(80_28_9/0.7)] sm:px-10 sm:py-14">
          <div className="pointer-events-none absolute right-0 top-0 h-44 w-44 translate-x-1/4 -translate-y-1/4 rounded-full bg-white/18 blur-2xl" />
          <p className="eyebrow text-white/75">Start with one workflow</p>
          <h2 className="mt-4 font-serif-display text-4xl leading-tight sm:text-5xl">
            Ready to put AI to work for your business?
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/92 sm:text-base">
            Book a free 30-minute discovery call. We will map your highest-impact use case and show you exactly how implementation would work.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href={`mailto:${siteConfig.salesEmail}`}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-black/80"
            >
              Email Us <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={formatPhoneForHref(siteConfig.phone)}
              className="rounded-full border border-white/70 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-[var(--color-ink)]"
            >
              Call Now
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
