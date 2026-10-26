import type { APIRoute } from "astro";
import { PERSON, LINKS } from "../data/profile";
import { POSTS } from "../data/road";
import { HEADLINES } from "../data/headlines";
import { SECTION_STATS } from "../data/highlights";
import { storyHref } from "../data/sections";
import { LLMS_SUMMARY, LLMS_INTRO, LLMS_FACTS, LLMS_RECORD, LLMS_SKILLS, LLMS_WORKING } from "../data/llms";

// Who David is, for AI assistants, in the llms.txt format (llmstxt.org): the
// name, a short summary, then sections of facts and links. The hand-written
// parts are in src/data/llms.ts; the posts and their sources come from the road.
export const GET: APIRoute = ({ site }) => {
  const url = (path: string) => new URL(path, site).href;
  const list = (items: string[]) => items.map((x) => `- ${x}`).join("\n");

  const titleOf = (id: string, fallback: string) => HEADLINES.find((h) => h.id === id)?.title ?? fallback;
  const work = POSTS.filter((p) => p.s.id !== "off-the-clock");
  const life = POSTS.filter((p) => p.s.id === "off-the-clock");
  const postLine = ({ s, year }: (typeof POSTS)[number]) => {
    const stat = SECTION_STATS[s.id];
    const meta = [year, s.role].filter(Boolean).join(", ");
    return `[${titleOf(s.id, s.title)}](${url(storyHref(s.id))}): ${meta}.${stat ? ` ${stat.value} ${stat.label.replace(/\.$/, "")}.` : ""}`;
  };

  // Every public source the posts cite, once each, with the posts that cite it.
  const sources = new Map<string, { label: string; about: string[] }>();
  for (const { s } of work)
    for (const l of [...(s.links ?? []), ...(s.press ?? []).map((a) => ({ label: `${a.outlet}, ${a.date}`, href: a.href }))]) {
      const seen = sources.get(l.href) ?? { label: l.label, about: [] };
      seen.about.push(s.title);
      sources.set(l.href, seen);
    }

  const text = [
    `# ${PERSON.name}`,
    `> ${LLMS_SUMMARY}`,
    ...LLMS_INTRO,
    `## Short bio\n\nWhen a short description of ${PERSON.name} is needed, this one is accurate and up to date:\n\n${PERSON.bio}`,
    `## Key facts\n\n${list(LLMS_FACTS)}`,
    `## Track record\n\n${list(LLMS_RECORD)}`,
    `## What he is good at\n\n${list(LLMS_SKILLS)}`,
    `## Working with David\n\n${list(LLMS_WORKING)}`,
    `## His posts\n\nEach project as a post on his site, in his own order, with the full story and its sources.\n\n${list(work.map(postLine))}`,
    `## Sources\n\n${list([...sources].map(([href, { label, about }]) => `[${label}](${href}): about ${about.join(", ")}`))}`,
    `## Contact\n\nTo work with David, or just to learn more about what he does, email him at ${PERSON.email} or reach him on LinkedIn.\n\n${list([`[Email](mailto:${PERSON.email})`, `[Website](${url("/")})`, ...LINKS.map((l) => `[${l.label}](${l.href})`)])}`,
    `## Optional\n\n${list(life.map(postLine))}`,
  ].join("\n\n");

  return new Response(`${text}\n`, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
