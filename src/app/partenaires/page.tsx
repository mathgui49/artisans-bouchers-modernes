import Image from "next/image";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { partners, partnerCategories } from "@/lib/partners";
import { breadcrumbsJsonLd, jsonLdScript, SITE_URL } from "@/lib/seo";
import { business } from "@/lib/business";
import type { Metadata } from "next";

const TITLE = "Nos partenaires · Producteurs locaux & filières françaises";
const DESCRIPTION =
  "Découvrez les partenaires de votre artisan boucher à Bain de Bretagne. Race à viande française, fromages fermiers d'Ille-et-Vilaine, primeur de saison, miel, cidre breton, bières et vins.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/partenaires" },
  keywords: [
    "producteurs locaux Bain de Bretagne",
    "viande race à viande française",
    "Tendriade veau",
    "Fermes de Janzé volaille",
    "fromage Ille-et-Vilaine",
    "cidre Bain de Bretagne",
    "circuit court boucherie",
    "Les Artisans Modernes partenaires",
  ],
  openGraph: {
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/partenaires`,
    images: [
      {
        url: "/images/partners/producteurs.webp",
        width: 1200,
        height: 630,
        alt: `Producteurs partenaires des ${business.legalName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/partners/producteurs.webp"],
  },
};

export default function PartenairesPage() {
  const breadcrumbs = breadcrumbsJsonLd([
    { name: "Accueil", path: "/" },
    { name: "Partenaires", path: "/partenaires" },
  ]);

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Producteurs partenaires des ${business.legalName}`,
    numberOfItems: partners.length,
    itemListElement: partners.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Organization",
        name: p.name,
        description: p.description,
        image: `${SITE_URL}${p.image}`,
        ...(p.location ? { address: { "@type": "PostalAddress", addressLocality: p.location } } : {}),
      },
    })),
  };

  return (
    <>
      <Header />
      <main className="flex-1 bg-[color:var(--color-cream)]">
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumbs)} />
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(itemList)} />

        <section className="relative isolate overflow-hidden bg-[color:var(--color-ink)] text-[color:var(--color-cream)]">
          <Image
            src="/images/partners/producteurs.webp"
            alt={`Producteurs partenaires des ${business.legalName} : race à viande, fromages fermiers, primeur`}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--color-ink)]/70 via-[color:var(--color-ink)]/55 to-[color:var(--color-ink)]/95" />
          <div className="container-x relative pt-28 md:pt-40 pb-24 md:pb-32">
            <div className="max-w-3xl">
              <p className="flex items-center gap-3 mb-5">
                <span className="flag-bar"><span /><span /><span /></span>
                <span className="text-[0.78rem] tracking-[0.2em] uppercase font-semibold text-[color:var(--color-gold)]">
                  Nos partenaires
                </span>
              </p>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight">
                Découvrez les partenaires
                <br />
                <em className="not-italic font-normal text-[color:var(--color-gold)]">
                  de votre artisan boucher
                </em>
                .
              </h1>
              <p className="mt-7 text-lg md:text-xl text-[color:var(--color-cream)]/85 max-w-2xl leading-relaxed text-justify">
                Nous proposons de la viande élevée sur une agriculture raisonnée en gage de
                qualité&nbsp;: race à viande, d&apos;origine française et au maximum locale,
                respect des temps de maturation, bouchers formés. Nos fabrications artisanales
                sont sans colorant, ni conservateur. Découvrez ci-dessous nos partenaires
                français et essentiellement locaux.
              </p>
            </div>
          </div>
        </section>

        {partnerCategories.map((cat) => {
          const items = partners.filter((p) => p.category === cat.id);
          return (
            <section
              key={cat.id}
              id={cat.id}
              className="py-16 md:py-24 border-b border-[color:var(--color-line)] last:border-b-0"
              aria-labelledby={`partner-cat-${cat.id}`}
            >
              <div className="container-x">
                <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
                  <div className="max-w-xl">
                    <p className="eyebrow mb-3">
                      <span className="flag-bar"><span /><span /><span /></span>
                      {cat.label}
                    </p>
                    <h2 id={`partner-cat-${cat.id}`} className="font-display text-3xl md:text-5xl tracking-tight">
                      {cat.label}
                    </h2>
                  </div>
                  <p className="md:max-w-md text-[color:var(--color-stone)] leading-relaxed text-justify">
                    {cat.description}
                  </p>
                </header>

                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 list-none">
                  {items.map((p) => (
                    <li key={p.name} className="card flex flex-col overflow-hidden">
                      <div className="relative aspect-[5/3] bg-[color:var(--color-cream-deep)] flex items-center justify-center p-6">
                        <Image
                          src={p.image}
                          alt={`Logo ${p.name}, ${p.categoryLabel}`}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-contain p-8"
                        />
                      </div>
                      <div className="p-6 md:p-7 flex flex-col gap-2 flex-1 border-t border-[color:var(--color-line)]">
                        <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-bordeaux)] font-medium">
                          {p.categoryLabel}
                        </p>
                        <h3 className="font-display text-2xl">{p.name}</h3>
                        {p.location && (
                          <p className="text-sm text-[color:var(--color-stone-soft)]">☉ {p.location}</p>
                        )}
                        <p className="mt-2 text-[color:var(--color-stone)] leading-relaxed text-[0.95rem] text-justify">
                          {p.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          );
        })}

        <section className="py-20 md:py-28 bg-[color:var(--color-cream-deep)]" aria-labelledby="sourcing-final">
          <div className="container-x text-center max-w-3xl mx-auto">
            <p className="eyebrow justify-center mb-4">
              <span className="flag-bar"><span /><span /><span /></span>
              Sourcing transparent
            </p>
            <h2 id="sourcing-final" className="font-display text-3xl md:text-5xl tracking-tight">
              Vous voulez en savoir plus
              <em className="not-italic font-normal text-[color:var(--color-bordeaux)]"> sur un produit</em> ?
            </h2>
            <p className="mt-6 text-lg text-[color:var(--color-stone)] leading-relaxed text-justify">
              Demandez-nous en magasin&nbsp;: nous vous racontons d&apos;où ça vient, qui
              l&apos;a produit, et comment c&apos;est fabriqué. La traçabilité, c&apos;est la
              base.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
