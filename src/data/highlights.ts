// One line per post, big value first, for the bottom of its card on the road
// and the top of the post. 2026-10-23 David asked for his role where it says
// most ("CTO of RoboWaste", "Head of AI vision at Wheelscanning") and a better
// line everywhere else: each one adds something the headline doesn't already
// say. 2026-10-26 he went through them one by one (USD for the round, "2 gold
// medals", "140 meetings booked in 24 hours" and "200+ in the audience" are his
// own figures). The value is drawn with a highlighter pen on the card and the
// post. Every one comes from a public source or from David himself.

export interface Stat {
  value: string;
  label: string;
}

/** One line per section: a number or a role. His life outside work has none. */
export const SECTION_STATS: Record<string, Stat> = {
  incredible: { value: "~$3M", label: "pre-seed (26.5M SEK), led by Spintop Ventures and Starbright Invest" },
  "hacking-ground": { value: "Host and speaker", label: "with Ground, GRO36 and Glitched" },
  viss: { value: "Co-founder", label: "backed by Spintop Ventures and Starbright Invest in 2024" },
  skapa: { value: "Innovation prize", label: "won in Jönköping County, then 2nd in all of Sweden" },
  "on-the-road": { value: "140 meetings booked", label: "in 24 hours at Web Summit" },
  "civeron-podcast": { value: "Podcast guest", label: "on Civeron Podcast, episode 6" },
  "swe-llm": { value: "70B", label: "parameters, fine-tuned from Llama 3 on NVIDIA A100 GPUs" },
  hackaping: { value: "2 gold medals", label: "with AI agents built on Incredible" },
  norditech: { value: "Co-founder and CTO", label: "of Norditech, with Philip Alm" },
  labeldetector: { value: "1 of 4", label: "startups picked from hundreds, which led to pilots with Toyota" },
  wheelscanning: { value: "Head of AI vision", label: "at Wheelscanning" },
  robowaste: { value: "CTO", label: "of RoboWaste, 2020 to 2024" },
  orangebox: { value: "Linux", label: "servers in every locker, online over 4G, plus the app" },
  stella: { value: "200+", label: "in the audience at GRO36, the first time we showed it" },
  "norditech-more": { value: "Consultant", label: "for Rapid Dimension, Quick-set, 3TEMP and FC Production" },
  tidaholm: { value: "CAD to assembly", label: "and robot programming, in the metal industry" },
  garden: { value: "Winner", label: "of the regional UF entrepreneurship final, then on to the Swedish final" },
  ljusgarda: { value: "Automation engineer", label: "watering the crops with solenoids and timers I programmed" },
  solar: { value: "PCB manufacturing", label: "my own circuit board and solar cell, in lamps I sold with honey" },
  submarine: { value: "From scratch", label: "aluminium hull, brushless motors, an Arduino and a GoPro" },
};
