import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

function walk(dir) {
  const out = [];
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else if (/\.(tsx?|css)$/.test(e.name)) out.push(p);
  }
  return out;
}

const subs = [
  // Title separators (keep | structure)
  [/ — Drive/g, " · Drive"],
  [/ — Bouchers/g, " · Bouchers"],
  [/ — Boucherie/g, " · Boucherie"],
  [/ — Le magasin/g, " · Le magasin"],
  [/ — Producteurs/g, " · Producteurs"],
  [/ — façade/g, ", façade"],
  [/ — plateau/g, ", plateau"],
  [/ — Bain de Bretagne/g, ", Bain de Bretagne"],
  [/ — fait maison/g, " (fait maison)"],
  [/ — recette signature/g, ", recette signature"],
  [/ — tajine de saison/g, " (tajine de saison)"],
  [/ — sélection de la maison/g, ", sélection de la maison"],
  [/ — fruits et légumes/g, " : fruits et légumes"],
  [/ — accueil/g, ", accueil"],
  [/ — préparés? /gi, " : préparé "],
  [/ — Artisans Bouchers Modernes/g, " · Les Artisans Modernes"],
  [/ — Les Artisans Modernes/g, " · Les Artisans Modernes"],
  [/ — boutique en ligne/g, ", boutique en ligne"],
  [/ — Catalogue/g, " · Catalogue"],
  [/ — finalisez/g, ". Finalisez"],
  [/ — du barbeuc/g, ", du barbeuc"],
  [/ — Le magasin en immersion/g, " · Le magasin en immersion"],
  [/ — il ne vous reste/g, ". Il ne vous reste"],
  [/ — Bouchers/g, ", Bouchers"],
  [/ — certains produits/g, " : certains produits"],
  // Catch-all between words → comma
  [/ — /g, ", "],
];

let total = 0;
for (const f of walk("src")) {
  let c = readFileSync(f, "utf8");
  const before = (c.match(/ — /g) || []).length;
  for (const [re, sub] of subs) c = c.replace(re, sub);
  const after = (c.match(/ — /g) || []).length;
  if (before !== after) {
    writeFileSync(f, c);
    total += before - after;
    console.log(`${f}: ${before} → ${after}`);
  }
}
console.log(`Total em-dashes replaced: ${total}`);
