/**
 * Convert all JPG/PNG in public/images/** to optimized WebP.
 * - Resize: max 1600px wide
 * - Quality: 78 (visually lossless for photos)
 * - Skip already optimized files (smaller webp exists)
 * - Logo PNG kept as is (transparency)
 */
import { readdir, stat, readFile, writeFile, unlink } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve("public");

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const out = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(full)));
    else out.push(full);
  }
  return out;
}

const SUFFIX = /\.(jpe?g|png)$/i;

async function processFile(file) {
  const rel = path.relative(ROOT, file);
  // Skip files at /public root (logo, favicons, og-logo, apple-touch-icon, etc.)
  if (!rel.includes(path.sep) && !rel.includes("/")) return null;
  if (rel.startsWith("video")) return null;

  const buf = await readFile(file);
  const before = buf.length;

  const out = await sharp(buf)
    .rotate()
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 78, effort: 5 })
    .toBuffer();

  const dest = file.replace(SUFFIX, ".webp");
  await writeFile(dest, out);
  // remove original
  await unlink(file);
  return { rel, before, after: out.length, dest: path.relative(ROOT, dest) };
}

const files = (await walk(ROOT)).filter((f) => SUFFIX.test(f));
let totalBefore = 0;
let totalAfter = 0;
const results = [];
for (const f of files) {
  try {
    const r = await processFile(f);
    if (r) {
      results.push(r);
      totalBefore += r.before;
      totalAfter += r.after;
    }
  } catch (err) {
    console.error("Failed:", f, err.message);
  }
}

results.sort((a, b) => b.before - a.before);
for (const r of results) {
  const pct = ((1 - r.after / r.before) * 100).toFixed(0);
  const kbBefore = (r.before / 1024).toFixed(0);
  const kbAfter = (r.after / 1024).toFixed(0);
  console.log(`${r.rel.padEnd(40)} ${kbBefore.padStart(5)}KB → ${kbAfter.padStart(5)}KB  −${pct}%`);
}
console.log("─".repeat(80));
console.log(
  `TOTAL ${(totalBefore / 1024 / 1024).toFixed(2)} MB → ${(totalAfter / 1024 / 1024).toFixed(2)} MB  −${((1 - totalAfter / totalBefore) * 100).toFixed(0)}% (${results.length} files)`,
);
