import Image from "next/image";
import Link from "next/link";
import { business } from "@/lib/business";

export function Infos() {
  const todayIdx = (new Date().getDay() + 6) % 7; // 0 = Monday

  return (
    <section id="infos" aria-labelledby="infos-title" className="relative py-24 md:py-32 bg-[color:var(--color-cream)]">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left: copy + facts */}
          <div className="lg:col-span-5">
            <p className="eyebrow mb-5">
              <span className="flag-bar"><span /><span /><span /></span>
              Infos pratiques
            </p>
            <h2 id="infos-title" className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight">
              Venir nous voir
              <br />
              <em className="not-italic font-normal text-[color:var(--color-bordeaux)]">
                à Bain de Bretagne
              </em>
              .
            </h2>
            <p className="mt-6 text-lg text-[color:var(--color-stone)] leading-relaxed">
              Notre magasin se trouve au cœur de la ZA Château Gaillard, parking gratuit devant la porte.
              N&apos;hésitez pas à passer ou à appeler, nous sommes là pour conseiller, conseiller, et conseiller encore.
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
                href="/boutique"
                className="btn-ghost text-[color:var(--color-ink)]"
              >
                Voir la boutique
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

            <Link
              href="/visite-virtuelle"
              className="card overflow-hidden relative aspect-[16/10] block group"
            >
              <Image
                src="/images/facade.webp"
                alt="Façade du magasin Les Artisans Modernes, Bain de Bretagne"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-black/30" />

              <div className="absolute top-5 left-5">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[color:var(--color-cream)]/95 backdrop-blur-sm text-[0.7rem] tracking-[0.18em] uppercase font-semibold text-[color:var(--color-bordeaux)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-bordeaux)] animate-pulse" />
                  Visite virtuelle 360°
                </span>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <span className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-[color:var(--color-cream)]/90 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[color:var(--color-ink)]">
                    <path d="M12 2a10 10 0 1 0 10 10" />
                    <path d="M12 2a10 10 0 0 1 10 10c0 5-4 8-10 8" />
                    <path d="M2 12c0-5 4-8 10-8" />
                    <path d="M2 12c0 5 4 8 10 8" />
                    <ellipse cx="12" cy="12" rx="10" ry="4" />
                  </svg>
                </span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-end justify-between gap-3 text-[color:var(--color-cream)]">
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] opacity-80">Notre magasin</div>
                  <div className="font-display text-2xl md:text-3xl">
                    {business.address.street.split(",")[0]}
                  </div>
                </div>
                <span className="text-xs uppercase tracking-[0.18em] underline underline-offset-4 group-hover:text-[color:var(--color-gold)] transition-colors">
                  Visiter en 360° →
                </span>
              </div>
            </Link>
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
