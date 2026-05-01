export const business = {
  name: "Les Artisans Modernes",
  legalName: "Artisans Bouchers Modernes",
  shortName: "Les Artisans Modernes",
  tagline: "Privilégiez la qualité, et le plaisir.",
  rallyingCry: "Mangeons-mieux, ensemble.",
  description:
    "Boucherie-charcuterie artisanale, fromagerie et primeur à Bain de Bretagne. Viande française issue d'une agriculture raisonnée, charcuterie maison sans colorant ni conservateur, fromages de producteurs locaux, fruits et légumes de saison, épicerie fine et cave.",
  shortDescription:
    "Boucherie · Charcuterie · Fromagerie · Primeur · Épicerie & Cave à Bain de Bretagne (35).",
  address: {
    street: "2 rue de Seine, ZA Château Gaillard",
    postalCode: "35470",
    city: "Bain de Bretagne",
    country: "France",
    region: "Ille-et-Vilaine",
  },
  phone: "02 23 31 00 79",
  phoneIntl: "+33223310079",
  email: "contact@lesartisansmodernes.fr",
  website: "https://www.lesartisansmodernes.fr",
  domain: "lesartisansmodernes.fr",
  geo: { lat: 47.83815, lng: -1.68265 }, // Bain de Bretagne (approx ZA Château Gaillard)
  hours: [
    { day: "Lundi", value: "Fermé", closed: true },
    { day: "Mardi", value: "9h00 – 12h30 · 14h30 – 19h00", closed: false },
    { day: "Mercredi", value: "9h00 – 12h30 · 14h30 – 19h00", closed: false },
    { day: "Jeudi", value: "9h00 – 12h30 · 14h30 – 19h00", closed: false },
    { day: "Vendredi", value: "8h30 – 19h00 (en continu)", closed: false },
    { day: "Samedi", value: "8h30 – 19h00 (en continu)", closed: false },
    { day: "Dimanche", value: "Fermé", closed: true },
  ] as ReadonlyArray<{ day: string; value: string; closed: boolean }>,
  hoursSchema: [
    { days: "Tu,We,Th", open: "09:00", close: "12:30" },
    { days: "Tu,We,Th", open: "14:30", close: "19:00" },
    { days: "Fr,Sa", open: "08:30", close: "19:00" },
  ],
  socials: {
    facebook: "https://www.facebook.com/Artisansbouchersmodernesbain",
    instagram: "https://www.instagram.com/artisans_bouchers_modernes",
    youtube: "https://www.youtube.com/@artisansmodernes35470",
  },
  cta: {
    drive: "#drive",
    booking: "#plateaux",
  },
} as const;

export const departements = [
  {
    id: "boucherie",
    name: "Boucherie",
    accroche: "Viande française, race à viande, locale autant que possible.",
    description:
      "Une viande responsable, issue d'une agriculture raisonnée. Race à viande, origine France garantie, partenariats avec des éleveurs au plus près de Bain de Bretagne. Maturation respectée, découpes réalisées par nos bouchers formés au quotidien.",
    image: "/images/photo-19.webp",
  },
  {
    id: "charcuterie",
    name: "Charcuterie",
    accroche: "Faite maison, sans colorant ni conservateur.",
    description:
      "Pâtés, terrines, saucisses, rillettes, jambons : nos charcutiers cuisinent eux-mêmes la quasi-totalité de la gamme. Pas d'additifs douteux, des matières premières que nous choisissons et des recettes qui respectent les saisons.",
    image: "/images/plateau-charcuterie.webp",
  },
  {
    id: "fromagerie",
    name: "Fromagerie",
    accroche: "Fromages généreux, sélectionnés pour leur origine.",
    description:
      "Une cave à fromages affinée pour vous : artisans fromagers, producteurs locaux, AOP françaises. Du chèvre frais des fermes voisines au comté longuement affiné, en passant par la tomme bretonne, nos coups de cœur du moment.",
    image: "/images/fromage-comte.webp",
  },
  {
    id: "primeur",
    name: "Primeur",
    accroche: "Saisons respectées, valeurs environnementales en tête.",
    description:
      "Fruits et légumes de saison, choisis chaque semaine en respectant la production française et locale. Nous travaillons main dans la main avec des producteurs voisins, ce que vous voyez sur l'étal a souvent voyagé moins de 50 km.",
    image: "/images/photo-22.webp",
  },
  {
    id: "epicerie-cave",
    name: "Épicerie & Cave",
    accroche: "Pour accompagner, sublimer, partager.",
    description:
      "Épicerie fine, conserves de petits producteurs, condiments, accords vins et bières. Une cave pensée pour matcher avec votre côte de bœuf du week-end ou votre plateau de fromages, conseillée par l'équipe.",
    image: "/images/photo-25.webp",
  },
] as const;

export const engagements = [
  {
    title: "Être responsable",
    body: "Viande française, race à viande, agriculture raisonnée. Charcuterie maison sans colorant ni conservateur. Contrôles réguliers par un laboratoire indépendant.",
  },
  {
    title: "Variété et nouveauté",
    body: "Un étal généreux qui change avec les saisons. Plats du moment, idées du week-end, recettes signature de nos bouchers.",
  },
  {
    title: "Créons, innovons ensemble",
    body: "Vos idées + notre savoir-faire. Pour vos repas conviviaux : plateaux fromage, charcuterie, pierrades, raclettes, choucroutes, fondues, sur mesure.",
  },
  {
    title: "Bien manger sans se ruiner",
    body: "Achats malins, colis saisonniers, promos hebdomadaires. La qualité ne doit pas être un luxe, elle doit être un choix accessible.",
  },
] as const;

export const colisEte = [
  {
    id: "colis-barbeuc",
    name: "BARBEUC'",
    price: 59,
    oldPrice: 90,
    perKg: 14.9,
    items: [
      "1 kg de cubes de bœuf marinés",
      "1 kg de cubes de poulet marinés",
      "1 kg de cubes de dinde marinés",
      "1 kg de cubes de porc marinés",
    ],
  },
  {
    id: "colis-terrasse",
    name: "TERRASSE",
    price: 67,
    oldPrice: 95,
    perKg: 16.95,
    items: [
      "1 kg de surprise de porc mariné",
      "1 kg de pavé de bœuf mariné",
      "1 kg de sucette d'agneau à griller",
      "1 kg de cuisse de poulet marinée",
    ],
  },
  {
    id: "colis-soleil",
    name: "SOLEIL",
    price: 55,
    oldPrice: 78,
    perKg: 13.9,
    items: [
      "1 kg de brochettes de poulet",
      "1 kg de veau mariné",
      "1 kg de côte de porc marinée",
      "1 kg de poitrine de porc marinée",
    ],
  },
  {
    id: "colis-saucisses",
    name: "SAUCISSES",
    price: 49,
    oldPrice: 76,
    perKg: 9.99,
    items: [
      "1 kg de saucisses",
      "1 kg de chipolatas",
      "1 kg de merguez",
      "1 kg de chorizettes",
      "1 kg de chipos spéciales",
    ],
  },
  {
    id: "colis-plancha",
    name: "PLANCHA",
    price: 71,
    oldPrice: 101,
    perKg: 17.9,
    items: [
      "1 kg de pavé aux échalotes",
      "1 kg de mélange espagnol",
      "1 kg de mélange volaille",
      "1 kg d'aiguillettes de canard marinées",
    ],
  },
] as const;

export const plateaux: ReadonlyArray<{
  id: string;
  name: string;
  servings: string;
  price: number;
  suffix?: string;
  perPerson?: boolean;
}> = [
  { id: "plateau-apero", name: "Planche apéro", servings: "4 à 6 personnes", price: 18 },
  { id: "pierrade-nature", name: "Pierrade nature", servings: "à partir de 4 parts", price: 6.5, suffix: " /pers.", perPerson: true },
  { id: "pierrade-marinee", name: "Pierrade marinée", servings: "à partir de 4 parts", price: 6.5, suffix: " /pers.", perPerson: true },
  { id: "planche-fromage", name: "Planche fromage", servings: "4 personnes", price: 30 },
  { id: "plateau-fromage-local", name: "Plateau fromage 100% local", servings: "6 personnes", price: 25 },
];

export const piecesEnGros = [
  { id: "piece-demi-cochon", name: "Demi cochon", weight: "≈ 45 kg brut", perKg: 3.8, estimated: 171 },
  { id: "piece-demi-cuisse-boeuf", name: "Demi cuisse de bœuf", weight: "≈ 25 kg brut", perKg: 9.5, estimated: 237.5 },
  { id: "piece-cuisse-boeuf", name: "Cuisse de bœuf entière", weight: "≈ 50 kg brut", perKg: 9.9, estimated: 495 },
  { id: "piece-agneau", name: "Agneau entier", weight: "≈ 20 kg brut", perKg: 13.9, estimated: 278 },
] as const;
