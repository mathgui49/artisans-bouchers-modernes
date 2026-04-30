# Artisans Bouchers Modernes — Site vitrine

Boucherie · Charcuterie · Fromagerie · Primeur · Épicerie & Cave — Bain de Bretagne (35470).

Site Next.js 16 (App Router) + TypeScript strict + Tailwind v4. Design system propriétaire, photos officielles de la fiche Google Business, données du Drive synchronisées avec le catalogue actuel.

## Démarrage

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build production

```bash
npm run build
npm run start
```

## Déploiement Vercel

```bash
vercel link --yes
vercel --prod --yes
```

## Stack

- Next.js 16.2 · React 19 · TypeScript strict
- Tailwind CSS v4 (tokens en CSS vars dans `src/app/globals.css`)
- `next/font/google` : Fraunces (display) + Inter (body)
- `next/image` pour toutes les images
- JSON-LD `LocalBusiness/Store/FoodEstablishment` (layout racine)
- Sitemap + robots dynamiques (`src/app/sitemap.ts`, `src/app/robots.ts`)

## Maintenance

- Modifier prix/colis : `src/lib/business.ts` (constantes `colisEte`, `plateaux`, `piecesEnGros`).
- Ajouter une photo galerie : déposer dans `public/images/`, ajouter au tableau `photos` dans `src/components/sections/Galerie.tsx`.
- Couleurs / typographie : tokens dans `src/app/globals.css`.
