import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { SectionHeader } from "@/components/ui/section-header";
import { services } from "@/lib/constants";

export function ServicePageTemplate({ slug }: { slug: string }) {
  const service = services.find((item) => item.slug === slug);
  if (!service) {
    notFound();
  }

  const related = services.filter((item) => service.related.includes(item.slug));

  return (
    <>
      <section className="pb-16 pt-32">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/#services" },
              { label: service.title, href: `/services/${service.slug}` },
            ]}
          />
          <p className="eyebrow text-[var(--color-accent)]">Service</p>
          <h1 className="mt-3 max-w-4xl font-serif-display text-5xl leading-tight tracking-tight text-[var(--color-ink)] sm:text-[4rem]">
            {service.title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--color-muted)]">{service.shortDescription}</p>
          <p className="mt-4 text-sm font-medium text-[var(--color-ink)]">{service.startsAt} (starting pricing)</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-full bg-[var(--color-ink)] px-6 py-3 text-sm font-medium text-white hover:bg-[var(--color-accent)]">
              Book Consultation
            </Link>
            <Link
              href="/packages"
              className="rounded-full border border-black/20 bg-white px-6 py-3 text-sm font-medium text-[var(--color-ink)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              View Packages
            </Link>
          </div>
        </Container>
      </section>

      <section className="pb-14">
        <Container className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="panel space-y-5 p-7 text-[var(--color-muted)]">
            {service.description.map((paragraph) => (
              <p key={paragraph} className="leading-8">
                {paragraph}
              </p>
            ))}
          </div>
          <aside className="panel p-6">
            <p className="eyebrow text-[var(--color-muted)]">Who this is for</p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-ink)]">
              {service.whoItsFor.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </aside>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <SectionHeader title="How this service works" subtitle="A practical implementation path tailored to your operation." />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, index) => (
              <article key={step} className="rounded-[16px] border border-black/10 bg-[var(--color-card)] p-5 shadow-sm">
                <p className="eyebrow text-[var(--color-accent)]">Step {index + 1}</p>
                <p className="mt-2 text-sm leading-7 text-[var(--color-ink)]">{step}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container className="grid gap-5 md:grid-cols-2">
          <article className="panel p-6">
            <h2 className="font-serif-display text-3xl text-[var(--color-ink)]">Core capabilities</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--color-muted)]">
              {service.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
          </article>
          <article className="panel p-6">
            <h2 className="font-serif-display text-3xl text-[var(--color-ink)]">Use case examples</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--color-muted)]">
              {service.useCases.map((useCase) => (
                <li key={useCase}>• {useCase}</li>
              ))}
            </ul>
          </article>
        </Container>
      </section>

      <section className="py-12">
        <Container className="max-w-4xl">
          <SectionHeader title="Service FAQ" subtitle="Clear answers before we start your implementation." centered />
          <FAQAccordion items={service.faq} />
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <SectionHeader title="Related services" subtitle="Pair services for bigger operational gains." />
          <div className="grid gap-4 md:grid-cols-3">
            {related.map((item) => (
              <article key={item.slug} className="rounded-[16px] border border-black/10 bg-[var(--color-card)] p-5 shadow-sm">
                <h3 className="font-serif-display text-2xl text-[var(--color-ink)]">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{item.shortDescription}</p>
                <Link
                  href={`/services/${item.slug}`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)]"
                >
                  View service <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
