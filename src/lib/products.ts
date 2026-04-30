export type ProductCategory = "colis" | "plateau" | "piece";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  /** Prix unitaire à l'unité (ou par personne pour les pierrades). */
  price: number;
  oldPrice?: number;
  /** Prix au kg si applicable (info). */
  perKg?: number;
  /** Poids approx ou nombre de portions. */
  weight?: string;
  servings?: string;
  /** Composition (pour les colis et plateaux). */
  items?: ReadonlyArray<string>;
  shortDescription: string;
  image: string;
  /** Suffixe affiché à droite du prix (ex. " /kg", " /pers."). */
  unitSuffix?: string;
  /** Texte additionnel (ex. délai). */
  notice?: string;
}

export const products: ReadonlyArray<Product> = [
  // ---------- COLIS D'ÉTÉ ----------
  {
    id: "colis-barbeuc",
    slug: "colis-barbeuc",
    name: "Colis BARBEUC'",
    category: "colis",
    categoryLabel: "Colis de saison",
    price: 59,
    oldPrice: 90,
    perKg: 14.9,
    weight: "≈ 4 kg",
    items: [
      "1 kg de cubes de bœuf marinés",
      "1 kg de cubes de poulet marinés",
      "1 kg de cubes de dinde marinés",
      "1 kg de cubes de porc marinés",
    ],
    shortDescription:
      "Le colis grillade pour une tablée joyeuse — 4 viandes marinées prêtes à griller.",
    image: "/images/photo-19.jpg",
    notice: "Préparé à la commande · confirmation par mail sous 48h ouvrées.",
  },
  {
    id: "colis-terrasse",
    slug: "colis-terrasse",
    name: "Colis TERRASSE",
    category: "colis",
    categoryLabel: "Colis de saison",
    price: 67,
    oldPrice: 95,
    perKg: 16.95,
    weight: "≈ 4 kg",
    items: [
      "1 kg de surprise de porc mariné",
      "1 kg de pavé de bœuf mariné",
      "1 kg de sucette d'agneau à griller",
      "1 kg de cuisse de poulet marinée",
    ],
    shortDescription:
      "Sélection raffinée pour soirées d'été — pavé de bœuf, sucettes d'agneau et compagnie.",
    image: "/images/photo-21.jpg",
    notice: "Préparé à la commande · confirmation par mail sous 48h ouvrées.",
  },
  {
    id: "colis-soleil",
    slug: "colis-soleil",
    name: "Colis SOLEIL",
    category: "colis",
    categoryLabel: "Colis de saison",
    price: 55,
    oldPrice: 78,
    perKg: 13.9,
    weight: "≈ 4 kg",
    items: [
      "1 kg de brochettes de poulet",
      "1 kg de veau mariné",
      "1 kg de côte de porc marinée",
      "1 kg de poitrine de porc marinée",
    ],
    shortDescription:
      "Le colis lumineux : brochettes, veau, porc — tout ce qu'il faut pour la plancha.",
    image: "/images/photo-23.jpg",
    notice: "Préparé à la commande · confirmation par mail sous 48h ouvrées.",
  },
  {
    id: "colis-saucisses",
    slug: "colis-saucisses",
    name: "Colis SAUCISSES",
    category: "colis",
    categoryLabel: "Colis de saison",
    price: 49,
    oldPrice: 76,
    perKg: 9.99,
    weight: "≈ 5 kg",
    items: [
      "1 kg de saucisses",
      "1 kg de chipolatas",
      "1 kg de merguez",
      "1 kg de chorizettes",
      "1 kg de chipos spéciales",
    ],
    shortDescription:
      "Le grand assortiment de saucisses maison — pour barbecues sans fin.",
    image: "/images/photo-26.jpg",
    notice: "Préparé à la commande · confirmation par mail sous 48h ouvrées.",
  },
  {
    id: "colis-plancha",
    slug: "colis-plancha",
    name: "Colis PLANCHA",
    category: "colis",
    categoryLabel: "Colis de saison",
    price: 71,
    oldPrice: 101,
    perKg: 17.9,
    weight: "≈ 4 kg",
    items: [
      "1 kg de pavé aux échalotes",
      "1 kg de mélange espagnol",
      "1 kg de mélange volaille",
      "1 kg d'aiguillettes de canard marinées",
    ],
    shortDescription:
      "Le colis premium plancha : pavé, mélange espagnol, aiguillettes de canard.",
    image: "/images/photo-27.jpg",
    notice: "Préparé à la commande · confirmation par mail sous 48h ouvrées.",
  },

  // ---------- PLATEAUX MAISON ----------
  {
    id: "plateau-apero",
    slug: "planche-apero",
    name: "Planche apéro",
    category: "plateau",
    categoryLabel: "Plateaux maison",
    price: 18,
    servings: "4 à 6 personnes",
    shortDescription:
      "Charcuterie maison, fromages, condiments — tout ce qu'il faut pour bien commencer.",
    image: "/images/photo-13.jpg",
    notice: "Préparé sur place le jour J — à commander 48h à l'avance.",
  },
  {
    id: "pierrade-nature",
    slug: "pierrade-nature",
    name: "Pierrade nature",
    category: "plateau",
    categoryLabel: "Plateaux maison",
    price: 6.5,
    servings: "à partir de 4 parts",
    unitSuffix: " /pers.",
    shortDescription:
      "Sélection de viandes nature pour pierrade — bœuf, volaille, porc.",
    image: "/images/photo-19.jpg",
    notice: "Tarif par personne · 4 parts minimum.",
  },
  {
    id: "pierrade-marinee",
    slug: "pierrade-marinee",
    name: "Pierrade marinée",
    category: "plateau",
    categoryLabel: "Plateaux maison",
    price: 6.5,
    servings: "à partir de 4 parts",
    unitSuffix: " /pers.",
    shortDescription:
      "Pierrade signature — viandes marinées maison, herbes et épices fraîches.",
    image: "/images/photo-21.jpg",
    notice: "Tarif par personne · 4 parts minimum.",
  },
  {
    id: "planche-fromage",
    slug: "planche-fromage",
    name: "Planche fromage",
    category: "plateau",
    categoryLabel: "Plateaux maison",
    price: 30,
    servings: "4 personnes",
    shortDescription:
      "Sélection de 6 à 8 fromages affinés — vache, chèvre, brebis, condiments.",
    image: "/images/photo-16.jpg",
    notice: "Préparé sur place le jour J — à commander 48h à l'avance.",
  },
  {
    id: "plateau-fromage-local",
    slug: "plateau-fromage-100-local",
    name: "Plateau fromage 100% local",
    category: "plateau",
    categoryLabel: "Plateaux maison",
    price: 25,
    servings: "6 personnes",
    shortDescription:
      "Le plateau de la maison — uniquement des fromages de producteurs locaux d'Ille-et-Vilaine.",
    image: "/images/photo-15.jpg",
    notice: "Préparé sur place le jour J — à commander 48h à l'avance.",
  },

  // ---------- PIÈCES EN GROS ----------
  {
    id: "demi-cochon",
    slug: "demi-cochon",
    name: "Demi cochon",
    category: "piece",
    categoryLabel: "Pièces en gros",
    price: 171, // 3.80 × 45 (indicatif)
    perKg: 3.8,
    weight: "≈ 45 kg brut",
    unitSuffix: " indicatif",
    shortDescription:
      "Demi-cochon entier découpé selon vos préférences — pour congeler, fumer, conserver.",
    image: "/images/photo-19.jpg",
    notice: "Prix selon poids exact (3,80 €/kg). Confirmation par mail sous 48h ouvrées.",
  },
  {
    id: "demi-cuisse-boeuf",
    slug: "demi-cuisse-boeuf",
    name: "Demi cuisse de bœuf",
    category: "piece",
    categoryLabel: "Pièces en gros",
    price: 237.5, // 9.50 × 25
    perKg: 9.5,
    weight: "≈ 25 kg brut",
    unitSuffix: " indicatif",
    shortDescription:
      "Demi-cuisse de bœuf — race à viande française, découpée par nos bouchers.",
    image: "/images/photo-19.jpg",
    notice: "Prix selon poids exact (9,50 €/kg). Confirmation par mail sous 48h ouvrées.",
  },
  {
    id: "cuisse-boeuf-entiere",
    slug: "cuisse-de-boeuf-entiere",
    name: "Cuisse de bœuf entière",
    category: "piece",
    categoryLabel: "Pièces en gros",
    price: 495, // 9.90 × 50
    perKg: 9.9,
    weight: "≈ 50 kg brut",
    unitSuffix: " indicatif",
    shortDescription:
      "Pièce entière — race à viande, découpe sur mesure (steaks, rôtis, bourguignon, hachée).",
    image: "/images/photo-19.jpg",
    notice: "Prix selon poids exact (9,90 €/kg). Confirmation par mail sous 48h ouvrées.",
  },
  {
    id: "agneau-entier",
    slug: "agneau-entier",
    name: "Agneau entier",
    category: "piece",
    categoryLabel: "Pièces en gros",
    price: 278, // 13.90 × 20
    perKg: 13.9,
    weight: "≈ 20 kg brut",
    unitSuffix: " indicatif",
    shortDescription:
      "Agneau entier français — découpé selon vos envies pour vos congélations.",
    image: "/images/photo-19.jpg",
    notice: "Prix selon poids exact (13,90 €/kg). Confirmation par mail sous 48h ouvrées.",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export const productCategories: ReadonlyArray<{
  id: ProductCategory;
  label: string;
  description: string;
}> = [
  {
    id: "colis",
    label: "Colis de saison",
    description:
      "Nos sélections complètes de viandes marinées — du barbeuc' à la plancha premium.",
  },
  {
    id: "plateau",
    label: "Plateaux maison",
    description:
      "À emporter pour vos apéros, repas conviviaux et événements — préparés sur place.",
  },
  {
    id: "piece",
    label: "Pièces en gros",
    description:
      "Pièces entières découpées sur mesure pour vos congélations et grandes tablées.",
  },
];
