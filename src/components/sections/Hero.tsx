import Image from "next/image";
import { business } from "@/lib/business";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[color:var(--color-ink)] text-[color:var(--color-cream)]">
      {/* Background video, fallback to image */}
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-35"
        autoPlay
        loop
        muted
        playsInline
        poster="/images/plateau-charcuterie.jpg"
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/video/presentation.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--color-ink)]/75 via-[color:var(--color-ink)]/65 to-[color:var(--color-ink)]/95" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[color:var(--color-cream)]/0 via-[color:var(--color-ink)]/30 to-transparent" />

      <div className="container-x relative pt-24 md:pt-36 pb-28 md:pb-40">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="flag-bar"><span /><span /><span /></span>
            <span className="text-[0.78rem] tracking-[0.18em] uppercase font-semibold text-[color:var(--color-gold)]">
              Bain de Bretagne · Depuis chez nous, pour chez vous
            </span>
          </div>
          <h1 className="font-display text-[2.6rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.02] tracking-tight">
            Boucherie, charcuterie<span className="text-[color:var(--color-gold)]">.</span>
            <br />
            <em className="not-italic font-light italic-fraunces">Et tout ce qu&apos;il faut autour.</em>
          </h1>
          <p className="mt-7 text-lg md:text-xl text-[color:var(--color-cream)]/85 max-w-2xl leading-relaxed">
            <span className="block mb-3 text-[color:var(--color-gold-soft)] font-medium">
              {business.tagline}
            </span>
            Une viande française issue d&apos;une agriculture raisonnée, une charcuterie maison
            sans colorant ni conservateur, des fromages et primeurs de producteurs locaux.
            <span className="block mt-3 text-[color:var(--color-gold)] italic font-display text-2xl md:text-3xl">
              Mangeons-mieux, ensemble.
            </span>
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a href={business.cta.drive} target="_blank" rel="noopener" className="btn-primary !bg-[color:var(--color-cream)] !text-[color:var(--color-ink)] hover:!bg-[color:var(--color-gold)]">
              Commander au Drive
              <span aria-hidden>→</span>
            </a>
            <a href="#metiers" className="btn-ghost text-[color:var(--color-cream)] hover:!bg-[color:var(--color-cream)]/10">
              Découvrir nos rayons
            </a>
          </div>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
            <Stat label="Rayons" value="5" />
            <Stat label="Producteurs locaux" value="20+" />
            <Stat label="Origine viande" value="🇫🇷 France" />
            <Stat label="Charcuterie maison" value="100%" />
          </div>
        </div>
      </div>

      {/* Floating quality badge */}
      <div className="hidden md:flex absolute right-8 top-28 lg:right-16 lg:top-36 h-36 w-36 lg:h-44 lg:w-44 rounded-full border border-[color:var(--color-gold)]/40 items-center justify-center text-center bg-[color:var(--color-ink-soft)]/40 backdrop-blur-sm rotate-[-8deg] reveal">
        <div>
          <div className="font-display text-3xl lg:text-4xl text-[color:var(--color-gold)]">100%</div>
          <div className="text-xs lg:text-sm tracking-[0.25em] uppercase text-[color:var(--color-cream)]/85 mt-1">qualité</div>
        </div>
      </div>

      {/* Hidden image fallback for accessibility */}
      <Image
        src="/images/plateau-charcuterie.jpg"
        alt="Plateau charcuterie maison Artisans Bouchers Modernes"
        fill
        priority
        className="sr-only"
      />
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-display text-2xl md:text-3xl text-[color:var(--color-gold)]">{value}</div>
      <div className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-cream)]/65 mt-1">{label}</div>
    </div>
  );
}
