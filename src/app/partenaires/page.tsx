import Image from "next/image";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { partners, partnerCategories } from "@/lib/partners";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos partenaires — Producteurs locaux & filières françaises",
  description:
    "Tous les producteurs et artisans avec qui nous travaillons au quotidien : éleveurs, fromagers, primeurs, miellerie, brasserie, cave. Une chaîne courte de la ferme à votre table.",
};

export default function PartenairesPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-[color:var(--color-cream)]">
        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-[color:var(--color-ink)] text-[color:var(--color-cream)]">
          <Image
            src="/images/partners/producteurs.webp"
            alt="Producteurs partenaires des Artisans Bouchers Modernes"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--color-ink)]/70 via-[color:var(--color-ink)]/55 to-[color:var(--color-ink)]/95" />
          <div className="container-x relative pt-28 md:pt-40 pb-24 md:pb-32">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-5">
                <span className="flag-bar"><span /><span /><span /></span>
                <span className="text-[0.78rem] tracking-[0.2em] uppercase font-semibold text-[color:var(--color-gold)]">
                  Nos partenaires
                </span>
              </div>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight">
                Une chaîne courte,
                <br />
                <em className="not-italic font-normal text-[color:var(--color-gold)]">
                  des noms, des fermes
                </em>
                .
              </h1>
              <p className="mt-7 text-lg md:text-xl text-[color:var(--color-cream)]/85 max-w-2xl leading-relaxed">
                Voici les producteurs et artisans avec qui nous travaillons. Race à viande
                française, fromages fermiers d&apos;Ille-et-Vilaine, fruits et légumes de
                saison, miels, cidre, bières et vins choisis pour leur exigence.
              </p>
            </div>
          </div>
        </section>

        {/* Partners by category */}
        {partnerCategories.map((cat) => {
          const items = partners.filter((p) => p.category === cat.id);
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
                    <article
                      key={p.name}
                      className="card flex flex-col overflow-hidden"
                    >
                      <div className="relative aspect-[5/3] bg-[color:var(--color-cream-deep)] flex items-center justify-center p-6">
                        <Image
                          src={p.image}
                          alt={`Logo ${p.name}`}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-contain p-8"
                        />
                      </div>
                      <div className="p-6 md:p-7 flex flex-col gap-2 flex-1 border-t border-[color:var(--color-line)]">
                        <div className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-bordeaux)] font-medium">
                          {p.categoryLabel}
                        </div>
                        <h3 className="font-display text-2xl">{p.name}</h3>
                        {p.location && (
                          <div className="text-sm text-[color:var(--color-stone-soft)]">
                            ☉ {p.location}
                          </div>
                        )}
                        <p className="mt-2 text-[color:var(--color-stone)] leading-relaxed text-[0.95rem]">
                          {p.description}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* Closing */}
        <section className="py-20 md:py-28 bg-[color:var(--color-cream-deep)]">
          <div className="container-x text-center max-w-3xl mx-auto">
            <div className="eyebrow justify-center mb-4">
              <span className="flag-bar"><span /><span /><span /></span>
              Sourcing transparent
            </div>
            <h2 className="font-display text-3xl md:text-5xl tracking-tight">
              Vous voulez en savoir plus
              <em className="not-italic font-normal text-[color:var(--color-bordeaux)]"> sur un produit</em> ?
            </h2>
            <p className="mt-6 text-lg text-[color:var(--color-stone)] leading-relaxed">
              Demandez-nous en magasin : nous vous racontons d&apos;où ça vient, qui l&apos;a
              produit, et comment c&apos;est fabriqué. La traçabilité, c&apos;est la base.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
