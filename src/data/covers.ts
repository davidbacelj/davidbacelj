// The big photos of David that David picked (2026-10-20) to lead the
// documents on concept K's timeline. The stage photo opens the page itself;
// these five become the covers of their documents, and each document's own
// photo moves inside it.
import type { DocPhoto } from "./documents";
import team from "../assets/photos/team.webp";
import officeTalk from "../assets/photos/office-talk.webp";
import cofounders2022 from "../assets/photos/cofounders-2022.webp";
import cofoundersLaughing from "../assets/photos/cofounders-laughing.webp";
import travelWebsummit from "../assets/life/travel-websummit.webp";

export const COVERS: Record<string, DocPhoto> = {
  incredible: { photo: { src: team, alt: "The Incredible team in the office in Jönköping" }, caption: "The team behind Incredible, in our office in Jönköping." },
  viss: { photo: { src: officeTalk, alt: "David mid-sentence in the office, August 2024" }, caption: "Mid-sentence in our office, August 2024, back when we were VISS.AI." },
  "on-the-road": { photo: { src: travelWebsummit, alt: "The team on the plane to Web Summit" }, caption: "On the plane to Web Summit in Lisbon with the team." },
  skapa: { photo: { src: cofoundersLaughing, alt: "Philip Alm and David laughing, August 2024" }, caption: "Philip and me. We won the SKAPA prize together with VISS.AI." },
  norditech: { photo: { src: cofounders2022, alt: "David and Philip Alm, the co-founders, in April 2022" }, caption: "Philip and me in 2022. We met at a UF fair and started Norditech together." },
};
