import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CTASection } from "@/components/ui/cta-section";
import { JsonLd } from "@/components/ui/json-ld";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import { absoluteUrl } from "@/lib/utils";
import { blogPostingSchema, breadcrumbSchema } from "@/lib/schemas";
import { buildMetadata, defaultOgImage } from "@/lib/seo";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug).catch(() => null);
  if (!post) {
    return {};
  }

  const metadata = buildMetadata({
    title: `${post.frontmatter.title} | Evolve Local AI`,
    description: post.frontmatter.description,
    path: `/blog/${slug}`,
    keywords: post.frontmatter.tags,
    type: "article",
  });

  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      type: "article",
      publishedTime: post.frontmatter.publishedAt,
      modifiedTime: post.frontmatter.updatedAt,
      authors: [post.frontmatter.author],
      images: [
        {
          url: post.frontmatter.image ? absoluteUrl(post.frontmatter.image) : defaultOgImage,
          width: 1200,
          height: 630,
          alt: post.frontmatter.title,
        },
      ],
    },
    twitter: {
      ...metadata.twitter,
      images: [post.frontmatter.image ? absoluteUrl(post.frontmatter.image) : defaultOgImage],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug).catch(() => null);
  if (!post) {
    notFound();
  }
  const allPosts = await getAllPosts();
  const related = allPosts.filter((item) => item.slug !== slug).slice(0, 2);

  return (
    <>
      <JsonLd
        data={
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.frontmatter.title, path: `/blog/${slug}` },
          ])
        }
      />
      <JsonLd
        data={
          blogPostingSchema({
            title: post.frontmatter.title,
            description: post.frontmatter.description,
            slug,
            date: post.frontmatter.publishedAt,
            updated: post.frontmatter.updatedAt,
            author: post.frontmatter.author,
            image: post.frontmatter.image,
            tags: post.frontmatter.tags,
          })
        }
      />
      <section className="pt-28 pb-16">
        <Container className="max-w-5xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.frontmatter.title, href: `/blog/${slug}` },
            ]}
          />
          <div className="inline-flex rounded-full border border-black/10 bg-white px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
            {post.frontmatter.category} • {post.readingTime}
          </div>
          <h1 className="mt-5 font-serif-display text-5xl leading-tight tracking-tight text-[var(--color-ink)] sm:text-[4rem]">
            {post.frontmatter.title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--color-muted)]">{post.frontmatter.description}</p>
          <div className="mt-4 text-sm text-[var(--color-muted)]">
            By {post.frontmatter.author} •{" "}
            <time dateTime={post.frontmatter.publishedAt}>
              {new Date(post.frontmatter.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          </div>
        </Container>
      </section>
      <section className="pb-16">
        <Container className="grid gap-10 lg:grid-cols-[0.7fr_0.3fr]">
          <article className="prose-content panel p-8">{post.content}</article>
          <aside className="panel h-fit p-5">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-muted)]">Table of Contents</p>
            <ul className="mt-4 space-y-2 text-sm">
              {post.headings.map((heading) => (
                <li key={heading.id}>
                  <a href={`#${heading.id}`} className="text-[var(--color-accent)] underline underline-offset-4">
                    {heading.text}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </Container>
      </section>
      <section className="pb-16">
        <Container className="grid gap-5 md:grid-cols-2">
          <h2 className="md:col-span-2 font-serif-display text-4xl text-[var(--color-ink)]">Related Articles</h2>
          {related.map((item) => (
            <article key={item.slug} className="panel p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-muted)]">Related Post</p>
              <h3 className="mt-2 font-serif-display text-2xl text-[var(--color-ink)]">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{item.description}</p>
              <Link href={`/blog/${item.slug}`} className="mt-4 inline-flex text-sm font-medium text-[var(--color-accent)]">
                Read article
              </Link>
            </article>
          ))}
        </Container>
      </section>
      <section className="pb-16">
        <Container className="panel max-w-4xl p-8">
          <h2 className="font-serif-display text-4xl text-[var(--color-ink)]">Author</h2>
          <p className="mt-3 text-sm font-medium text-[var(--color-ink)]">{post.frontmatter.author}</p>
          <p className="mt-4 text-sm leading-8 text-[var(--color-muted)]">
            Evolve Local AI helps local businesses implement AI systems that produce real operational results. Based in Ambler, Pennsylvania, the team focuses on practical deployment over hype.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full bg-[var(--color-ink)] px-6 py-3 text-sm font-medium text-white hover:bg-[var(--color-accent)]"
          >
            Book a free consultation
          </Link>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
