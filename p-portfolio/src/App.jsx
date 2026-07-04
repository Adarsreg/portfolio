import { useState, useEffect } from "react";
import "./index.css";
import "./font.css";
import NavBar from "./components/Navbar";
import Intro from "./components/Intro";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Works from "./components/Works";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

const getInitialTheme = () => {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return "light"; // paper-first: the editorial identity reads best in light
};

function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <div className="relative min-h-screen select-none overflow-x-hidden bg-paper text-ink">
      <Intro />

      {/* Decorative baseline grid guides — subtle, aligned to the shell */}
      <div
        className="pointer-events-none fixed inset-0 z-0 mx-auto hidden max-w-[1600px] px-5 md:px-10 xl:block"
        aria-hidden="true"
      >
        <div className="grid-guides h-full w-full opacity-40" />
      </div>

      <NavBar theme={theme} toggleTheme={toggleTheme} />

      <main
        id="main-content"
        className="relative z-10 mx-auto max-w-[1600px] px-5 md:px-10"
      >
        <Header />

        <div className="flex flex-col gap-28 py-24 md:gap-44 md:py-36">
          <About />
          <Experience />
          <Works />
          <Skills />
          <ContactMe />
        </div>

        <Footer />
      </main>
    </div>
  );
}

export default App;
