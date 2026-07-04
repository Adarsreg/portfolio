import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { SectionHead, ArrowUR } from "./Primitives";
import projects from "../data/projects";

const GAP = 24; // matches gap-6

const Works = () => {
  const scroller = useRef(null);
  const drag = useRef({ down: false, lastX: 0, moved: 0, vx: 0, raf: 0 });
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  const cardStep = () => {
    const card = scroller.current?.children[0];
    return card ? card.offsetWidth + GAP : 400;
  };

  const onScroll = useCallback(() => {
    const el = scroller.current;
    if (!el) return;
    setActive(Math.min(projects.length - 1, Math.max(0, Math.round(el.scrollLeft / cardStep()))));
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  }, []);

  const stopInertia = () => {
    if (drag.current.raf) cancelAnimationFrame(drag.current.raf);
    drag.current.raf = 0;
  };

  const go = (dir) => {
    stopInertia();
    scroller.current?.scrollBy({ left: dir * cardStep(), behavior: "smooth" });
  };

  // Mouse drag with release momentum. Touch/pen fall back to native scroll.
  const onDown = (e) => {
    if (e.pointerType !== "mouse") return;
    stopInertia();
    drag.current.down = true;
    drag.current.lastX = e.clientX;
    drag.current.moved = 0;
    drag.current.vx = 0;
    scroller.current?.setPointerCapture?.(e.pointerId);
  };

  const onMove = (e) => {
    if (!drag.current.down) return;
    const dx = e.clientX - drag.current.lastX;
    drag.current.lastX = e.clientX;
    drag.current.moved += Math.abs(dx);
    drag.current.vx = dx;
    scroller.current.scrollLeft -= dx;
  };

  const onUp = (e) => {
    if (!drag.current.down) return;
    drag.current.down = false;
    scroller.current?.releasePointerCapture?.(e.pointerId);
    const el = scroller.current;
    let v = drag.current.vx;
    const decay = () => {
      v *= 0.93;
      el.scrollLeft -= v;
      drag.current.raf = Math.abs(v) > 0.4 ? requestAnimationFrame(decay) : 0;
    };
    if (Math.abs(v) > 1) drag.current.raf = requestAnimationFrame(decay);
  };

  // swallow the click that follows a real drag so cards don't navigate
  const onClickCapture = (e) => {
    if (drag.current.moved > 6) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = 0;
    }
  };

  return (
    <section id="work" className="scroll-mt-24" aria-labelledby="work-head">
      <SectionHead title="Projects" meta="Drag · scroll · arrows" id="work-head" />

      <div
        ref={scroller}
        onScroll={onScroll}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
        onClickCapture={onClickCapture}
        role="region"
        aria-label="Selected work, horizontal gallery"
        tabIndex={0}
        className="no-scrollbar -mx-5 flex cursor-grab select-none gap-6 overflow-x-auto overscroll-x-contain px-5 pb-2 active:cursor-grabbing md:-mx-10 md:px-10"
      >
        {projects.map((p) => {
          const primary = p.liveUrl || p.sourceUrl;
          return (
            <motion.article
              key={p.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-[85vw] shrink-0 sm:w-[68vw] md:w-[540px] lg:w-[600px]"
            >
              <div className="flex h-full flex-col border border-rule bg-paper">
                {/* visual */}
                <a
                  href={primary}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/img relative block aspect-[16/10] overflow-hidden bg-paper-2"
                  aria-label={`${p.title} (opens in new tab)`}
                  draggable={false}
                >
                  <img
                    src={p.imageUrl}
                    alt={`Screenshot of ${p.title}`}
                    loading="eager"
                    decoding="async"
                    draggable={false}
                    className="h-full w-full select-none object-cover object-top transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/img:scale-[1.04]"
                  />
                </a>

                {/* body */}
                <div className="flex flex-1 flex-col border-t border-rule p-6 md:p-8">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="label">{p.discipline}</span>
                    <span className="font-mono text-sm text-ink-3 tabular-nums">{p.year}</span>
                  </div>

                  <h3 className="text-3xl font-black tracking-tightest text-ink md:text-4xl">
                    <a
                      href={primary}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-start gap-2 transition-colors duration-300 hover:text-accent"
                      draggable={false}
                    >
                      {p.title}
                      <ArrowUR className="mt-1.5 text-sm text-ink-3" />
                    </a>
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-ink-2">{p.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="border border-rule px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-ink-2"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-2 pt-6">
                    {p.liveUrl && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        draggable={false}
                        className="link-sweep font-mono text-[11px] uppercase tracking-[0.15em] text-ink hover:text-accent"
                      >
                        ↗ Live Demo
                      </a>
                    )}
                    {p.sourceUrl && (
                      <a
                        href={p.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        draggable={false}
                        className="link-sweep inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-ink-2 hover:text-ink"
                      >
                        <FaGithub aria-hidden="true" /> Source
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* controls: progress + arrows */}
      <div className="mt-8 flex items-center gap-6">
        <div className="relative h-px flex-1 bg-rule">
          <motion.div
            className="absolute left-0 top-0 h-px bg-accent"
            style={{ width: `${Math.max(progress * 100, 5)}%` }}
          />
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => go(-1)}
            disabled={active === 0}
            aria-label="Previous project"
            className="flex h-10 w-10 items-center justify-center border border-rule-2 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-ink"
          >
            ←
          </button>
          <button
            onClick={() => go(1)}
            disabled={active === projects.length - 1}
            aria-label="Next project"
            className="flex h-10 w-10 items-center justify-center border border-rule-2 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-ink"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Works;
