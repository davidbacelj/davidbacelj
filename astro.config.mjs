// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // Vercel serves the site on www and redirects the bare domain there, so the
  // canonical links and the sitemap must use www too.
  site: "https://www.davidbacelj.com",
  integrations: [sitemap()],
  // Astro writes a Content-Security-Policy into every page with the hash of each
  // script and style it emits, so nothing else can run. Headers Astro can't set
  // from a <meta> (frame-ancestors, HSTS and friends) are in vercel.json.
  security: {
    csp: {
      directives: ["default-src 'self'", "img-src 'self' data:", "font-src 'self'", "connect-src 'self'", "object-src 'none'", "base-uri 'self'", "form-action 'self'"],
    },
  },
  // No code blocks on the site; Shiki's inline styles would also clash with the CSP.
  markdown: { syntaxHighlight: false },
  // Keep every asset as its own file: small fonts would otherwise be inlined as
  // data: URIs, which the CSP's font-src 'self' blocks.
  vite: { build: { assetsInlineLimit: 0 } },
  devToolbar: { enabled: false },
});
