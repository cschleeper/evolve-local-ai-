import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ContactForm } from "@/components/ui/contact-form";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { JsonLd } from "@/components/ui/json-ld";
import { siteConfig, socialLinks } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schemas";
import { absoluteUrl, formatPhoneForHref } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Evolve Local AI for a free discovery call. Based in Ambler, PA and serving local businesses across Pennsylvania and remotely.",
  alternates: { canonical: absoluteUrl("/contact") },
  openGraph: {
    title: "Contact Evolve Local AI",
    description: "Book your free consultation for AI implementation services.",
    url: absoluteUrl("/contact"),
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ])
        }
      />
      <section className="pt-28 pb-16">
        <Container>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }]} />
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h1 className="font-serif-display text-5xl leading-tight tracking-tight text-[var(--color-ink)] sm:text-6xl">
                Let&apos;s map your AI implementation plan.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--color-muted)]">
                Tell us what is slowing your team down. We will recommend the highest-impact starting point and a realistic rollout.
              </p>
              <div className="mt-8 rounded-[20px] border border-black/10 bg-[var(--color-card)] p-6">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">Direct Contact</p>
                <ul className="mt-4 space-y-2 text-sm text-[var(--color-ink)]">
                  <li>Sales: {siteConfig.salesEmail}</li>
                  <li>Support (existing clients): {siteConfig.supportEmail}</li>
                  <li>Phone: {siteConfig.phone}</li>
                  <li>Location: {siteConfig.location}, Pennsylvania</li>
                </ul>
                <div className="mt-5 flex flex-wrap gap-3 text-sm">
                  <Link href={`mailto:${siteConfig.salesEmail}`} className="text-[var(--color-accent)] underline underline-offset-4">
                    Email sales
                  </Link>
                  <Link href={`mailto:${siteConfig.supportEmail}`} className="text-[var(--color-accent)] underline underline-offset-4">
                    Client support
                  </Link>
                  <Link href={formatPhoneForHref(siteConfig.phone)} className="text-[var(--color-accent)] underline underline-offset-4">
                    Call now
                  </Link>
                </div>
                <div className="mt-5 border-t border-black/10 pt-5">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">Social</p>
                  <div className="mt-3 flex flex-wrap gap-4">
                    {socialLinks.map((social) => (
                      <Link key={social.label} href={social.href} className="text-sm text-[var(--color-accent)] underline underline-offset-4">
                        {social.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-6 rounded-[20px] border border-black/10 bg-[var(--color-card)] p-6">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">Schedule</p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  Prefer to book directly? Add your Calendly link here: <span className="font-medium text-[var(--color-ink)]">https://calendly.com/your-link</span>
                </p>
              </div>
            </div>
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
