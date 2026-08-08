import Image from "next/image";
import Link from "next/link";
import { content } from "@/lib/content";

const hero = content.hero;

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[color:var(--color-ink)] text-[color:var(--color-cream)]">
      {/* Background video, fallback to image */}
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-60"
        autoPlay
        loop
        muted
        playsInline
        poster={hero.video.poster}
        preload="metadata"
        aria-hidden="true"
      >
        <source src={hero.video.src} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--color-ink)]/55 via-[color:var(--color-ink)]/45 to-[color:var(--color-ink)]/85" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[color:var(--color-cream)]/0 via-[color:var(--color-ink)]/30 to-transparent" />

      <div className="container-x relative pt-24 md:pt-36 pb-28 md:pb-40">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="flag-bar"><span /><span /><span /></span>
            <span className="text-[0.78rem] tracking-[0.18em] uppercase font-semibold text-[color:var(--color-gold)]">
              {hero.eyebrow}
            </span>
          </div>
          <h1 className="font-display text-[2.6rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.02] tracking-tight">
            {hero.title}<span className="text-[color:var(--color-gold)]">.</span>
            <br />
            <em className="not-italic font-light italic-fraunces">{hero.titleAccent}</em>
          </h1>
          <p className="mt-7 text-lg md:text-xl text-[color:var(--color-cream)]/85 max-w-2xl leading-relaxed text-justify hyphens-auto">
            <span className="block mb-3 text-[color:var(--color-gold-soft)] font-medium text-left">
              {hero.tagline}
            </span>
            {hero.intro}
            <span className="block mt-3 text-[color:var(--color-gold)] italic font-display text-2xl md:text-3xl text-left">
              {hero.rallyingCry}
            </span>
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link href={hero.primaryCta.href} className="btn-primary !bg-[color:var(--color-cream)] !text-[color:var(--color-ink)] hover:!bg-[color:var(--color-gold)]">
              {hero.primaryCta.label}
              <span aria-hidden>→</span>
            </Link>
            <a href={hero.secondaryCta.href} className="btn-ghost text-[color:var(--color-cream)] hover:!bg-[color:var(--color-cream)]/10">
              {hero.secondaryCta.label}
            </a>
          </div>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
            {hero.stats.map((s) => (
              <Stat key={s.label} label={s.label} value={s.value} />
            ))}
          </div>
        </div>
      </div>

      {/* Floating quality badge */}
      <div className="hidden md:flex absolute right-8 top-28 lg:right-16 lg:top-36 h-36 w-36 lg:h-44 lg:w-44 rounded-full border border-[color:var(--color-gold)]/40 items-center justify-center text-center bg-[color:var(--color-ink-soft)]/40 backdrop-blur-sm rotate-[-8deg] reveal">
        <div>
          <div className="font-display text-3xl lg:text-4xl text-[color:var(--color-gold)]">{hero.badge.value}</div>
          <div className="text-xs lg:text-sm tracking-[0.25em] uppercase text-[color:var(--color-cream)]/85 mt-1">{hero.badge.label}</div>
        </div>
      </div>

      {/* Hidden image fallback for accessibility */}
      <Image
        src={hero.image.src}
        alt={hero.image.alt}
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
