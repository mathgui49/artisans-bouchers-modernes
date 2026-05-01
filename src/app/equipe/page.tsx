import Image from "next/image";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { team } from "@/lib/team";
import { breadcrumbsJsonLd, jsonLdScript, SITE_URL } from "@/lib/seo";
import { business } from "@/lib/business";
import type { Metadata } from "next";

const TITLE = "L'équipe — Bouchers, charcutiers, primeur & vendeurs";
const DESCRIPTION =
  "Découvrez les 10 artisans qui composent l'équipe des Artisans Bouchers Modernes à Bain de Bretagne : Dominique, Mélanie, Céline, Jimmy, Kyllian et toute la maison. Passion, savoir-faire et formation des apprentis.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/equipe" },
  keywords: [
    "équipe boucherie Bain de Bretagne",
    "boucher Dominique",
    "artisan boucher Ille-et-Vilaine",
    "apprenti boucher 35",
    "savoir-faire boucherie",
  ],
  openGraph: {
    type: "profile",
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/equipe`,
    images: [
      {
        url: "/images/team/bandeau.webp",
        width: 1200,
        height: 630,
        alt: "L'équipe des Artisans Bouchers Modernes au comptoir",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/team/bandeau.webp"],
  },
};

export default function EquipePage() {
  const breadcrumbs = breadcrumbsJsonLd([
    { name: "Accueil", path: "/" },
    { name: "L'équipe", path: "/equipe" },
  ]);

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#business`,
    name: business.name,
    url: SITE_URL,
    employee: team.map((m) => ({
      "@type": "Person",
      name: m.name,
      jobTitle: m.role,
      image: `${SITE_URL}${m.image}`,
      worksFor: { "@id": `${SITE_URL}/#business` },
    })),
  };

  return (
    <>
      <Header />
      <main className="flex-1 bg-[color:var(--color-cream)]">
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumbs)} />
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(orgSchema)} />

        <section className="relative isolate overflow-hidden bg-[color:var(--color-ink)] text-[color:var(--color-cream)]">
          <Image
            src="/images/team/bandeau.webp"
            alt="L'équipe des Artisans Bouchers Modernes au comptoir du magasin de Bain de Bretagne"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--color-ink)]/60 via-[color:var(--color-ink)]/40 to-[color:var(--color-ink)]/95" />
          <div className="container-x relative pt-28 md:pt-40 pb-24 md:pb-32">
            <div className="max-w-3xl">
              <p className="flex items-center gap-3 mb-5">
                <span className="flag-bar"><span /><span /><span /></span>
                <span className="text-[0.78rem] tracking-[0.2em] uppercase font-semibold text-[color:var(--color-gold)]">
                  L&apos;équipe
                </span>
              </p>
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

        <section className="py-20 md:py-28" aria-labelledby="team-list">
          <div className="container-x">
            <h2 id="team-list" className="sr-only">Liste des membres de l&apos;équipe</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 list-none">
              {team.map((m) => (
                <li key={m.name} className="flex flex-col items-center text-center group">
                  <div className="relative w-full aspect-[3/4] rounded-[var(--radius-lg)] overflow-hidden bg-[color:var(--color-cream-deep)]">
                    <Image
                      src={m.image}
                      alt={`${m.name}, ${m.role} chez ${business.name}`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-display text-2xl mt-5">{m.name}</h3>
                  <p className="mt-1 text-sm text-[color:var(--color-bordeaux)] font-medium">
                    {m.role}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-[color:var(--color-cream-deep)]" aria-labelledby="releve">
          <div className="container-x text-center max-w-3xl mx-auto">
            <p className="eyebrow justify-center mb-4">
              <span className="flag-bar"><span /><span /><span /></span>
              Transmettre, former
            </p>
            <h2 id="releve" className="font-display text-3xl md:text-5xl tracking-tight">
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
