import Link from "next/link";

type BreadcrumbItem = { label: string; href: string };

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
        {items.map((item, idx) => (
          <li key={item.href} className="inline-flex items-center gap-2">
            {idx > 0 ? <span>/</span> : null}
            <Link href={item.href} className="hover:text-[var(--color-accent)]">
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
