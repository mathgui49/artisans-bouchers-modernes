import Image from "next/image";
import { departements } from "@/lib/business";

export function Metiers() {
  return (
    <section id="metiers" aria-labelledby="metiers-title" className="relative py-24 md:py-32 bg-[color:var(--color-paper)]">
      <div className="container-x">
        <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <p className="eyebrow mb-5">
              <span className="flag-bar"><span /><span /><span /></span>
              Cinq rayons, un seul lieu
            </p>
            <h2 id="metiers-title" className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight">
              Nos métiers,
              <br />
              <em className="not-italic font-normal text-[color:var(--color-bordeaux)]">notre savoir-faire</em>.
            </h2>
          </div>
          <p className="md:max-w-md text-[color:var(--color-stone)] text-lg leading-relaxed">
            Sous le même toit : la boucherie, la charcuterie maison, la fromagerie, le primeur
            et l&apos;épicerie-cave. Une équipe, une exigence, mille produits.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {departements.map((d, i) => {
            const isFeatured = i === 0;
            return (
              <article
                key={d.id}
                className={`card flex flex-col ${
                  isFeatured ? "lg:row-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className={`relative w-full overflow-hidden ${isFeatured ? "aspect-[4/5] lg:aspect-[4/6]" : "aspect-[5/4]"}`}>
                  <Image
                    src={d.image}
                    alt={`Rayon ${d.name}, ${d.accroche}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <p className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[color:var(--color-cream)]/95 backdrop-blur-sm text-xs font-medium tracking-[0.18em] uppercase text-[color:var(--color-bordeaux)]">
                    {String(i + 1).padStart(2, "0")} · {d.name}
                  </p>
                </div>
                <div className="p-6 md:p-8 flex flex-col gap-3 flex-1">
                  <h3 className="font-display text-2xl md:text-3xl">{d.name}</h3>
                  <p className="text-[color:var(--color-bordeaux)] font-medium text-[0.95rem]">
                    {d.accroche}
                  </p>
                  <p className="text-[color:var(--color-stone)] leading-relaxed">{d.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
