"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Cpu, ArrowUpRight } from "lucide-react";
import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return;
    }
    document.body.style.overflow = "";
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 pt-3">
        <div
          className={cn(
            "mx-auto flex h-16 w-[min(97%,78rem)] items-center justify-between rounded-full border border-black/10 bg-[rgb(245_242_236/0.84)] px-4 backdrop-blur-xl sm:px-5",
            scrolled && "shadow-[0_18px_30px_-24px_rgb(0_0_0/0.55)]",
          )}
        >
          <Link href="/" className="group inline-flex items-center gap-2.5 text-[var(--color-ink)]">
            <span className="relative inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-md border border-black/15 bg-[var(--color-ink)] text-white">
              <Cpu className="h-4 w-4" />
              <span className="absolute inset-x-0 top-0 h-px bg-white/50" />
            </span>
            <span className="font-serif-display text-xl">Evolve Local AI</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-2 text-sm text-[var(--color-muted)] hover:bg-black/5 hover:text-[var(--color-ink)]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-4 py-2 text-sm font-medium text-white hover:bg-[var(--color-accent)]"
            >
              Free Consultation
            </Link>
          </nav>

          <button
            type="button"
            aria-label="Open mobile menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/15 bg-white md:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-0 z-[70] bg-[var(--color-ink)] px-6 pb-10 pt-8 text-white md:hidden">
          <div className="mx-auto flex h-full w-full max-w-xl flex-col">
            <div className="mb-10 flex items-center justify-between">
              <p className="font-serif-display text-2xl">Navigation</p>
              <button
                type="button"
                aria-label="Close menu"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25"
                onClick={() => setOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl border border-white/15 bg-white/5 px-4 py-3.5"
                >
                  <span className="font-serif-display text-3xl">{link.label}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              ))}
            </div>

            <div className="mt-auto rounded-2xl border border-white/20 bg-white/10 p-4">
              <p className="eyebrow text-white/70">Next Step</p>
              <p className="mt-2 text-sm text-white/85">Book a free discovery call and get a practical AI rollout plan in plain English.</p>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-medium"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
