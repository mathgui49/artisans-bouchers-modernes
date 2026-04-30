import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ProductCard } from "@/components/shop/ProductCard";
import { products, productCategories } from "@/lib/products";
import { business } from "@/lib/business";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boutique en ligne — Colis, plateaux maison & pièces en gros",
  description:
    "Commandez en ligne nos colis de saison, plateaux apéro et fromage, pièces entières découpées sur mesure. Retrait en magasin à Bain de Bretagne, confirmation sous 48h ouvrées.",
};

export default function BoutiquePage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-[color:var(--color-cream)]">
        {/* Hero */}
        <section className="bg-[color:var(--color-ink)] text-[color:var(--color-cream)] pt-28 pb-20 md:pt-36 md:pb-28">
          <div className="container-x">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-5">
                <span className="flag-bar"><span /><span /><span /></span>
                <span className="text-[0.78rem] tracking-[0.2em] uppercase font-semibold text-[color:var(--color-gold)]">
                  Boutique en ligne · Drive
                </span>
              </div>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight">
                Commandez en ligne,
                <br />
                <em className="not-italic font-normal text-[color:var(--color-gold)]">
                  retirez en magasin
                </em>
                .
              </h1>
              <p className="mt-6 text-lg md:text-xl text-[color:var(--color-cream)]/80 max-w-2xl leading-relaxed">
                Tous nos colis de saison, nos plateaux maison et nos pièces en gros,
                disponibles à la commande. Confirmation par mail sous 48h ouvrées —
                retrait au {business.address.street.split(",")[0]}.
              </p>
            </div>
          </div>
        </section>

        {/* Catalog */}
        {productCategories.map((cat) => {
          const items = products.filter((p) => p.category === cat.id);
          return (
            <section
              key={cat.id}
              id={cat.id}
              className="py-16 md:py-24 border-b border-[color:var(--color-line)] last:border-b-0"
            >
              <div className="container-x">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
                  <div>
                    <div className="eyebrow mb-3">
                      <span className="flag-bar"><span /><span /><span /></span>
                      {cat.label}
                    </div>
                    <h2 className="font-display text-3xl md:text-5xl tracking-tight">
                      {cat.label}
                    </h2>
                  </div>
                  <p className="md:max-w-md text-[color:var(--color-stone)] leading-relaxed">
                    {cat.description}
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {items.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* How it works */}
        <section className="py-20 md:py-28 bg-[color:var(--color-cream-deep)]">
          <div className="container-x">
            <div className="max-w-3xl mx-auto text-center">
              <div className="eyebrow justify-center mb-4">
                <span className="flag-bar"><span /><span /><span /></span>
                Comment ça marche
              </div>
              <h2 className="font-display text-3xl md:text-5xl tracking-tight">
                Trois étapes,
                <em className="not-italic font-normal text-[color:var(--color-bordeaux)]"> et c&apos;est prêt</em>.
              </h2>
            </div>
            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {[
                {
                  n: "01",
                  title: "Vous commandez",
                  body: "Ajoutez vos colis, plateaux et pièces au panier. Précisez la date de retrait souhaitée à la validation.",
                },
                {
                  n: "02",
                  title: "Nous confirmons",
                  body: "Confirmation par mail sous 48 heures ouvrées avec le récap, le poids exact et le montant final.",
                },
                {
                  n: "03",
                  title: "Vous retirez",
                  body: "Retrait au magasin, 2 rue de Seine à Bain de Bretagne. Règlement en magasin à l'enlèvement.",
                },
              ].map((step) => (
                <div key={step.n} className="card p-7 md:p-9">
                  <div className="font-display text-5xl md:text-6xl text-[color:var(--color-bordeaux)]/20 leading-none">
                    {step.n}
                  </div>
                  <h3 className="font-display text-2xl mt-3">{step.title}</h3>
                  <p className="mt-3 text-[color:var(--color-stone)] leading-relaxed">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
