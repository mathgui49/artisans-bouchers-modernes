import { business, colisEte, piecesEnGros } from "@/lib/business";

function formatPrice(n: number) {
  return n
    .toLocaleString("fr-FR", { minimumFractionDigits: n % 1 === 0 ? 0 : 2 })
    .replace(/,00$/, "");
}

export function Drive() {
  return (
    <section
      id="drive"
      className="relative py-24 md:py-32 bg-[color:var(--color-ink)] text-[color:var(--color-cream)] overflow-hidden"
    >
      {/* Decorative diagonal stripes */}
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
              Drive · Colis &amp; pièces en gros
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
              Nos colis saisonniers, nos pièces en gros et nos plateaux maison se commandent
              en quelques clics. Confirmation par mail sous 48h ouvrées.
            </p>
          </div>
          <a
            href={business.cta.drive}
            target="_blank"
            rel="noopener"
            className="btn-primary !bg-[color:var(--color-gold)] !text-[color:var(--color-ink)] hover:!bg-[color:var(--color-cream)]"
          >
            Voir tout le Drive
            <span aria-hidden>→</span>
          </a>
        </div>

        {/* Colis d'été */}
        <div className="mb-20">
          <div className="flex items-baseline justify-between mb-8">
            <h3 className="font-display text-2xl md:text-3xl">
              Les colis de la saison
            </h3>
            <div className="hidden sm:block text-sm text-[color:var(--color-cream)]/60 italic">
              Prix indicatifs, varient selon le poids exact
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {colisEte.map((c, i) => {
              const discount = Math.round(((c.oldPrice - c.price) / c.oldPrice) * 100);
              return (
                <article
                  key={c.name}
                  className="relative rounded-[var(--radius-lg)] border border-[color:var(--color-cream)]/12 bg-[color:var(--color-ink-soft)] hover:border-[color:var(--color-gold)]/40 transition-all p-7 flex flex-col gap-5 group"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-xs tracking-[0.2em] uppercase text-[color:var(--color-cream)]/50 mb-2">
                        Colis n°{i + 1}
                      </div>
                      <div className="font-display text-3xl text-[color:var(--color-cream)]">
                        {c.name}
                      </div>
                    </div>
                    <span className="shrink-0 inline-flex items-center px-2.5 py-1 rounded-full bg-[color:var(--color-bordeaux)] text-[color:var(--color-cream)] text-xs font-semibold">
                      −{discount}%
                    </span>
                  </div>

                  <div className="flex items-baseline gap-3">
                    <div className="font-display text-5xl text-[color:var(--color-gold)]">
                      {formatPrice(c.price)}€
                    </div>
                    <div className="text-sm text-[color:var(--color-cream)]/60 line-through">
                      {formatPrice(c.oldPrice)}€
                    </div>
                  </div>
                  <div className="text-sm text-[color:var(--color-cream)]/65">
                    Soit <strong className="text-[color:var(--color-cream)]">{formatPrice(c.perKg)}€/kg</strong>
                  </div>

                  <ul className="flex flex-col gap-1.5 mt-1 pt-5 border-t border-[color:var(--color-cream)]/8">
                    {c.items.map((it) => (
                      <li
                        key={it}
                        className="flex items-start gap-2.5 text-[0.95rem] text-[color:var(--color-cream)]/85"
                      >
                        <span className="mt-2 h-1 w-1 rounded-full bg-[color:var(--color-gold)] shrink-0" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={business.cta.drive}
                    target="_blank"
                    rel="noopener"
                    className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-[color:var(--color-gold)] hover:text-[color:var(--color-cream)] transition-colors"
                  >
                    Commander ce colis
                    <span aria-hidden>→</span>
                  </a>
                </article>
              );
            })}
          </div>
        </div>

        {/* Pièces en gros */}
        <div>
          <div className="flex items-baseline justify-between mb-8">
            <h3 className="font-display text-2xl md:text-3xl">
              Pièces entières — Bain de Bretagne et alentours
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {piecesEnGros.map((p) => (
              <div
                key={p.name}
                className="rounded-[var(--radius-lg)] border border-[color:var(--color-cream)]/12 bg-[color:var(--color-ink-soft)] p-6 flex flex-col gap-2 hover:border-[color:var(--color-gold)]/40 transition-colors"
              >
                <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-cream)]/50">
                  {p.weight}
                </div>
                <div className="font-display text-xl md:text-2xl">{p.name}</div>
                <div className="mt-auto pt-3 text-[color:var(--color-gold)] font-display text-2xl">
                  {formatPrice(p.perKg)}€<span className="text-sm text-[color:var(--color-cream)]/60 font-body ml-1">/kg</span>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-[color:var(--color-cream)]/55 italic max-w-3xl">
            Les colis et pièces en gros sont préparés à la commande. Confirmation par mail
            sous 48 heures ouvrées — merci d&apos;en tenir compte pour vos réservations.
          </p>
        </div>
      </div>
    </section>
  );
}
