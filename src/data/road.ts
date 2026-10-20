// The road on the home page, in David's own order (2026-10-20): not by year,
// just the posts as he wants them read, with breaks between them. Each entry
// is a section id, "pause:<year>" for that year's personal photo, or
// "break:<name>" for one of the breaks drawn on the home page (music,
// tensorflow, profiles). His life outside work is one post at the very end
// (personal.ts). The build stops if a post or a photo is missing or doubled.
import { STOPS, type Photo, type Section } from "./sections";
import { PERSONAL } from "./personal";

const ORDER = [
  "incredible",
  "hacking-ground",
  "viss",
  "skapa",
  "on-the-road",
  "swe-llm",
  "pause:2024",
  "hackaping",
  "norditech",
  "stella",
  "labeldetector",
  "break:tensorflow",
  "wheelscanning",
  "robowaste",
  "orangebox",
  "rapid",
  "norditech-more",
  "break:profiles",
  "tidaholm",
  "break:music",
  "garden",
  "ljusgarda",
  "solar",
  "submarine",
  "start",
  "off-the-clock",
];

export type Post = { kind: "post"; s: Section; year: string };
export type Pause = { kind: "pause"; sign: string; photo: Photo; text: string };
export type Break = { kind: "break"; name: "music" | "tensorflow" | "profiles" };
const BREAKS = ["music", "tensorflow", "profiles"] as const;

const posts = new Map(STOPS.flatMap((stop) => stop.sections.map((s): [string, Post] => [s.id, { kind: "post", s, year: s.when ?? stop.sign }])));
posts.set(PERSONAL.id, { kind: "post", s: PERSONAL, year: PERSONAL.when! });
const pauses = new Map(STOPS.filter((stop) => stop.pause).map((stop): [string, Pause] => [`pause:${stop.sign}`, { kind: "pause", sign: stop.sign, ...stop.pause! }]));

const breaks = new Map(BREAKS.map((name): [string, Break] => [`break:${name}`, { kind: "break", name }]));
const missing = [...posts.keys(), ...pauses.keys(), ...breaks.keys()].filter((k) => ORDER.filter((o) => o === k).length !== 1);
const unknown = ORDER.filter((o) => !posts.has(o) && !pauses.has(o) && !breaks.has(o));
if (missing.length || unknown.length) throw new Error(`road.ts: missing or doubled ${missing.join(", ")}; unknown ${unknown.join(", ")}`);

export const ROAD: (Post | Pause | Break)[] = ORDER.map((k) => (posts.get(k) ?? pauses.get(k) ?? breaks.get(k))!);

/** The posts alone, in road order, for the newer and older links. */
export const POSTS: Post[] = ROAD.filter((r): r is Post => r.kind === "post");
