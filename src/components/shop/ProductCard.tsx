"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import type { Product } from "@/lib/products";
import { ProductIcon } from "@/components/shop/ProductIcon";

function formatPrice(n: number) {
  return n
    .toLocaleString("fr-FR", { minimumFractionDigits: n % 1 === 0 ? 0 : 2 })
    .replace(/,00$/, "");
}

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  const discount =
    product.oldPrice && product.oldPrice > product.price
      ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
      : 0;

  function handleAdd() {
    add(product.id, 1);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1500);
  }

  return (
    <article className="card flex flex-col h-full overflow-hidden group">
      <div className="relative aspect-[4/3] overflow-hidden">
        {product.icon ? (
          <ProductIcon name={product.icon} label={product.name} />
        ) : product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : null}
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[color:var(--color-cream)]/95 backdrop-blur-sm text-[0.68rem] font-medium tracking-[0.16em] uppercase text-[color:var(--color-bordeaux)]">
          {product.categoryLabel}
        </div>
        {discount > 0 && (
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[color:var(--color-bordeaux)] text-[color:var(--color-cream)] text-xs font-semibold">
            −{discount}%
          </div>
        )}
      </div>
      <div className="p-6 md:p-7 flex flex-col gap-3 flex-1">
        <h3 className="font-display text-2xl">{product.name}</h3>
        {(product.weight || product.servings) && (
          <div className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-stone-soft)]">
            {product.weight ?? product.servings}
          </div>
        )}
        <p className="text-[color:var(--color-stone)] leading-relaxed text-[0.95rem]">
          {product.shortDescription}
        </p>
        {product.items && (
          <ul className="flex flex-col gap-1 mt-1 pt-3 border-t border-[color:var(--color-line)]">
            {product.items.map((it) => (
              <li
                key={it}
                className="flex items-start gap-2 text-[0.9rem] text-[color:var(--color-ink)]/80"
              >
                <span className="mt-2 h-1 w-1 rounded-full bg-[color:var(--color-bordeaux)] shrink-0" />
                <span>{it}</span>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-auto pt-4 flex items-end justify-between gap-3">
          <div>
            <div className="flex items-baseline gap-2">
              <div className="font-display text-3xl text-[color:var(--color-bordeaux)]">
                {formatPrice(product.price)}€{product.unitSuffix ?? ""}
              </div>
              {product.oldPrice && (
                <div className="text-sm text-[color:var(--color-stone-soft)] line-through">
                  {formatPrice(product.oldPrice)}€
                </div>
              )}
            </div>
            {product.perKg !== undefined && product.unitSuffix !== " indicatif" && (
              <div className="text-xs text-[color:var(--color-stone-soft)] mt-1">
                soit {formatPrice(product.perKg)}€/kg
              </div>
            )}
          </div>
          <button
            type="button"
            onClick={handleAdd}
            aria-label={`Ajouter ${product.name} au panier`}
            className={`shrink-0 inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-medium transition-all ${
              added
                ? "bg-[color:var(--color-bordeaux)] text-[color:var(--color-cream)]"
                : "bg-[color:var(--color-ink)] text-[color:var(--color-cream)] hover:bg-[color:var(--color-bordeaux)]"
            }`}
          >
            {added ? (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Ajouté
              </>
            ) : (
              <>+ Au panier</>
            )}
          </button>
        </div>
        {product.notice && (
          <p className="text-xs text-[color:var(--color-stone-soft)] italic pt-2 border-t border-[color:var(--color-line)] mt-2">
            {product.notice}
          </p>
        )}
      </div>
    </article>
  );
}
