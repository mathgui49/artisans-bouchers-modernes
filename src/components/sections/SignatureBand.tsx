import Image from "next/image";
import Link from "next/link";

export function SignatureBand() {
  return (
    <section
      aria-labelledby="signature-band-title"
      className="relative isolate overflow-hidden bg-[color:var(--color-ink)] text-[color:var(--color-cream)]"
    >
      <Image
        src="/images/cote-de-boeuf-maturation.webp"
        alt="Côte de bœuf maturée au persillé d'exception, travaillée par notre Maître Artisan Boucher"
        fill
        sizes="100vw"
        className="object-cover object-center opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--color-ink)]/90 via-[color:var(--color-ink)]/60 to-[color:var(--color-ink)]/80" />

      <div className="container-x relative py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="flex items-center gap-3 mb-5">
            <span className="flag-bar"><span /><span /><span /></span>
            <span className="text-[0.78rem] tracking-[0.2em] uppercase font-semibold text-[color:var(--color-gold)]">
              Le geste du Maître Artisan
            </span>
          </p>
          <h2
            id="signature-band-title"
            className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.05]"
          >
            La viande,
            <br />
            <em className="not-italic font-normal text-[color:var(--color-gold)]">
              travaillée comme il faut
            </em>
            .
          </h2>
          <p className="mt-6 text-lg md:text-xl text-[color:var(--color-cream)]/85 leading-relaxed max-w-xl text-justify hyphens-auto">
            Race à viande, origine France, maturation respectée et découpes réalisées à la
            main, dans les règles de l&apos;art. Le savoir-faire d&apos;un Maître Artisan
            Boucher, au service de votre table à Bain de Bretagne.
          </p>
          <div className="mt-9">
            <Link
              href="/boutique"
              className="btn-primary !bg-[color:var(--color-gold)] !text-[color:var(--color-ink)] hover:!bg-[color:var(--color-cream)]"
            >
              Commander en ligne
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
