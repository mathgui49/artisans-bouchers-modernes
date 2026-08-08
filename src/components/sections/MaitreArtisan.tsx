import Image from "next/image";
import Link from "next/link";
import { content } from "@/lib/content";

const section = content.distinction;

export function MaitreArtisan() {
  return (
    <section
      id="maitre-artisan"
      aria-labelledby="maitre-artisan-title"
      className="relative isolate overflow-hidden bg-[color:var(--color-ink)] text-[color:var(--color-cream)] py-24 md:py-32"
    >
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-[var(--radius-lg)] overflow-hidden bg-[color:var(--color-ink-soft)]">
                <Image
                  src={section.image.src}
                  alt={section.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                />
              </div>
              {/* Seal */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 h-32 w-32 lg:h-36 lg:w-36 rounded-full border border-[color:var(--color-gold)]/50 flex items-center justify-center text-center bg-[color:var(--color-ink)]/85 backdrop-blur-sm rotate-[-8deg]">
                <div>
                  <div className="font-display text-lg lg:text-xl text-[color:var(--color-gold)] leading-tight">
                    {section.seal.line1}
                    <br />
                    {section.seal.line2}
                  </div>
                  <div className="text-[0.6rem] tracking-[0.25em] uppercase text-[color:var(--color-cream)]/70 mt-1">
                    {section.seal.year}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Texte */}
          <div className="lg:col-span-7">
            <p className="flex items-center gap-3 mb-5">
              <span className="flag-bar"><span /><span /><span /></span>
              <span className="text-[0.78rem] tracking-[0.2em] uppercase font-semibold text-[color:var(--color-gold)]">
                {section.eyebrow}
              </span>
            </p>
            <h2
              id="maitre-artisan-title"
              className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.05]"
            >
              {section.title}
              <br />
              <em className="not-italic font-normal text-[color:var(--color-gold)]">
                {section.titleAccent}
              </em>.
            </h2>

            <div className="mt-7 space-y-5 text-lg text-[color:var(--color-cream)]/85 leading-relaxed text-justify hyphens-auto">
              <p>
                <strong className="text-[color:var(--color-cream)] font-medium">
                  {section.lead.name}
                </strong>
                {section.lead.beforeTitle}
                <strong className="text-[color:var(--color-cream)] font-medium">{section.lead.title}</strong>
                {section.lead.after}
              </p>
              <p>{section.body}</p>
              <p className="text-[color:var(--color-gold-soft)]">{section.outro}</p>
            </div>

            <p className="mt-8 pl-5 border-l-2 border-[color:var(--color-gold)]/50 font-display text-xl md:text-2xl italic text-[color:var(--color-cream)]/90">
              {section.quote}
            </p>

            <div className="mt-9">
              <Link
                href={section.cta.href}
                className="btn-primary !bg-[color:var(--color-gold)] !text-[color:var(--color-ink)] hover:!bg-[color:var(--color-cream)]"
              >
                {section.cta.label}
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
