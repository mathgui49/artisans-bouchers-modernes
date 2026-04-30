import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visite virtuelle 360° — Le magasin en immersion",
  description:
    "Visitez en 360° le magasin des Artisans Bouchers Modernes à Bain de Bretagne — extérieur, comptoir boucherie, entrée et primeur. Comme si vous y étiez.",
};

const TOUR_URL =
  "https://www.lesartisansmodernes.fr/360%20lesartisansmodernes/arisanmoderne.html";

export default function VisiteVirtuellePage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-[color:var(--color-cream)]">
        <section className="bg-[color:var(--color-ink)] text-[color:var(--color-cream)] pt-28 md:pt-36 pb-12 md:pb-16">
          <div className="container-x">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-5">
                <span className="flag-bar"><span /><span /><span /></span>
                <span className="text-[0.78rem] tracking-[0.2em] uppercase font-semibold text-[color:var(--color-gold)]">
                  Visite virtuelle 360°
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl tracking-tight">
                Le magasin
                <br />
                <em className="not-italic font-normal text-[color:var(--color-gold)]">
                  comme si vous y étiez
                </em>
                .
              </h1>
              <p className="mt-6 text-lg md:text-xl text-[color:var(--color-cream)]/80 max-w-2xl leading-relaxed">
                Quatre vues à 360° pour vous balader dans la boucherie : façade,
                comptoir, entrée et rayon primeur. Cliquez et faites tourner la vue
                avec votre souris ou votre doigt.
              </p>
            </div>
          </div>
        </section>

        <section className="py-10 md:py-16">
          <div className="container-x">
            <div className="rounded-[var(--radius-lg)] overflow-hidden border border-[color:var(--color-line)] shadow-[var(--shadow-lift)] bg-[color:var(--color-ink)]">
              <div className="relative w-full aspect-[16/10] md:aspect-[16/9]">
                <iframe
                  src={TOUR_URL}
                  title="Visite virtuelle 360° — Artisans Bouchers Modernes"
                  loading="lazy"
                  allow="fullscreen; accelerometer; gyroscope; magnetometer; xr-spatial-tracking"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl">
              {[
                { title: "Extérieur", body: "La façade et le parking." },
                { title: "Boucherie", body: "Le comptoir et l'étal du jour." },
                { title: "Entrée", body: "L'accueil et l'épicerie fine." },
                { title: "Primeur", body: "Le rayon fruits & légumes." },
              ].map((s) => (
                <div
                  key={s.title}
                  className="rounded-[var(--radius)] border border-[color:var(--color-line)] bg-[color:var(--color-paper)] p-4"
                >
                  <div className="font-display text-lg">{s.title}</div>
                  <div className="text-sm text-[color:var(--color-stone)] mt-0.5">
                    {s.body}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[color:var(--color-cream-deep)]">
          <div className="container-x text-center max-w-2xl mx-auto">
            <div className="eyebrow justify-center mb-4">
              <span className="flag-bar"><span /><span /><span /></span>
              Envie de venir en vrai ?
            </div>
            <h2 className="font-display text-3xl md:text-4xl tracking-tight">
              Le 360° c&apos;est bien,
              <em className="not-italic font-normal text-[color:var(--color-bordeaux)]"> le comptoir c&apos;est mieux</em>.
            </h2>
            <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
              <a href="/#infos" className="btn-primary">Voir horaires & accès</a>
              <a href="/boutique" className="btn-ghost text-[color:var(--color-ink)]">
                Commander en ligne
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
