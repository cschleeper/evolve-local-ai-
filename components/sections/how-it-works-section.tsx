import { processSteps } from "@/lib/constants";
import { Container } from "@/components/ui/container";
import { ProcessStep } from "@/components/ui/process-step";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24">
      <Container>
        <SectionHeader
          label="How It Works"
          title="A clear four-step implementation process"
          subtitle="No bloated consulting decks. Just a practical rollout with clear milestones and measurable outcomes."
          centered
        />
        <div className="grid gap-4 lg:grid-cols-4">
          {processSteps.map((step, idx) => (
            <Reveal key={step.title} delay={idx * 0.08}>
              <ProcessStep index={idx} title={step.title} description={step.description} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
