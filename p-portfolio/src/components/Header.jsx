import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MaskText } from "./Primitives";
import pfp from "../images/unnamed.webp";

const RIBBON = [
  "FULLSTACK DEVELOPER",
  "HIGH PERFORMANCE SYSTEMS",
  "SCALABLE BACKENDS",
  "PIXEL PERFECT INTERFACES",
];

// Technical "reticle" mark — a focus instrument that fills the upper-right
// space and echoes the spec-drawing language of the rest of the page.
const Header = () => {
  const reduce = useReducedMotion();
  const [colored, setColored] = useState(false);

  return (
    <section
      id="index"
      className="relative flex min-h-[100svh] flex-col justify-between pt-[52px] md:pt-[58px]"
      aria-label="Introduction"
    >
      {/* ---- top metadata row ---- */}
      <div className="flex items-start justify-between pt-6 md:pt-8">
        <span className="label">Fullstack Developer</span>
        <span className="label text-right">Gurgaon, India</span>
      </div>

      {/* ---- the statement ---- */}
      <div className="grid grid-cols-12 items-end gap-y-10 py-10">
        {/* giant name */}
        <div className="col-span-12 lg:col-span-8">
          <h1 className="text-ink leading-[0.82] tracking-tightest">
            <MaskText
              lines={["ADARSH"]}
              className="block text-[clamp(3.6rem,16vw,13.5rem)] font-black"
            />
            <MaskText
              lines={["SHARMA"]}
              delay={0.12}
              className="block text-[clamp(3.6rem,16vw,13.5rem)] font-black"
            />
          </h1>
        </div>

        {/* portrait plate */}
        <div className="col-span-12 flex justify-start lg:col-span-4 lg:justify-end">
          <motion.figure
            initial={{ opacity: 0, y: reduce ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduce ? 0 : 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-40 sm:w-48 lg:w-full lg:max-w-[240px]"
          >
            <div className="group relative overflow-hidden border border-rule-2 bg-paper-2">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={pfp}
                  alt="Adarsh Sharma"
                  loading="eager"
                  className={`h-full w-full object-cover contrast-[1.05] transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-[1.03] ${
                    colored ? "grayscale-0" : "grayscale"
                  }`}
                />
              </div>
            </div>
            <figcaption className="mt-2">
              <span className="label">Adarsh Sharma</span>
            </figcaption>
          </motion.figure>
        </div>
      </div>

      {/* ---- lower band: serif statement + scroll cue ---- */}
      <div className="grid grid-cols-12 items-end gap-y-8 border-t border-rule pt-6 pb-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reduce ? 0 : 0.8, duration: 1 }}
          onMouseEnter={() => setColored(true)}
          onMouseLeave={() => setColored(false)}
          className="select-text col-span-12 md:col-span-7 max-w-xl text-xl md:text-2xl leading-snug text-ink-2"
        >
          I engineer{" "}
          <span className="font-serif italic text-ink">high performance systems</span>{" "}
          and craft intuitive digital experiences, bridging scalable{" "}
          <span className="font-serif italic text-ink">backends</span> with pixel
          perfect <span className="font-serif italic text-ink">interfaces</span>.
        </motion.p>

        <div className="col-span-12 md:col-span-5 flex items-end justify-start md:justify-end">
          <div className="flex flex-col md:items-end">
            <span className="label">Scroll</span>
            <motion.span
              className="text-accent text-2xl leading-none"
              animate={reduce ? {} : { y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              aria-hidden="true"
            >
              ↓
            </motion.span>
          </div>
        </div>
      </div>

      {/* ---- static keyword strip ---- */}
      <div className="-mx-5 md:-mx-10 border-y border-rule bg-accent">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-1 px-5 py-2.5 md:justify-between md:px-10">
          {RIBBON.map((t) => (
            <li
              key={t}
              className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-paper"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Header;
