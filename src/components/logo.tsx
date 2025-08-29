"use client";

import Image from "next/image";
import { motion, useCycle } from "framer-motion";

// Uses the full-color logo by default.
export function Logo({ height = 40, className = "" }: { height?: number; className?: string }) {
  const [spin, toggle] = useCycle(false, true);

  const ratio = 444 / 210.89; // from SVG viewBox
  const width = Math.round(height * ratio);

  return (
    <motion.span
      whileTap={{ scale: 0.97 }}
      onClick={() => toggle()}
      aria-label="Erick Koine Logo"
      className={`inline-flex items-center leading-none ${className}`}
    >
      <motion.span
        animate={spin ? { rotate: 360 } : { rotate: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="inline-block align-middle"
        style={{ width, height }}
      >
        <span className="sr-only">EMK</span>
        <Image
          src="/emk-logo-color.svg"
          alt="EMK logo"
          width={width}
          height={height}
          className="block select-none"
          draggable={false}
          priority
        />
      </motion.span>
    </motion.span>
  );
}

