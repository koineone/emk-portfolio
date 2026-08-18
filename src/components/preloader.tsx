"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("emk_preloader_shown")) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setVisible(true);
    sessionStorage.setItem("emk_preloader_shown", "1");

    if (reduced) {
      setProgress(100);
      const t = window.setTimeout(() => setVisible(false), 200);
      return () => window.clearTimeout(t);
    }

    const start = performance.now();
    const duration = 1300;
    let frame = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - t) ** 3;
      setProgress(eased * 100);
      if (t < 1) {
        frame = window.requestAnimationFrame(tick);
      } else {
        window.setTimeout(() => setVisible(false), 240);
      }
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background text-foreground"
          role="status"
          aria-live="polite"
          aria-busy={true}
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-foreground/45">
            Erick Koine
          </p>
          <p className="mt-5 font-display text-6xl font-semibold tracking-tight sm:text-7xl">
            EMK
          </p>
          <p className="mt-3 text-sm text-foreground/50">Developer × Designer × Systems</p>
          <div className="mt-12 h-px w-44 overflow-hidden bg-foreground/12">
            <motion.div
              className="h-full bg-[color:var(--accent)]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.08, ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
