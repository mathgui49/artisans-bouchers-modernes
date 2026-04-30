/**
 * Mirror the Kolor Panotour 360° virtual tour from lesartisansmodernes.fr
 * to public/tour/ so we can host it ourselves on Vercel.
 *
 * Strategy:
 *  1. Start from the entry HTML.
 *  2. Crawl all referenced files (HTML / JS / CSS / XML / images / cursors).
 *  3. For krpano scenes, expand panorama tile URL templates ({1..maxLevel}/{0..rows}_{0..cols}).
 */
import { mkdir, writeFile, readFile, stat } from "node:fs/promises";
import path from "node:path";

const REMOTE_BASE = "https://www.lesartisansmodernes.fr/360%20lesartisansmodernes/";
const LOCAL_BASE = path.resolve("public/tour");

const queue = new Set();
const done = new Set();

function enqueue(rel) {
  // strip leading slashes / hashes
  rel = rel.replace(/^\.?\/?/, "").split("#")[0].split("?")[0];
  if (!rel || rel.startsWith("data:") || rel.startsWith("http")) return;
  if (done.has(rel)) return;
  queue.add(rel);
}

async function ensureDir(p) {
  await mkdir(path.dirname(p), { recursive: true });
}

async function fetchArrayBuffer(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return Buffer.from(await res.arrayBuffer());
}

function isText(rel) {
  return /\.(html?|xml|js|css|svg|txt|cur|wmv)$/i.test(rel) || rel.endsWith(".js.download");
}

function extractRefs(rel, content) {
  const refs = new Set();
  const text = content.toString("utf8");
  // Generic href/src/url() / xml include / data attributes
  const patterns = [
    /(?:href|src|data|url|xml|swf|preview\s+url|thumburl|jsfile|imgurl|video|videourl|skin|spritesheet|skinurl|movie|tilepath|onclick="[^"]*\bopenURL\([^"]*"|imageurl)\s*=\s*"([^"]+)"/gi,
    /url\(\s*["']?([^"')]+)["']?\s*\)/g,
    /["']([^"']+\.(?:jpe?g|png|gif|webp|xml|js|css|svg|swf|cur|mp4|m4v|webm|wmv|woff2?|ttf|otf))["']/gi,
  ];
  for (const re of patterns) {
    let m;
    while ((m = re.exec(text))) {
      const u = m[1];
      if (!u || u.startsWith("data:") || u.startsWith("http")) continue;
      if (u.startsWith("//")) continue;
      // relative to current file
      let resolved = u;
      // krpano placeholder
      resolved = resolved.replace(/%FIRSTXML%/g, "arisanmodernedata");
      // tile templates: %v_%u, %s, etc — expand later
      refs.add(resolveRelative(rel, resolved));
    }
  }
  return [...refs];
}

function resolveRelative(fromRel, toRel) {
  if (toRel.startsWith("/")) return toRel.replace(/^\//, "");
  // remove file portion of fromRel
  const dir = fromRel.includes("/") ? fromRel.replace(/[^/]+$/, "") : "";
  const joined = path.posix.normalize(dir + toRel);
  return joined.replace(/^\.\//, "");
}

async function expandTilePatterns(rel, content) {
  // Look for krpano cube faces with %v/%u tile patterns and enumerate
  const text = content.toString("utf8");
  const tilesetRe = /url="([^"]*%v_%u[^"]*)"/g;
  const refs = new Set();

  // Find scenes blocks to know maxlevel, tilesize, image dimensions
  // Approach: find each level's tilesize/imagesize in nearby <level> tags
  // Simpler: try to download tiles by enumerating row/col up to first 404.
  let m;
  while ((m = tilesetRe.exec(text))) {
    const tplRel = resolveRelative(rel, m[1]);
    refs.add(tplRel);
  }
  return [...refs];
}

// Enumerate tiles (l_/0_0.jpg, 0_1.jpg, 1_0.jpg ...) until 404
async function downloadTileSet(template) {
  // template like "exterieur_22/2/%v_%u.jpg"
  const remoteBase = REMOTE_BASE + template.replace(/%v_%u/, "0_0");
  // probe row/col by trying
  const downloaded = [];
  for (let v = 0; v < 64; v++) {
    let foundInRow = 0;
    for (let u = 0; u < 64; u++) {
      const rel = template.replace("%v", v).replace("%u", u);
      try {
        const buf = await fetchArrayBuffer(REMOTE_BASE + rel);
        const dest = path.join(LOCAL_BASE, rel);
        await ensureDir(dest);
        await writeFile(dest, buf);
        downloaded.push(rel);
        foundInRow++;
      } catch {
        break; // no more cols
      }
    }
    if (foundInRow === 0) break; // no more rows
  }
  return downloaded;
}

async function downloadOne(rel) {
  if (done.has(rel)) return;
  done.add(rel);
  // Skip tile patterns (handled separately)
  if (rel.includes("%v") || rel.includes("%u") || rel.includes("%s")) return;
  // Skip swf (Flash, deprecated, large)
  if (rel.endsWith(".swf")) return;

  const url = REMOTE_BASE + rel;
  let buf;
  try {
    buf = await fetchArrayBuffer(url);
  } catch (e) {
    console.warn(`✗ ${rel} (${e.message})`);
    return;
  }
  const dest = path.join(LOCAL_BASE, rel);
  await ensureDir(dest);
  await writeFile(dest, buf);
  console.log(`✓ ${rel}  (${(buf.length / 1024).toFixed(0)}KB)`);

  if (isText(rel)) {
    extractRefs(rel, buf).forEach((r) => enqueue(r));
  }
}

// 1. Start from entry
enqueue("arisanmoderne.html");
enqueue("arisanmodernedata/arisanmoderne.xml");
enqueue("arisanmodernedata/arisanmoderne_vr.xml");

// 2. Drain queue
let pass = 0;
while (queue.size > 0 && pass < 8) {
  pass++;
  const items = [...queue];
  queue.clear();
  console.log(`\n--- Pass ${pass}: ${items.length} files ---`);
  for (const it of items) {
    await downloadOne(it);
  }
}

// 3. Expand tile templates from all downloaded XMLs
console.log("\n--- Tile enumeration ---");
const xmls = [...done].filter((r) => r.endsWith(".xml"));
const tileTemplates = new Set();
for (const x of xmls) {
  try {
    const content = await readFile(path.join(LOCAL_BASE, x));
    const tpls = await expandTilePatterns(x, content);
    tpls.forEach((t) => tileTemplates.add(t));
  } catch {}
}
console.log("Tile templates found:", tileTemplates.size);
for (const tpl of tileTemplates) {
  console.log(`Tiles for ${tpl}...`);
  const list = await downloadTileSet(tpl);
  console.log(`  ${list.length} tiles`);
}

// 4. Write a stats summary
const totalFiles = done.size + tileTemplates.size; // approx
console.log(`\nDone. Files downloaded: ${done.size} + tiles.`);
console.log(`Local: ${LOCAL_BASE}`);
