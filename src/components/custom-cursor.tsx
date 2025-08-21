"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, { stiffness: 300, damping: 30, mass: 0.5 });
  const smoothY = useSpring(y, { stiffness: 300, damping: 30, mass: 0.5 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  useEffect(() => {
    const onEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (target.closest("a,button,[role='button']")) {
        document.documentElement.style.setProperty("--cursor-size", "28px");
      } else {
        document.documentElement.style.setProperty("--cursor-size", "20px");
      }
    };
    window.addEventListener("mousemove", onEnter);
    return () => window.removeEventListener("mousemove", onEnter);
  }, []);

  return (
    <motion.div
      aria-hidden
      style={{ translateX: smoothX, translateY: smoothY }}
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/40 md:block"
    >
      <div
        className="h-[var(--cursor-size,20px)] w-[var(--cursor-size,20px)] rounded-full border border-foreground/30 bg-foreground/5"
      />
    </motion.div>
  );
}

