import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

/* Load curtain: a paper panel with a counting index that wipes upward.
   Runs once, ~1.6s. Skipped entirely under prefers-reduced-motion. */
const Intro = ({ onDone }) => {
  const reduce = useReducedMotion();
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (reduce) {
      setOpen(false);
      onDone?.();
      return;
    }
    let raf;
    const start = performance.now();
    const DURATION = 1150;
    const tick = (now) => {
      const p = Math.min((now - start) / DURATION, 1);
      // ease-out for the counter
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setOpen(false), 260);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduce, onDone]);

  return (
    <AnimatePresence onExitComplete={() => onDone?.()}>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-paper px-5 py-5 md:px-10 md:py-8"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex items-start justify-between">
            <span className="label">Adarsh Sharma</span>
            <span className="label">Fullstack Developer</span>
          </div>

          <div className="flex items-end justify-between">
            <span className="label">Gurgaon, India</span>
            <span className="font-mono font-medium text-6xl md:text-9xl leading-none text-ink tabular-nums">
              {String(count).padStart(3, "0")}
            </span>
          </div>

          {/* progress rule */}
          <motion.div
            className="absolute bottom-0 left-0 h-[3px] bg-accent"
            initial={{ width: "0%" }}
            animate={{ width: `${count}%` }}
            transition={{ ease: "linear", duration: 0.05 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Intro;
