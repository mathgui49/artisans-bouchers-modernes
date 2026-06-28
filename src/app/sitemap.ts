import type { MetadataRoute } from "next";
import { business } from "@/lib/business";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${business.domain}`;
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/boutique`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/maitre-artisan`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/equipe`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/partenaires`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/visite-virtuelle`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
  ];
}
