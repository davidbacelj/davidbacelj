// Each section as a document of pages, for the roads of documents and their
// reader: a cover (a big photo, the headline and the opening), a film page if
// there is one, text pages of up to two parts with one photo each, a page for
// any photos left over, and a last page with the notes and sources. A look can
// choose a different cover photo; the section's own photo then moves inside.
import type { Photo, Section } from "./sections";
import { STORIES, type Part } from "./stories";
import { HEADLINES } from "./headlines";
import { CAPTIONS } from "./captions";

export interface DocPhoto {
  photo: Photo;
  caption: string;
}

export interface DocPage {
  parts: Part[];
  photo?: DocPhoto;
}

export interface Doc {
  title: string;
  opening: Part;
  cover?: DocPhoto;
  pages: DocPage[];
  /** Photos that did not fit on a text page. */
  rest: DocPhoto[];
  /** Cover, the film page if any, text pages, the photo page if any, and the notes page. */
  count: number;
}

export function documentOf(s: Section, cover?: DocPhoto): Doc {
  const title = HEADLINES.find((h) => h.id === s.id)?.title ?? s.title;
  const [opening, ...parts] = STORIES[s.id] ?? [{ p: s.lede }];
  const own: DocPhoto[] = [
    ...(s.photo ? [{ photo: s.photo, caption: CAPTIONS[s.id]?.[0] ?? s.photo.alt }] : []),
    ...(s.thumbs ?? []).map((t, k) => ({ photo: t, caption: CAPTIONS[s.id]?.[k + 1] ?? t.alt })),
  ];
  const front = cover ?? own[0];
  const inside = cover ? own : own.slice(1);
  const pages: DocPage[] = [];
  for (let i = 0; i < parts.length; i += 2) pages.push({ parts: parts.slice(i, i + 2), photo: inside[pages.length] });
  const used = pages.filter((p) => p.photo).length;
  const rest = inside.slice(used);
  return { title, opening, cover: front, pages, rest, count: 1 + (s.video ? 1 : 0) + pages.length + (rest.length ? 1 : 0) + 1 };
}
