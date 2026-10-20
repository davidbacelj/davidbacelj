// One headline number per post. Every one comes from a public source or from
// David himself.

export interface Stat {
  value: string;
  label: string;
}

/** One headline number per section, where there is a true one. */
export const SECTION_STATS: Record<string, Stat> = {
  incredible: { value: "26.5M SEK", label: "pre-seed, led by Spintop Ventures and Starbright Invest" },
  hackaping: { value: "2 of 3", label: "tracks won at Sweden's biggest AI hackathon" },
  viss: { value: "30+", label: "languages it understood" },
  "on-the-road": { value: "3", label: "countries in one year: the US, Denmark and Portugal" },
  "swe-llm": { value: "13.3M", label: "tokens of Swedish training text" },
  skapa: { value: "2nd", label: "in Sweden's national SKAPA talent award" },
  labeldetector: { value: "1 of 4", label: "picked from hundreds of European startups to pitch to Saab and Toyota" },
  wheelscanning: { value: "100s", label: "of Wheelscan machines across Europe" },
  robowaste: { value: "3", label: "energy companies commissioned FossilEye" },
  norditech: { value: "1%", label: "of ideas get into Science Park's incubator. We got in, and won its Guldenen." },
  garden: { value: "1st", label: "in the regional UF final, then the Swedish final" },
  solar: { value: "1st", label: "at UngDrive Masters, the Swedish championship" },
  "norditech-more": { value: "µm", label: "micron-level inspection of every part at Quick-set" },
};
