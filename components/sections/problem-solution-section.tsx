import { CircleX, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { painPoints } from "@/lib/constants";

const solutionChecklist = [
  "Installed and configured by us",
  "Runs on hardware you control",
  "Connects to 50+ business platforms",
  "Improves with persistent memory",
  "Maintained and monitored by us",
];

export function ProblemSolutionSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-ink)] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_12%,rgba(196,93,44,0.2),transparent_34%)]" />
      <Container>
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-white/70">The Problem</p>
            <h2 className="mt-4 font-serif-display text-4xl leading-tight sm:text-[3.15rem]">
              You know AI can help your business. You just do not have time to figure out the stack.
            </h2>
            <ul className="mt-8 space-y-3.5">
              {painPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-white/82 sm:text-base">
                  <CircleX className="mt-1 h-4 w-4 shrink-0 text-[#fca5a5]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <article className="relative rounded-[22px] border border-white/20 bg-white/9 p-8 backdrop-blur">
            <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 translate-x-1/4 -translate-y-1/4 rounded-full bg-[var(--color-accent)]/30 blur-2xl" />
            <p className="eyebrow text-white/65">The Solution</p>
            <h3 className="mt-3 font-serif-display text-3xl leading-tight">What if you had a digital employee that never sleeps?</h3>
            <p className="mt-4 text-sm leading-7 text-white/82 sm:text-base">
              Your AI Assistant can monitor, respond, and execute routine tasks continuously. You get consistent output without extra headcount pressure.
            </p>
            <ul className="mt-6 space-y-3">
              {solutionChecklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/88">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-[#86efac]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </Container>
    </section>
  );
}
