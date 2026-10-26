// Who David is, in a few lines, with the photos, product shots and logos that
// more than one section uses. Each fact comes from a public source: Incredible's
// site and blog, Science Park Jönköping, Spintop Ventures, Företagarna, or
// David's own words.
import cofounders from "../assets/photos/cofounders.webp";
import team from "../assets/photos/team.webp";
import studio from "../assets/photos/portrait-studio.webp";
import hosting from "../assets/photos/hosting.webp";
import stage from "../assets/photos/stage.webp";
import sofa from "../assets/photos/me-sofa.webp";
import skapaAward from "../assets/photos/skapa-diploma.webp";
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

export const PHOTOS = { studio, stage, sofa, cofounders, team, hosting, skapaAward, hackaping, stellaStage };
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
  // The line Google shows under the site in search results. 2026-10-26 he picked
  // "engineer who sells" as the line he uses everywhere (website, LinkedIn, X).
  // Keep it under about 155 characters or Google cuts it off.
  description:
    "David Bacelj is a Swedish engineer who sells, co-founder of Incredible, VISS.AI and Norditech. He builds AI models and the GTM engine behind them.",
  /** The line under his name on the home page, his tagline everywhere. */
  tagline: "Engineer who sells. Co-founder of Incredible, building AI models and the GTM engine behind them.",
  // The longer version, for search engines' structured data, where there is no length limit.
  bio: "David Bacelj is a Swedish engineer and tech entrepreneur, best known as a co-founder of Incredible, VISS.AI and Norditech. He has raised millions of dollars in venture capital and grown several companies. His expertise is in GTM engineering, sales and building AI models.",
  expertise: ["GTM engineering", "Sales", "Artificial intelligence"],
  // Public on purpose, so people can reach him (David's call, 2026-10-23).
  email: "david.bacelj@gmail.com",
};

/** Where else David is online; the page metadata lists these as the same person. */
export const LINKS = [
  { label: "Incredible", href: "https://www.incredible.one" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/davidbacelj/" },
  { label: "X", href: "https://x.com/davidbacelj" },
  { label: "GitHub", href: "https://github.com/davidbacelj" },
];
