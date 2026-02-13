import { assistantFeatures, assistantNodes } from "@/lib/constants";
import { Container } from "@/components/ui/container";
import { DiagramNode } from "@/components/ui/diagram-node";

export function AssistantDeepDiveSection() {
  return (
    <section id="ai-assistant" className="relative overflow-hidden bg-[var(--color-ink)] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_5%,rgba(196,93,44,0.2),transparent_36%)]" />
      <Container>
        <p className="eyebrow text-white/70">Flagship Service</p>
        <h2 className="mt-4 max-w-4xl font-serif-display text-4xl leading-tight sm:text-[3.2rem]">
          The AI Assistant: a digital employee that lives on its own computer.
        </h2>
        <p className="mt-5 max-w-3xl text-sm leading-7 text-white/80 sm:text-base">
          This is not just a browser chatbot. It is an autonomous assistant with memory, workflows, and the ability to operate tools inside your business environment.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            {assistantFeatures.map((feature) => (
              <article key={feature.title} className="panel-dark p-5">
                <div className="mb-3 inline-flex rounded-lg border border-white/20 p-2 text-[var(--color-accent)]">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="font-serif-display text-2xl leading-tight">{feature.title}</h3>
                <p className="mt-2 text-sm leading-7 text-white/76">{feature.description}</p>
              </article>
            ))}
          </div>

          <div className="relative rounded-[22px] border border-white/15 bg-white/5 p-6">
            <div className="mx-auto mb-8 inline-flex rounded-2xl border border-[var(--color-accent)]/70 bg-[var(--color-accent)]/10 px-6 py-4 font-serif-display text-2xl text-white">
              Your AI Assistant
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {assistantNodes.map((node) => (
                <DiagramNode key={node} label={node} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
