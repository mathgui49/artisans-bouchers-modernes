import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { business } from "@/lib/business";
import { breadcrumbsJsonLd, jsonLdScript, SITE_URL } from "@/lib/seo";
import type { Metadata } from "next";

const ma = business.maitreArtisan;

const TITLE = `${ma.title} · ${ma.name} · ${business.name}`;
const DESCRIPTION = `${ma.name} a reçu le titre de ${ma.title}, décerné par la ${ma.awardedBy}. Une distinction qui récompense le savoir-faire et l'excellence de notre boucherie artisanale à ${business.address.city} (35).`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/maitre-artisan" },
  keywords: [
    "Maître Artisan Boucher",
    "Maître Artisan Boucher Bain de Bretagne",
    "Maître Artisan Boucher Bretagne",
    "Dominique Drouadaine",
    "meilleure boucherie Bain de Bretagne",
    "boucherie artisanale Ille-et-Vilaine",
    "Chambre de Métiers et de l'Artisanat",
    "titre Maître Artisan",
  ],
  openGraph: {
    type: "article",
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/maitre-artisan`,
    images: [
      {
        url: "/images/maitre-artisan-remise.webp",
        width: 1600,
        height: 900,
        alt: `${ma.name} reçoit le titre de ${ma.title} à ${business.address.city}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/maitre-artisan-remise.webp"],
  },
};

const photos = [
  { src: "/images/dominique-comptoir.webp", alt: `${ma.name}, ${ma.title}, au comptoir de la boucherie à ${business.address.city}`, pos: "object-[70%_center]" },
  { src: "/images/dominique-cave.webp", alt: "Sélection de la cave, accords avec la côte de bœuf", pos: "object-center" },
  { src: "/images/dominique-charcuterie.webp", alt: "Charcuterie artisanale et saucissons secs de la maison", pos: "object-center" },
  { src: "/images/dominique-brochettes.webp", alt: `${ma.name} et ses brochettes maison, ${ma.title}`, pos: "object-right" },
];

export default function MaitreArtisanPage() {
  const breadcrumbs = breadcrumbsJsonLd([
    { name: "Accueil", path: "/" },
    { name: "Maître Artisan", path: "/maitre-artisan" },
  ]);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: ma.name,
    jobTitle: ma.title,
    worksFor: { "@id": `${SITE_URL}/#business` },
    image: `${SITE_URL}/images/maitre-artisan.webp`,
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
    image: [`${SITE_URL}/images/maitre-artisan-remise.webp`, `${SITE_URL}/images/maitre-artisan.webp`],
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
            src="/images/maitre-artisan-remise.webp"
            alt={`${ma.name} reçoit le titre de ${ma.title} des mains de Michel Aoustin, président Bretagne de la ${ma.awardedBy}`}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--color-ink)]/70 via-[color:var(--color-ink)]/55 to-[color:var(--color-ink)]/95" />
          <div className="container-x relative pt-28 md:pt-40 pb-24 md:pb-32">
            <nav aria-label="Fil d'Ariane" className="mb-6 text-sm text-[color:var(--color-cream)]/60">
              <Link href="/" className="hover:text-[color:var(--color-gold)]">Accueil</Link>
              <span className="mx-2">/</span>
              <span className="text-[color:var(--color-cream)]/90">Maître Artisan</span>
            </nav>
            <p className="flex items-center gap-3 mb-5">
              <span className="flag-bar"><span /><span /><span /></span>
              <span className="text-[0.78rem] tracking-[0.2em] uppercase font-semibold text-[color:var(--color-gold)]">
                Distinction · 26 juin {ma.year}
              </span>
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.03] max-w-4xl">
              {ma.name},
              <br />
              <em className="not-italic font-normal text-[color:var(--color-gold)]">
                {ma.title}
              </em>.
            </h1>
            <p className="mt-7 text-lg md:text-xl text-[color:var(--color-cream)]/85 max-w-2xl leading-relaxed text-justify hyphens-auto">
              Un titre décerné par la {ma.awardedBy}, qui récompense l&apos;engagement, la
              transmission du savoir-faire et l&apos;excellence d&apos;un métier exercé chaque
              jour à {business.address.city}.
            </p>
          </div>
        </section>

        {/* Récit */}
        <section className="py-20 md:py-28" aria-labelledby="recit">
          <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-[var(--radius-lg)] overflow-hidden bg-[color:var(--color-cream-deep)] lg:sticky lg:top-28">
                <Image
                  src="/images/maitre-artisan.webp"
                  alt={`${ma.name}, ${ma.title} chez ${business.name}, avec son diplôme remis par la Chambre de Métiers et de l'Artisanat`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
            <div className="lg:col-span-7">
              <p className="eyebrow mb-4">
                <span className="flag-bar"><span /><span /><span /></span>
                Il y a des jours qu&apos;on a envie de marquer
              </p>
              <h2 id="recit" className="font-display text-3xl md:text-5xl tracking-tight">
                Un titre mérité,
                <br />
                <em className="not-italic font-normal text-[color:var(--color-bordeaux)]">
                  une fierté partagée
                </em>.
              </h2>
              <div className="mt-7 space-y-5 text-[1.05rem] text-[color:var(--color-stone)] leading-[1.8] text-justify hyphens-auto">
                <p>
                  Le 26 juin {ma.year}, {ma.name} a reçu le titre de {ma.title}, remis en main
                  propre par Michel Aoustin, président Bretagne de la {ma.awardedBy}. Une
                  reconnaissance qui récompense l&apos;engagement, la transmission du
                  savoir-faire et des années d&apos;expérience sur le terrain.
                </p>
                <p>
                  C&apos;est lui qui dirige notre commerce au quotidien, avec cette rigueur et
                  cette passion qu&apos;on retrouve dans chaque produit qui sort de nos mains.
                  Ceux qui le connaissent le savent&nbsp;: il n&apos;a jamais cherché la
                  lumière. Il a toujours travaillé dans l&apos;ombre, à l&apos;atelier comme
                  derrière le comptoir, à former les uns et les autres, sans jamais demander
                  qu&apos;on en parle.
                </p>
                <p>
                  Ce titre récompense l&apos;engagement, la transmission du savoir-faire, et
                  des années à se lever tôt sans jamais en faire un sujet. Et derrière lui, il
                  y a aussi celle qui l&apos;a toujours soutenu, à l&apos;atelier comme à la
                  maison.
                </p>
                <p className="text-[color:var(--color-ink)] font-medium">
                  Ce titre, c&apos;est un peu le sien, mais c&apos;est aussi celui de toute
                  l&apos;équipe qui avance avec lui. Bravo, et merci de nous transmettre tout
                  ça chaque jour.
                </p>
              </div>

              <blockquote className="mt-8 pl-5 border-l-2 border-[color:var(--color-gold)] font-display text-xl md:text-2xl italic text-[color:var(--color-ink)]">
                « Tu aimes travailler dans l&apos;ombre, mais aujourd&apos;hui ce titre te
                récompense, et toute l&apos;équipe te félicite. »
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
                La distinction
              </p>
              <h2 id="definition" className="font-display text-3xl md:text-5xl tracking-tight">
                Qu&apos;est-ce qu&apos;un
                <em className="not-italic font-normal text-[color:var(--color-bordeaux)]"> Maître Artisan&nbsp;</em>?
              </h2>
              <p className="mt-6 text-lg text-[color:var(--color-stone)] leading-relaxed text-justify hyphens-auto">
                Le titre de Maître Artisan est la plus haute distinction décernée par les
                Chambres de Métiers et de l&apos;Artisanat. Il reconnaît un professionnel
                confirmé, pour son haut niveau de qualification, son expérience et son
                engagement dans la transmission de son métier.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Critere title="Le savoir-faire" body="Une maîtrise complète du métier de boucher : sélection des bêtes, maturation, découpe et préparations, dans le respect de la tradition." />
              <Critere title="L'expérience" body="Des années passées à l'atelier et derrière le comptoir, à exercer un métier exigeant chaque jour, au service de la qualité." />
              <Critere title="La transmission" body="Former des apprentis et transmettre le geste juste aux générations qui viennent : un engagement au cœur du titre de Maître Artisan." />
            </div>
          </div>
        </section>

        {/* Photos */}
        <section className="py-20 md:py-28" aria-labelledby="photos">
          <div className="container-x">
            <h2 id="photos" className="font-display text-3xl md:text-5xl tracking-tight mb-12">
              La maison
              <em className="not-italic font-normal text-[color:var(--color-bordeaux)]"> au quotidien</em>.
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {photos.map((p) => (
                <div key={p.src} className="relative aspect-[3/4] rounded-[var(--radius-lg)] overflow-hidden bg-[color:var(--color-cream-deep)]">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className={`object-cover ${p.pos}`}
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
              Le savoir-faire d&apos;un Maître Artisan,
              <em className="not-italic font-normal text-[color:var(--color-gold)]"> dans votre assiette</em>.
            </h2>
            <p className="mt-6 text-lg text-[color:var(--color-cream)]/80 leading-relaxed">
              Retrouvez nos viandes, notre charcuterie maison et nos plateaux à {business.address.city},
              ou commandez en ligne avec le drive.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/boutique" className="btn-primary !bg-[color:var(--color-gold)] !text-[color:var(--color-ink)] hover:!bg-[color:var(--color-cream)]">
                Commander en ligne
                <span aria-hidden>→</span>
              </Link>
              <Link href="/equipe" className="btn-ghost text-[color:var(--color-cream)] hover:!bg-[color:var(--color-cream)]/10">
                Découvrir l&apos;équipe
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
