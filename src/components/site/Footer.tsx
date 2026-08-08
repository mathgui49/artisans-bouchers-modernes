import Link from "next/link";
import type { ReactNode } from "react";
import { business } from "@/lib/business";
import { content } from "@/lib/content";

const footer = content.footer;

// Tracés des logos réseaux, appelés par leur nom depuis content.json :
// le client change une adresse ou l'ordre des liens, jamais un chemin SVG.
const SOCIAL_PATHS: Record<string, ReactNode> = {
  facebook: (
    <path d="M22 12a10 10 0 1 0-11.6 9.9V14.9H8v-2.9h2.4V9.8c0-2.4 1.4-3.7 3.6-3.7 1 0 2.1.2 2.1.2v2.3h-1.2c-1.2 0-1.5.7-1.5 1.5V12h2.6l-.4 2.9h-2.2V22A10 10 0 0 0 22 12Z" />
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.3" cy="6.7" r="1" />
    </>
  ),
  youtube: (
    <path d="M22 8.5a2.6 2.6 0 0 0-1.8-1.9C18.5 6 12 6 12 6s-6.5 0-8.2.6A2.6 2.6 0 0 0 2 8.5C1.4 10.2 1.4 12 1.4 12s0 1.8.6 3.5a2.6 2.6 0 0 0 1.8 1.9C5.5 18 12 18 12 18s6.5 0 8.2-.6a2.6 2.6 0 0 0 1.8-1.9c.6-1.7.6-3.5.6-3.5s0-1.8-.6-3.5ZM10 15V9l5 3-5 3Z" />
  ),
};

export function Footer() {
  return (
    <footer className="relative bg-[color:var(--color-ink)] text-[color:var(--color-cream)]/85 pt-20 pb-10">
      <div className="container-x">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 pb-14 border-b border-[color:var(--color-cream)]/10">
          <div className="md:col-span-5">
            <div className="inline-flex items-center gap-3">
              <span className="font-display text-2xl tracking-tight text-[color:var(--color-cream)]">
                {footer.logo.line1}
                <em className="block not-italic font-light italic-fraunces text-[color:var(--color-gold)]">
                  {footer.logo.line2}
                </em>
              </span>
              <span className="flag-bar"><span /><span /><span /></span>
            </div>
            <p className="mt-6 max-w-md text-[color:var(--color-cream)]/65 leading-relaxed">
              {business.shortDescription}
              <br />
              {footer.tagline}
            </p>
            <div className="mt-6 flex gap-3">
              {business.socials.map((s) => (
                <SocialIcon key={s.label} href={s.href} label={s.label}>
                  {SOCIAL_PATHS[s.icon]}
                </SocialIcon>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-display text-lg text-[color:var(--color-cream)] mb-5">{footer.shopTitle}</h3>
            <address className="not-italic text-[color:var(--color-cream)]/70 leading-relaxed">
              {business.address.street}
              <br />
              {business.address.postalCode} {business.address.city}
              <br />
              <a href={`tel:${business.phoneIntl}`} className="hover:text-[color:var(--color-gold)] transition-colors">
                {business.phone}
              </a>
            </address>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-display text-lg text-[color:var(--color-cream)] mb-5">{footer.navTitle}</h3>
            <ul className="space-y-2.5 text-[color:var(--color-cream)]/70">
              {footer.navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-[color:var(--color-gold)] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-display text-lg text-[color:var(--color-cream)] mb-5">{footer.hoursTitle}</h3>
            <ul className="text-sm space-y-1 text-[color:var(--color-cream)]/65">
              {footer.hoursLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-[color:var(--color-cream)]/45">
          <p>© {new Date().getFullYear()} {business.name}. {footer.rights}</p>
          <p className="flex items-center gap-3">
            <span className="flag-bar"><span /><span /><span /></span>
            {footer.baseline}
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-[color:var(--color-cream)]/15 hover:border-[color:var(--color-gold)] hover:text-[color:var(--color-gold)] transition-colors"
    >
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
        {children}
      </svg>
    </a>
  );
}
