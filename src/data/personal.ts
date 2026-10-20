// The personal post at the very bottom of the road (2026-10-20): David's life
// outside work in one place, shown as a collage. Its story is in stories.ts and
// its captions in captions.ts, under "off-the-clock".
import type { Section } from "./sections";
import skiing from "../assets/life/skiing.webp";
import camping from "../assets/life/camping.webp";
import beehive from "../assets/life/beehive.webp";
import costume from "../assets/life/costume.webp";

export const PERSONAL: Section = {
  id: "off-the-clock",
  title: "Off the clock",
  when: "Outside work",
  lede: "Skiing, camping, the sea, hunting and summers with the bees.",
  collage: true,
  photo: { src: skiing, alt: "Ski tracks across a frozen lake at sunset" },
  thumbs: [
    { src: camping, alt: "A campsite by a lake in the forest" },
    { src: beehive, alt: "The beehive in a summer meadow" },
    { src: costume, alt: "David in a dark suit in a grand hall" },
  ],
};
