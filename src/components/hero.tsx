"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { NairobiTime } from "@/components/nairobi-time";
import { Magnetic } from "@/lib/magnetic";

const roles = ["Developer", "Designer", "Systems"];
const stack = [
  "Python",
  "Django",
  "Next.js",
  "TypeScript",
  "PostgreSQL",
  "Azure",
  "Infrastructure",
  "Brand Design",
];

function HeroPortrait() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
      <div className="pointer-events-none absolute -inset-3 rounded-[2.15rem] border border-foreground/12" />
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-[#111] ring-1 ring-foreground/15">
        {!imgError ? (
          <Image
            src="/erick.png"
            alt="Portrait of Erick Koine"
            fill
            sizes="(min-width: 1024px) 28rem, 22rem"
            className="object-cover object-[center_18%]"
            priority
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center">
            <span className="font-display text-7xl font-bold tracking-tight text-white/20">EK</span>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
          <span className="rounded-full bg-background/90 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur">
            <NairobiTime />
          </span>
          <span className="rounded-full bg-[color:var(--accent)] px-3 py-1.5 text-xs font-medium text-white">
            Open to work
          </span>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section ref={sectionRef} id="home" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 50% at 10% 0%, color-mix(in oklab, var(--accent) 16%, transparent), transparent 60%), radial-gradient(60% 40% at 100% 10%, color-mix(in oklab, var(--brand-blue) 12%, transparent), transparent 55%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-8 top-24 hidden select-none font-display text-[18vw] font-bold leading-none tracking-tighter text-foreground/[0.045] md:block"
      >
        EMK
      </div>

      <div className="container relative grid min-h-[calc(100dvh-8rem)] items-center gap-10 py-10 md:grid-cols-[1.05fr_0.95fr] md:gap-12 lg:gap-16 lg:py-16">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 flex items-center gap-3"
          >
            <div className="relative h-11 w-11 overflow-hidden rounded-full bg-[#111] ring-1 ring-foreground/15 md:hidden">
              <Image
                src="/erick.png"
                alt=""
                fill
                sizes="44px"
                className="object-cover object-top"
              />
            </div>
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-foreground/55">
              Erick Koine
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-[2.65rem] font-semibold leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-[4.6rem]"
          >
            I build technology
            <span className="mt-1 block text-[color:var(--muted-foreground)]">
              that moves businesses forward.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-6 flex gap-2 overflow-x-auto no-scrollbar sm:flex-wrap"
          >
            {roles.map((role) => (
              <span
                key={role}
                className="shrink-0 rounded-full border border-foreground/15 bg-background/40 px-3.5 py-1.5 text-xs font-medium text-foreground/80"
              >
                {role}
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-[color:var(--muted-foreground)] sm:text-lg"
          >
            Software, infrastructure and creative problem-solving — built around real business outcomes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Magnetic strength={0.18} className="w-full sm:w-auto">
              <Link
                href="#work"
                className="inline-flex h-12 min-h-12 w-full items-center justify-center rounded-full bg-foreground px-7 text-[15px] font-medium text-background transition-opacity hover:opacity-90 sm:w-auto"
              >
                View selected work
              </Link>
            </Magnetic>
            <Link
              href="#contact"
              className="inline-flex h-12 min-h-12 items-center justify-center gap-1.5 rounded-full border border-foreground/18 bg-background/50 px-7 text-[15px] font-medium text-foreground transition-colors hover:border-foreground/40"
            >
              Let&apos;s talk
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        <motion.div style={{ y: portraitY }} className="hidden justify-self-end md:block">
          <HeroPortrait />
        </motion.div>
      </div>

      <div className="relative border-t border-foreground/10">
        <div className="overflow-hidden py-4">
          <div className="animate-marquee flex w-max gap-10 pr-10 text-sm text-foreground/50">
            {[...stack, ...stack].map((item, i) => (
              <span key={`${item}-${i}`} className="shrink-0 tracking-wide">
                {item}
                <span className="ml-10 text-foreground/25">/</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
