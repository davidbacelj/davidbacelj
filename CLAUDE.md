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

The site (picked by David 2026-10-19, after fourteen rounds of looks) is a cork board, newest first, with a blue marker line running down it through the years (`src/components/Board.astro`, the home page):

- The header is a BIG portrait of David (he asked for it much bigger, 2026-10-19) beside the intro note; the board ends with his studio portrait beside "Say hello".
- Each year is a stop: a hand-drawn year sign on the line, a big handwritten heading, and under it a one-line tagline in plain type saying what happened that year (`tagline` in `sections.ts`, e.g. "We hosted one, and won two first places at the other.").
- Each section is a big photo with a handwritten caption (`src/data/captions.ts`), up to four smaller captioned photos under it (its first thumbs), and ONE post-it with the whole story. Photos alternate left and right. Most post-its sit APART from the photos, at different heights and indents; about one in four overlaps the photo's edge (a fixed sequence in `Board.astro`), never covering a caption.
- The post-it is the story (`src/data/stories.ts`, picked by David 2026-10-19 as "A, the story"): the year and role, the title in handwriting, an opening paragraph whose first sentence is set stronger, then short parts with a small heading each where it helps (sentence case, Geist semibold, never handwriting: he disliked the handwritten labels). He likes the Geist body text. No bullet lists. Write it long and complete, from everything he told (his long message of 2026-10-19 is the source) and the public sources; never invent.
- Logos are big and OUTSIDE the post-its: each pinned on its own white card (dark for white-only logos, `dark`), in a row under the section, like any other image (`logos` in `sections.ts`; `size` keeps stacked or wide logos in proportion). "A lot of images is good."
- Lots of space: a very long page is wanted ("super, super long"), with big gaps between years and sections.
- Personal moments (hunting, skiing, camping, the suit, the bees) are single photos between the stops.
- Pilot pages, when there are any, live under `/pilot/` (noindex, out of the sitemap) and are deleted once David picks.
- Lots of space between sections; very long is fine, it must stay scannable.
- Each section's full article is a real page at `/story/<id>` (`src/pages/story/[id].astro`): big photo, the story, a quote, what I did, who with, how it went, links, every photo of it, and newer/older. The back button returns to the board.
- Motion: the line inks itself in as you scroll and a small portrait rides its tip; photos and notes drop in with a small overshoot. Keep the line's per-frame work to a lookup table (measured 60 fps at 4x CPU throttle). Everything stays visible without JavaScript or with reduced motion.
- CSP: scripts are bundled (inline scripts are blocked), positions and sizes are set from scripts or classes (style attributes and generated style tags are blocked), and small assets are never inlined (`vite.build.assetsInlineLimit: 0`, data: fonts are blocked).

What he rejected, so it is not tried again: grids and bentos ("messy"), a drawing sheet, detection boxes, serif editorial, a macOS desktop, a launch page, dark cinematic, widgets, a chat, a photo album, a paved or forest road, stations, storybook chapters, a horizontal road (scrolled or swiped), a slide deck, a Mario-like game, a brainstorm map you pan around ("way too chaotic"), and the busy storyboard with every photo on the board.

- He wants many real images: photos of him and his work, product screens, logos of companies, investors and awards, and icons. Use ALL his photos (`src/assets/life/` came from his camera; their metadata, including GPS, is stripped on import, and must stay stripped).
- The content lives in `src/data/sections.ts` (stops, sections, photos, logos, links), with the written stories in `stories.ts` (the board and the article page both show them), the captions in `captions.ts` and the intro and links in `profile.ts`. Keep each section's photos, logos and press links together.
- Simple to use: no windows to open and close; articles are real pages so the back button works.
- Shared taste: warm cork, handwriting only for headings and captions, the real photo (never a stand-in), no eyebrow labels, no gradient text, no glass, no mouse-reactive effects.
- Logos: `Logo.astro` sets the height by class (the CSP blocks style attributes). Raster logos are trimmed to transparent PNGs.
- Icons come from Simple Icons (CC0) through `Icon.astro`; only tools David has used.
