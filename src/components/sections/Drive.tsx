"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart";
import { products } from "@/lib/products";

function formatPrice(n: number) {
  return n
    .toLocaleString("fr-FR", { minimumFractionDigits: n % 1 === 0 ? 0 : 2 })
    .replace(/,00$/, "");
}

export function Drive() {
  const colis = products.filter((p) => p.category === "colis");
  const pieces = products.filter((p) => p.category === "piece");

  return (
    <section
      id="drive"
      className="relative py-24 md:py-32 bg-[color:var(--color-ink)] text-[color:var(--color-cream)] overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, var(--color-cream) 0 1px, transparent 1px 60px)",
        }}
      />
      <div className="container-x relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14 md:mb-20">
          <div className="max-w-2xl">
            <div className="eyebrow mb-5 !text-[color:var(--color-gold)]">
              <span className="flag-bar"><span /><span /><span /></span>
              Boutique en ligne · Drive
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight">
              Commandez en ligne,
              <br />
              <em className="not-italic font-normal text-[color:var(--color-gold)]">
                récupérez en magasin
              </em>
              .
            </h2>
            <p className="mt-6 text-[color:var(--color-cream)]/75 text-lg leading-relaxed">
              Ajoutez vos colis et pièces au panier, validez votre commande, recevez votre
              confirmation par mail sous 48h ouvrées.
            </p>
          </div>
          <Link
            href="/boutique"
            className="btn-primary !bg-[color:var(--color-gold)] !text-[color:var(--color-ink)] hover:!bg-[color:var(--color-cream)]"
          >
            Voir toute la boutique
            <span aria-hidden>→</span>
          </Link>
        </div>

        {/* Colis cards */}
        <div className="mb-20">
          <div className="flex items-baseline justify-between mb-8">
            <h3 className="font-display text-2xl md:text-3xl">Les colis de la saison</h3>
            <div className="hidden sm:block text-sm text-[color:var(--color-cream)]/60 italic">
              Prix indicatifs · ajustés au poids exact
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {colis.map((p) => (
              <ColisCard key={p.id} product={p} />
            ))}
          </div>
        </div>

        {/* Pièces */}
        <div>
          <div className="flex items-baseline justify-between mb-8">
            <h3 className="font-display text-2xl md:text-3xl">Pièces entières</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {pieces.map((p) => (
              <PieceCard key={p.id} product={p} />
            ))}
          </div>
          <p className="mt-8 text-sm text-[color:var(--color-cream)]/55 italic max-w-3xl">
            Les pièces en gros sont préparées à la commande. Confirmation par mail
            sous 48h ouvrées avec le prix exact selon le poids.
          </p>
        </div>
      </div>
    </section>
  );
}

function ColisCard({ product }: { product: typeof products[number] }) {
  const { add } = useCart();
  const discount =
    product.oldPrice && product.oldPrice > product.price
      ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
      : 0;

  return (
    <article className="relative rounded-[var(--radius-lg)] border border-[color:var(--color-cream)]/12 bg-[color:var(--color-ink-soft)] hover:border-[color:var(--color-gold)]/40 transition-all p-7 flex flex-col gap-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-xs tracking-[0.2em] uppercase text-[color:var(--color-cream)]/50 mb-2">
            {product.weight ?? "Colis"}
          </div>
          <div className="font-display text-3xl text-[color:var(--color-cream)]">
            {product.name.replace(/^Colis /, "")}
          </div>
        </div>
        {discount > 0 && (
          <span className="shrink-0 inline-flex items-center px-2.5 py-1 rounded-full bg-[color:var(--color-bordeaux)] text-[color:var(--color-cream)] text-xs font-semibold">
            −{discount}%
          </span>
        )}
      </div>

      <div className="flex items-baseline gap-3">
        <div className="font-display text-5xl text-[color:var(--color-gold)]">
          {formatPrice(product.price)}€
        </div>
        {product.oldPrice && (
          <div className="text-sm text-[color:var(--color-cream)]/60 line-through">
            {formatPrice(product.oldPrice)}€
          </div>
        )}
      </div>
      {product.perKg !== undefined && (
        <div className="text-sm text-[color:var(--color-cream)]/65">
          Soit <strong className="text-[color:var(--color-cream)]">{formatPrice(product.perKg)}€/kg</strong>
        </div>
      )}

      {product.items && (
        <ul className="flex flex-col gap-1.5 mt-1 pt-5 border-t border-[color:var(--color-cream)]/8">
          {product.items.map((it) => (
            <li
              key={it}
              className="flex items-start gap-2.5 text-[0.95rem] text-[color:var(--color-cream)]/85"
            >
              <span className="mt-2 h-1 w-1 rounded-full bg-[color:var(--color-gold)] shrink-0" />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      )}

      <button
        type="button"
        onClick={() => add(product.id, 1)}
        className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--color-gold)] text-[color:var(--color-ink)] font-medium px-5 py-3 hover:bg-[color:var(--color-cream)] transition-colors"
      >
        + Ajouter au panier
      </button>
    </article>
  );
}

function PieceCard({ product }: { product: typeof products[number] }) {
  const { add } = useCart();
  return (
    <div className="rounded-[var(--radius-lg)] border border-[color:var(--color-cream)]/12 bg-[color:var(--color-ink-soft)] p-6 flex flex-col gap-2 hover:border-[color:var(--color-gold)]/40 transition-colors">
      <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-cream)]/50">
        {product.weight}
      </div>
      <div className="font-display text-xl md:text-2xl">{product.name}</div>
      <div className="mt-3 text-[color:var(--color-gold)] font-display text-2xl">
        {formatPrice(product.perKg ?? 0)}€<span className="text-sm text-[color:var(--color-cream)]/60 font-body ml-1">/kg</span>
      </div>
      <button
        type="button"
        onClick={() => add(product.id, 1)}
        className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-full border border-[color:var(--color-gold)]/40 text-[color:var(--color-gold)] hover:bg-[color:var(--color-gold)] hover:text-[color:var(--color-ink)] transition-colors px-4 py-2 text-sm font-medium"
      >
        + Au panier
      </button>
    </div>
  );
}
