import Image from "next/image";
import Link from "next/link";
import { content } from "@/lib/content";

const section = content.producteurs;

export function Producteurs() {
  return (
    <section id="producteurs" aria-labelledby="producteurs-title" className="relative py-24 md:py-32 bg-[color:var(--color-cream-deep)] overflow-hidden">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <p className="eyebrow mb-5">
              <span className="flag-bar"><span /><span /><span /></span>
              {section.eyebrow}
            </p>
            <h2 id="producteurs-title" className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight">
              {section.title}{" "}
              <em className="not-italic font-normal text-[color:var(--color-bordeaux)]">{section.titleAccent}</em>{section.titleEnd}
            </h2>
            <p className="mt-6 text-lg text-[color:var(--color-stone)] leading-relaxed max-w-xl text-justify hyphens-auto">
              {section.intro}
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 text-[color:var(--color-ink)] font-medium">
              {section.points.map((tag) => (
                <li key={tag} className="flex items-center gap-2.5">
                  <span className="h-2 w-2 rotate-45 bg-[color:var(--color-bordeaux)]" aria-hidden />
                  <span>{tag}</span>
                </li>
              ))}
            </ul>
            <Link href={section.cta.href} className="mt-8 inline-flex items-center gap-2 text-[color:var(--color-bordeaux)] font-medium hover:underline underline-offset-4">
              {section.cta.label}
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 relative">
            <div className="grid grid-cols-2 gap-3 md:gap-5">
              <div className="relative aspect-[4/5] rounded-[var(--radius-lg)] overflow-hidden mt-12">
                <Image
                  src={section.images[0].src}
                  alt={section.images[0].alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/5] rounded-[var(--radius-lg)] overflow-hidden">
                <Image
                  src={section.images[1].src}
                  alt={section.images[1].alt}
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
