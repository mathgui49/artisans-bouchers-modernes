import Image from "next/image";
import { business } from "@/lib/business";

export function Infos() {
  const todayIdx = (new Date().getDay() + 6) % 7; // 0 = Monday

  return (
    <section id="infos" className="relative py-24 md:py-32 bg-[color:var(--color-cream)]">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left: copy + facts */}
          <div className="lg:col-span-5">
            <div className="eyebrow mb-5">
              <span className="flag-bar"><span /><span /><span /></span>
              Infos pratiques
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight">
              Venir nous voir
              <br />
              <em className="not-italic font-normal text-[color:var(--color-bordeaux)]">
                à Bain de Bretagne
              </em>
              .
            </h2>
            <p className="mt-6 text-lg text-[color:var(--color-stone)] leading-relaxed">
              Notre magasin se trouve au cœur de la ZA Château Gaillard, parking gratuit devant la porte.
              N&apos;hésitez pas à passer ou à appeler — nous sommes là pour conseiller, conseiller, et conseiller encore.
            </p>

            <dl className="mt-10 space-y-6">
              <Fact label="Adresse">
                {business.address.street}
                <br />
                {business.address.postalCode} {business.address.city}
              </Fact>
              <Fact label="Téléphone">
                <a href={`tel:${business.phoneIntl}`} className="hover:text-[color:var(--color-bordeaux)] transition-colors">
                  {business.phone}
                </a>
              </Fact>
              <Fact label="Email">
                <a href={`mailto:${business.email}`} className="hover:text-[color:var(--color-bordeaux)] transition-colors">
                  {business.email}
                </a>
              </Fact>
            </dl>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                  `${business.address.street}, ${business.address.postalCode} ${business.address.city}`
                )}`}
                target="_blank"
                rel="noopener"
                className="btn-primary"
              >
                Itinéraire Google Maps
                <span aria-hidden>→</span>
              </a>
              <a
                href={business.cta.drive}
                target="_blank"
                rel="noopener"
                className="btn-ghost text-[color:var(--color-ink)]"
              >
                Commander au Drive
              </a>
            </div>
          </div>

          {/* Right: hours + map */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="card p-7 md:p-9">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-display text-2xl md:text-3xl">Horaires</h3>
                <span className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-stone-soft)]">
                  Heure locale (FR)
                </span>
              </div>
              <ul className="divide-y divide-[color:var(--color-line)]">
                {business.hours.map((h, i) => (
                  <li
                    key={h.day}
                    className={`flex items-center justify-between py-3.5 text-[1.02rem] ${
                      i === todayIdx
                        ? "font-medium text-[color:var(--color-ink)]"
                        : h.closed
                          ? "text-[color:var(--color-stone-soft)]"
                          : "text-[color:var(--color-stone)]"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      {i === todayIdx && (
                        <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[color:var(--color-bordeaux)] animate-pulse" />
                      )}
                      {h.day}
                      {i === todayIdx && (
                        <span className="text-xs uppercase tracking-[0.16em] text-[color:var(--color-bordeaux)]">
                          aujourd&apos;hui
                        </span>
                      )}
                    </span>
                    <span className="font-medium">{h.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card overflow-hidden relative aspect-[16/10]">
              <Image
                src="/images/facade.jpg"
                alt="Façade du magasin Artisans Bouchers Modernes — Bain de Bretagne"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-end justify-between gap-3 text-[color:var(--color-cream)]">
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] opacity-80">Notre magasin</div>
                  <div className="font-display text-2xl md:text-3xl">
                    {business.address.street.split(",")[0]}
                  </div>
                </div>
                <a
                  href="https://share.google/MMLKFxjNzb1DDdbhC"
                  target="_blank"
                  rel="noopener"
                  className="text-xs uppercase tracking-[0.18em] underline underline-offset-4 hover:text-[color:var(--color-gold)]"
                >
                  Voir sur Google
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Fact({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-stone-soft)] mb-1">
        {label}
      </dt>
      <dd className="font-display text-xl md:text-2xl text-[color:var(--color-ink)] leading-tight">
        {children}
      </dd>
    </div>
  );
}
