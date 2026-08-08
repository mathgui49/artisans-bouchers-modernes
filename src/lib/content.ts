import raw from "@/content.json";

// ════════════════════════════════════════════════════════════════
// Couche de contenu éditable.
//
// `src/content.json` est la SEULE source que le client modifie depuis
// l'éditeur du studio Scalenvia : textes, titres, images et leur `alt`,
// horaires, tarifs, coordonnées, liens sociaux, textes SEO, couleur de
// marque. Publier depuis l'éditeur = commit de ce fichier, puis
// redéploiement. Tout le reste (structure, mise en page, logique du
// panier, données techniques) reste figé dans le code.
//
// `SiteContent` décrit exactement la forme du JSON : toute clé lue par un
// composant est donc garantie présente dans le fichier de contenu, et le
// build casse tout de suite si le contenu et le code divergent.
// ════════════════════════════════════════════════════════════════

// ─── Briques réutilisées d'une section à l'autre ──────────────────

export interface Lien {
  label: string;
  href: string;
}

export interface ImageContenu {
  src: string;
  alt: string;
}

export interface ImageSeo {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface SeoPage {
  title: string;
  description: string;
  keywords: string[];
  image: ImageSeo;
}

// ─── Le magasin ───────────────────────────────────────────────────

export interface Adresse {
  street: string;
  /** Rue seule, sans la zone : affichée sur les cartes et le drive. */
  shortStreet: string;
  postalCode: string;
  city: string;
  country: string;
  region: string;
}

export interface Horaire {
  label: string;
  value: string;
  closed: boolean;
}

export interface PlageHoraireSchema {
  days: string;
  open: string;
  close: string;
}

export interface Reseau {
  label: string;
  icon: string;
  href: string;
}

export interface Business {
  name: string;
  legalName: string;
  shortName: string;
  tagline: string;
  description: string;
  shortDescription: string;
  address: Adresse;
  phone: string;
  phoneIntl: string;
  email: string;
  domain: string;
  geo: { lat: number; lng: number };
  maitreArtisan: {
    name: string;
    title: string;
    awardedBy: string;
    year: string;
    date: string;
  };
  nearbyTowns: string[];
  hours: Horaire[];
  hoursSchema: PlageHoraireSchema[];
  socials: Reseau[];
}

// ─── Catalogue du drive ───────────────────────────────────────────

export interface ProduitContenu {
  id: string;
  slug: string;
  name: string;
  price: number;
  oldPrice?: number;
  perKg?: number;
  weight?: string;
  servings?: string;
  items?: string[];
  shortDescription: string;
  image?: string;
  icon?: string;
  unitSuffix?: string;
  notice?: string;
}

export interface Medaillon {
  label: string;
  sub: string;
  origin: string;
  ornament: string;
  number: string;
}

export interface Catalogue {
  categories: { id: string; label: string; description: string }[];
  colis: ProduitContenu[];
  plateaux: ProduitContenu[];
  pieces: ProduitContenu[];
  medaillons: {
    stamp: string;
    types: {
      pig: Medaillon;
      "beef-leg": Medaillon;
      beef: Medaillon;
      lamb: Medaillon;
    };
  };
}

// ─── Partenaires & équipe ─────────────────────────────────────────

export interface PartenaireContenu {
  name: string;
  categoryLabel: string;
  description: string;
  location?: string;
  image: string;
}

export interface MembreEquipe {
  name: string;
  role: string;
  image: string;
}

// ─── Le contenu complet ───────────────────────────────────────────

export interface SiteContent {
  version: string;
  brand: { primary: string };
  business: Business;
  seo: {
    title: string;
    titleTemplate: string;
    description: string;
    twitterCreator: string;
    keywords: string[];
    images: ImageSeo[];
    homeDescription: string;
  };
  nav: {
    logo: ImageContenu;
    items: Lien[];
    cta: Lien;
    ctaMobile: Lien;
    openMenuLabel: string;
    closeMenuLabel: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    tagline: string;
    intro: string;
    rallyingCry: string;
    primaryCta: Lien;
    secondaryCta: Lien;
    stats: { label: string; value: string }[];
    badge: { value: string; label: string };
    video: { src: string; poster: string };
    image: ImageContenu;
  };
  engagements: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    intro: string;
    items: { title: string; body: string; icon: string }[];
  };
  metiers: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    intro: string;
    items: {
      id: string;
      name: string;
      accroche: string;
      description: string;
      image: string;
    }[];
  };
  distinction: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    image: ImageContenu;
    seal: { line1: string; line2: string; year: string };
    lead: { name: string; beforeTitle: string; title: string; after: string };
    body: string;
    outro: string;
    quote: string;
    cta: Lien;
  };
  drive: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    intro: string;
    cta: Lien;
    colisTitle: string;
    colisNotice: string;
    piecesTitle: string;
    piecesNotice: string;
    addLabel: string;
    addShortLabel: string;
    fallbackWeight: string;
  };
  plateaux: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    intro: string;
    images: ImageContenu[];
    cta: Lien;
    phoneCtaLabel: string;
  };
  producteurs: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    titleEnd: string;
    intro: string;
    points: string[];
    cta: Lien;
    images: ImageContenu[];
  };
  galerie: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    intro: string;
    photos: { src: string; alt: string; aspect: string }[];
  };
  signature: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    intro: string;
    image: ImageContenu;
    cta: Lien;
  };
  infos: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    intro: string;
    addressLabel: string;
    phoneLabel: string;
    emailLabel: string;
    mapCta: { label: string };
    shopCta: Lien;
    hoursTitle: string;
    hoursNote: string;
    todayLabel: string;
    visite: {
      href: string;
      badge: string;
      kicker: string;
      label: string;
      image: ImageContenu;
    };
  };
  footer: {
    logo: { line1: string; line2: string };
    tagline: string;
    shopTitle: string;
    navTitle: string;
    navItems: Lien[];
    hoursTitle: string;
    hoursLines: string[];
    rights: string;
    baseline: string;
  };
  catalogue: Catalogue;
  equipe: { membres: MembreEquipe[] };
  partenaires: {
    categories: { id: string; label: string; description: string }[];
    groupes: {
      viande: PartenaireContenu[];
      fromage: PartenaireContenu[];
      primeur: PartenaireContenu[];
      epicerie: PartenaireContenu[];
    };
  };
  pages: {
    boutique: {
      seo: SeoPage;
      catalogueName: string;
      eyebrow: string;
      title: string;
      titleAccent: string;
      intro: string;
      howItWorks: {
        eyebrow: string;
        title: string;
        titleAccent: string;
        steps: { number: string; title: string; body: string }[];
      };
      addLabel: string;
      addedLabel: string;
    };
    equipe: {
      seo: SeoPage;
      breadcrumb: string;
      eyebrow: string;
      title: string;
      titleAccent: string;
      intro: string;
      image: ImageContenu;
      philosophy: {
        eyebrow: string;
        title: string;
        titleAccent: string;
        paragraphs: string[];
      };
      listTitle: string;
      outro: {
        eyebrow: string;
        title: string;
        titleAccent: string;
        body: string;
      };
    };
    partenaires: {
      seo: SeoPage;
      breadcrumb: string;
      listName: string;
      eyebrow: string;
      title: string;
      titleAccent: string;
      intro: string;
      image: ImageContenu;
      outro: {
        eyebrow: string;
        title: string;
        titleAccent: string;
        body: string;
      };
    };
    maitreArtisan: {
      seo: SeoPage;
      breadcrumb: string;
      homeLabel: string;
      eyebrow: string;
      title: string;
      titleAccent: string;
      intro: string;
      image: ImageContenu;
      recit: {
        eyebrow: string;
        title: string;
        titleAccent: string;
        image: ImageContenu;
        paragraphs: string[];
        highlight: string;
        quote: string;
      };
      definition: {
        eyebrow: string;
        title: string;
        titleAccent: string;
        intro: string;
        criteres: { title: string; body: string }[];
      };
      photosSection: {
        title: string;
        titleAccent: string;
        photos: { src: string; alt: string; position: string }[];
      };
      cta: {
        title: string;
        titleAccent: string;
        body: string;
        primary: Lien;
        secondary: Lien;
      };
    };
    visiteVirtuelle: {
      seo: SeoPage;
      breadcrumb: string;
      eyebrow: string;
      title: string;
      titleAccent: string;
      intro: string;
      tourUrl: string;
      playerTitle: string;
      frameTitle: string;
      vues: { title: string; body: string }[];
      outro: {
        eyebrow: string;
        title: string;
        titleAccent: string;
        primary: Lien;
        secondary: Lien;
      };
    };
    panier: {
      seo: { title: string; description: string };
      eyebrow: string;
      title: string;
      intro: string;
      listTitle: string;
      loading: string;
      empty: { title: string; body: string; cta: Lien };
      clearLabel: string;
      summaryTitle: string;
      subtotalLabel: string;
      priceNoticeBefore: string;
      priceNoticeStrong: string;
      priceNoticeAfter: string;
      fields: {
        name: string;
        email: string;
        phone: string;
        pickupDate: string;
        pickupHint: string;
        message: string;
        messagePlaceholder: string;
      };
      submitLabel: string;
      submittingLabel: string;
      mailNoticeBefore: string;
      mailNoticeAfter: string;
    };
  };
}

export const content = raw as SiteContent;

// ─── Couleur de marque → variables CSS ────────────────────────────
// La couleur principale (content.brand.primary) pilote `--color-bordeaux`
// et sa nuance foncée, les deux seules variables « marque » déclarées
// dans `app/globals.css`. On les recalcule ici pour que la teinte reste
// cohérente quelle que soit la couleur choisie par le client.

function clamp(n: number): number {
  return Math.max(0, Math.min(255, Math.round(n)));
}

function parseHex(hex: string): [number, number, number] {
  const h = hex.replace("#", "");
  const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  return [
    parseInt(full.slice(0, 2), 16) || 0,
    parseInt(full.slice(2, 4), 16) || 0,
    parseInt(full.slice(4, 6), 16) || 0,
  ];
}

function toHex([r, g, b]: [number, number, number]): string {
  return "#" + [r, g, b].map((n) => clamp(n).toString(16).padStart(2, "0")).join("");
}

/** Assombrit une couleur (amount 0→1). */
function darken(hex: string, amount: number): string {
  const [r, g, b] = parseHex(hex);
  return toHex([r * (1 - amount), g * (1 - amount), b * (1 - amount)]);
}

/**
 * Éclaircit une couleur en la mélangeant vers le blanc (amount 0→1).
 * Exporté et non utilisé pour l'instant : `globals.css` ne déclare aucune
 * nuance claire de la marque, seulement `--color-bordeaux-dark`.
 */
export function tint(hex: string, amount: number): string {
  const [r, g, b] = parseHex(hex);
  return toHex([r + (255 - r) * amount, g + (255 - g) * amount, b + (255 - b) * amount]);
}

/**
 * Variables CSS de marque dérivées d'une couleur principale donnée. Extrait
 * pour être réutilisable à chaud (aperçu live de l'éditeur : cf PreviewBridge)
 * sans dépendre du content.json figé au build. Les noms de variables sont
 * ceux déclarés dans `globals.css` (`:root` puis `@theme inline`).
 */
export function brandVarsFor(primary: string): Record<string, string> {
  return {
    "--color-bordeaux": primary,
    "--color-bordeaux-dark": darken(primary, 0.24),
  };
}

const HEX_RE = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;

/**
 * Même calcul, mais à partir d'une palette partielle. C'est la porte d'entrée
 * de l'aperçu de l'éditeur : le brouillon arrive d'une saisie libre, où
 * « #ab » existe le temps de taper la suite, donc toute valeur qui n'est pas
 * un hexadécimal valide est ignorée plutôt que de repeindre le site en noir.
 */
export function brandVarsFrom(brand: Partial<SiteContent["brand"]>): Record<string, string> {
  const primary = brand.primary;
  if (typeof primary !== "string" || !HEX_RE.test(primary.trim())) return {};
  return brandVarsFor(primary.trim());
}

/**
 * Variables CSS de marque à poser en style inline sur <html> — un style
 * inline l'emporte sur la règle `:root` de globals.css, quel que soit
 * l'ordre d'injection. On dérive la nuance foncée pour que le design reste
 * harmonieux avec n'importe quelle couleur principale.
 */
export function brandVars(): Record<string, string> {
  return brandVarsFor(content.brand.primary);
}
