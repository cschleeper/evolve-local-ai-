import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { JsonLd } from "@/components/ui/json-ld";
import { breadcrumbSchema } from "@/lib/schemas";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Evolve Local AI services website.",
  alternates: { canonical: absoluteUrl("/privacy") },
};

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy", path: "/privacy" },
        ])}
      />
      <section className="pt-28 pb-16">
        <Container className="max-w-4xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy", href: "/privacy" }]} />
          <h1 className="font-serif-display text-5xl text-[var(--color-ink)]">Privacy Policy</h1>
          <div className="prose-content mt-6 space-y-4 text-sm">
            <p>Effective date: February 13, 2026.</p>
            <p>
              Evolve Local AI respects your privacy. This policy explains what information we collect, how we use it, and your rights regarding your data.
            </p>
            <h2>Information we collect</h2>
            <p>We may collect contact details you submit through forms, service inquiry information, and website analytics data.</p>
            <h2>How we use information</h2>
            <p>We use your information to respond to inquiries, deliver services, improve website performance, and communicate service updates.</p>
            <h2>Data sharing</h2>
            <p>We do not sell your personal data. We may use vetted service providers for hosting, analytics, and communications.</p>
            <h2>Data security</h2>
            <p>We apply reasonable technical and organizational safeguards to protect your data.</p>
            <h2>Your rights</h2>
            <p>You may request access, correction, or deletion of your data by contacting us at sales@evolvelocalai.com.</p>
          </div>
        </Container>
      </section>
    </>
  );
}
