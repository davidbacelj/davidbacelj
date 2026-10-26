// Captures the top of each news article about David (masthead, headline, lead
// photo; never the full text) at 2x with a headless Chrome over the DevTools
// protocol, for the "In the press" clippings in posts. Cookie walls, paywall
// sheets and ads are hidden in the capture; nothing is accepted. Usage:
//   node scripts/capture-press.mjs <out-dir> '[{"name":"breakit-x","url":"https://...","hint":"a word in the headline"}]'
// Then convert each PNG to webp (max 1600 px wide) in src/assets/press/, look
// at every one, and add it to the post's `press` list in src/data/sections.ts.
import { spawn } from "node:child_process";
import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const OUT = process.argv[2];
const ARTICLES = JSON.parse(process.argv[3]);
const PORT = 9333;
const W = 1200;
const H = 1700;

const profile = mkdtempSync(join(tmpdir(), "capture-"));
const chrome = spawn(CHROME, ["--headless=new", `--remote-debugging-port=${PORT}`, `--user-data-dir=${profile}`, "--hide-scrollbars", "--mute-audio", "--no-first-run", "--lang=sv-SE", "about:blank"], { stdio: "ignore" });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function endpoint() {
  for (let i = 0; i < 50; i++) {
    try {
      return (await (await fetch(`http://127.0.0.1:${PORT}/json/version`)).json()).webSocketDebuggerUrl;
    } catch {
      await sleep(200);
    }
  }
  throw new Error("Chrome did not start");
}

const ws = new WebSocket(await endpoint());
await new Promise((r) => ws.addEventListener("open", r, { once: true }));
let id = 0;
const pending = new Map();
ws.addEventListener("message", (e) => {
  const msg = JSON.parse(e.data);
  if (msg.id && pending.has(msg.id)) {
    pending.get(msg.id)(msg);
    pending.delete(msg.id);
  }
});
const send = (method, params = {}, sessionId) =>
  new Promise((resolve, reject) => {
    const n = ++id;
    pending.set(n, (m) => (m.error ? reject(new Error(`${method}: ${m.error.message}`)) : resolve(m.result)));
    ws.send(JSON.stringify({ id: n, method, params, sessionId }));
  });

// Hide anything fixed that covers the page (cookie walls, paywall sheets) and
// every ad (iframes, "Annons" slots, ad containers), give the page its scroll
// back, and measure the article's headline and lead photo for the crop.
const clean = (hint) => `(() => {
  const hide = (el) => el && el.style.setProperty('display', 'none', 'important');
  for (const el of document.querySelectorAll('body *')) {
    const cs = getComputedStyle(el);
    if ((cs.position === 'fixed' || cs.position === 'sticky') && !el.querySelector('h1')) {
      const r = el.getBoundingClientRect();
      if (r.width * r.height > 0.08 * innerWidth * innerHeight || /consent|cookie|cmp|paywall|onetrust|didomi|sp_message|fc-|qc-cmp|subscribe|prenumer/i.test(el.id + ' ' + el.className)) hide(el);
    }
  }
  document.querySelectorAll('iframe, ins, [id*="google_ads"], [class*="advert"], [class*="Advert"], [id^="ad-"], [id^="ad_"], [class^="ad-"], [class*=" ad-"], [class*="-ad "], [class*="ad-slot"], [class*="adslot"], [class*="AdSlot"], [class*="banner-ad"], [data-ad], [data-adunit], [aria-label*="Annons"], [aria-label*="annons"]').forEach(hide);
  for (const el of document.querySelectorAll('body *')) {
    if (el.children.length === 0 && /^\\s*(annons|ANNONS|Annons)\\s*$/.test(el.textContent)) {
      let box = el; for (let i = 0; i < 4 && box.parentElement && box.parentElement.getBoundingClientRect().height < 700; i++) box = box.parentElement; hide(box);
    }
  }
  document.documentElement.style.setProperty('overflow', 'auto', 'important');
  document.body.style.setProperty('overflow', 'auto', 'important');
  const h1s = [...document.querySelectorAll('h1')].filter((h) => h.offsetParent);
  const h1 = h1s.find((h) => h.textContent.includes(${JSON.stringify("HINT")})) || h1s.sort((a, b) => b.textContent.length - a.textContent.length)[0];
  const hr = h1.getBoundingClientRect();
  const imgs = [...document.querySelectorAll('img, picture')].map((i) => i.getBoundingClientRect()).filter((r) => r.width > 380 && r.top > hr.top - 40 && r.top < hr.bottom + 900);
  const img = imgs[0];
  return JSON.stringify({ title: h1.textContent.trim().slice(0, 90), h1: [hr.left, hr.top + scrollY, hr.right, hr.bottom + scrollY], img: img ? [img.left, img.top + scrollY, img.right, img.bottom + scrollY] : null });
})()`.replace('"HINT"', JSON.stringify(hint));

for (const a of ARTICLES) {
  const { targetId } = await send("Target.createTarget", { url: "about:blank" });
  const { sessionId } = await send("Target.attachToTarget", { targetId, flatten: true });
  await send("Page.enable", {}, sessionId);
  await send("Emulation.setEmulatedMedia", { features: [{ name: "prefers-color-scheme", value: "light" }] }, sessionId);
  await send("Emulation.setDeviceMetricsOverride", { width: W, height: H, deviceScaleFactor: 2, mobile: false }, sessionId);
  await send("Page.navigate", { url: a.url }, sessionId);
  await sleep(7000);
  const { result } = await send("Runtime.evaluate", { expression: clean(a.hint ?? ""), returnByValue: true }, sessionId);
  await sleep(1200);
  // Measure again now that the ads are gone and the layout has settled.
  const again = await send("Runtime.evaluate", { expression: clean(a.hint ?? ""), returnByValue: true }, sessionId);
  const info = JSON.parse(again.result.value);
  // The outlet's masthead at the top, down to just under the lead photo; the
  // width stops at the article column, so side columns stay out.
  const right = Math.min(W, Math.round(Math.max(info.h1[2], info.img ? info.img[2] : 0) + 28));
  const bottom = Math.min(2400, Math.round((info.img ? info.img[3] : info.h1[3] + 300) + (a.below ?? 36)));
  const shot = await send("Page.captureScreenshot", { format: "png", clip: { x: 0, y: 0, width: Math.max(right, a.minWidth ?? 0), height: bottom, scale: 1 }, captureBeyondViewport: true }, sessionId);
  writeFileSync(join(OUT, `${a.name}.png`), Buffer.from(shot.data, "base64"));
  console.log(a.name, JSON.stringify(info));
  await send("Target.closeTarget", { targetId });
}
ws.close();
chrome.kill();
