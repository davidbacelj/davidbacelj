// The handwritten caption under each pinned photo on the board, one or two
// sentences, in the same order as the section's photos (the big photo, then
// its thumbs; the board shows the first four thumbs). Breaks are keyed by year.
export const CAPTIONS: Record<string, string[]> = {
  incredible: [
    "Incredible on a Mac. Hold a key, say what you want, and it does it.",
    "The voice bar. It listens, then gets to work on the screen.",
    "The team behind Incredible, in our office in Jönköping.",
  ],
  "hacking-ground": [
    "Hosting Hacking Ground from the podium, under the stage lights.",
    "Sumo Duck won: ducks wrestling each other out of a sumo ring.",
    "Philip on stage, talking about the future of AI.",
    "Two more games, built in a few hours by people who had never coded.",
    "The winning team, sign and all.",
    "Heads down at the laptops, a whole game in an afternoon.",
    "Presenting Incredible to a room full of first-time game makers.",
  ],
  hackaping: [
    "Both our teams with their prizes. Two tracks, two first places.",
    "The story I posted that night. BTW, we won.",
    "Hundreds of contestants at Linköping University.",
    "The AI agents we built with Incredible for the production-flow track.",
  ],
  viss: [
    "Mid-sentence in our office, August 2024, back when we were VISS.AI.",
    "Philip and me, laughing, August 2024.",
    "Talking it through with Philip by the green wall.",
  ],
  "on-the-road": [
    "At the Golden Gate Bridge on our Startup Grind trip, April 2024.",
    "Our VISS.AI booth at Startup Grind, April 2024.",
    "At TechBBQ in Copenhagen, September 2024.",
    "On the plane to Web Summit in Lisbon, November 2024.",
    "Escaping from OpenAI in a prison suit, Web Summit 2025.",
  ],
  "swe-llm": [
    "Asking SWE-LLM, in Swedish, who Astrid Lindgren was. And what 10 + 23 is.",
    "SWE-LLM: Llama 3 70B, taught to write proper Swedish.",
  ],
  skapa: ["Accepting the SKAPA prize with Philip, 2024. The diploma is made out to us both."],
  stella: [
    "STELLA on stage at GRO36, the first time we showed it.",
    "Guests in front of the Norditech screen after the talk.",
    "STELLA's command line, ready for a task.",
    "The package repository its agents were installed from.",
  ],
  labeldetector: [
    "A LabelDetector camera on duty at the pilot.",
    "What the camera sees: every pallet label found.",
    "One label, read and sorted into supplier, delivery and product.",
  ],
  wheelscanning: ["The Wheelscan station. Stereo cameras measure every tyre.", "The measurement software running at the station."],
  orangebox: ["Don't buy. Rent. Get the app, pick a box, rent the tool.", "Setting up the lockers before they went live."],
  "norditech-more": ["Norditech, the AI company Philip and I started.", "Rapid Dimension's industrial 3D printer, driven by our software."],
  robowaste: ["Field tests at the sorting machine, and the FossilEye machines in the hall."],
  norditech: [
    "Philip and me in 2022. We met at a UF fair and started Norditech together.",
    "The Norditech team, spring 2022.",
    "Philip and me again, two years later.",
  ],
  tidaholm: ["A machine taking shape on the workshop floor at Tidaholm."],
  garden: [
    "Me and my garden robot at the Ung Företagsamhet fair.",
    "It grew real lettuce, all by itself.",
    "The circuit boards I designed and soldered for it.",
    "The frame, drawn in CAD before I built it.",
  ],
  solar: ["Solar lamps glowing in glass bottles. Sold with honey.", "One lamp in the dark garden, charged by the sun all day.", "Back at UngDrive Masters in 2023."],
  submarine: ["My home-built submarine: an aluminium hull, an Arduino inside and a GoPro on board."],
  "off-the-clock": [
    "Fresh tracks across a frozen lake. My favourite kind of winter day.",
    "A tent by a lake. The best of being out in nature.",
    "Out hunting. I go whenever I can.",
    "Summers keeping bees with my grandparents.",
    "My old lathe in the garage, cutting a part.",
    "Suited up, autumn 2022. For once out of the workshop clothes.",
  ],
  ljusgarda: ["Ljusgårda, one of Europe's largest indoor farms."],
};

// Captions for a year's personal photo on the road, by year. None right now:
// the hunting photo moved into the "Off the clock" post (2026-10-21).
export const PAUSE_CAPTIONS: Record<string, string> = {};
