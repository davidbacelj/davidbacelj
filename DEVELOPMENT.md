# Running davidbacelj.com

The site is static: [Astro](https://astro.build) builds plain HTML and CSS, and Vercel serves the `dist` folder.

## Run it locally

You need Node 22.12 or newer (`.nvmrc` names the version Vercel uses).

```bash
npm install
npm run dev
```

The site is then at http://localhost:4321. `npm run build` writes the production site to `dist/`, and `npm run preview` serves that build.

CI installs with `npm ci` on a newer npm than some Macs have. An older npm can drop optional peer packages (such as `@emnapi/core`) from `package-lock.json` when you add or remove a dependency, and CI then refuses the lock. Add or remove packages with CI's npm, `npx npm@11.19.0 install ...`, and check a changed lock before pushing: `npx npm@11.19.0 ci --ignore-scripts --dry-run`.

## Where things are

- `src/data/sections.ts` holds every year and project, newest first, with its photos, logos, links and film. `stories.ts` holds each project's written story, `headlines.ts` the headline on its card, `covers.ts` the photos David picked to lead some cards, `captions.ts` the photo captions, `highlights.ts` the numbers and `profile.ts` the intro and links. Change the facts there, not in the components.
- New photos from a phone carry GPS and camera data. Strip it before adding them: re-save through Pillow into a fresh image, and check with `exiftool` or Pillow's `getexif()` that nothing is left. Films go in `public/media/`, re-encoded with ffmpeg and `-map_metadata -1`.
- `src/components/LookStage.astro` is the home page. `src/components/StagePost.astro` is one project's post, built for each project by `src/pages/story/[id].astro`. `src/components/Px.astro` is a photo with its loading state. `src/layouts/Base.astro` is the HTML shell with the metadata.
- `src/assets/` holds the photos and logos. Astro resizes the photos and converts them to AVIF and WebP at build time.
- `vercel.json` sets the security headers. Astro writes the Content-Security-Policy for scripts and styles into each page (see `astro.config.mjs`).

## Secrets

The site needs no secrets, API keys or environment variables. If one is ever added, it goes in Vercel's environment variables and a local `.env` file, which git ignores. CI runs [gitleaks](https://github.com/gitleaks/gitleaks) on every push to catch a key committed by mistake.

## Deploying

Import the GitHub repository in Vercel. It detects Astro, so the defaults work: build command `npm run build`, output directory `dist`. Then add `davidbacelj.com` and `www.davidbacelj.com` under the project's Domains. `www.davidbacelj.com` is the main one and the bare domain redirects to it; `site` in `astro.config.mjs` must match the main domain, or the canonical links point search engines at a redirect.
