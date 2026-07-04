import { motion, useReducedMotion } from "framer-motion";

/* ------------------------------------------------------------------
   ArrowUR — a crisp diagonal "go / open" arrow as inline SVG.
   Inherits currentColor; sizes via the `className` font-size/width.
------------------------------------------------------------------ */
export const ArrowUR = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="square"
    className={`h-[1em] w-[1em] ${className}`}
    aria-hidden="true"
  >
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

/* ------------------------------------------------------------------
   Reveal — generic in-view entrance. Slides + fades from a direction.
   Honors prefers-reduced-motion (falls back to a plain fade).
------------------------------------------------------------------ */
export const Reveal = ({
  children,
  delay = 0,
  y = 28,
  x = 0,
  className = "",
  as = "div",
}) => {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y, x: reduce ? 0 : x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
};

/* ------------------------------------------------------------------
   MaskText — display lines revealed from behind a mask (overflow clip
   + upward slide). Pass an array of strings; each becomes one line.
------------------------------------------------------------------ */
export const MaskText = ({ lines, className = "", delay = 0, stagger = 0.08 }) => {
  const reduce = useReducedMotion();
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.06em]">
          <motion.span
            className="block will-change-transform"
            initial={{ y: reduce ? 0 : "108%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{
              duration: 1,
              delay: delay + i * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

/* ------------------------------------------------------------------
   SectionHead — the recurring ruled section marker: a hairline rule,
   a small accent square, the title, and optional right-aligned meta.
------------------------------------------------------------------ */
export const SectionHead = ({ title, meta, id }) => (
  <div className="mb-12 md:mb-20">
    <div className="mb-5 h-px w-full bg-rule-2" />
    <div className="flex items-baseline justify-between gap-6">
      <div className="flex items-center gap-3">
        <span
          className="font-mono text-2xl md:text-3xl font-light leading-none text-accent"
          aria-hidden="true"
        >
          +
        </span>
        <h2
          id={id}
          className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-ink"
        >
          {title}
        </h2>
      </div>
      {meta && (
        <span className="label hidden sm:block text-right leading-relaxed">
          {meta}
        </span>
      )}
    </div>
  </div>
);

/* ------------------------------------------------------------------
   Marquee — infinite horizontal band. Pauses on hover. CSS-driven.
------------------------------------------------------------------ */
export const Marquee = ({ children, reverse = false, speed = "marquee" }) => {
  const anim = reverse ? "animate-marquee-reverse" : `animate-${speed}`;
  return (
    <div className="pause-marquee relative flex w-full overflow-hidden">
      <div className={`marquee-track flex shrink-0 ${anim}`}>
        {children}
        {children}
      </div>
    </div>
  );
};
