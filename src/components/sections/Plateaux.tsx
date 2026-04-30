import Image from "next/image";
import { business, plateaux } from "@/lib/business";

export function Plateaux() {
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

          {/* Copy */}
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
              Et toujours la possibilité d&apos;ajouter pierrade, raclette, choucroute ou fondue
              pour vos soirées d&apos;hiver.
            </p>

            <ul className="mt-10 divide-y divide-[color:var(--color-line)] border-y border-[color:var(--color-line)]">
              {plateaux.map((p) => (
                <li
                  key={p.name}
                  className="flex items-baseline justify-between gap-4 py-4 group"
                >
                  <div>
                    <div className="font-display text-xl md:text-2xl">{p.name}</div>
                    <div className="text-sm text-[color:var(--color-stone-soft)]">
                      {p.servings}
                    </div>
                  </div>
                  <div className="font-display text-2xl md:text-3xl text-[color:var(--color-bordeaux)] tabular-nums">
                    {p.price}€{p.suffix ?? ""}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a href={business.cta.drive} target="_blank" rel="noopener" className="btn-primary">
                Réserver un plateau
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
