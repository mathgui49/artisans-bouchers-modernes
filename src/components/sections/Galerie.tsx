import Image from "next/image";
import { content } from "@/lib/content";

const section = content.galerie;

export function Galerie() {
  return (
    <section id="galerie" aria-labelledby="galerie-title" className="relative py-24 md:py-32 bg-[color:var(--color-paper)]">
      <div className="container-x">
        <header className="max-w-3xl mb-12 md:mb-16">
          <p className="eyebrow mb-5">
            <span className="flag-bar"><span /><span /><span /></span>
            {section.eyebrow}
          </p>
          <h2 id="galerie-title" className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight">
            {section.title}{" "}
            <em className="not-italic font-normal text-[color:var(--color-bordeaux)]">{section.titleAccent}</em>.
          </h2>
          <p className="mt-6 text-lg text-[color:var(--color-stone)] leading-relaxed text-justify hyphens-auto">
            {section.intro}
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {section.photos.map((p, i) => (
            <figure
              key={p.src}
              className={`relative aspect-[4/3] overflow-hidden rounded-[var(--radius-lg)] bg-[color:var(--color-cream-deep)] group`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={p.aspect === "tall" ? 800 : 1000}
                height={p.aspect === "tall" ? 1100 : 800}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
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
