import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { JsonLd } from "@/components/ui/json-ld";
import { breadcrumbSchema } from "@/lib/schemas";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Evolve Local AI website and services.",
  alternates: { canonical: absoluteUrl("/terms") },
};

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Terms", path: "/terms" },
        ])}
      />
      <section className="pt-28 pb-16">
        <Container className="max-w-4xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Terms", href: "/terms" }]} />
          <h1 className="font-serif-display text-5xl text-[var(--color-ink)]">Terms of Service</h1>
          <div className="prose-content mt-6 space-y-4 text-sm">
            <p>Effective date: February 13, 2026.</p>
            <p>
              By using this website or engaging Evolve Local AI for services, you agree to these terms. If you do not agree, please do not use the site.
            </p>
            <h2>Services</h2>
            <p>Service scope, timelines, and deliverables are defined in project agreements and may vary by client requirements.</p>
            <h2>Fees and payment</h2>
            <p>Pricing shown on this site is starting at pricing only. Final pricing is provided in writing before project start.</p>
            <h2>Intellectual property</h2>
            <p>Unless otherwise stated in writing, each party retains ownership of its existing intellectual property.</p>
            <h2>Limitation of liability</h2>
            <p>To the extent permitted by law, Evolve Local AI is not liable for indirect, incidental, or consequential damages.</p>
            <h2>Contact</h2>
            <p>Questions about these terms can be sent to sales@evolvelocalai.com.</p>
          </div>
        </Container>
      </section>
    </>
  );
}
