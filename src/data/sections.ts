// The road, newest first: one stop per year, and in each stop one section per
// thing I did, written out in full: what it is, what I did there, who with and
// how it turned out. Most of it is in my own words; the rest comes from
// Incredible's blog, Vattenfall, SVT, Science Park, Stiftelsen SKAPA and Breakit.
import type { ImageMetadata } from "astro";
import { LOGOS, PHOTOS, PRODUCT } from "./profile";

import robowastePhoto from "../assets/photos/robowaste.webp";
import teamStanford from "../assets/photos/team-stanford.webp";
import incWaymo from "../assets/photos/incredible-waymo.webp";
import incSpintop from "../assets/photos/incredible-spintop.webp";
import incStartupDay from "../assets/photos/incredible-startup-day.webp";
import incPhysicalAiDay from "../assets/photos/incredible-physical-ai-day.webp";
import incTeamDinner from "../assets/photos/incredible-team-dinner.webp";
import incOfficeSnow from "../assets/photos/incredible-office-snow.webp";
import incComedy from "../assets/photos/incredible-comedy.webp";
import incConference from "../assets/photos/incredible-conference.webp";
import fossilEyeHall from "../assets/photos/fossileye-hall.webp";
import civeronPodcast from "../assets/photos/civeron-podcast.webp";
import pressBreakitIncredible from "../assets/press/breakit-incredible.webp";
import pressBreakitViss from "../assets/press/breakit-viss.webp";
import pressBreakitSweLlm from "../assets/press/breakit-swe-llm.webp";
import pressNyTeknik from "../assets/press/nyteknik.webp";
import pressTechtidningen from "../assets/press/techtidningen.webp";
import pressJpLabelDetector from "../assets/press/jp-labeldetector.webp";
import pressJpSkapa from "../assets/press/jp-skapa.webp";
import officeTalk from "../assets/photos/office-talk.webp";
import cofoundersLaughing from "../assets/photos/cofounders-laughing.webp";
import cofoundersGreenWall from "../assets/photos/cofounders-green-wall.webp";
import cofounders2022 from "../assets/photos/cofounders-2022.webp";
import norditechTeam2022 from "../assets/photos/norditech-team-2022.webp";
import wheelscanMachine from "../assets/photos/wheelscan-machine.webp";
import wheelscanTyre from "../assets/photos/wheelscan-tyre.webp";
import wheelscanDemo from "../assets/photos/wheelscan-demo.webp";
import rapidPrinter from "../assets/photos/rapid-printer.webp";
import labelCameraMounted from "../assets/photos/labeldetector-camera-mounted.webp";
import stellaGro36 from "../assets/photos/stella-gro36.webp";
import hackapingHall from "../assets/photos/hackaping-hall.webp";
import hackathonWorking from "../assets/photos/hackathon-working.webp";
import hackathonGames from "../assets/photos/hackathon-games.webp";
import sumoDuck from "../assets/photos/sumo-duck.webp";
import hackathonWinners from "../assets/photos/hackathon-winners.webp";
import hackathonCeremony from "../assets/photos/hackathon-ceremony.webp";
import hackathonVenue from "../assets/photos/hackathon-venue.webp";
import hackathonPhilip from "../assets/photos/hackathon-philip.webp";

import labelCamera from "../assets/product/labeldetector-camera.webp";
import labelParsed from "../assets/product/labeldetector-label.webp";
import stellaFramework from "../assets/product/stella-framework.webp";
import sweLlm from "../assets/product/swe-llm.webp";
import sweLlmChat from "../assets/product/swe-llm-chat.webp";
import hackapingAgents from "../assets/product/hackaping-agents.webp";

import submarine from "../assets/life/submarine.webp";
import submarineDive from "../assets/life/submarine-dive.webp";
import solarLamp from "../assets/life/solar-lamp.webp";
import solarLamp2 from "../assets/life/solar-lamp-2.webp";
import gardenRobot from "../assets/life/garden-robot.webp";
import gardenRobot2 from "../assets/life/garden-robot-2.webp";
import gardenPcb from "../assets/life/garden-pcb.webp";
import gardenCad from "../assets/life/garden-cad.webp";
import ungdrive from "../assets/life/ungdrive.webp";
import tidaholm from "../assets/life/tidaholm.webp";
import orangebox from "../assets/life/orangebox.webp";
import orangebox2 from "../assets/life/orangebox-2.webp";
import hackapingStage from "../assets/life/hackaping-stage.webp";
import groundJonkoping from "../assets/life/ground-jonkoping.webp";
import goldenGate from "../assets/life/golden-gate.webp";
import techbbq from "../assets/life/techbbq.webp";
import websummit from "../assets/life/websummit.webp";
import travelWebsummit from "../assets/life/travel-websummit.webp";
import inUs from "../assets/life/in-us.webp";

import robowasteLogo from "../assets/logos/robowaste.png";
import wheelscanningLogo from "../assets/logos/wheelscanning.png";
import ebossLogo from "../assets/logos/eboss.png";
import toyotaLogo from "../assets/logos/toyota.png";
import rapidLogo from "../assets/logos/rapid-dimension.png";
import quicksetLogo from "../assets/logos/quickset.png";
import fcproductionLogo from "../assets/logos/fcproduction.png";
import spintopLogo from "../assets/logos/spintop.svg";
import starbrightLogo from "../assets/logos/starbright.svg";
import cellmarkLogo from "../assets/logos/cellmark.svg";
import productHuntLogo from "../assets/logos/product-hunt.svg";
import gro36Logo from "../assets/logos/gro36.svg";
import glitchedLogo from "../assets/logos/glitched.svg";
import liuLogo from "../assets/logos/linkoping-university.svg";
import almiLogo from "../assets/logos/almi.svg";
import techbbqLogo from "../assets/logos/techbbq.svg";
import webSummitLogo from "../assets/logos/web-summit.svg";
import threeTempLogo from "../assets/logos/3temp.svg";
import vattenfallLogo from "../assets/logos/vattenfall.svg";
import tekniskaVerkenLogo from "../assets/logos/tekniska-verken.svg";
import umeaEnergiLogo from "../assets/logos/umea-energi.svg";
import ufLogo from "../assets/logos/ung-foretagsamhet.svg";
import ungdriveLogo from "../assets/logos/ungdrive.svg";
import norditechLogo from "../assets/logos/norditech.png";
import saabLogo from "../assets/logos/saab.png";
// Ljusgårda's logotype on a light green panel (2026-10-21: the logo is its main image).
import ljusgardaCover from "../assets/photos/ljusgarda-cover.png";
// Norditech's logotype on a light blue panel (2026-10-21: the consulting post leads with it).
import norditechCover from "../assets/photos/norditech-cover.png";

export interface Photo {
  src: ImageMetadata;
  alt: string;
}

export interface Section {
  id: string;
  title: string;
  when?: string;
  role?: string;
  /** One sentence that says plainly what I did. */
  lede: string;
  /** A line about it, word for word from a published source. */
  quote?: { text: string; source: string };
  /** Who it was with. */
  with?: string;
  photo?: Photo;
  thumbs?: Photo[];
  /** Who it was with. `dark` puts a white-only logo on a dark tile; `scale`
      makes a logo that looks small next to the others bigger (1.3 is 30% taller). */
  logos?: { src: ImageMetadata; alt: string; dark?: boolean; scale?: number }[];
  links?: { label: string; href: string }[];
  /** Show the photo and its thumbs together as a collage, on the card and the post. */
  collage?: boolean;
  /** A film, served from public/media, with a still to show before it plays. */
  video?: { src: string; poster: ImageMetadata; caption: string };
  /** A news clip from another site's player (SVT's), loaded only when the visitor
      presses play, so the page makes no third-party requests until then. */
  clip?: { src: string; title: string; length: string; poster: Photo; caption: string };
  /** The post opens with the logos instead of the photo; the photo takes the
      logos' place after the story's first section (David's call for RoboWaste). */
  logoCover?: boolean;
  /** News articles about it (2026-10-26): the top of each article as captured
      from the outlet's site (masthead, headline, photo; never the full text
      and never an ad), linked to the article. */
  press?: { src: ImageMetadata; outlet: string; date: string; title: string; href: string }[];
}

export interface Stop {
  /** The year on the road sign. */
  sign: string;
  /** What this stretch of road was about. */
  label: string;
  /** One short line under the label: what happened that year. */
  tagline: string;
  sections: Section[];
  /** A personal moment by the roadside. */
  pause?: { photo: Photo; title: string; text: string };
}

export const STOPS: Stop[] = [
  {
    sign: "2026",
    label: "Incredible",
    tagline: "We launched an AI that does the work on your computer.",
    sections: [
      {
        id: "incredible",
        press: [
          { src: pressBreakitIncredible, outlet: "Breakit", date: "18 August 2026", title: "Blev \"fartblinda\" i AI-bubblan – Incredible byter riktning och tar in 19 nya miljoner", href: "https://www.breakit.se/artikel/47107/blev-fartblinda-i-ai-bubblan-incredible-byter-riktning-och-tar-in-19-nya-miljoner" },
        ],
        title: "Incredible",
        when: "Now",
        role: "Co-founder",
        lede: "I co-founded Incredible, an AI that does the work on your computer when you tell it what you want.",
        with: "Philip Alm and the Incredible team in Jönköping",
        // The photo with Peter from Spintop shows big after the Funding part (David, 2026-10-26).
        photo: { src: incSpintop, alt: "David with Peter from Spintop Ventures and a colleague in front of the Incredible stand" },
        thumbs: [
          { src: PRODUCT.incredibleHome, alt: "The Incredible app on a Mac, with Hold to talk at the top and the day's tasks below" },
          { src: PRODUCT.incredibleSayIt, alt: "The Incredible voice bar" },
        ],
        logos: [
          { src: LOGOS.incredible, alt: "Incredible" },
          { src: cellmarkLogo, alt: "CellMark" },
          { src: spintopLogo, alt: "Spintop Ventures" },
          { src: starbrightLogo, alt: "Starbright Invest" },
          { src: productHuntLogo, alt: "Product Hunt" },
        ],
        links: [
          { label: "incredible.one", href: "https://www.incredible.one" },
          { label: "Funding", href: "https://www.incredible.one/blog/incredible-reveals-pre-seed-funding" },
          { label: "CellMark", href: "https://www.incredible.one/blog/cellmark-success-story" },
          { label: "Product Hunt", href: "https://www.incredible.one/blog/our-2025-vibe-computing" },
        ],
      },
    ],
  },
  {
    sign: "2025",
    label: "Two hackathons",
    tagline: "We hosted one, and won two first places at the other.",
    sections: [
      {
        id: "hacking-ground",
        title: "Hacking Ground",
        when: "2025",
        role: "Host",
        lede: "I hosted our own hackathon, presented Incredible on stage, and watched people who had never coded build their own games.",
        with: "Ground, GRO36 and Glitched",
        photo: { src: PHOTOS.hosting, alt: "Hosting from the podium under the stage lights" },
        thumbs: [
          { src: sumoDuck, alt: "The Sumo Duck splash screen" },
          { src: hackathonPhilip, alt: "Philip on the Hacking Ground stage, talking about the future of AI" },
          { src: hackathonGames, alt: "Two of the games built during the day" },
          { src: hackathonWinners, alt: "The winning team on stage" },
          { src: hackathonWorking, alt: "Heads down at the laptops" },
          { src: groundJonkoping, alt: "On the Hacking Ground stage in Jönköping" },
          { src: hackathonCeremony, alt: "The prize-giving on stage at the end of the day" },
          { src: hackathonVenue, alt: "The Hacking Ground wall in the venue, powered by VISS.AI" },
          { src: incStartupDay, alt: "David deep in conversation with a visitor, the Startup Day main stage behind them" },
        ],
        logos: [
          { src: gro36Logo, alt: "GRO36", dark: true },
          { src: glitchedLogo, alt: "Glitched" },
        ],
        links: [{ label: "Incredible blog", href: "https://www.incredible.one/blog/we-hosted-a-hackathon" }],
      },
      {
        id: "hackaping",
        title: "Hackaping",
        when: "2025",
        role: "On the winning team",
        lede: "We won two of the three tracks at Hackaping, Sweden's biggest AI hackathon of the year.",
        with: "Mindact.ai, at an event arranged by 2Hero",
        photo: { src: PHOTOS.hackaping, alt: "The winning teams holding their prizes at Hackaping" },
        thumbs: [
          { src: hackapingStage, alt: "A phone story from the night: BTW, we won the hackathon" },
          { src: hackapingHall, alt: "The hackathon hall at Linköping University" },
          { src: hackapingAgents, alt: "The agents behind the production-flow solution" },
        ],
        logos: [{ src: liuLogo, alt: "Linköping University" }],
        links: [{ label: "Incredible blog", href: "https://www.incredible.one/blog/hackaping-double-win" }],
      },
    ],
  },
  {
    sign: "2024",
    label: "VISS.AI",
    tagline: "Our first funding round, a Swedish language model and a SKAPA prize.",
    sections: [
      {
        id: "viss",
        press: [
          { src: pressBreakitViss, outlet: "Breakit", date: "26 April 2024", title: "De bygger världens första AI-kollega – tar in miljoner från Spintop och Starbright", href: "https://www.breakit.se/artikel/39994/de-bygger-varldens-forsta-ai-kollega-tar-in-miljoner-fran-spintop-och-starbright" },
          { src: pressTechtidningen, outlet: "Techtidningen", date: "12 December 2024", title: "Svenska ai-bolagets nya satsning: ”Konsekventa arbetsflöden som inte hallucinerar”", href: "https://techtidningen.se/svenska-ai-bolagets-nya-satsning-konsekventa-arbetsfloden-som-inte-hallucinerar/" },
        ],
        title: "VISS.AI",
        when: "2024",
        role: "Co-founder",
        lede: "Our first AI product: describe a workflow in plain language, and VISS.AI automated it across your business systems.",
        photo: { src: officeTalk, alt: "David mid-sentence in the office, August 2024" },
        thumbs: [
          { src: cofoundersLaughing, alt: "Philip Alm and David laughing, August 2024" },
          { src: cofoundersGreenWall, alt: "Philip and David talking by the green wall in the office, August 2024" },
          { src: incOfficeSnow, alt: "Three of the team laughing in a glass meeting room at night, snow outside" },
          { src: incConference, alt: "A selfie of David and Fredric with lanyards in a dark auditorium" },
        ],
        logos: [
          { src: LOGOS.viss, alt: "VISS.AI" },
          { src: spintopLogo, alt: "Spintop Ventures" },
          { src: starbrightLogo, alt: "Starbright Invest" },
          { src: LOGOS.foretagarna, alt: "Företagarna" },
          { src: almiLogo, alt: "Almi" },
        ],
      },
      {
        id: "on-the-road",
        logos: [
          { src: techbbqLogo, alt: "TechBBQ", dark: true },
          { src: webSummitLogo, alt: "Web Summit" },
        ],
        title: "On the road with VISS.AI",
        when: "2024 and 2025",
        role: "Co-founder",
        lede: "We took VISS.AI and then Incredible to the US, to TechBBQ in Copenhagen and to Web Summit in Lisbon.",
        collage: true,
        photo: { src: goldenGate, alt: "With the team at the Golden Gate Bridge, April 2024" },
        thumbs: [
          { src: inUs, alt: "Showing VISS.AI at our booth at Startup Grind in the US, April 2024" },
          { src: techbbq, alt: "At TechBBQ in Copenhagen, September 2024" },
          { src: travelWebsummit, alt: "The team on the plane to Web Summit, November 2024" },
          { src: websummit, alt: "David and the team at Web Summit, one of them in an orange prison suit, November 2025" },
          { src: teamStanford, alt: "Four of the team arm in arm on the lawn at Stanford, Hoover Tower behind them" },
        ],
      },
      {
        id: "swe-llm",
        press: [
          { src: pressBreakitSweLlm, outlet: "Breakit", date: "25 June 2024", title: "AI-startupen Viss släpper största svenska språkmodellen: “Ett första steg”", href: "https://www.breakit.se/artikel/40556/ai-startupen-viss-slapper-storsta-svenska-sprakmodellen-ett-forsta-steg" },
          { src: pressNyTeknik, outlet: "Ny Teknik", date: "1 July 2024", title: "Startup ska ge alla en AI-kollega med hjälp av svensk språkmodell", href: "https://www.nyteknik.se/tech/startup-ska-ge-alla-en-ai-kollega-med-hjalp-av-svensk-sprakmodell/4273548" },
        ],
        logos: [{ src: LOGOS.viss, alt: "VISS.AI" }],
        title: "SWE-LLM",
        when: "2024",
        role: "Part of the team",
        lede: "I took part in developing and training SWE-LLM, at the time the largest Swedish language model.",
        quote: { text: "SWE-LLM gave us practical experience working with Swedish training data and evaluating model behaviour in our own language.", source: "Incredible blog" },
        photo: { src: sweLlmChat, alt: "A chat with SWE-LLM in Swedish: who was Astrid Lindgren, and what is 10 + 23" },
        thumbs: [{ src: sweLlm, alt: "SWE-LLM, a Swedish large language model" }],
        links: [
          { label: "Breakit", href: "https://www.breakit.se/artikel/40556/ai-startupen-viss-slapper-storsta-svenska-sprakmodellen-ett-forsta-steg" },
          { label: "Incredible blog", href: "https://www.incredible.one/blog/introducing-swe-llm" },
        ],
      },
      {
        id: "skapa",
        press: [
          { src: pressJpSkapa, outlet: "Jönköpings-Posten", date: "21 November 2024", title: "Philip och David vann pris – igen", href: "https://www.jp.se/naringsliv/philip-och-david-vann-pris-igen/" },
        ],
        title: "SKAPA",
        when: "2024",
        role: "With Philip Alm",
        lede: "Philip and I won the SKAPA prize in Jönköping County, then second prize in the national SKAPA talent award.",
        photo: { src: PHOTOS.skapaAward, alt: "Philip Alm and David on stage with the SKAPA diploma, made out to them both" },
        logos: [{ src: LOGOS.skapa, alt: "SKAPA" }],
        links: [{ label: "Stiftelsen SKAPA", href: "https://www.stiftelsenskapa.se/skapa-pristagare-2025/skapa-pristagare-2024" }],
      },
      {
        // His interview on Civeron Podcast (David asked for the post 2026-10-26),
        // from the episode on Spotify and the show's own post about it.
        id: "civeron-podcast",
        title: "Civeron Podcast",
        when: "2024",
        role: "Podcast guest",
        lede: "I was the guest on Civeron Podcast, talking about how I went from machine learning to AI entrepreneurship.",
        photo: { src: civeronPodcast, alt: "David laughing at a table during the podcast recording" },
        links: [
          { label: "Spotify", href: "https://open.spotify.com/episode/1nPxDdSwiiFOUF4u6phIbN" },
          { label: "LinkedIn", href: "https://www.linkedin.com/posts/theodor-ekstrand_vi-intervjuade-david-bacelj-grundare-av-ugcPost-7253382098089033728-yB73/" },
        ],
      },
    ],
  },
  {
    sign: "2023",
    label: "Where Incredible started",
    tagline: "We showed STELLA, the assistant that became Incredible.",
    sections: [
      {
        id: "stella",
        logos: [
          { src: norditechLogo, alt: "Norditech" },
          { src: gro36Logo, alt: "GRO36", dark: true },
        ],
        title: "STELLA",
        when: "2023",
        role: "Co-founder",
        lede: "At GRO36 in Jönköping we showed STELLA, the personal AI assistant that became the idea behind Incredible.",
        photo: { src: PHOTOS.stellaStage, alt: "Presenting STELLA on stage at GRO36" },
        thumbs: [
          { src: stellaGro36, alt: "Guests in front of the Norditech screen at GRO36" },
          { src: PRODUCT.stellaCli, alt: "The STELLA command line" },
          { src: stellaFramework, alt: "The package repository STELLA's agents came from" },
        ],
      },
    ],
  },
  {
    sign: "2022",
    label: "Cameras that count stock",
    tagline: "I taught cameras to read pallet labels and count the stock.",
    sections: [
      {
        id: "labeldetector",
        press: [
          { src: pressJpLabelDetector, outlet: "Jönköpings-Posten", date: "19 February 2023", title: "Philip, 22, och David, 23, kan hjälpa företag spara pengar", href: "https://www.jp.se/naringsliv/philip-22-och-david-23-kan-hjalpa-foretag-spara-pengar/" },
        ],
        links: [{ label: "Incredible blog", href: "https://www.incredible.one/blog/the-projects-that-shaped-us-philip" }, { label: "Science Park", href: "https://sciencepark.se/nyhet/norditech-ar-arets-inkubatorbolag-2023-2/" }],
        title: "LabelDetector",
        when: "2022 to 2023",
        role: "AI vision",
        lede: "I built the AI vision that reads the labels on pallets, so a warehouse can count its own stock.",
        with: "Toyota Material Handling, Eboss and Almi",
        // The camera view leads the post and its card (David's pick, 2026-10-22).
        photo: { src: labelCamera, alt: "The camera view, with every pallet label identified" },
        thumbs: [
          { src: labelCameraMounted, alt: "A LabelDetector camera mounted and running at the pilot" },
          { src: labelParsed, alt: "A pallet label read into supplier, delivery and product details" },
        ],
        logos: [
          { src: toyotaLogo, alt: "Toyota Material Handling", scale: 1.3 },
          { src: almiLogo, alt: "Almi" },
          { src: ebossLogo, alt: "Eboss" },
        ],
      },
    ],
  },
  {
    sign: "2021",
    label: "The Norditech years",
    tagline: "Software for tyre scanners, tool lockers and industrial 3D printers.",
    sections: [
      {
        id: "wheelscanning",
        title: "Wheelscanning",
        role: "Head of AI",
        lede: "I was head of AI at Wheelscanning and built its vision models from the ground up.",
        with: "Saab",
        // The tyre with Wheelscan's readings leads the post and its card (David's pick, 2026-10-23).
        photo: { src: wheelscanTyre, alt: "A tyre with Wheelscan's readings drawn on it: tread depth for each groove, the size and model read from the sidewall, and a circled spot of rim damage" },
        thumbs: [
          { src: wheelscanMachine, alt: "The Wheelscan tyre measurement station" },
          { src: wheelscanDemo, alt: "The Wheelscan software at the station" },
          { src: incWaymo, alt: "David smiling from the back seat of a Waymo with no driver, its sensors on the roof" },
        ],
        logos: [
          { src: wheelscanningLogo, alt: "Wheelscanning" },
          { src: saabLogo, alt: "Saab" },
        ],
        links: [{ label: "wheelscanning.se", href: "https://www.wheelscanning.se/en/" }, { label: "Incredible blog", href: "https://www.incredible.one/blog/the-projects-that-shaped-us-david" }],
      },
      {
        id: "orangebox",
        logos: [{ src: norditechLogo, alt: "Norditech" }],
        title: "Orange Box",
        role: "All the software",
        lede: "I wrote all the software for Orange Box, a locker where you rent tools instead of buying them.",
        photo: { src: orangebox, alt: "The Orange Box locker: Don't buy. Rent." },
        thumbs: [{ src: orangebox2, alt: "Orange Box lockers being set up" }],
      },
      {
        id: "norditech-more",
        // 2026-10-21: the Rapid Dimension post (3D printer software) merged in here.
        links: [
          { label: "Incredible blog, David's projects", href: "https://www.incredible.one/blog/the-projects-that-shaped-us-david" },
          { label: "Incredible blog, Philip's projects", href: "https://www.incredible.one/blog/the-projects-that-shaped-us-philip" },
        ],
        title: "Consulting at Norditech",
        role: "Consultant",
        lede: "For over two years I worked as a consultant at Norditech. These are a few of the projects we built.",
        photo: { src: norditechCover, alt: "The Norditech logo" },
        thumbs: [{ src: rapidPrinter, alt: "The Rapid Dimension industrial 3D printer" }],
        logos: [
          { src: rapidLogo, alt: "Rapid Dimension" },
          { src: quicksetLogo, alt: "Quick-set" },
          { src: threeTempLogo, alt: "3TEMP" },
          { src: fcproductionLogo, alt: "FC Production", dark: true },
        ],
      },
    ],
  },
  {
    sign: "2020",
    label: "Norditech and RoboWaste",
    tagline: "We started Norditech, and I built AI that sorts waste.",
    sections: [
      {
        id: "robowaste",
        title: "RoboWaste and FossilEye",
        when: "2020 to 2024",
        role: "CTO",
        lede: "As CTO I built AI vision for sorting waste, and then FossilEye, which measures how much plastic is in waste before it is burned.",
        with: "Vattenfall, Tekniska verken, Umeå Energi and Saab",
        photo: { src: robowastePhoto, alt: "Field testing at the sorting machine, the FossilEye machines and the stereo camera rig" },
        thumbs: [{ src: incPhysicalAiDay, alt: "A selfie of Fredric and David in the audience, Physical AI Day on the screen behind them" }],
        logoCover: true,
        clip: {
          src: "https://www.svt.se/videoplayer-embed/jJyEgoa",
          title: "Se när FossilEye testas skarpt, SVT Lokala Nyheter Uppsala",
          length: "1:14",
          poster: { src: fossilEyeHall, alt: "The two FossilEye machines in a hall, green with the RoboWaste logo" },
          caption: "FossilEye tested for real in Uppsala. A clip from SVT, December 2023.",
        },
        logos: [
          { src: robowasteLogo, alt: "RoboWaste" },
          { src: vattenfallLogo, alt: "Vattenfall" },
          { src: tekniskaVerkenLogo, alt: "Tekniska verken" },
          { src: umeaEnergiLogo, alt: "Umeå Energi" },
          { src: saabLogo, alt: "Saab" },
        ],
        links: [
          { label: "SVT", href: "https://www.svt.se/nyheter/lokalt/uppsala/hogteknologiskt-oga-ska-oka-plastsortering-och-minska-utslapp--2d0cih" },
          { label: "Vattenfall", href: "https://group.vattenfall.com/se/nyheter-och-press/nyheter/2023/ny-effektiv-metod-for-att-identifiera-och-mata-plast-i-avfall" },
          { label: "Energiforsk", href: "https://energiforsk.se/media/33741/fossileye-varmeklustret.pdf" },
          { label: "Vattenfall, 2026", href: "https://group.vattenfall.com/press-and-media/newsroom/story/watching-eye-encourages-plastics-recycling" },
          { label: "Incredible blog", href: "https://www.incredible.one/blog/the-projects-that-shaped-us-david" },
        ],
      },
      {
        id: "norditech",
        links: [{ label: "Science Park", href: "https://sciencepark.se/nyhet/norditech-ar-arets-inkubatorbolag-2023-2/" }],
        title: "Norditech",
        when: "2020",
        role: "Co-founder and CTO",
        lede: "Philip Alm and I started Norditech, an AI company, in Huskvarna.",
        photo: { src: cofounders2022, alt: "David and Philip Alm, the co-founders, in April 2022" },
        thumbs: [
          { src: norditechTeam2022, alt: "The Norditech team in April 2022" },
          { src: PHOTOS.cofounders, alt: "Philip and David, August 2024" },
          { src: incTeamDinner, alt: "The team round a kitchen table, mid-dinner" },
          { src: incComedy, alt: "David giving a thumbs up with two of the team inside a giant clown mouth at a comedy club" },
        ],
        logos: [
          { src: norditechLogo, alt: "Norditech" },
          { src: LOGOS.sciencePark, alt: "Science Park Jönköping" },
        ],
      },
    ],
  },
  {
    sign: "2019",
    label: "The workshop floor",
    tagline: "I built machines, from the CAD model to the finished assembly.",
    sections: [
      {
        id: "tidaholm",
        title: "Tidaholm Industries",
        when: "2019",
        role: "Assembly, CAD and robots",
        lede: "I built machines in the metal industry, from the CAD model to the finished assembly.",
        photo: { src: tidaholm, alt: "A machine under construction in the Tidaholm Industries workshop" },
      },
    ],
  },
  {
    sign: "2018",
    label: "Robots that grow food",
    tagline: "My garden robot took me to the Swedish final and landed me a job.",
    sections: [
      {
        id: "garden",
        logos: [{ src: ufLogo, alt: "Ung Företagsamhet" }],
        title: "A garden robot",
        when: "2018",
        role: "Ung Företagsamhet",
        lede: "I built a robot that grows plants on its own, and it took me to the Swedish final in Stockholm.",
        photo: { src: gardenRobot, alt: "With the garden robot at the Ung Företagsamhet fair" },
        thumbs: [
          { src: gardenRobot2, alt: "Lettuce growing in the garden robot" },
          { src: gardenPcb, alt: "The circuit boards for the garden robot" },
          { src: gardenCad, alt: "The CAD model of the frame" },
        ],
      },
      {
        id: "ljusgarda",
        photo: { src: ljusgardaCover, alt: "The Ljusgårda logo: Ljusgårda, Supernormal Greens" },
        title: "Ljusgårda",
        when: "2018",
        role: "Automation engineer",
        lede: "My garden robot landed me a job as an automation engineer at one of Europe's largest indoor farms.",
      },
    ],
  },
  {
    sign: "2017",
    label: "My first company",
    tagline: "My solar bottle lamps won UngDrive Masters.",
    sections: [
      {
        id: "solar",
        logos: [{ src: ungdriveLogo, alt: "UngDrive" }],
        title: "Solar bottle lamps",
        when: "2017",
        role: "UngDrive",
        lede: "I designed a solar lamp that lights up a glass bottle at night, sold it with honey and won UngDrive Masters.",
        photo: { src: solarLamp, alt: "Solar lamps glowing inside glass bottles at night" },
        thumbs: [
          { src: solarLamp2, alt: "A solar bottle lamp in the dark garden" },
          { src: ungdrive, alt: "On stage at UngDrive Masters" },
        ],
      },
    ],
  },
  {
    sign: "2016",
    label: "A submarine",
    tagline: "I built a submarine to look for wrecks from World War II.",
    sections: [
      {
        id: "submarine",
        video: { src: "/media/submarine-dive.mp4", poster: submarineDive, caption: "Filmed by the submarine's GoPro on a dive along the sea floor, August 2016." },
        title: "A home-built submarine",
        when: "As a teenager",
        role: "Built from scratch",
        lede: "I built a remote-controlled submarine to look for World War II submarines sunk along the coast.",
        photo: { src: submarine, alt: "The home-built aluminium submarine on a workbench" },
      },
    ],
  },
];

/** Where each section's article lives. */
export const storyHref = (id: string) => `/story/${id}`;

/** Licences, as small facts. */
export const LICENCES = [
  "Hunting licence (jägarexamen). I go hunting whenever I can.",
  "Boat licence (skepparexamen), so I can find my way with a sea chart.",
  "Diving licence. I haven't dived much yet.",
];

/** Favourite artist, and three of his songs, with the year each came out. */
export const MUSIC = {
  artist: "Avicii",
  songs: [
    { title: "Levels", year: 2011 },
    { title: "Wake Me Up", year: 2013 },
    { title: "The Nights", year: 2014 },
  ],
};
