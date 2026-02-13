import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { blogPreview, trustedResources } from "@/lib/constants";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";

export function BlogPreviewSection() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeader
          label="Resources"
          title="Real guidance, not recycled AI headlines"
          subtitle="Read the in-house playbooks first, then use the trusted external guides to improve local visibility, measurement, and security."
          centered
        />

        <div className="mb-8 mt-12 flex items-center justify-between gap-4">
          <h3 className="font-serif-display text-3xl text-[var(--color-ink)]">In-house playbooks</h3>
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] hover:text-[#a74f25]">
            View all articles <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {blogPreview.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.08}>
              <article className="group overflow-hidden rounded-[16px] border border-black/10 bg-[var(--color-card)] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="h-36 bg-[radial-gradient(circle_at_20%_20%,rgba(196,93,44,0.2),transparent_45%),linear-gradient(120deg,#fbf6ee,#fffdf8)]" />
                <div className="p-5">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="rounded-full border border-black/10 bg-white px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
                      {post.category}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-muted)]">{post.readTime}</span>
                  </div>
                  <h3 className="font-serif-display text-2xl leading-tight text-[var(--color-ink)]">{post.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] hover:text-[#ad4f24]"
                  >
                    Read article <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mb-8 mt-16 flex items-center justify-between gap-4">
          <h3 className="font-serif-display text-3xl text-[var(--color-ink)]">Trusted external guides</h3>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-muted)]">SBA • Google • CISA</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {trustedResources.map((resource, index) => (
            <Reveal key={resource.href} delay={(index % 3) * 0.06}>
              <article className="group rounded-[16px] border border-black/10 bg-[var(--color-card)] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]/45 hover:shadow-md">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-muted)]">{resource.source}</p>
                <h4 className="mt-2 font-serif-display text-2xl leading-tight text-[var(--color-ink)]">{resource.title}</h4>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{resource.description}</p>
                <Link
                  href={resource.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] hover:text-[#ad4f24]"
                >
                  Open resource <ArrowUpRight className="h-4 w-4" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
