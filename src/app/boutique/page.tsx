import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ProductCard } from "@/components/shop/ProductCard";
import { products, productCategories } from "@/lib/products";
import { business } from "@/lib/business";
import { content } from "@/lib/content";
import { breadcrumbsJsonLd, jsonLdScript, SITE_URL } from "@/lib/seo";
import type { Metadata } from "next";

const page = content.pages.boutique;
const TITLE = page.seo.title;
const DESCRIPTION = page.seo.description;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/boutique" },
  keywords: [...page.seo.keywords],
  openGraph: {
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/boutique`,
    images: [
      {
        url: page.seo.image.src,
        width: page.seo.image.width,
        height: page.seo.image.height,
        alt: page.seo.image.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [page.seo.image.src],
  },
};

export default function BoutiquePage() {
  const breadcrumbs = breadcrumbsJsonLd([
    { name: "Accueil", path: "/" },
    { name: "Boutique", path: "/boutique" },
  ]);

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: page.catalogueName,
    description: DESCRIPTION,
    numberOfItems: products.length,
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        "@id": `${SITE_URL}/boutique#${p.slug}`,
        name: p.name,
        description: p.shortDescription,
        image: `${SITE_URL}${p.image}`,
        category: p.categoryLabel,
        brand: { "@type": "Brand", name: business.name },
        offers: {
          "@type": "Offer",
          price: p.price,
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/boutique`,
          seller: { "@id": `${SITE_URL}/#business` },
          ...(p.oldPrice ? { priceValidUntil: "2026-12-31" } : {}),
        },
      },
    })),
  };

  return (
    <>
      <Header />
      <main className="flex-1 bg-[color:var(--color-cream)]">
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumbs)} />
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(itemList)} />

        {/* Hero */}
        <section className="bg-[color:var(--color-ink)] text-[color:var(--color-cream)] pt-28 pb-20 md:pt-36 md:pb-28">
          <div className="container-x">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-5">
                <span className="flag-bar"><span /><span /><span /></span>
                <span className="text-[0.78rem] tracking-[0.2em] uppercase font-semibold text-[color:var(--color-gold)]">
                  {page.eyebrow}
                </span>
              </div>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight">
                {page.title}
                <br />
                <em className="not-italic font-normal text-[color:var(--color-gold)]">
                  {page.titleAccent}
                </em>
                .
              </h1>
              <p className="mt-6 text-lg md:text-xl text-[color:var(--color-cream)]/80 max-w-2xl leading-relaxed">
                {page.intro}
              </p>
            </div>
          </div>
        </section>

        {productCategories.map((cat) => {
          const items = products.filter((p) => p.category === cat.id);
          return (
            <section
              key={cat.id}
              id={cat.id}
              className="py-16 md:py-24 border-b border-[color:var(--color-line)] last:border-b-0"
              aria-labelledby={`cat-${cat.id}`}
            >
              <div className="container-x">
                <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
                  <div className="min-w-0">
                    <p className="eyebrow mb-3">
                      <span className="flag-bar"><span /><span /><span /></span>
                      {cat.label}
                    </p>
                    <h2 id={`cat-${cat.id}`} className="font-display text-3xl md:text-5xl tracking-tight">
                      {cat.label}
                    </h2>
                  </div>
                  <p className="texte-secable md:max-w-md text-[color:var(--color-stone)] leading-relaxed">
                    {cat.description}
                  </p>
                </header>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {items.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        <section className="py-20 md:py-28 bg-[color:var(--color-cream-deep)]" aria-labelledby="how-it-works">
          <div className="container-x">
            <div className="max-w-3xl mx-auto text-center">
              <p className="eyebrow justify-center mb-4">
                <span className="flag-bar"><span /><span /><span /></span>
                {page.howItWorks.eyebrow}
              </p>
              <h2 id="how-it-works" className="font-display text-3xl md:text-5xl tracking-tight">
                {page.howItWorks.title}{" "}
                <em className="not-italic font-normal text-[color:var(--color-bordeaux)]">{page.howItWorks.titleAccent}</em>.
              </h2>
            </div>
            <ol className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {page.howItWorks.steps.map((step) => (
                <li key={step.number} className="card p-7 md:p-9 list-none">
                  <div className="font-display text-5xl md:text-6xl text-[color:var(--color-bordeaux)]/20 leading-none">{step.number}</div>
                  <h3 className="font-display text-2xl mt-3">{step.title}</h3>
                  <p className="mt-3 text-[color:var(--color-stone)] leading-relaxed">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
