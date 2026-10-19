// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://davidbacelj.com",
  // The pilot looks are drafts: kept out of the sitemap (and marked noindex).
  integrations: [sitemap({ filter: (page) => !new URL(page).pathname.startsWith("/pilot") })],
  // Astro writes a Content-Security-Policy into every page with the hash of each
  // script and style it emits, so nothing else can run. Headers Astro can't set
  // from a <meta> (frame-ancestors, HSTS and friends) are in vercel.json.
  security: {
    csp: {
      directives: ["default-src 'self'", "img-src 'self' data:", "font-src 'self'", "connect-src 'self'", "object-src 'none'", "base-uri 'self'", "form-action 'self'"],
    },
  },
  devToolbar: { enabled: false },
});
