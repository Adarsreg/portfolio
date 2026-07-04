import { useRef, useEffect } from "react";
import { useReducedMotion } from "framer-motion";

/* A grid of marks that respond to the pointer: dots near the cursor grow,
   brighten, tint toward the accent, and part slightly around it.
   Canvas-based + event-driven (draws only on pointer move / resize / theme),
   so it costs nothing when idle. Static grid under reduced-motion. */
const GAP = 30; // spacing between marks (px)
const R = 150; // pointer influence radius (px)

const CursorField = () => {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = 0;
    let height = 0;
    let dots = [];
    const pointer = { x: -9999, y: -9999 };

    let ink = [18, 16, 13];
    let accent = [220, 52, 28];
    const readColors = () => {
      const cs = getComputedStyle(canvas);
      const parse = (v, fb) => {
        const p = v.trim().split(/\s+/).map(Number);
        return p.length === 3 && p.every((n) => !Number.isNaN(n)) ? p : fb;
      };
      ink = parse(cs.getPropertyValue("--ink"), ink);
      accent = parse(cs.getPropertyValue("--accent"), accent);
    };

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dots = [];
      const cols = Math.max(1, Math.ceil(width / GAP));
      const rows = Math.max(1, Math.ceil(height / GAP));
      const offX = (width - (cols - 1) * GAP) / 2;
      const offY = (height - (rows - 1) * GAP) / 2;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          dots.push({ x: offX + c * GAP, y: offY + r * GAP });
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (const d of dots) {
        const dx = d.x - pointer.x;
        const dy = d.y - pointer.y;
        const dist = Math.hypot(dx, dy) || 1;
        const t = Math.max(0, 1 - dist / R); // 0..1
        const k = Math.pow(t, 1.4);
        const radius = 1 + t * 2.7;
        const alpha = 0.1 + t * 0.72;
        const push = t * 7;
        const px = d.x + (dx / dist) * push;
        const py = d.y + (dy / dist) * push;
        const cr = Math.round(ink[0] + (accent[0] - ink[0]) * k);
        const cg = Math.round(ink[1] + (accent[1] - ink[1]) * k);
        const cb = Math.round(ink[2] + (accent[2] - ink[2]) * k);
        ctx.beginPath();
        ctx.arc(px, py, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${cr},${cg},${cb},${alpha})`;
        ctx.fill();
      }
    };

    let pending = false;
    const requestDraw = () => {
      if (pending) return;
      pending = true;
      requestAnimationFrame(() => {
        pending = false;
        draw();
      });
    };

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      requestDraw();
    };
    const onLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
      requestDraw();
    };

    readColors();
    build();
    draw();

    const ro = new ResizeObserver(() => {
      build();
      draw();
    });
    ro.observe(canvas);

    const mo = new MutationObserver(() => {
      readColors();
      draw();
    });
    mo.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    if (!reduce) {
      window.addEventListener("pointermove", onMove, { passive: true });
      window.addEventListener("blur", onLeave);
    }

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("blur", onLeave);
      ro.disconnect();
      mo.disconnect();
    };
  }, [reduce]);

  return <canvas ref={ref} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
};

export default CursorField;
