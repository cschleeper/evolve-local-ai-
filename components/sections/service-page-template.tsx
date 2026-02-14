import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { SectionHeader } from "@/components/ui/section-header";
import { services } from "@/lib/constants";
import { serviceSeoContent } from "@/lib/service-seo-content";

export function ServicePageTemplate({ slug }: { slug: string }) {
  const service = services.find((item) => item.slug === slug);
  if (!service) {
    notFound();
  }
  const seoContent = serviceSeoContent[service.slug];

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
            {seoContent?.h1 || service.title}
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

      {seoContent ? (
        <section className="py-12">
          <Container className="space-y-6">
            {seoContent.sections.map((section) => (
              <article key={section.heading} className="panel p-7">
                <h2 className="font-serif-display text-3xl text-[var(--color-ink)]">{section.heading}</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{section.subheading}</p>
                <div className="mt-5 space-y-4 text-sm leading-8 text-[var(--color-muted)]">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </Container>
        </section>
      ) : null}

      <section className="py-12">
        <Container className="panel p-7">
          <h2 className="font-serif-display text-3xl text-[var(--color-ink)]">Implementation timeline and expected outcomes</h2>
          <h3 className="mt-3 font-serif-display text-2xl text-[var(--color-ink)]">What to expect in the first 30-60 days</h3>
          <p className="mt-4 text-sm leading-8 text-[var(--color-muted)]">
            Every {service.title.toLowerCase()} rollout begins with workflow mapping and goal alignment so the system is configured around actual operating constraints. In most small business environments, the first milestone is consistent execution of one high-friction process, then expansion into adjacent workflows once quality is stable. This phased model is how Pennsylvania teams get reliable results without disrupting day-to-day service delivery.
          </p>
          <p className="mt-4 text-sm leading-8 text-[var(--color-muted)]">
            We define success metrics before launch, track outcomes weekly, and tune implementation details as new patterns emerge. That means you can see clear progress in response speed, follow-up consistency, and operational throughput while maintaining human oversight for edge cases. If you want practical AI implementation in Ambler, Montgomery County, or the Greater Philadelphia area, this structure keeps adoption manageable and measurable.
          </p>
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
                  Explore {item.title} service <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {seoContent?.relatedArticles?.length ? (
        <section className="py-12">
          <Container>
            <SectionHeader title="Related guides" subtitle="Useful reading before your discovery call." />
            <div className="grid gap-4 md:grid-cols-2">
              {seoContent.relatedArticles.map((article) => (
                <article key={article.slug} className="panel p-6">
                  <h3 className="font-serif-display text-2xl text-[var(--color-ink)]">{article.anchor}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{article.summary}</p>
                  <Link href={`/blog/${article.slug}`} className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)]">
                    Read article <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/contact" className="rounded-full bg-[var(--color-ink)] px-6 py-3 text-sm font-medium text-white hover:bg-[var(--color-accent)]">
                Book your free consultation
              </Link>
            </div>
          </Container>
        </section>
      ) : null}
    </>
  );
}
