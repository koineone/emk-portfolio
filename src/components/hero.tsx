"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Floating brand shapes inspired by logo */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -z-10 inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="absolute left-[5%] top-[20%] h-2 w-24 rounded bg-[color:var(--brand-red)]"
          animate={{ x: [0, 8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-[5%] top-[30%] h-2 w-28 rounded bg-[color:var(--brand-red)]"
          animate={{ x: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-[5%] top-[40%] h-2 w-20 rounded bg-[color:var(--brand-red)]"
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[20%] top-[15%] size-24 rotate-180 border-[14px] border-[color:var(--brand-orange)]"
          style={{ clipPath: "polygon(100% 50%, 0 0, 0 100%)" }}
          animate={{ rotate: [180, 178, 182, 180] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-[45%] top-[12%] size-20"
          style={{ clipPath: "polygon(50% 0, 0 100%, 100% 100%)", background: "var(--brand-blue)" }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-[40%] top-[40%] size-28"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", background: "transparent", border: "16px solid var(--brand-green)" }}
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(40%_60%_at_70%_10%,hsl(210_60%_60%/.15),transparent_60%)]" />

      <div className="container py-24 md:py-32">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-semibold tracking-tight"
        >
          Hi, I’m Erick Koine
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-3 text-lg md:text-xl text-foreground/70"
        >
          Designer • Developer • ICT Professional
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8"
        >
          <Button asChild size="lg" className="bg-[color:var(--brand-blue)] hover:bg-[color:var(--brand-blue)]/90">
            <Link href="#contact">Let’s Build Something Great</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

