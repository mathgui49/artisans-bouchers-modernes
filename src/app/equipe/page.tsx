import Image from "next/image";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { team } from "@/lib/team";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notre équipe — Bouchers, vendeurs & artisans",
  description:
    "Découvrez l'équipe des Artisans Bouchers Modernes à Bain de Bretagne : bouchers, charcutiers, primeur-fromager, vendeurs et apprentis qui vous accueillent chaque semaine.",
};

export default function EquipePage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-[color:var(--color-cream)]">
        {/* Hero with banner */}
        <section className="relative isolate overflow-hidden bg-[color:var(--color-ink)] text-[color:var(--color-cream)]">
          <Image
            src="/images/team/bandeau.webp"
            alt="L'équipe des Artisans Bouchers Modernes au comptoir"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--color-ink)]/60 via-[color:var(--color-ink)]/40 to-[color:var(--color-ink)]/95" />
          <div className="container-x relative pt-28 md:pt-40 pb-24 md:pb-32">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-5">
                <span className="flag-bar"><span /><span /><span /></span>
                <span className="text-[0.78rem] tracking-[0.2em] uppercase font-semibold text-[color:var(--color-gold)]">
                  L&apos;équipe
                </span>
              </div>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight">
                Oui à la qualité,
                <br />
                <em className="not-italic font-normal text-[color:var(--color-gold)]">
                  oui à la convivialité.
                </em>
              </h1>
              <p className="mt-7 text-lg md:text-xl text-[color:var(--color-cream)]/85 max-w-2xl leading-relaxed">
                Une équipe passionnée par son métier, fidèle au goût du travail bien fait — et
                attachée à transmettre le savoir-faire de la boucherie traditionnelle aux
                générations qui viennent.
              </p>
            </div>
          </div>
        </section>

        {/* Team grid */}
        <section className="py-20 md:py-28">
          <div className="container-x">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
              {team.map((m) => (
                <article key={m.name} className="flex flex-col items-center text-center group">
                  <div className="relative w-full aspect-[3/4] rounded-[var(--radius-lg)] overflow-hidden bg-[color:var(--color-cream-deep)]">
                    <Image
                      src={m.image}
                      alt={`${m.name} — ${m.role}`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h2 className="font-display text-2xl mt-5">{m.name}</h2>
                  <p className="mt-1 text-sm text-[color:var(--color-bordeaux)] font-medium">
                    {m.role}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Closing band */}
        <section className="py-20 md:py-28 bg-[color:var(--color-cream-deep)]">
          <div className="container-x text-center max-w-3xl mx-auto">
            <div className="eyebrow justify-center mb-4">
              <span className="flag-bar"><span /><span /><span /></span>
              Transmettre, former
            </div>
            <h2 className="font-display text-3xl md:text-5xl tracking-tight">
              Former la
              <em className="not-italic font-normal text-[color:var(--color-bordeaux)]"> relève</em>.
            </h2>
            <p className="mt-6 text-lg text-[color:var(--color-stone)] leading-relaxed">
              Chez Artisans Bouchers Modernes, nous accueillons des apprentis chaque année.
              Parce qu&apos;un beau métier ne se transmet qu&apos;en se penchant sur l&apos;établi
              ensemble — et qu&apos;une boucherie qui ne forme plus est une boucherie qui
              s&apos;éteint.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
