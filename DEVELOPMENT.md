# Running davidbacelj.com

The site is static: [Astro](https://astro.build) builds plain HTML and CSS, and Vercel serves the `dist` folder.

## Run it locally

You need Node 22.12 or newer (`.nvmrc` names the version Vercel uses).

```bash
npm install
npm run dev
```

The site is then at http://localhost:4321. `npm run build` writes the production site to `dist/`, and `npm run preview` serves that build.

## Where things are

- `src/data/sections.ts` holds every year and section, newest first, with its full story, photos, logos and links. `stories.ts` holds the written story of each section (the post-it and the article page), `captions.ts` the handwritten photo captions, and `profile.ts` the intro and links. Change the facts there, not in the components.
- New photos from a phone carry GPS and camera data. Strip it before adding them: re-save through Pillow into a fresh image, and check with `exiftool` or Pillow's `getexif()` that nothing is left.
- `src/components/Board.astro` is the home page, the cork board. `src/pages/story/[id].astro` builds one article per section. `src/layouts/Base.astro` is the HTML shell with the metadata.
- `src/assets/` holds the photos. Astro resizes them and converts them to AVIF and WebP at build time.
- `vercel.json` sets the security headers. Astro writes the Content-Security-Policy for scripts and styles into each page (see `astro.config.mjs`).

## Secrets

The site needs no secrets, API keys or environment variables. If one is ever added, it goes in Vercel's environment variables and a local `.env` file, which git ignores. CI runs [gitleaks](https://github.com/gitleaks/gitleaks) on every push to catch a key committed by mistake.

## Deploying

Import the GitHub repository in Vercel. It detects Astro, so the defaults work: build command `npm run build`, output directory `dist`. Then add `davidbacelj.com` and `www.davidbacelj.com` under the project's Domains.
