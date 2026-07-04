import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

const LINKS = [
  { id: "index", label: "Index" },
  { id: "statement", label: "About" },
  { id: "log", label: "Experience" },
  { id: "work", label: "Projects" },
  { id: "stack", label: "Stack" },
  { id: "link", label: "Contact" },
];

// Live time in IST — a small "the human behind this is real, somewhere" detail.
const useClock = () => {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = () =>
      new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "Asia/Kolkata",
      }).format(new Date());
    setTime(fmt());
    const t = setInterval(() => setTime(fmt()), 1000);
    return () => clearInterval(t);
  }, []);
  return time;
};

const NavBar = ({ theme, toggleTheme }) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("index");
  const clock = useClock();

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  // Track the section currently crossing the upper third of the viewport.
  const onScroll = useCallback(() => {
    const marker = window.innerHeight * 0.35;
    let current = "index";
    for (const l of LINKS) {
      const el = document.getElementById(l.id);
      if (el && el.getBoundingClientRect().top <= marker) current = l.id;
    }
    setActive(current);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-paper/85 backdrop-blur-md border-b border-rule">
        <nav
          aria-label="Primary"
          className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-5 md:px-10 h-[52px] md:h-[58px]"
        >
          {/* Wordmark */}
          <a href="#index" className="group shrink-0" aria-label="Adarsh Sharma, home">
            <span className="font-black tracking-tightest text-sm md:text-base text-ink">
              ADARSH SHARMA
            </span>
          </a>

          {/* Center index links */}
          <ul className="hidden lg:flex items-center gap-7">
            {LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className="group flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em]"
                  aria-current={active === l.id ? "true" : undefined}
                >
                  <span
                    className={`h-1 w-1 rounded-full bg-accent transition-opacity duration-300 ${
                      active === l.id ? "opacity-100" : "opacity-0"
                    }`}
                    aria-hidden="true"
                  />
                  <span
                    className={`link-sweep transition-colors ${
                      active === l.id ? "text-ink" : "text-ink-2 group-hover:text-ink"
                    }`}
                  >
                    {l.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {/* Right cluster */}
          <div className="flex items-center gap-4 md:gap-6 shrink-0">
            <span className="hidden md:block label" aria-hidden="true">
              Gurgaon · {clock} IST
            </span>

            <button
              onClick={toggleTheme}
              className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-2 hover:text-ink transition-colors"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              [{theme === "dark" ? "LIGHT" : "DARK"}]
            </button>

            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden font-mono text-[11px] uppercase tracking-[0.15em] text-ink hover:text-accent transition-colors"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? "[CLOSE]" : "[MENU]"}
            </button>
          </div>
        </nav>
        {/* scroll progress */}
        <motion.div
          className="h-[2px] origin-left bg-accent"
          style={{ scaleX: progress }}
          aria-hidden="true"
        />
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="lg:hidden overflow-hidden border-b border-rule bg-paper"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          >
            <ul className="flex flex-col px-5 py-2">
              {LINKS.map((l) => (
                <li key={l.id} className="border-b border-rule last:border-0">
                  <a
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 py-4"
                  >
                    <span
                      className="font-mono text-2xl font-light leading-none text-accent"
                      aria-hidden="true"
                    >
                      +
                    </span>
                    <span className="text-2xl font-extrabold uppercase tracking-tight text-ink">
                      {l.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;
