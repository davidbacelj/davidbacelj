import type { APIRoute } from "astro";

// Search engines may crawl everything; this tells them where the sitemap is.
export const GET: APIRoute = ({ site }) =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL("/sitemap-index.xml", site)}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
