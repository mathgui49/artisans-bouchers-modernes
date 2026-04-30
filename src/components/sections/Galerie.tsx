import Image from "next/image";

const photos = [
  { src: "/images/roti-beurre-aux-herbes.jpg", alt: "Rôti de bœuf farci au beurre d'herbes — fait maison", aspect: "tall" },
  { src: "/images/photo-19.jpg", alt: "Côte de bœuf décorée", aspect: "tall" },
  { src: "/images/photo-14.jpg", alt: "Carpaccio revisité — recette signature", aspect: "tall" },
  { src: "/images/photo-18.jpg", alt: "Tartare et accompagnement maison", aspect: "wide" },
  { src: "/images/photo-17.jpg", alt: "Plat cuisiné maison — tajine de saison", aspect: "wide" },
  { src: "/images/photo-13.jpg", alt: "Plateau apéro charcuterie et fromage", aspect: "tall" },
  { src: "/images/plateau-charcuterie.jpg", alt: "Plateau charcuterie maison Artisans Bouchers Modernes", aspect: "tall" },
  { src: "/images/photo-16.jpg", alt: "Plateau fromages — sélection de la maison", aspect: "wide" },
  { src: "/images/photo-15.jpg", alt: "Plateau fromage 100% local", aspect: "wide" },
  { src: "/images/fromage-comte.jpg", alt: "Comté affiné et fromage de montagne", aspect: "wide" },
  { src: "/images/photo-20.jpg", alt: "Spécialité boucherie", aspect: "wide" },
  { src: "/images/photo-21.jpg", alt: "Pièce du boucher", aspect: "wide" },
  { src: "/images/photo-23.jpg", alt: "Préparation maison", aspect: "wide" },
  { src: "/images/photo-24.jpg", alt: "Spécialité du moment", aspect: "wide" },
  { src: "/images/photo-25.jpg", alt: "Sélection épicerie & cave", aspect: "wide" },
  { src: "/images/photo-26.jpg", alt: "Création de l'équipe Artisans Modernes", aspect: "wide" },
  { src: "/images/photo-27.jpg", alt: "Charcuterie artisanale", aspect: "wide" },
  { src: "/images/photo-22.jpg", alt: "Étal primeur, fruits et légumes de saison", aspect: "wide" },
] as const;

export function Galerie() {
  return (
    <section id="galerie" className="relative py-24 md:py-32 bg-[color:var(--color-paper)]">
      <div className="container-x">
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="eyebrow mb-5">
            <span className="flag-bar"><span /><span /><span /></span>
            Galerie
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight">
            La maison
            <em className="not-italic font-normal text-[color:var(--color-bordeaux)]"> en images</em>.
          </h2>
          <p className="mt-6 text-lg text-[color:var(--color-stone)] leading-relaxed">
            Quelques pièces signature, plats cuisinés, plateaux et coups de cœur du moment —
            telles qu&apos;elles sortent du laboratoire, telles qu&apos;elles arrivent sur l&apos;étal.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 lg:gap-6 [&>*]:mb-4 lg:[&>*]:mb-6">
          {photos.map((p, i) => (
            <figure
              key={p.src}
              className={`break-inside-avoid relative overflow-hidden rounded-[var(--radius-lg)] bg-[color:var(--color-cream-deep)] group`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={p.aspect === "tall" ? 800 : 1000}
                height={p.aspect === "tall" ? 1100 : 800}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                loading={i < 3 ? "eager" : "lazy"}
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 text-sm text-[color:var(--color-cream)] bg-gradient-to-t from-black/70 via-black/30 to-transparent translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                {p.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
