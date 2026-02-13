import { useCases } from "@/lib/constants";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { UseCaseCard } from "@/components/ui/use-case-card";

export function UseCasesSection() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeader
          label="Use Cases"
          title="Where local businesses see immediate wins"
          subtitle="These are practical automations we deploy repeatedly to remove busywork and improve customer response speed."
          centered
        />
        <div className="grid gap-5 md:grid-cols-2">
          {useCases.map((useCase, index) => (
            <Reveal key={useCase.title} delay={(index % 2) * 0.08}>
              <UseCaseCard icon={useCase.icon} title={useCase.title} description={useCase.description} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
