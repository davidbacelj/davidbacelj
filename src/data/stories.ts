// What each section's post-it says, written out as a story: an opening
// paragraph, then, where it helps, short parts with a small heading each. The
// article page shows the same text. Facts come from David's own words, the
// Incredible blog, Science Park, Vattenfall, SVT and Stiftelsen SKAPA.

export interface Part {
  /** A small heading, in sentence case. The opening part has none. */
  h?: string;
  p: string;
}

export const STORIES: Record<string, Part[]> = {
  incredible: [
    {
      p: "Incredible is an assistant for Mac and Windows that does the work on your computer. You hold a key, say what you want, and it clicks and types in your browser, your files and your apps, the same way you would. It asks before it sends anything, and you can stop it at any time.",
    },
    {
      h: "Where it came from",
      p: "Philip Alm and I started the company as Norditech, back when we built machine vision for factories. It became VISS.AI, and in 2026 we rebuilt the product into Incredible out of everything we had learned with STELLA and VISS.AI. Because it works on the screen like a person does, it needs no integrations, so it also works with old business systems that have no API.",
    },
    {
      h: "Funding",
      p: "In August 2026 we announced 26.5 million SEK, about 2.7 million dollars, in pre-seed funding. Spintop Ventures and Starbright Invest led it, together with angels such as Rikard Steiber, Daniel Langkilde and Magnus Emilson. Philip and I spent two months in the Bay Area meeting enterprise customers and US investors.",
    },
    {
      h: "Who uses it",
      p: "CellMark, a global supply chain company, gives its employees Incredible through its AI Taskforce, in Sweden, France and the US. They hand it work like order entry, ERP updates and reminder emails: they show it a task once, and it runs the task in the background. Today we have customers in Sweden, France, Germany and the US.",
    },
    {
      h: "Product Hunt",
      p: "In 2025 our agent platform reached number one on Product Hunt, and in 2026 Incredible was featured there too.",
    },
  ],
  "hacking-ground": [
    {
      p: "Hacking Ground was the first hackathon we hosted ourselves, together with Ground, GRO36 and Glitched. The challenge was simple: in a few hours, with one AI tool, build a game from scratch. By the end of the day it had to be a real game that someone could actually play.",
    },
    {
      h: "On stage",
      p: "I hosted the day from the podium and presented Incredible to the room, and Philip talked about the future of AI. Many of the people there had never written a line of code. They learned to vibe code on the spot: they described what they wanted, and the AI wrote most of the code.",
    },
    {
      h: "The games",
      p: "By the evening there were multiplayer duck battles, role-playing adventures, enemies that think for themselves, a low-poly flying game and a browser platformer with quiz questions. The winner was Sumo Duck, where every player is a duck trying to wrestle the others out of a sumo ring. It was a really fun day.",
    },
  ],
  hackaping: [
    {
      p: "Hackaping is Sweden's biggest AI hackathon of the year, with hundreds of contestants at Linköping University, arranged by 2Hero. Together with our friends at Mindact.ai we entered two teams in two separate tracks, and both teams won. That gave us first place in two of the three tracks.",
    },
    {
      h: "What we built",
      p: "Both teams built AI agents with Incredible. One made AI customer support. The other simulated a whole production flow, with agents for orchestration, scheduling, the lathe, forecasting and inventory. I competed on one of the teams.",
    },
    {
      h: "Two gold medals",
      p: "We went home with two gold medals, and that night I posted a story on my phone: BTW, we won the hackathon.",
    },
  ],
  viss: [
    {
      p: "VISS.AI was our first AI product. You described a workflow in plain language, in any of more than 30 languages, and VISS.AI carried it out across your business systems, like the CRM and the ERP. The idea was that anyone could automate repetitive work without being technical.",
    },
    {
      h: "Our first round",
      p: "It grew out of Norditech inside Science Park Jönköping's incubator. In April 2024 Spintop Ventures and Starbright Invest backed our first round, and in 2025 VISS.AI made Företagarna and Almi's list of 103 young ideas in Sweden.",
    },
    {
      h: "What came next",
      p: "Everything we learned building VISS.AI went into Incredible, and in 2026 VISS.AI became Incredible.",
    },
  ],
  "on-the-road": [
    { p: "2024 was the year we took VISS.AI out into the world, and we kept going in 2025." },
    { h: "The US", p: "In April 2024 we flew to the US, showed VISS.AI at our booth and took the long way round past the Golden Gate Bridge." },
    { h: "Copenhagen", p: "In September I was at TechBBQ in Copenhagen." },
    { h: "Lisbon", p: "In November the team flew to Web Summit in Lisbon, and we went back to Web Summit in 2025." },
  ],
  "swe-llm": [
    {
      p: "SWE-LLM is a large language model that writes proper Swedish. At the time it was the largest Swedish language model. I took part in developing and training it, in a project led by our CTO, Emil Wagman.",
    },
    {
      h: "How we built it",
      p: "We started from Llama 3 70B and fine-tuned it on a curated set of more than 12,700 Swedish texts, about 13.3 million tokens, covering more than 250 kinds of text: news-style articles, professional communication, technical writing and creative writing. Some of it was written as conversations, so it could chat too. We trained it on NVIDIA A100 GPUs.",
    },
    {
      h: "What it is good at",
      p: "Grammar, structure and style in standard Swedish, especially in articles, technical reports, explanations and long texts. We released it publicly for researchers, developers and companies, and Breakit wrote about it.",
    },
    {
      h: "What I took from it",
      p: "I learned how to collect and clean training data, fine-tune a model, run the training infrastructure and judge how a model behaves in our own language. A lot of that went straight into Incredible.",
    },
  ],
  skapa: [
    {
      p: "SKAPA is Sweden's largest innovation prize, founded in 1985 in memory of Alfred Nobel. Philip and I entered with VISS.AI, which lets anyone automate their workflows with AI.",
    },
    {
      h: "Two rounds",
      p: "First we won the prize for Jönköping County. Then we went on to the national talent award for young innovators and took second prize in Sweden, 75,000 SEK.",
    },
  ],
  stella: [
    {
      p: "STELLA was a personal AI assistant that carried out tasks in your digital systems for you. It was the first version of the idea that became Incredible.",
    },
    {
      h: "How it worked",
      p: "You gave STELLA a task from a command line, and it handed the work to agents for services like Slack and GitHub. The agents were installed from a package repository.",
    },
    {
      h: "The reveal",
      p: "We kept it secret until GRO36 in Jönköping, where we showed it on stage for the first time, together with Polaris, an AI for customer support.",
    },
  ],
  labeldetector: [
    {
      p: "Stock-taking in a warehouse usually means people walking the aisles with clipboards. LabelDetector does it with cameras: smart pan-tilt-zoom cameras read the labels that are already on the pallets, from a distance, and keep a live inventory. There is nothing to rebuild, no new labels and no hardware on each pallet.",
    },
    {
      h: "What I built",
      p: "I developed the core machine learning models: the AI vision that finds every label and reads the article numbers, order numbers, locations and quantities, even in bad light, on damaged labels and at strange angles. The inventory syncs with the business system and flags anything that doesn't match.",
    },
    {
      h: "The pilot at Eboss",
      p: "We proved it at Eboss, in a real production facility, with a live link to their Monitor G5 business system. Almi's Inkomst 4.0 programme helped fund the pilot.",
    },
    {
      h: "Toyota and the forklifts",
      p: "Out of hundreds of European tech startups, LabelDetector was one of four picked to pitch to Saab, Siemens Energy, Väderstad and Toyota Material Handling Europe, through Indx at Science Park in Linköping. The pitch turned into pilots with Toyota Material Handling, where we put the cameras on forklifts so every trip through the warehouse counts the stock. It automated a lot of manual work for them.",
    },
  ],
  wheelscanning: [
    {
      p: "Wheelscanning started as a spin-off of Saab. Its Wheelscan station measures tyres with stereo cameras: it builds a 3D model from several images, where every point can be measured, so you get the tread depth without touching the tyre.",
    },
    {
      h: "Head of AI",
      p: "I built the vision models from the ground up in TensorFlow: a state-of-the-art model that reads the text on tyres, and another that finds damage on rims. Together with Saab we brought stereo vision from the defence industry into the car industry.",
    },
    {
      h: "How it grew",
      p: "I was there from the beginning, while the company grew fast. Today there are hundreds of Wheelscan machines across Europe, serving hundreds of thousands of customers.",
    },
  ],
  orangebox: [
    {
      p: "Orange Box is a locker where you rent tools instead of buying them, a bit like an Instabox for screwdrivers and drills. You get the app, pick a box, rent the tool and bring it back when you are done.",
    },
    {
      h: "All the software",
      p: "I wrote all of it. Each locker runs on a Linux server with a GUI on its screen that I wrote, and I built the 4G connection so every locker is always online. Then I wrote the app that people rent the tools with.",
    },
  ],
  rapid: [
    {
      p: "Rapid Dimension builds industrial 3D printers in Sweden for high-quality manufacturing. They brought us in as consultants to write the software that drives the printers.",
    },
    {
      h: "My part",
      p: "I landed the project. I didn't write the code myself, the team did, and the job took as much mechanical engineering as software. What won it, as our blog put it, was that people trust me when I say something can be delivered.",
    },
  ],
  "norditech-more": [
    { p: "Through Norditech, Philip and I took on all kinds of projects for industrial companies. These are three more of them." },
    {
      h: "Quick-set",
      p: "Quick-set makes plastic parts. We built a laser inspection system for their robots with an LMI Gocator, a smart 3D laser line profiler, that checks every part passing through at micron-level precision without touching it. The hard part was making it run reliably inside a robot cell on the factory floor.",
    },
    {
      h: "3TEMP",
      p: "3TEMP makes coffee brewers that judge the coffee itself. We developed the inspection technology that determines the quality of the coffee, and the app that shows the roast analysis for each batch.",
    },
    {
      h: "FC Production",
      p: "For FC Production we automated salary handling and built payment gateways for physical payments: software in the cloud on Linux that connects their systems, so payroll and payment data flow by themselves.",
    },
  ],
  robowaste: [
    {
      p: "At RoboWaste in Jönköping I was CTO. I grew the team from nothing and was responsible for the high-value contracts. The work came in two parts.",
    },
    {
      h: "Sorting with AI vision",
      p: "First I built state-of-the-art AI vision models that recognise materials, so the waste can be sorted into the right compartments.",
    },
    {
      h: "FossilEye",
      p: "Then we turned to plastic, which is most of the fossil content in waste. When waste is burned for district heating, the plant pays for the CO2 through the EU emissions trading system, and the only way to know how much plastic was in a load was to pick through it by hand a few times a year. FossilEye spreads the waste on a two-metre belt and measures the plastic with hyperspectral imaging, AI vision and stereo vision, so a plant can see which suppliers sort their plastic well.",
    },
    {
      h: "Military tech in the sorting industry",
      p: "The stereo vision came from Saab. Together we brought technology built for defence into waste sorting.",
    },
    {
      h: "On tour",
      p: "Tekniska verken, Vattenfall and Umeå Energi commissioned FossilEye, and a mobile prototype toured their plants: Linköping in November 2023, Uppsala in December and Umeå in January 2024. SVT filmed the waste pouring through it in Uppsala.",
    },
  ],
  norditech: [
    {
      p: "Philip Alm and I met at a UF fair, where young people show the companies they run at school. Later we started Norditech together in Huskvarna, an AI company that built machine vision, AI and software for factories, warehouses and machine builders. I ran the technology as CTO.",
    },
    {
      h: "Science Park",
      p: "In 2022 we won the Demo Day final of Science Park's accelerator programme and joined its incubator, which takes about ten of the thousand or so ideas it sees each year.",
    },
    {
      h: "The Guldenen",
      p: "In 2023 Science Park named Norditech its incubator company of the year and gave us the Guldenen, for LabelDetector. The jury praised our technical skill and how the solution had already saved companies time and money.",
    },
    { h: "What came next", p: "Norditech is the company that became VISS.AI, and then Incredible." },
  ],
  tidaholm: [
    {
      p: "Tidaholm Industries is a contract manufacturer that builds industrial automation. I worked on the workshop floor, with mounting and construction in the metal industry.",
    },
    {
      h: "What I learned",
      p: "I learned a lot of CAD, and different ways of making parts: water jet cutting, laser cutting and assembling the machines. There was some electrical engineering too, and I programmed robots.",
    },
  ],
  garden: [
    {
      p: "In Ung Företagsamhet you run a real company while you are still at school. Mine was an automatic indoor garden: a robot that waters and feeds the plants by itself.",
    },
    {
      h: "Built by me",
      p: "I did all of it myself. I designed and soldered my own circuit boards, wrote the software and did the mechanical engineering, so it could take care of the plants accurately.",
    },
    {
      h: "Hydroponics",
      p: "The plants grow in water, so I learned hydroponics: how much nutrition to add to the water and how to take care of the plants. It grew real lettuce.",
    },
    {
      h: "The Swedish final",
      p: "It won the regional final and took me to the Swedish final in Stockholm, where I competed for first place. It also landed me my job at Ljusgårda.",
    },
  ],
  ljusgarda: [
    {
      p: "Ljusgårda is one of Europe's largest indoor farms, growing greens all year round. My garden robot landed me a job there as an automation engineer.",
    },
    {
      h: "Watering on time",
      p: "I worked on the automation that waters the crops. Most of it was water solenoids, and the timers I programmed to make the watering accurate.",
    },
  ],
  solar: [
    {
      p: "UngDrive is a summer where you start your own company and try to make as much profit as you can. My idea was a solar lamp that sits in a glass bottle and makes it light up at night.",
    },
    {
      h: "The lamp",
      p: "I designed my own circuit board and solar cell for it. The sun charges it during the day, and at night the bottle glows. I sold a lot of them, together with honey.",
    },
    { h: "Swedish champion", p: "With the lamps I won UngDrive Masters, the Swedish championship. That was a big deal for me." },
    {
      h: "Coaching",
      p: "Later I came back to UngDrive as a coach and taught young people how to start companies. Teaching entrepreneurship is something I really love, and I still do it.",
    },
  ],
  submarine: [
    {
      p: "I had heard stories about submarines from the Second World War that sank along our coast, and I wanted to find them, and maybe some treasure. So, at a very young age, I built my own remote-controlled submarine.",
    },
    {
      h: "How it works",
      p: "It has an aluminium hull with counterweights inside, so it floats neutrally in the water. Brushless motors, controlled by an Arduino, push it up and forward, and a GoPro films what it sees.",
    },
    { h: "Did it work?", p: "It did. I built it from scratch, took it out and filmed the sea with it." },
  ],
  start: [
    { p: "I went to the IT programme at Erik Dahlbergsgymnasiet in Jönköping. The rest of the time I was in the garage." },
    { h: "Code", p: "C++ was the first programming language I taught myself." },
    { h: "Electronics", p: "I love electronics. I taught myself circuit board design, usually in DipTrace, and I build and solder the boards myself." },
    { h: "The lathe", p: "I love mechanical work too. I got an old lathe, and I still machine parts on it." },
  ],
  "off-the-clock": [
    { p: "When I am not building something, I am usually outside. This is what I do off the clock." },
    { h: "Skiing", p: "Cross-country skiing is my favourite way to spend a winter day, with fresh tracks across a frozen lake at sunset." },
    { h: "Camping", p: "I love being out in nature, and a tent by a lake is the best of it." },
    {
      h: "Licences",
      p: "I have a hunting licence (jägarexamen) and go hunting whenever I can. I have a boat licence (skepparexamen), so I can find my way with a sea chart, and a diving licence, though I haven't dived much yet.",
    },
    { h: "The bees", p: "As a kid I spent the summers keeping bees with my grandparents. I still think it is one of the most fun things there is." },
    { h: "Suited up", p: "And once in a while the workshop clothes come off, like in autumn 2022." },
  ],
};
