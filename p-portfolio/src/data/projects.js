import notegpt from "../images/notegpt.png";
import shoppingCart from "../images/shoppingcart.png";
import memegen from "../images/memegen.png";
import chatapp from "../images/chatapp.png";
import gmailfilter from "../images/gmailfilter.png";

const projects = [
  {
    title: "Gmail Filter",
    description:
      "A smart email filtering tool to organize your inbox efficiently.",
    imageUrl: gmailfilter,
    sourceUrl: "https://github.com/Adarsreg/gmail-filter",
  },
  {
    title: "ChatApp",
    description:
      "Realtime FullStack Chat app made using Nextjs 13. Deployed on netlify.",
    imageUrl: chatapp,
    liveUrl: "https://chatonchatter.netlify.app/login",
    sourceUrl: "https://github.com/Adarsreg/chatter-chaton",
  },
  {
    title: "NOTEGPT",
    description:
      "Notes app integrated with ChatGPT's API, made with ReactTS and TailwindCSS ",
    imageUrl: notegpt,
    liveUrl: "",
    sourceUrl: "https://github.com/Adarsreg/Notegpt",
  },
  {
    title: "Meme Generator",
    description: "meme generator using react and plain css",
    imageUrl: memegen,
    liveUrl: "https://memegenerator-alpha.vercel.app/",
    sourceUrl: "https://github.com/Adarsreg/memegenerator",
  },
];

export default projects;
