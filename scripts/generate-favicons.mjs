import sharp from "sharp";
import { writeFile } from "node:fs/promises";
import path from "node:path";

const SRC = path.resolve("public/logo.png");
const OUT = path.resolve("public");

const sizes = [
  { name: "icon-16.png", size: 16 },
  { name: "icon-32.png", size: 32 },
  { name: "icon-48.png", size: 48 },
  { name: "icon-192.png", size: 192 },
  { name: "icon-512.png", size: 512 },
  { name: "apple-touch-icon.png", size: 180 },
];

const src = sharp(SRC);
const meta = await src.metadata();
console.log(`Source: ${meta.width}x${meta.height}`);

for (const { name, size } of sizes) {
  // Pad to square with cream bg, then resize
  const buf = await sharp(SRC)
    .resize({ width: size, height: size, fit: "contain", background: { r: 250, g: 246, b: 239, alpha: 1 } })
    .png({ compressionLevel: 9 })
    .toBuffer();
  await writeFile(path.join(OUT, name), buf);
  console.log(`✓ ${name} (${(buf.length / 1024).toFixed(1)}KB)`);
}

// Square OG image 1200x630 for social sharing — using facade as base, no — using logo on cream bg
const og = await sharp(SRC)
  .resize({ width: 800, height: 320, fit: "contain", background: { r: 250, g: 246, b: 239, alpha: 1 } })
  .extend({ top: 155, bottom: 155, left: 200, right: 200, background: { r: 250, g: 246, b: 239, alpha: 1 } })
  .png()
  .toBuffer();
await writeFile(path.join(OUT, "og-logo.png"), og);
console.log(`✓ og-logo.png`);
