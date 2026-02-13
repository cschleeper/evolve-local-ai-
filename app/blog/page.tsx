import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { BlogPostCard } from "@/components/blog/blog-post-card";
import { getAllPosts } from "@/lib/mdx";
import { absoluteUrl } from "@/lib/utils";
import { JsonLd } from "@/components/ui/json-ld";
import { breadcrumbSchema } from "@/lib/schemas";
import { trustedResources } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog",
  description: "Practical AI implementation guides for local business owners.",
  alternates: { canonical: absoluteUrl("/blog") },
  openGraph: {
    title: "Evolve Local AI Blog",
    description: "Useful, plain-English AI guides for small and local business owners.",
    url: absoluteUrl("/blog"),
  },
};

export default async function BlogIndexPage() {
  const posts = await getAllPosts();

  return (
    <>
      <JsonLd
        data={
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ])
        }
      />
      <section className="pt-28 pb-16">
        <Container>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }]} />
          <h1 className="font-serif-display text-5xl leading-tight tracking-tight text-[var(--color-ink)] sm:text-6xl">Resources for local business AI adoption</h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--color-muted)]">
            Practical, no-jargon articles on where AI helps most and how to implement it without disrupting your operations.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </section>
      <section className="pb-20">
        <Container>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
            <h2 className="font-serif-display text-4xl text-[var(--color-ink)] sm:text-5xl">Trusted external reading</h2>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
              Useful references for owners and managers
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {trustedResources.map((resource) => (
              <article key={resource.href} className="rounded-[16px] border border-black/10 bg-[var(--color-card)] p-5 shadow-sm">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-muted)]">{resource.source}</p>
                <h3 className="mt-2 font-serif-display text-2xl text-[var(--color-ink)]">{resource.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{resource.description}</p>
                <Link
                  href={resource.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] hover:text-[#ad4f24]"
                >
                  Open resource <ArrowUpRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
