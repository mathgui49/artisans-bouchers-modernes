import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { business } from "@/lib/business";
import { content } from "@/lib/content";
import { breadcrumbsJsonLd, jsonLdScript, SITE_URL } from "@/lib/seo";
import type { Metadata } from "next";

const ma = business.maitreArtisan;
const page = content.pages.maitreArtisan;

const TITLE = page.seo.title;
const DESCRIPTION = page.seo.description;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/maitre-artisan" },
  keywords: [...page.seo.keywords],
  openGraph: {
    type: "article",
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/maitre-artisan`,
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

const photos = page.photosSection.photos;

export default function MaitreArtisanPage() {
  const breadcrumbs = breadcrumbsJsonLd([
    { name: "Accueil", path: "/" },
    { name: page.breadcrumb, path: "/maitre-artisan" },
  ]);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: ma.name,
    jobTitle: ma.title,
    worksFor: { "@id": `${SITE_URL}/#business` },
    image: `${SITE_URL}${page.recit.image.src}`,
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      name: ma.title,
      credentialCategory: "Titre de Maître Artisan",
      dateCreated: ma.date,
      recognizedBy: {
        "@type": "GovernmentOrganization",
        name: ma.awardedBy,
      },
    },
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: `${ma.name}, ${ma.title}`,
    datePublished: ma.date,
    image: [`${SITE_URL}${page.image.src}`, `${SITE_URL}${page.recit.image.src}`],
    author: { "@type": "Organization", name: business.legalName, url: SITE_URL },
    publisher: { "@id": `${SITE_URL}/#business` },
    mainEntityOfPage: `${SITE_URL}/maitre-artisan`,
    about: { "@id": `${SITE_URL}/#business` },
  };

  return (
    <>
      <Header />
      <main className="flex-1 bg-[color:var(--color-cream)]">
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumbs)} />
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(personSchema)} />
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(article)} />

        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-[color:var(--color-ink)] text-[color:var(--color-cream)]">
          <Image
            src={page.image.src}
            alt={page.image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--color-ink)]/70 via-[color:var(--color-ink)]/55 to-[color:var(--color-ink)]/95" />
          <div className="container-x relative pt-28 md:pt-40 pb-24 md:pb-32">
            <nav aria-label="Fil d'Ariane" className="mb-6 text-sm text-[color:var(--color-cream)]/60">
              <Link href="/" className="hover:text-[color:var(--color-gold)]">{page.homeLabel}</Link>
              <span className="mx-2">/</span>
              <span className="text-[color:var(--color-cream)]/90">{page.breadcrumb}</span>
            </nav>
            <p className="flex items-center gap-3 mb-5">
              <span className="flag-bar"><span /><span /><span /></span>
              <span className="text-[0.78rem] tracking-[0.2em] uppercase font-semibold text-[color:var(--color-gold)]">
                {page.eyebrow}
              </span>
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.03] max-w-4xl">
              {page.title}
              <br />
              <em className="not-italic font-normal text-[color:var(--color-gold)]">
                {page.titleAccent}
              </em>.
            </h1>
            <p className="mt-7 text-lg md:text-xl text-[color:var(--color-cream)]/85 max-w-2xl leading-relaxed text-justify hyphens-auto">
              {page.intro}
            </p>
          </div>
        </section>

        {/* Récit */}
        <section className="py-20 md:py-28" aria-labelledby="recit">
          <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-[var(--radius-lg)] overflow-hidden bg-[color:var(--color-cream-deep)] lg:sticky lg:top-28">
                <Image
                  src={page.recit.image.src}
                  alt={page.recit.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
            <div className="lg:col-span-7">
              <p className="eyebrow mb-4">
                <span className="flag-bar"><span /><span /><span /></span>
                {page.recit.eyebrow}
              </p>
              <h2 id="recit" className="font-display text-3xl md:text-5xl tracking-tight">
                {page.recit.title}
                <br />
                <em className="not-italic font-normal text-[color:var(--color-bordeaux)]">
                  {page.recit.titleAccent}
                </em>.
              </h2>
              <div className="mt-7 space-y-5 text-[1.05rem] text-[color:var(--color-stone)] leading-[1.8] text-justify hyphens-auto">
                {page.recit.paragraphs.map((paragraphe) => (
                  <p key={paragraphe}>{paragraphe}</p>
                ))}
                <p className="text-[color:var(--color-ink)] font-medium">
                  {page.recit.highlight}
                </p>
              </div>

              <blockquote className="mt-8 pl-5 border-l-2 border-[color:var(--color-gold)] font-display text-xl md:text-2xl italic text-[color:var(--color-ink)]">
                {page.recit.quote}
              </blockquote>
            </div>
          </div>
        </section>

        {/* Qu'est-ce qu'un Maître Artisan ? */}
        <section className="py-20 md:py-28 bg-[color:var(--color-cream-deep)]" aria-labelledby="definition">
          <div className="container-x">
            <div className="max-w-3xl mb-12">
              <p className="eyebrow mb-4">
                <span className="flag-bar"><span /><span /><span /></span>
                {page.definition.eyebrow}
              </p>
              <h2 id="definition" className="font-display text-3xl md:text-5xl tracking-tight">
                {page.definition.title}
                <em className="not-italic font-normal text-[color:var(--color-bordeaux)]"> {page.definition.titleAccent}&nbsp;</em>?
              </h2>
              <p className="mt-6 text-lg text-[color:var(--color-stone)] leading-relaxed text-justify hyphens-auto">
                {page.definition.intro}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {page.definition.criteres.map((c) => (
                <Critere key={c.title} title={c.title} body={c.body} />
              ))}
            </div>
          </div>
        </section>

        {/* Photos */}
        <section className="py-20 md:py-28" aria-labelledby="photos">
          <div className="container-x">
            <h2 id="photos" className="font-display text-3xl md:text-5xl tracking-tight mb-12">
              {page.photosSection.title}{" "}
              <em className="not-italic font-normal text-[color:var(--color-bordeaux)]">{page.photosSection.titleAccent}</em>.
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {photos.map((p) => (
                <div key={p.src} className="relative aspect-[3/4] rounded-[var(--radius-lg)] overflow-hidden bg-[color:var(--color-cream-deep)]">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className={`object-cover ${p.position}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-[color:var(--color-ink)] text-[color:var(--color-cream)]" aria-labelledby="cta">
          <div className="container-x text-center max-w-3xl mx-auto">
            <h2 id="cta" className="font-display text-3xl md:text-5xl tracking-tight">
              {page.cta.title}{" "}
              <em className="not-italic font-normal text-[color:var(--color-gold)]">{page.cta.titleAccent}</em>.
            </h2>
            <p className="mt-6 text-lg text-[color:var(--color-cream)]/80 leading-relaxed">
              {page.cta.body}
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
              <Link href={page.cta.primary.href} className="btn-primary !bg-[color:var(--color-gold)] !text-[color:var(--color-ink)] hover:!bg-[color:var(--color-cream)]">
                {page.cta.primary.label}
                <span aria-hidden>→</span>
              </Link>
              <Link href={page.cta.secondary.href} className="btn-ghost text-[color:var(--color-cream)] hover:!bg-[color:var(--color-cream)]/10">
                {page.cta.secondary.label}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Critere({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-[var(--radius-lg)] bg-[color:var(--color-cream)] border border-[color:var(--color-line)] p-7">
      <h3 className="font-display text-2xl text-[color:var(--color-ink)]">{title}</h3>
      <p className="mt-3 text-[color:var(--color-stone)] leading-relaxed">{body}</p>
    </div>
  );
}
