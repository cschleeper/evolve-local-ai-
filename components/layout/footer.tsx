import Link from "next/link";
import { companyLinks, serviceLinks, siteConfig, socialLinks } from "@/lib/constants";
import { formatPhoneForHref } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[linear-gradient(180deg,#fffcf6,#f4eee4)] pt-16">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 pb-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <h3 className="font-serif-display text-3xl text-[var(--color-ink)]">Evolve Local AI</h3>
          <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
            Practical AI implementation for local businesses in Ambler, PA and the broader Pennsylvania market.
          </p>
        </div>

        <div>
          <p className="eyebrow text-[var(--color-muted)]">Services</p>
          <ul className="mt-4 space-y-2 text-sm text-[var(--color-ink)]">
            {serviceLinks.slice(0, 6).map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-[var(--color-accent)]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-[var(--color-muted)]">Company</p>
          <ul className="mt-4 space-y-2 text-sm text-[var(--color-ink)]">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-[var(--color-accent)]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-[var(--color-muted)]">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-[var(--color-ink)]">
            <li>
              Sales:{" "}
              <Link href={`mailto:${siteConfig.salesEmail}`} className="hover:text-[var(--color-accent)]">
                {siteConfig.salesEmail}
              </Link>
            </li>
            <li>
              Support:{" "}
              <Link href={`mailto:${siteConfig.supportEmail}`} className="hover:text-[var(--color-accent)]">
                {siteConfig.supportEmail}
              </Link>
            </li>
            <li>
              <Link href={formatPhoneForHref(siteConfig.phone)} className="hover:text-[var(--color-accent)]">
                {siteConfig.phone}
              </Link>
            </li>
            <li>{siteConfig.location}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-black/10 py-4">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 text-xs text-[var(--color-muted)] sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Evolve Local AI. All rights reserved.</p>
          {socialLinks.length ? (
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <Link key={link.label} href={link.href} className="hover:text-[var(--color-accent)]">
                  {link.label}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
