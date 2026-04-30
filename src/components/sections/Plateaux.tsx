"use client";

import Image from "next/image";
import { useState } from "react";
import { business } from "@/lib/business";
import { products } from "@/lib/products";
import { useCart } from "@/lib/cart";

function formatPrice(n: number) {
  return n
    .toLocaleString("fr-FR", { minimumFractionDigits: n % 1 === 0 ? 0 : 2 })
    .replace(/,00$/, "");
}

export function Plateaux() {
  const plateauProducts = products.filter((p) => p.category === "plateau");
  const { add } = useCart();
  const [addedId, setAddedId] = useState<string | null>(null);

  function handleAdd(productId: string) {
    add(productId, 1);
    setAddedId(productId);
    window.setTimeout(() => setAddedId(null), 1500);
  }

  return (
    <section id="plateaux" className="relative py-24 md:py-32 bg-[color:var(--color-cream)]">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] rounded-[var(--radius-lg)] overflow-hidden">
              <Image
                src="/images/photo-13.jpg"
                alt="Plateau apéro charcuterie & fromage Artisans Bouchers Modernes"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="hidden md:block absolute -bottom-8 -right-6 w-44 lg:w-56 aspect-[4/5] rounded-[var(--radius-lg)] overflow-hidden border-8 border-[color:var(--color-cream)] shadow-[var(--shadow-lift)]">
              <Image
                src="/images/photo-15.jpg"
                alt="Plateau fromage maison"
                fill
                sizes="240px"
                className="object-cover"
              />
            </div>
            <div className="hidden md:block absolute -top-8 -left-6 w-32 lg:w-40 aspect-square rounded-full overflow-hidden border-8 border-[color:var(--color-cream)] shadow-[var(--shadow-lift)]">
              <Image
                src="/images/photo-14.jpg"
                alt="Carpaccio revisité"
                fill
                sizes="180px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Copy + plateaux list */}
          <div className="lg:col-span-6">
            <div className="eyebrow mb-5">
              <span className="flag-bar"><span /><span /><span /></span>
              Plateaux maison à emporter
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight">
              Pour les moments
              <br />
              <em className="not-italic font-normal text-[color:var(--color-bordeaux)]">
                qui se partagent
              </em>
              .
            </h2>
            <p className="mt-6 text-lg text-[color:var(--color-stone)] leading-relaxed max-w-xl">
              Apéro entre amis, repas de famille, brunch dominical ou comité d&apos;entreprise :
              nos plateaux sont composés sur place, à la commande, avec ce que la maison fait de mieux.
            </p>

            <ul className="mt-10 divide-y divide-[color:var(--color-line)] border-y border-[color:var(--color-line)]">
              {plateauProducts.map((p) => (
                <li
                  key={p.id}
                  className="flex items-center justify-between gap-4 py-4"
                >
                  <div className="flex-1 min-w-0">
                    <div className="font-display text-xl md:text-2xl">{p.name}</div>
                    <div className="text-sm text-[color:var(--color-stone-soft)]">
                      {p.servings}
                    </div>
                  </div>
                  <div className="font-display text-xl md:text-2xl text-[color:var(--color-bordeaux)] tabular-nums shrink-0">
                    {formatPrice(p.price)}€{p.unitSuffix ?? ""}
                  </div>
                  <button
                    type="button"
                    onClick={() => handleAdd(p.id)}
                    aria-label={`Ajouter ${p.name} au panier`}
                    className={`shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-full transition-colors ${
                      addedId === p.id
                        ? "bg-[color:var(--color-bordeaux)] text-[color:var(--color-cream)]"
                        : "bg-[color:var(--color-ink)] text-[color:var(--color-cream)] hover:bg-[color:var(--color-bordeaux)]"
                    }`}
                  >
                    {addedId === p.id ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    ) : (
                      <span className="text-xl leading-none">+</span>
                    )}
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a href="/panier" className="btn-primary">
                Voir mon panier
                <span aria-hidden>→</span>
              </a>
              <a
                href={`tel:${business.phoneIntl}`}
                className="btn-ghost text-[color:var(--color-ink)]"
              >
                Ou nous appeler · {business.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
