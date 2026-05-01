import { business } from "./business";

export const SITE_URL = `https://${business.domain}`;
export const SITE_NAME = business.name;

/**
 * Build BreadcrumbList JSON-LD for any page.
 */
export function breadcrumbsJsonLd(items: ReadonlyArray<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.path === "" ? SITE_URL : `${SITE_URL}${item.path}`,
    })),
  };
}

/**
 * Inline JSON-LD <script>. Already escapes < to prevent XSS.
 */
export function jsonLdScript(data: unknown) {
  return {
    __html: JSON.stringify(data).replace(/</g, "\\u003c"),
  };
}
