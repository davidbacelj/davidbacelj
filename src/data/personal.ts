// The personal post at the very bottom of the road (2026-10-20): David's life
// outside work in one place, shown as a collage. 2026-10-21: the hunting photo
// and the old "Where it started" post (C++, circuit boards, the lathe) moved in
// here too. Its story is in stories.ts and its captions in captions.ts, under
// "off-the-clock".
import type { Section } from "./sections";
import skiing from "../assets/life/skiing.webp";
import camping from "../assets/life/camping.webp";
import beehive from "../assets/life/beehive.webp";
import hunting from "../assets/life/hunting.webp";
import lathe from "../assets/life/lathe.webp";
import costume from "../assets/life/costume.webp";

export const PERSONAL: Section = {
  id: "off-the-clock",
  title: "Off the clock",
  when: "Outside work",
  lede: "Skiing, hunting, summers with the bees, and the garage where I taught myself to code, solder and run a lathe.",
  collage: true,
  photo: { src: skiing, alt: "Ski tracks across a frozen lake at sunset" },
  thumbs: [
    { src: camping, alt: "A campsite by a lake in the forest" },
    { src: hunting, alt: "A view over a lake from a rocky hill during a hunt" },
    { src: beehive, alt: "The beehive in a summer meadow" },
    { src: lathe, alt: "An old metal lathe cutting a part in the garage" },
    { src: costume, alt: "David in a dark suit in a grand hall" },
  ],
};
