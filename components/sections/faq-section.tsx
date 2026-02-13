import { homepageFaq } from "@/lib/constants";
import { Container } from "@/components/ui/container";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { SectionHeader } from "@/components/ui/section-header";

export function FAQSection() {
  return (
    <section id="faq" className="py-20">
      <Container className="max-w-4xl">
        <SectionHeader
          label="FAQ"
          title="Common questions before getting started"
          subtitle="If you have a different workflow or edge case, we cover that on the discovery call."
          centered
        />
        <FAQAccordion items={homepageFaq} />
      </Container>
    </section>
  );
}
