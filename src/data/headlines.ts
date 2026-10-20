// The collage page's list: one bragging headline per thing David has done,
// the strongest first. Each opens its section's story (sections.ts) and its
// article; `id` is the section id. Every headline is true; the details are in
// the story it opens.
export interface Headline {
  /** The section in sections.ts, or none for a claim with no article yet. */
  id?: string;
  title: string;
  /** Shown when there is no section to open. */
  text?: string;
  /** A claim that still needs a source before it goes live. */
  needsSource?: boolean;
}

export const HEADLINES: Headline[] = [
  { id: "incredible", title: "Co-founder of Incredible, backed by 26.5 million SEK" },
  { id: "skapa", title: "Winner of the SKAPA prize, Sweden's largest innovation award" },
  { id: "hackaping", title: "Two first places at Sweden's biggest AI hackathon" },
  { title: "Among the top 0.1% of GTM engineers", text: "I am among the top 0.1% of GTM engineers.", needsSource: true },
  { id: "wheelscanning", title: "Head of AI at a Saab spin-off with hundreds of machines across Europe" },
  { id: "robowaste", title: "CTO behind FossilEye, commissioned by Vattenfall, Tekniska verken and Umeå Energi" },
  { id: "norditech", title: "Science Park's incubator company of the year" },
  { id: "labeldetector", title: "Picked from hundreds of startups to pitch to Saab and Toyota" },
  { id: "swe-llm", title: "I helped train the largest Swedish language model of its time" },
  { id: "hacking-ground", title: "I hosted a hackathon where people who had never coded built games" },
  { id: "viss", title: "Automation in plain language, in more than 30 languages" },
  { id: "on-the-road", title: "From the Golden Gate Bridge to Web Summit in one year" },
  { id: "solar", title: "Swedish champion at UngDrive Masters" },
  { id: "stella", title: "STELLA, the first version of Incredible" },
  { id: "rapid", title: "I won the software contract for industrial 3D printers" },
  { id: "orangebox", title: "I wrote all the software for a tool-rental locker" },
  { id: "norditech-more", title: "Micron-level inspection, coffee analysis and payroll automation" },
  { id: "garden", title: "My garden robot took me to the Swedish final" },
  { id: "ljusgarda", title: "Automation engineer at one of Europe's largest indoor farms" },
  { id: "tidaholm", title: "I built industrial machines, from CAD to assembly" },
  { id: "submarine", title: "I built a submarine to look for Second World War wrecks" },
  { id: "start", title: "Self-taught in C++, circuit boards and the lathe" },
  { id: "off-the-clock", title: "Off the clock: skiing, camping and summers with the bees" },
];
