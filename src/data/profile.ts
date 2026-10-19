// Who David is, in a few lines, with the photos, product shots and logos that
// more than one section uses. Each fact comes from a public source: Incredible's
// site and blog, Science Park Jönköping, Spintop Ventures, Företagarna, or
// David's own words.
import portrait from "../assets/photos/portrait.jpg";
import cofounders from "../assets/photos/cofounders.webp";
import team from "../assets/photos/team.webp";
import studio from "../assets/photos/portrait-studio.webp";
import hosting from "../assets/photos/hosting.webp";
import skapaAward from "../assets/photos/skapa-award.webp";
import hackaping from "../assets/photos/hackaping.webp";
import stellaStage from "../assets/photos/stella-stage.webp";

import incredibleHome from "../assets/product/incredible-home.webp";
import incredibleSayIt from "../assets/product/incredible-say-it.webp";
import stellaCli from "../assets/product/stella-cli.webp";

import incredibleLogo from "../assets/logos/incredible.svg";
import vissLogo from "../assets/logos/viss-ai.svg";
import skapaLogo from "../assets/logos/skapa.svg";
import scienceParkLogo from "../assets/logos/science-park.svg";
import foretagarnaLogo from "../assets/logos/foretagarna.svg";

export const PHOTOS = { portrait, studio, cofounders, team, hosting, skapaAward, hackaping, stellaStage };
export const PRODUCT = { incredibleHome, incredibleSayIt, stellaCli };
export const LOGOS = {
  incredible: incredibleLogo,
  viss: vissLogo,
  skapa: skapaLogo,
  sciencePark: scienceParkLogo,
  foretagarna: foretagarnaLogo,
};

export const PERSON = {
  name: "David Bacelj",
  lead: "I co-founded Incredible, an assistant for Mac and Windows that does the work on your computer when you tell it what you want.",
  before: "Before Incredible I built machine-vision systems for recycling and for warehouses, and I programmed industrial robots.",
  description:
    "David Bacelj is an engineer from Jönköping and a co-founder of Incredible, the voice-first assistant that does tasks on your computer.",
};

/** Where else David is online; the page metadata lists these as the same person. */
export const LINKS = [
  { label: "Incredible", href: "https://www.incredible.one" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/davidbacelj/" },
  { label: "X", href: "https://x.com/davidbacelj" },
  { label: "GitHub", href: "https://github.com/davidbacelj" },
];
