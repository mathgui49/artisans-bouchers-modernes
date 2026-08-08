import Image from "next/image";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { team } from "@/lib/team";
import { breadcrumbsJsonLd, jsonLdScript, SITE_URL } from "@/lib/seo";
import { business } from "@/lib/business";
import { content } from "@/lib/content";
import type { Metadata } from "next";

const page = content.pages.equipe;
const TITLE = page.seo.title;
const DESCRIPTION = page.seo.description;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/equipe" },
  keywords: [...page.seo.keywords],
  openGraph: {
    type: "profile",
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/equipe`,
    images: [
      {
        url: page.seo.image.src,
        width: page.seo.image.width,
        height: page.seo.image.height,
        alt: page.seo.image.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [page.seo.image.src],
  },
};

export default function EquipePage() {
  const breadcrumbs = breadcrumbsJsonLd([
    { name: "Accueil", path: "/" },
    { name: page.breadcrumb, path: "/equipe" },
  ]);

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#business`,
    name: business.legalName,
    alternateName: business.name,
    url: SITE_URL,
    employee: team.map((m) => ({
      "@type": "Person",
      name: m.name,
      jobTitle: m.role,
      image: `${SITE_URL}${m.image}`,
      worksFor: { "@id": `${SITE_URL}/#business` },
    })),
  };

  return (
    <>
      <Header />
      <main className="flex-1 bg-[color:var(--color-cream)]">
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumbs)} />
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(orgSchema)} />

        <section className="relative isolate overflow-hidden bg-[color:var(--color-ink)] text-[color:var(--color-cream)]">
          <Image
            src={page.image.src}
            alt={page.image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--color-ink)]/60 via-[color:var(--color-ink)]/40 to-[color:var(--color-ink)]/95" />
          <div className="container-x relative pt-28 md:pt-40 pb-24 md:pb-32">
            <div className="max-w-3xl">
              <p className="flex items-center gap-3 mb-5">
                <span className="flag-bar"><span /><span /><span /></span>
                <span className="text-[0.78rem] tracking-[0.2em] uppercase font-semibold text-[color:var(--color-gold)]">
                  {page.eyebrow}
                </span>
              </p>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight">
                {page.title}
                <br />
                <em className="not-italic font-normal text-[color:var(--color-gold)]">
                  {page.titleAccent}
                </em>
              </h1>
              <p className="mt-7 text-lg md:text-xl text-[color:var(--color-cream)]/85 max-w-2xl leading-relaxed text-justify">
                {page.intro}
              </p>
            </div>
          </div>
        </section>

        {/* Intro / philosophy */}
        <section className="py-20 md:py-28" aria-labelledby="philosophy">
          <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-4">
                <span className="flag-bar"><span /><span /><span /></span>
                {page.philosophy.eyebrow}
              </p>
              <h2 id="philosophy" className="font-display text-3xl md:text-5xl tracking-tight">
                {page.philosophy.title}
                <br />
                <em className="not-italic font-normal text-[color:var(--color-bordeaux)]">
                  {page.philosophy.titleAccent}
                </em>.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-5 text-[1.05rem] text-[color:var(--color-stone)] leading-[1.8] text-justify">
              {page.philosophy.paragraphs.map((paragraphe) => (
                <p key={paragraphe}>{paragraphe}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Team grid */}
        <section className="pb-20 md:pb-28" aria-labelledby="team-list">
          <div className="container-x">
            <h2 id="team-list" className="sr-only">{page.listTitle}</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 list-none">
              {team.map((m) => (
                <li key={m.name} className="texte-secable flex flex-col items-center text-center group">
                  <div className="relative w-full aspect-[3/4] rounded-[var(--radius-lg)] overflow-hidden bg-[color:var(--color-cream-deep)]">
                    <Image
                      src={m.image}
                      alt={`${m.name}, ${m.role} chez ${business.legalName}`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-display text-2xl mt-5">{m.name}</h3>
                  <p className="mt-1 text-sm text-[color:var(--color-bordeaux)] font-medium">
                    {m.role}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-[color:var(--color-cream-deep)]" aria-labelledby="releve">
          <div className="container-x text-center max-w-3xl mx-auto">
            <p className="eyebrow justify-center mb-4">
              <span className="flag-bar"><span /><span /><span /></span>
              {page.outro.eyebrow}
            </p>
            <h2 id="releve" className="font-display text-3xl md:text-5xl tracking-tight">
              {page.outro.title}{" "}
              <em className="not-italic font-normal text-[color:var(--color-bordeaux)]">{page.outro.titleAccent}</em>.
            </h2>
            <p className="mt-6 text-lg text-[color:var(--color-stone)] leading-relaxed text-justify">
              {page.outro.body}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
