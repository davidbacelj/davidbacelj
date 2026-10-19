# davidbacelj.com

David Bacelj's personal website. Astro 7, static, deployed on Vercel from this public repository. The repo is named after the GitHub account, so `README.md` is also David's GitHub profile page: keep it a short intro, and put developer notes in `DEVELOPMENT.md`.

## Rules

- The repo is open source. Never commit secrets, `.env` files, private notes or personal data that isn't already meant to be public. Never publish David's home address, phone number or private email.
- Every fact about David lives in `src/data/profile.ts` and must come from a public source or from David himself. Never invent numbers, quotes, dates, awards or roles.
- No trackers, cookies, analytics or third-party requests. Fonts are self-hosted through `@fontsource`. Visitors get no JavaScript unless a feature needs it.
- Security: Astro writes a hashed CSP into each page (`astro.config.mjs`); the other headers are in `vercel.json`. Keep both when adding anything.
- Pin exact dependency versions in `package.json`.
- Copy follows the writing rules: plain, specific, first person, no em or en dashes, sentence case headings.
- Never push, deploy or publish without David's explicit go.

## Design rulebook

Status (2026-10-19): three pilot looks are built for David to pick from, at `/pilot/a`, `/pilot/b` and `/pilot/c`. The home page shows A until he picks. After the pick, promote the winner, delete the other two and `PilotSwitch.astro`, and record the choice here.

- A, "Drawing sheet": each section is a technical drawing sheet with a zoned border; the story is the revision table (letters skip I, O, Q, S); the title block's current revision is the one accent (drafting orange) and matches the last row. Archivo (expanded, semibold) and IBM Plex Mono.
- B, "Detections": computer-vision bounding boxes and lime label tabs mark the portrait and key words; each story row carries its class label. Geist and Geist Mono.
- C, "Quiet editorial": Instrument Serif display, Inter body, the years in the margin, one ember accent on the current year.
- Shared taste: light ground, one accent with one job, huge type with a big jump to body text, the real photo (never a stand-in), no eyebrow labels, no gradient text, no glass, no mouse-reactive effects.
- The portrait faces right, so it sits on the left with the text to its right.
