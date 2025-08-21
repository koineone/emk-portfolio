"use client";

import Image from "next/image";
import { motion, useCycle } from "framer-motion";

// Uses /public/emk-logo-light.svg and /public/emk-logo-dark.svg if present.
// Falls back to text if assets are missing.
export function Logo({ size = 32 }: { size?: number }) {
  const [spin, toggle] = useCycle(false, true);

  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      onClick={() => toggle()}
      aria-label="Logo"
      className="inline-flex items-center gap-2"
    >
      <motion.span
        animate={spin ? { rotate: 360 } : { rotate: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="inline-block"
        style={{ width: size, height: size }}
      >
        {/* Try to load SVGs; if they 404 Next/Image will just emit an error in dev.
            Keep a text fallback visually hidden in case images are missing. */}
        <span className="sr-only">EMK</span>
        <Image
          src="/emk-logo-light.svg"
          alt="EMK logo"
          width={size}
          height={size}
          className="block dark:hidden"
        />
        <Image
          src="/emk-logo-dark.svg"
          alt="EMK logo"
          width={size}
          height={size}
          className="hidden dark:block"
        />
      </motion.span>
      <span className="text-sm font-medium">Erick Koine</span>
    </motion.button>
  );
}

