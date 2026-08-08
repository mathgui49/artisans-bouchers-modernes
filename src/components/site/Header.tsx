"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { business } from "@/lib/business";
import { content } from "@/lib/content";
import { CartButton } from "@/components/shop/CartButton";

const nav = content.nav;
const links = nav.items;

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
        scrolled || open
          ? "bg-[color:var(--color-cream)]/95 backdrop-blur-md border-b border-[color:var(--color-line)]"
          : "bg-transparent"
      }`}
      style={
        scrolled || open
          ? { backgroundColor: "rgba(250, 246, 239, 0.95)" }
          : undefined
      }
    >
      <div className="container-x flex flex-wrap items-center justify-between gap-y-2 py-1.5 md:py-2">
        <Link
          href="/"
          aria-label={`${business.name}, accueil`}
          className="flex items-center gap-3 shrink-0"
          onClick={() => setOpen(false)}
        >
          <Image
            src={nav.logo.src}
            alt={nav.logo.alt}
            width={520}
            height={208}
            priority
            className="h-16 md:h-20 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex min-w-0 flex-wrap items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="min-w-0 px-3 py-2 text-[0.9rem] font-medium text-[color:var(--color-ink)] hover:text-[color:var(--color-bordeaux)] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex min-w-0 items-center gap-3">
          <a href={`tel:${business.phoneIntl}`} className="min-w-0 text-sm font-medium text-[color:var(--color-stone)] hover:text-[color:var(--color-ink)] transition-colors">
            {business.phone}
          </a>
          <Link href={nav.cta.href} className="btn-primary min-w-0 !py-2.5 !px-5 text-sm">
            {nav.cta.label}
            <span aria-hidden>→</span>
          </Link>
          <CartButton />
        </div>

        <div className="lg:hidden flex items-center gap-1">
          <CartButton compact />
          <button
            type="button"
            aria-label={open ? nav.closeMenuLabel : nav.openMenuLabel}
            aria-expanded={open}
            className="h-11 w-11 flex flex-col items-center justify-center gap-1.5 rounded-full hover:bg-[color:var(--color-cream-deep)] transition-colors"
            onClick={() => setOpen((o) => !o)}
          >
            <span className={`block h-[2px] w-6 bg-[color:var(--color-ink)] transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-[2px] w-6 bg-[color:var(--color-ink)] transition-opacity duration-300 ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`block h-[2px] w-6 bg-[color:var(--color-ink)] transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden fixed left-0 right-0 transition-transform duration-300 z-40 overflow-y-auto ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          backgroundColor: "#faf6ef",
          top: "84px",
          height: "calc(100vh - 84px)",
        }}
        aria-hidden={!open}
      >
        <nav className="container-x texte-secable py-8 flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="min-w-0 py-4 text-2xl font-display border-b border-[color:var(--color-line)]"
            >
              {l.label}
            </Link>
          ))}
          <a href={`tel:${business.phoneIntl}`} className="mt-6 text-lg font-medium text-[color:var(--color-stone)]">
            ☏ {business.phone}
          </a>
          <Link
            href={nav.ctaMobile.href}
            className="btn-primary mt-4 w-full"
            onClick={() => setOpen(false)}
          >
            {nav.ctaMobile.label}
          </Link>
        </nav>
      </div>
    </header>
  );
}
