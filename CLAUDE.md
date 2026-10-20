# davidbacelj.com

David Bacelj's personal website. Astro 7, static, deployed on Vercel from this public repository. The repo is named after the GitHub account, so `README.md` is also David's GitHub profile page: keep it a short intro, and put developer notes in `DEVELOPMENT.md`.

## Rules

- The repo is open source. Never commit secrets, `.env` files, private notes or personal data that isn't already meant to be public. Never publish David's home address, phone number or private email.
- Every fact about David lives in `src/data/` and must come from a public source or from David himself. Never invent numbers, quotes, dates, awards or roles.
- No trackers, cookies, analytics or third-party requests. Fonts are self-hosted through `@fontsource`. Visitors get no JavaScript unless a feature needs it.
- Security: Astro writes a hashed CSP into each page (`astro.config.mjs`); the other headers are in `vercel.json`. Keep both when adding anything.
- Pin exact dependency versions in `package.json`.
- Copy follows the writing rules: plain, specific, first person, no em or en dashes, sentence case headings.
- Never push, deploy or publish without David's explicit go.

## Design rulebook

The site (picked by David 2026-10-20, after many rounds of concepts) is "Stage", built in `src/components/LookStage.astro` (the home page) and `src/components/StagePost.astro` (one post per project at `/story/<id>`):

- The first screen is the stage photo of him in the black suit at the podium (`PHOTOS.stage`, his own 3500 px original), full bleed, with his name huge over it, one line under it, and simple round icons for LinkedIn, X and GitHub. Nothing else under the photo but the big numbers (`STATS` in `src/data/highlights.ts`). A credentials grid and labelled logo rows there "looked very bad".
- Then a big welcome film at the start of the road. Until he records it, the frame shows his sofa photo (`PHOTOS.sofa`), a play button and "Coming soon".
- Then the road: one thin ink line straight down the middle through black year pills, drawing itself as you scroll (the line from concept D; a wide road band was rejected). Each project is one plain card centred on the line (no left/right, no stack of paper), led by a big photo of him. His picked photos lead their cards (`src/data/covers.ts`); the rest use their section's photo. A card shows the date and role, a reading time, the headline (`src/data/headlines.ts`), one line, its number or logos, and "Read the post". Big gaps between cards.
- A post is a normal blog post, not a PDF-like viewer: a line back to the road, the headline and the opening, the big photo, the story under its small headings with photos between the parts, the film where there is one, who it was with (logos), sources, and the newer and older posts.
- The end: his studio portrait beside "Get in touch", and "Off the clock".
- Photos load through `Px.astro`: a 16 px preview shown blurred with a soft moving light, then each photo fades in one at a time. He rejected pixel art for this.
- Brag, but only with true facts. Never publish invented numbers; if he asks for made-up ones, they stay out of the live site until he gives real figures. "SKAPA by the Nobel Committee" is wrong (SKAPA was founded in memory of Alfred Nobel).
- CSP: scripts are bundled (inline scripts are blocked), styles come from classes or scripts (style attributes are blocked), and small assets are never inlined (`vite.build.assetsInlineLimit: 0`).

What he rejected, so it is not tried again: grids and bentos ("messy"), a drawing sheet, detection boxes, a quiet serif editorial, a macOS desktop, a launch page, a fully dark cinematic page, widgets, a chat, a photo album, paved, forest or wide roads, stations, storybook chapters, a horizontal road, a slide deck, a Mario-like game, a brainstorm map, the cork board and post-its ("too playful"), a stack-of-paper card, a PDF-like reader, pixel-art placeholders, and credentials or logo rows under the hero. Concepts tried and set aside on 2026-10-20 (in git history): Keynote, Monograph, Track record, Route, Exhibition, Press kit, Scroll story, CV, Collage (after a colleague's site he liked; take its grammar, never copy it), Documents. The collage may come back at the bottom of the page later.

- He wants many real images: photos of him and his work, product screens and logos. Use ALL his photos (`src/assets/life/` came from his camera; their metadata, including GPS, is stripped on import, and must stay stripped). Videos go to `public/media/`, re-encoded with every metadata field stripped.
- The content lives in `src/data/sections.ts` (stops, sections, photos, logos, links, film), with the written stories in `stories.ts`, the captions in `captions.ts`, the numbers in `highlights.ts`, the headlines in `headlines.ts` and the intro and links in `profile.ts`. `documents.ts` splits a story into its parts and photos for a post.
- Logos: `Logo.astro` sets the height by class (the CSP blocks style attributes). One-colour versions of every logo are in `src/assets/logos/mono/` (`monoLogos.ts`).
- Icons come from Simple Icons (CC0) through `Icon.astro`; only tools David has used.
