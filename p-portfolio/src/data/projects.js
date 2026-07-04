import notegpt from "../images/notegpt.webp";
import memegen from "../images/memegen.webp";
import chatapp from "../images/chatapp.png";
import gmailfilter from "../images/gmailfilter.png";

// Editorial index of selected work. `discipline`, `year` and `stack`
// feed the ledger-style metadata columns in the Work section.
const projects = [
  {
    index: "01",
    title: "Gmail Filter",
    discipline: "Automation / Tooling",
    year: "2024",
    description:
      "A smart email filtering tool that turns a noisy inbox into signal, running rules, labels and triage quietly in the background.",
    stack: ["Node.js", "Gmail API", "OAuth"],
    imageUrl: gmailfilter,
    sourceUrl: "https://github.com/Adarsreg/gmail-filter",
  },
  {
    index: "02",
    title: "ChatApp",
    discipline: "Realtime / Fullstack",
    year: "2023",
    description:
      "A realtime fullstack chat application built on Next.js 13 with presence, live messaging and auth, deployed to the edge on Netlify.",
    stack: ["Next.js 13", "NextAuth", "Netlify"],
    imageUrl: chatapp,
    liveUrl: "https://chatonchatter.netlify.app/login",
    sourceUrl: "https://github.com/Adarsreg/chatter-chaton",
  },
  {
    index: "03",
    title: "NoteGPT",
    discipline: "Product / AI",
    year: "2023",
    description:
      "A note taking product wired into the ChatGPT API, so you can capture, summarize and converse with your own notes. Built with React (TS) and Tailwind.",
    stack: ["React TS", "Tailwind", "OpenAI"],
    imageUrl: notegpt,
    liveUrl: "",
    sourceUrl: "https://github.com/Adarsreg/Notegpt",
  },
  {
    index: "04",
    title: "Meme Generator",
    discipline: "Experiment / UI",
    year: "2022",
    description:
      "An early studies piece. A meme generator built with React and hand written CSS, exploring layout, state and canvas fundamentals.",
    stack: ["React", "CSS"],
    imageUrl: memegen,
    liveUrl: "https://memegenerator-alpha.vercel.app/",
    sourceUrl: "https://github.com/Adarsreg/memegenerator",
  },
];

export default projects;
