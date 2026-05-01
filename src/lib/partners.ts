export interface Partner {
  name: string;
  category: "viande" | "fromage" | "primeur" | "epicerie";
  categoryLabel: string;
  description: string;
  location?: string;
  image: string;
}

export const partners: ReadonlyArray<Partner> = [
  // Viandes
  {
    name: "Viandes Clermont",
    category: "viande",
    categoryLabel: "Porc",
    description:
      "Notre partenaire pour le porc. Élevage rigoureux, alimentation maîtrisée, traçabilité de bout en bout.",
    image: "/images/partners/clermont.webp",
  },
  {
    name: "Tendriade",
    category: "viande",
    categoryLabel: "Veau",
    description:
      "Veau français élevé sous la mère, qualité reconnue, savoir-faire d'éleveurs passionnés.",
    image: "/images/partners/tendriade.webp",
  },
  {
    name: "Les Fermes de Janzé",
    category: "viande",
    categoryLabel: "Volaille fermière",
    description:
      "Volailles fermières label rouge, élevées en plein air dans le pays de Janzé.",
    location: "Janzé · 35",
    image: "/images/partners/janze.webp",
  },
  {
    name: "Les Fermiers d'Ancenis",
    category: "viande",
    categoryLabel: "Volaille",
    description:
      "Coopérative d'éleveurs de volailles installée à Ancenis, en Loire-Atlantique.",
    location: "Ancenis · 44",
    image: "/images/partners/ancenis.webp",
  },
  {
    name: "Viande Bovine Française",
    category: "viande",
    categoryLabel: "Bœuf · Race à viande",
    description:
      "Uniquement de la race à viande, née élevée et abattue dans le grand Ouest. Charolaise, Limousine, Blonde d'Aquitaine, Rouge des Prés. Transparence et traçabilité en magasin.",
    image: "/images/partners/vbf.webp",
  },

  // Fromages
  {
    name: "La Ferme du Claray",
    category: "fromage",
    categoryLabel: "Fromages fermiers",
    description: "Fromages affinés à la ferme, lait de vache, sélection de tommes et frais.",
    location: "Sion-les-Mines · 44",
    image: "/images/partners/claray.webp",
  },
  {
    name: "Les Chèvres du P'tit Bout",
    category: "fromage",
    categoryLabel: "Chèvre",
    description: "Crottins, frais aux herbes, bûches affinées. Fromages de chèvre fermiers.",
    location: "Saint-Malo-de-Phily · 35",
    image: "/images/partners/ptibout.webp",
  },
  {
    name: "Milky Breizh",
    category: "fromage",
    categoryLabel: "Fromages bretons",
    description: "Petite fromagerie de Pancé, lait local, recettes maison.",
    location: "Pancé · 35",
    image: "/images/partners/milky.webp",
  },

  // Primeur
  {
    name: "Subery Claude & Fils",
    category: "primeur",
    categoryLabel: "Fruits & légumes",
    description:
      "Notre partenaire primeur. Sélection française et locale en priorité, saisons respectées. Pour les envies d'évasion, nous étendons nos approvisionnements tout en maintenant notre engagement local.",
    location: "Rennes · 35",
    image: "/images/partners/subery.webp",
  },

  // Épicerie & cave
  {
    name: "Miellerie des Vallons",
    category: "epicerie",
    categoryLabel: "Miels artisanaux",
    description: "Miels de fleurs, châtaignier, acacia. Apiculteurs des Vallons de Vilaine.",
    image: "/images/partners/ruche.webp",
  },
  {
    name: "SDP Rungis",
    category: "epicerie",
    categoryLabel: "Conserves & épicerie fine",
    description: "Notre approvisionnement Rungis pour les conserves de petits producteurs.",
    image: "/images/partners/sdp.webp",
  },
  {
    name: "Les Vergers de la Ferme",
    category: "epicerie",
    categoryLabel: "Cidre",
    description: "Cidre fermier de Bain-de-Bretagne, pommes du verger, fermentation lente.",
    location: "Bain-de-Bretagne · 35",
    image: "/images/partners/cidre.webp",
  },
  {
    name: "Brasserie Draenek",
    category: "epicerie",
    categoryLabel: "Bière bretonne",
    description: "Bières artisanales bretonnes, recettes originales et houblons sélectionnés.",
    image: "/images/partners/draenek.webp",
  },
  {
    name: "Domaine UBY",
    category: "epicerie",
    categoryLabel: "Vins",
    description: "Vins du Sud-Ouest, sélection cave de la maison.",
    image: "/images/partners/uby.webp",
  },
];

export const partnerCategories = [
  {
    id: "viande",
    label: "Nos Viandes",
    description:
      "Porc, veau, volaille, bœuf. Race à viande française, partenaires sélectionnés pour la qualité de leurs élevages, dans le respect d'une agriculture raisonnée.",
  },
  {
    id: "fromage",
    label: "Fromagerie",
    description:
      "Producteurs d'Ille-et-Vilaine et Loire-Atlantique. Fromages fermiers, affinage au plus près, transparence totale sur l'origine.",
  },
  {
    id: "primeur",
    label: "Primeur",
    description:
      "Pour des fruits et légumes français de saison, qui respectent l'environnement.",
  },
  {
    id: "epicerie",
    label: "Épicerie & Cave",
    description:
      "Miel, conserves, cidre, bière, vin. Petits producteurs qui composent notre rayon épicerie fine et nos accords cave.",
  },
] as const;
