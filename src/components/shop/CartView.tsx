"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { business } from "@/lib/business";

function formatPrice(n: number) {
  return n
    .toLocaleString("fr-FR", { minimumFractionDigits: n % 1 === 0 ? 0 : 2 })
    .replace(/,00$/, "");
}

export function CartView() {
  const { resolved, total, setQuantity, remove, clear, hydrated } = useCart();
  const [submitting, setSubmitting] = useState(false);

  if (!hydrated) {
    return (
      <div className="card p-10 text-center text-[color:var(--color-stone)]">
        Chargement de votre panier…
      </div>
    );
  }

  if (resolved.length === 0) {
    return (
      <div className="card p-10 md:p-14 text-center">
        <div className="mx-auto h-16 w-16 rounded-full bg-[color:var(--color-cream-deep)] flex items-center justify-center mb-5">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 8h14l-1.5 11a2 2 0 0 1-2 1.7H8.5A2 2 0 0 1 6.5 19L5 8Z" />
            <path d="M9 8V6a3 3 0 1 1 6 0v2" />
          </svg>
        </div>
        <h2 className="font-display text-3xl">Votre panier est vide</h2>
        <p className="mt-3 text-[color:var(--color-stone)] max-w-md mx-auto">
          Découvrez nos colis de saison, plateaux maison et pièces en gros — préparés à la commande
          avec confirmation par mail sous 48h.
        </p>
        <Link href="/boutique" className="btn-primary mt-7 inline-flex">
          Voir la boutique
          <span aria-hidden>→</span>
        </Link>
      </div>
    );
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const pickupDate = String(data.get("pickupDate") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const lines = [
      `Bonjour,`,
      ``,
      `Je souhaite passer la commande suivante :`,
      ``,
      ...resolved.map((it) =>
        `- ${it.quantity} × ${it.product.name} — ${formatPrice(it.lineTotal)}€`,
      ),
      ``,
      `TOTAL ESTIMÉ : ${formatPrice(total)}€`,
      ``,
      `── Mes coordonnées ──`,
      `Nom : ${name}`,
      `Email : ${email}`,
      `Téléphone : ${phone}`,
      pickupDate ? `Retrait souhaité : ${pickupDate}` : "Retrait : à convenir",
      message ? `\nMessage :\n${message}` : "",
      ``,
      `Merci de me confirmer cette commande sous 48h ouvrées.`,
      ``,
      `Bien cordialement,`,
      name,
    ];

    const subject = `Commande Drive — ${name}`;
    const body = lines.filter(Boolean).join("\n");

    const mailto = `mailto:${business.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;

    window.setTimeout(() => setSubmitting(false), 1500);
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
      {/* Cart items */}
      <div className="lg:col-span-7 flex flex-col gap-4">
        {resolved.map((it) => (
          <article
            key={it.productId}
            className="card flex items-stretch overflow-hidden"
          >
            <div className="relative w-28 sm:w-36 shrink-0 bg-[color:var(--color-cream-deep)]">
              <Image
                src={it.product.image}
                alt={it.product.name}
                fill
                sizes="160px"
                className="object-cover"
              />
            </div>
            <div className="flex-1 p-4 sm:p-5 flex flex-col gap-2">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-[0.7rem] uppercase tracking-[0.18em] text-[color:var(--color-stone-soft)]">
                    {it.product.categoryLabel}
                  </div>
                  <h3 className="font-display text-xl mt-0.5">{it.product.name}</h3>
                </div>
                <button
                  type="button"
                  aria-label={`Retirer ${it.product.name} du panier`}
                  onClick={() => remove(it.productId)}
                  className="text-[color:var(--color-stone-soft)] hover:text-[color:var(--color-bordeaux)] transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex items-center justify-between mt-auto pt-3">
                <div className="inline-flex items-center border border-[color:var(--color-line)] rounded-full">
                  <button
                    type="button"
                    aria-label="Diminuer la quantité"
                    onClick={() => setQuantity(it.productId, it.quantity - 1)}
                    className="h-9 w-9 flex items-center justify-center hover:bg-[color:var(--color-cream-deep)] rounded-l-full"
                  >
                    −
                  </button>
                  <span className="min-w-[36px] text-center font-medium tabular-nums">
                    {it.quantity}
                  </span>
                  <button
                    type="button"
                    aria-label="Augmenter la quantité"
                    onClick={() => setQuantity(it.productId, it.quantity + 1)}
                    className="h-9 w-9 flex items-center justify-center hover:bg-[color:var(--color-cream-deep)] rounded-r-full"
                  >
                    +
                  </button>
                </div>
                <div className="font-display text-xl text-[color:var(--color-bordeaux)] tabular-nums">
                  {formatPrice(it.lineTotal)}€
                </div>
              </div>
            </div>
          </article>
        ))}
        <button
          type="button"
          onClick={clear}
          className="self-start text-sm text-[color:var(--color-stone-soft)] hover:text-[color:var(--color-bordeaux)] transition-colors mt-2"
        >
          ← Vider le panier
        </button>
      </div>

      {/* Checkout */}
      <aside className="lg:col-span-5">
        <div className="card p-6 md:p-8 lg:sticky lg:top-28">
          <h2 className="font-display text-2xl md:text-3xl">Récapitulatif</h2>
          <div className="mt-5 pb-5 border-b border-[color:var(--color-line)] flex items-baseline justify-between">
            <span className="text-[color:var(--color-stone)]">
              Sous-total estimé
            </span>
            <span className="font-display text-3xl text-[color:var(--color-bordeaux)] tabular-nums">
              {formatPrice(total)}€
            </span>
          </div>
          <p className="mt-4 text-xs text-[color:var(--color-stone-soft)] italic">
            Les prix s&apos;entendent <strong>indicatifs</strong> — certains produits sont vendus
            au poids, le total final vous sera confirmé par mail sous 48h ouvrées.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
            <Field label="Nom complet" name="name" type="text" required autoComplete="name" />
            <Field label="Email" name="email" type="email" required autoComplete="email" />
            <Field label="Téléphone" name="phone" type="tel" required autoComplete="tel" />
            <Field
              label="Date de retrait souhaitée"
              name="pickupDate"
              type="date"
              hint="Sous 48h ouvrées · Mar-Sam selon horaires."
            />
            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-medium">Message (optionnel)</span>
              <textarea
                name="message"
                rows={3}
                className="w-full rounded-[8px] border border-[color:var(--color-line)] bg-[color:var(--color-paper)] px-3.5 py-2.5 text-[0.95rem] focus:border-[color:var(--color-bordeaux)] focus:outline-none transition-colors resize-y"
                placeholder="Précisions, allergies, découpes spécifiques…"
              />
            </label>

            <button
              type="submit"
              disabled={submitting}
              className="btn-primary w-full mt-2"
            >
              {submitting ? "Préparation…" : "Envoyer ma commande"}
              <span aria-hidden>→</span>
            </button>
            <p className="text-xs text-[color:var(--color-stone-soft)] text-center">
              Votre messagerie va s&apos;ouvrir avec le récap pré-rempli — il ne vous reste qu&apos;à envoyer.
              <br />
              Vous pouvez aussi nous appeler au{" "}
              <a href={`tel:${business.phoneIntl}`} className="underline hover:text-[color:var(--color-bordeaux)]">
                {business.phone}
              </a>
              .
            </p>
          </form>
        </div>
      </aside>
    </div>
  );
}

function Field({
  label,
  hint,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string; hint?: string }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-medium">{label}{props.required && <span className="text-[color:var(--color-bordeaux)]"> *</span>}</span>
      <input
        {...props}
        className="w-full rounded-[8px] border border-[color:var(--color-line)] bg-[color:var(--color-paper)] px-3.5 py-2.5 text-[0.95rem] focus:border-[color:var(--color-bordeaux)] focus:outline-none transition-colors"
      />
      {hint && <span className="text-xs text-[color:var(--color-stone-soft)]">{hint}</span>}
    </label>
  );
}
