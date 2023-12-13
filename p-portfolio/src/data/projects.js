import notegpt from '../images/notegpt.png'
import shoppingCart from '../images/shoppingcart.png'
import memegen from '../images/memegen.png'
import chatapp from '../images/chatapp.png'
const projects = [
    {
        title: "ChatApp",
        description: "Realtime FullStack Chat app made using Nextjs 13. Deployed on netlify.",
        imageUrl: chatapp,
        liveUrl: "https://chatonchatter.netlify.app/login",
        sourceUrl: "https://github.com/Adarsreg/chatter-chaton"
    },
    {
        title: "NOTEGPT",
        description: "Notes app integrated with ChatGPT's API, made with ReactTS and TailwindCSS ",
        imageUrl: notegpt,
        liveUrl: "",
        sourceUrl: "https://github.com/Adarsreg/Notegpt"
    },
    {
        title: "Shopping Cart",
        description: "A simple shopping cart using ReactTs and MaterialUI",
        imageUrl: shoppingCart,
        liveUrl: "https://shopping-cart-adarsreg.vercel.app/",
        sourceUrl: "https://github.com/Adarsreg/ShoppingCart"
    },
    {
        title: "Meme Generator",
        description: "meme generator using react and plain css",
        imageUrl: memegen,
        liveUrl: "https://memegenerator-alpha.vercel.app/",
        sourceUrl: "https://github.com/Adarsreg/memegenerator"
    }
];

export default projects;
