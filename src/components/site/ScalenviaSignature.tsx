import Image from "next/image";

/* Signature du studio qui a construit le site. L'adresse, le logo et le
   libellé sont écrits ici et non dans src/content.json : c'est la marque de
   l'agence, pas le contenu du client, et un lien laissé dans un fichier
   éditable finit par casser sans que personne ne s'en aperçoive. */

const STUDIO_URL = "https://www.scalenvia.com";
const STUDIO_NAME = "Scalenvia";

export function ScalenviaSignature({ className = "" }: { className?: string }) {
  return (
    <a
      href={STUDIO_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Site développé par ${STUDIO_NAME}, studio de création de sites internet`}
      className={`group inline-flex min-h-11 items-center gap-2.5 text-xs transition-colors ${className}`}
    >
      <Image
        src="/scalenvia-mark.png"
        alt=""
        width={96}
        height={96}
        className="h-5 w-5 shrink-0 rounded-[5px] opacity-80 transition-opacity group-hover:opacity-100"
      />
      <span>
        Site conçu et développé par{" "}
        <span className="font-semibold">{STUDIO_NAME}</span>
      </span>
    </a>
  );
}
