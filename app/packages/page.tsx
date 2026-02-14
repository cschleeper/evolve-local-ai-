import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { PackageCard } from "@/components/ui/package-card";
import { SectionHeader } from "@/components/ui/section-header";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CTASection } from "@/components/ui/cta-section";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { JsonLd } from "@/components/ui/json-ld";
import { packages } from "@/lib/constants";
import { breadcrumbSchema, faqSchema } from "@/lib/schemas";
import { buildMetadata } from "@/lib/seo";

const pricingFaq = [
  {
    question: "Are package prices fixed?",
    answer: "No. All prices are starting at and adjust based on scope, integrations, and support needs.",
  },
  {
    question: "What is included in monthly maintenance?",
    answer:
      "Maintenance includes monitoring, updates, troubleshooting, prompt/workflow tuning, and support for normal operational issues.",
  },
  {
    question: "Can I start with one service and expand later?",
    answer: "Yes. Most clients begin with one focused implementation and add capabilities as results come in.",
  },
  {
    question: "Do you require long contracts?",
    answer: "No long lock-ins are required for setup projects. Ongoing support plans are flexible.",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "AI Implementation Packages & Pricing | Evolve Local AI",
  description:
    "Starter, Professional, and Enterprise AI packages for local businesses. Starting at $1,500 for website AI to full transformation.",
  path: "/packages",
});

export default function PackagesPage() {
  return (
    <>
      <JsonLd data={faqSchema(pricingFaq)} />
      <JsonLd
        data={
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Packages", path: "/packages" },
          ])
        }
      />
      <section className="pt-28 pb-16">
        <Container>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Packages", href: "/packages" }]} />
          <SectionHeader
            label="Pricing"
            title="AI implementation packages"
            subtitle="All options are starting at pricing and tailored to your business size, systems, and goals."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {packages.map((pkg) => (
              <PackageCard key={pkg.name} {...pkg} />
            ))}
          </div>
        </Container>
      </section>
      <section className="pb-16">
        <Container>
          <h2 className="font-serif-display text-4xl text-[var(--color-ink)]">Detailed comparison</h2>
          <div className="mt-6 overflow-x-auto rounded-xl border border-black/10 bg-[var(--color-card)]">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="border-b border-black/10 text-[var(--color-ink)]">
                  <th className="p-4 font-medium">Feature</th>
                  <th className="p-4 font-medium">Starter</th>
                  <th className="p-4 font-medium">Professional</th>
                  <th className="p-4 font-medium">Enterprise</th>
                </tr>
              </thead>
              <tbody className="text-[var(--color-muted)]">
                <tr className="border-b border-black/10"><td className="p-4">Website chatbot</td><td className="p-4">Included</td><td className="p-4">Optional</td><td className="p-4">Included</td></tr>
                <tr className="border-b border-black/10"><td className="p-4">Dedicated AI Assistant</td><td className="p-4">-</td><td className="p-4">Included</td><td className="p-4">Included</td></tr>
                <tr className="border-b border-black/10"><td className="p-4">Workflow automation</td><td className="p-4">Basic</td><td className="p-4">Advanced</td><td className="p-4">Department-wide</td></tr>
                <tr className="border-b border-black/10"><td className="p-4">AI phone agent</td><td className="p-4">-</td><td className="p-4">Optional</td><td className="p-4">Included</td></tr>
                <tr><td className="p-4">Support model</td><td className="p-4">30-day launch support</td><td className="p-4">Managed monthly support</td><td className="p-4">Priority support + reviews</td></tr>
              </tbody>
            </table>
          </div>
        </Container>
      </section>
      <section className="pb-16">
        <Container className="grid gap-5 md:grid-cols-2">
          <article className="rounded-xl border border-black/10 bg-[var(--color-card)] p-6">
            <h3 className="font-serif-display text-3xl text-[var(--color-ink)]">Add-on services</h3>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-[var(--color-muted)]">
              <li>Custom workflow buildouts</li>
              <li>Additional agent roles and task packs</li>
              <li>Conversion landing pages and campaign setup</li>
              <li>Team onboarding and process documentation</li>
            </ul>
          </article>
          <article className="rounded-xl border border-black/10 bg-[var(--color-card)] p-6">
            <h3 className="font-serif-display text-3xl text-[var(--color-ink)]">Maintenance includes</h3>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-[var(--color-muted)]">
              <li>System monitoring and health checks</li>
              <li>Model/prompt updates and response tuning</li>
              <li>Bug triage and same-day support for urgent issues</li>
              <li>Monthly optimization recommendations</li>
            </ul>
          </article>
        </Container>
      </section>
      <section className="pb-16">
        <Container className="max-w-4xl">
          <SectionHeader title="Pricing FAQ" centered />
          <FAQAccordion items={pricingFaq} />
          <div className="mt-8">
            <Link href="/contact" className="rounded-full bg-[var(--color-ink)] px-6 py-3 text-sm font-medium text-white hover:bg-[var(--color-accent)]">
              Book Your Discovery Call
            </Link>
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
