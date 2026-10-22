// Tells the IndexNow search engines (Bing, Yandex, Naver, Seznam and Yep) to
// recrawl every page, after each production deploy (.github/workflows/indexnow.yml).
// Google doesn't take part; it reads the sitemap instead. The key is the name
// of the .txt file in public/, which the live site serves to prove it is ours.
// It is public by design, so it is not a secret. Run it by hand with
// `node scripts/indexnow.mjs`.
import { readdirSync } from "node:fs";

const SITE = "https://www.davidbacelj.com";
const keyFile = readdirSync(new URL("../public/", import.meta.url)).find((f) => /^[0-9a-f]{32}\.txt$/.test(f));
if (!keyFile) throw new Error("No IndexNow key file (32 hex characters + .txt) in public/");
const key = keyFile.slice(0, -".txt".length);

// Vercel can take a moment to put a new deploy live, so try a few times.
async function get(url) {
  for (let attempt = 1; ; attempt++) {
    const res = await fetch(url, { headers: { "Cache-Control": "no-cache" } });
    if (res.ok) return res.text();
    if (attempt === 6) throw new Error(`${url} answered ${res.status}`);
    await new Promise((resolve) => setTimeout(resolve, 10_000));
  }
}
const locs = (xml) => [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

if ((await get(`${SITE}/${keyFile}`)).trim() !== key) throw new Error(`${SITE}/${keyFile} doesn't hold the key`);
const sitemaps = locs(await get(`${SITE}/sitemap-index.xml`));
const urls = [...(await Promise.all(sitemaps.map(get))).flatMap(locs), `${SITE}/llms.txt`];

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: new URL(SITE).host, key, keyLocation: `${SITE}/${keyFile}`, urlList: urls }),
});
// 200 means accepted, 202 means accepted while the key is still being checked.
console.log(`IndexNow answered ${res.status} for ${urls.length} URLs`);
if (res.status !== 200 && res.status !== 202) {
  console.error(await res.text());
  process.exit(1);
}
