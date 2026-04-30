"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { business } from "@/lib/business";

const links = [
  { href: "#metiers", label: "Nos métiers" },
  { href: "#engagements", label: "Engagements" },
  { href: "#drive", label: "Drive" },
  { href: "#plateaux", label: "Plateaux" },
  { href: "#galerie", label: "Galerie" },
  { href: "#infos", label: "Infos" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-[backdrop-filter,background] duration-300 ${
        scrolled
          ? "bg-[color:var(--color-cream)]/85 backdrop-blur-md border-b border-[color:var(--color-line)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between py-4 md:py-5">
        <Link
          href="/"
          aria-label={`${business.name} — accueil`}
          className="flex items-center gap-3 shrink-0"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo.png"
            alt={business.name}
            width={260}
            height={104}
            priority
            className="h-10 md:h-12 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-3.5 py-2 text-[0.92rem] font-medium text-[color:var(--color-ink)] hover:text-[color:var(--color-bordeaux)] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href={`tel:${business.phoneIntl}`} className="text-sm font-medium text-[color:var(--color-stone)] hover:text-[color:var(--color-ink)] transition-colors">
            {business.phone}
          </a>
          <a href={business.cta.drive} target="_blank" rel="noopener" className="btn-primary !py-2.5 !px-5 text-sm">
            Commander au Drive
            <span aria-hidden>→</span>
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          className="lg:hidden h-11 w-11 flex flex-col items-center justify-center gap-1.5 rounded-full hover:bg-[color:var(--color-cream-deep)] transition-colors"
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`block h-[2px] w-6 bg-[color:var(--color-ink)] transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-[2px] w-6 bg-[color:var(--color-ink)] transition-opacity duration-300 ${open ? "opacity-0" : "opacity-100"}`} />
          <span className={`block h-[2px] w-6 bg-[color:var(--color-ink)] transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      <div
        className={`lg:hidden fixed inset-x-0 top-[68px] bottom-0 bg-[color:var(--color-cream)] transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <nav className="container-x py-8 flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-4 text-2xl font-display border-b border-[color:var(--color-line)]"
            >
              {l.label}
            </Link>
          ))}
          <a href={`tel:${business.phoneIntl}`} className="mt-6 text-lg font-medium text-[color:var(--color-stone)]">
            ☏ {business.phone}
          </a>
          <a
            href={business.cta.drive}
            target="_blank"
            rel="noopener"
            className="btn-primary mt-4 w-full"
            onClick={() => setOpen(false)}
          >
            Commander au Drive →
          </a>
        </nav>
      </div>
    </header>
  );
}
