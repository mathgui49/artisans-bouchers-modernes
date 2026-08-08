import type { ReactNode } from "react";
import { engagements } from "@/lib/business";
import { content } from "@/lib/content";

const section = content.engagements;

// Pictogrammes appelés par leur nom depuis content.json : le client
// réordonne ou réécrit une promesse, l'icône suit sans toucher au code.
const ICONS: Record<string, ReactNode> = {
  // Responsable / leaf
  leaf: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 3c-9 0-15 6-15 12 0 3 1 6 3 6 6 0 12-6 12-15V3Z" />
      <path d="M9 15c2-4 5-7 9-9" />
    </svg>
  ),
  // Variété / sparkle
  sparkle: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
    </svg>
  ),
  // Création / hands
  hands: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 4v6" />
      <path d="M9 11V6a2 2 0 1 1 4 0v5" />
      <path d="M5 13c0 4 3 7 7 7s7-3 7-7v-2a2 2 0 1 0-4 0v2" />
      <path d="M5 13v-2a2 2 0 1 1 4 0v2" />
    </svg>
  ),
  // Économie / coin
  coin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M15 9.5C14.5 8.5 13.4 8 12 8c-1.7 0-3 .9-3 2.2 0 1.2 1 1.8 2.5 2.1l1 .2c1.5.3 2.5.9 2.5 2.1 0 1.3-1.3 2.4-3 2.4-1.4 0-2.5-.5-3-1.5" />
      <path d="M12 6v2M12 16v2" />
    </svg>
  ),
};

export function Engagements() {
  return (
    <section id="engagements" aria-labelledby="engagements-title" className="relative py-24 md:py-32 bg-[color:var(--color-cream)] bg-grain">
      <div className="container-x">
        <header className="max-w-3xl mb-14 md:mb-20">
          <p className="eyebrow mb-5">
            <span className="flag-bar"><span /><span /><span /></span>
            {section.eyebrow}
          </p>
          <h2 id="engagements-title" className="font-display text-4xl sm:text-5xl md:text-6xl text-[color:var(--color-ink)] tracking-tight">
            {section.title}{" "}
            <em className="text-[color:var(--color-bordeaux)] not-italic font-normal">{section.titleAccent}</em>.
          </h2>
          <p className="mt-6 text-lg text-[color:var(--color-stone)] leading-relaxed text-justify hyphens-auto">
            {section.intro}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[color:var(--color-line)] border border-[color:var(--color-line)] rounded-[var(--radius-lg)] overflow-hidden">
          {engagements.map((e) => (
            <article
              key={e.title}
              className="bg-[color:var(--color-paper)] p-8 md:p-12 flex flex-col gap-5 group hover:bg-[color:var(--color-cream-deep)] transition-colors"
            >
              <div className="flex items-center gap-5">
                <div className="h-14 w-14 rounded-full border border-[color:var(--color-bordeaux)]/30 flex items-center justify-center text-[color:var(--color-bordeaux)] group-hover:bg-[color:var(--color-bordeaux)] group-hover:text-[color:var(--color-cream)] transition-colors">
                  <span className="h-6 w-6">{ICONS[e.icon]}</span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl text-[color:var(--color-ink)]">
                  {e.title}
                </h3>
              </div>
              <p className="text-[color:var(--color-stone)] text-[1.05rem] leading-relaxed pl-[4.6rem] text-justify hyphens-auto">{e.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
