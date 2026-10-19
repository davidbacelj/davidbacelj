// Everything the site says about David, in one place. Each entry notes where the
// fact is published, so it can be checked and kept up to date.

export const PERSON = {
  name: "David Bacelj",
  role: "Co-founder of Incredible",
  place: "Sweden",
  lead: "I co-founded Incredible, an assistant for Mac and Windows that does the work on your computer when you tell it what you want.",
  before: "Before Incredible I built machine-vision systems for recycling and for warehouses, and I programmed industrial robots.",
  description:
    "David Bacelj is an engineer from Jönköping and a co-founder of Incredible, the voice-first assistant that does tasks on your computer.",
};

export const LINKS = [
  { label: "Incredible", href: "https://www.incredible.one" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/davidbacelj/" },
  { label: "X", href: "https://x.com/davidbacelj" },
  { label: "GitHub", href: "https://github.com/davidbacelj" },
];

export type Kind = "school" | "work" | "company" | "award";

export interface Entry {
  /** The year it happened (or started). */
  year: number;
  title: string;
  text: string;
  kind: Kind;
}

/** Oldest first. */
export const TIMELINE: Entry[] = [
  {
    year: 2015,
    title: "Erik Dahlbergsgymnasiet",
    text: "Studied the IT programme at upper secondary school in Jönköping until 2018.",
    kind: "school",
  },
  {
    year: 2018,
    title: "Ljusgårda",
    text: "Automated the watering of crops in a vertical indoor farm, written in C++.",
    kind: "work",
  },
  {
    year: 2019,
    title: "Tidaholm Industries",
    text: "Programmed robots, drew parts in CAD and assembled machines at a contract manufacturer that builds industrial automation.",
    kind: "work",
  },
  {
    year: 2020,
    title: "Norditech",
    text: "Founded Norditech in Huskvarna with Philip Alm and took the CTO role. Philip and I had met at a Junior Achievement fair.",
    kind: "company",
  },
  {
    year: 2020,
    title: "Robowaste",
    text: "Built the vision system that recognises materials as construction waste is sorted, with TensorFlow and Python.",
    kind: "work",
  },
  {
    year: 2021,
    title: "Science Park Tech Accelerator",
    text: "Norditech joined the Tech Accelerator at Science Park Jönköping, won its final pitch and moved into the incubator.",
    kind: "award",
  },
  {
    year: 2023,
    title: "STELLA",
    text: "Showed STELLA, a personal AI assistant that carried out tasks in business software, at GRO36 in Jönköping. The idea grew into Incredible.",
    kind: "company",
  },
  {
    year: 2023,
    title: "Incubator Company of the Year",
    text: "Science Park named Norditech its Incubator Company of the Year, and we won the Guldenen prize.",
    kind: "award",
  },
  {
    year: 2024,
    title: "VISS.AI",
    text: "Launched VISS.AI, which automated routine work across business systems from instructions in plain language. We raised our first round from Spintop Ventures and Starbright Invest.",
    kind: "company",
  },
  {
    year: 2024,
    title: "SKAPA Talent Award",
    text: "Won SKAPA, the national Swedish award for young innovators.",
    kind: "award",
  },
  {
    year: 2025,
    title: "103 unga idéer",
    text: "Företagarna and Almi put us on their yearly list of 103 young ideas in Sweden.",
    kind: "award",
  },
  {
    year: 2026,
    title: "Incredible",
    text: "Rebuilt the product as Incredible. You hold a key, say what you want, and an AI agent does it on your screen in the apps you already use.",
    kind: "company",
  },
  {
    year: 2026,
    title: "26.5 million SEK raised",
    text: "Spintop Ventures, Starbright Invest and angels including Rikard Steiber and Daniel Langkilde backed Incredible, bringing the total to 26.5 million SEK.",
    kind: "company",
  },
  {
    year: 2026,
    title: "Product Hunt",
    text: "Launched Incredible on Product Hunt in October, where it was Product of the Day.",
    kind: "award",
  },
];
