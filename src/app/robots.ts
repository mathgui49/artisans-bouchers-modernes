import type { MetadataRoute } from "next";
import { business } from "@/lib/business";

export default function robots(): MetadataRoute.Robots {
  const base = `https://${business.domain}`;
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/panier", "/api/"] },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
