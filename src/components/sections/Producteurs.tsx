import Image from "next/image";

export function Producteurs() {
  return (
    <section className="relative py-24 md:py-32 bg-[color:var(--color-cream-deep)] overflow-hidden">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="eyebrow mb-5">
              <span className="flag-bar"><span /><span /><span /></span>
              Producteurs locaux
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight">
              Nos
              <em className="not-italic font-normal text-[color:var(--color-bordeaux)]"> partenaires</em>,
              vos voisins.
            </h2>
            <p className="mt-6 text-lg text-[color:var(--color-stone)] leading-relaxed max-w-xl">
              Élevage, maraîchage, fromages, conserves : nous travaillons avec des producteurs
              de Bain de Bretagne et d&apos;Ille-et-Vilaine que nous connaissons par leur prénom.
              Chaque produit a une histoire, chaque histoire a un nom — et c&apos;est nous qui
              faisons le lien jusqu&apos;à votre table.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 text-[color:var(--color-ink)] font-medium">
              {[
                "Viande race à viande",
                "Origine France",
                "Saison respectée",
                "Lab indépendant",
                "Sans additifs",
                "Découpes minute",
              ].map((tag) => (
                <li key={tag} className="flex items-center gap-2.5">
                  <span className="h-2 w-2 rotate-45 bg-[color:var(--color-bordeaux)]" />
                  <span>{tag}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 relative">
            <div className="grid grid-cols-2 gap-3 md:gap-5">
              <div className="relative aspect-[4/5] rounded-[var(--radius-lg)] overflow-hidden mt-12">
                <Image
                  src="/images/photo-22.webp"
                  alt="Étal primeur — fruits et légumes de saison de producteurs locaux"
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/5] rounded-[var(--radius-lg)] overflow-hidden">
                <Image
                  src="/images/fromage-comte.webp"
                  alt="Fromages affinés sélectionnés par la maison"
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
