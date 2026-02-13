import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPostSummary } from "@/lib/mdx";

export function BlogPostCard({ post }: { post: BlogPostSummary }) {
  return (
    <article className="group overflow-hidden rounded-[16px] border border-black/10 bg-[var(--color-card)] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="h-40 bg-[radial-gradient(circle_at_30%_20%,rgba(196,93,44,0.22),transparent_55%),linear-gradient(120deg,#f8f1e6,#fffdf8)]" />
      <div className="p-6">
        <div className="mb-3 flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-black/10 bg-white px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
            {post.category}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-muted)]">{post.readingTime}</span>
        </div>
        <h3 className="font-serif-display text-2xl leading-tight text-[var(--color-ink)]">{post.title}</h3>
        <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{post.description}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] hover:text-[#ad4f24]"
        >
          Read article <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
