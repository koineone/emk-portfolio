"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// --------------------
// Hero Data
// --------------------
const roles = ["Developer", "Designer", "System Admin", "Strategist"];
const typedWords = ["Code.", "Design.", "Impact."];

const codeLines = [
  `const developer = {`,
  `  name: "Erick Koine",`,
  `  skills: ["Next.js", "TypeScript", "Design"],`,
  `  passion: "Building the future",`,
  `  available: true`,
  `};`,
];

// --------------------
// Background FX (radial glows + vignette)
// --------------------
function BackgroundFX() {
  return (
    <>
      {/* Radial glows — brand tinted */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[55vh] w-[55vh] rounded-full bg-[color:var(--brand-green)]/12 blur-3xl" />
      <div className="pointer-events-none absolute -top-20 right-[-10%] h-[60vh] w-[60vh] rounded-full bg-[color:var(--brand-blue)]/12 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-10%] left-1/3 h-[40vh] w-[40vh] rounded-full bg-[color:var(--brand-green)]/10 blur-[80px]" />

      {/* Vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(100% 60% at 50% 40%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.65) 100%)",
        }}
      />
    </>
  );
}

// --------------------
// Watermark EMK + glyphs
// --------------------
function WatermarkEMK() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="select-none font-extrabold tracking-tighter text-foreground/10 text-[22vw] leading-none">
          EMK
        </span>
      </div>
      {/* Decorative glyphs */}
      <motion.span
        aria-hidden
        className="absolute top-24 left-6 text-white/10 text-7xl"
        animate={{ rotate: [0, 10, 0], y: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        {"{"}
      </motion.span>
      <motion.span
        aria-hidden
        className="absolute top-32 right-16 text-white/10 text-6xl"
        animate={{ rotate: [0, -10, 0], y: [0, 12, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        #
      </motion.span>
    </div>
  );
}

// --------------------
// Portrait Panel
// --------------------
function HeroPortrait() {
  const [imgError, setImgError] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative w-[22rem] h-[28rem] md:w-[24rem] md:h-[30rem] lg:w-[28rem] lg:h-[34rem] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5 backdrop-blur-sm shadow-xl"
    >
      {/* Brand gradient backdrop (shows even if image is missing) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--brand-blue)]/20 via-transparent to-[color:var(--brand-green)]/20" />

      {/* Portrait */}
      {!imgError && (
        <Image
          src="/erick.png"
          alt="Portrait of Erick Koine"
          fill
          sizes="(min-width: 1024px) 28rem, 22rem"
          className="object-cover grayscale hover:grayscale-0 saturate-100 transition-[filter,transform] duration-700 ease-out"
          priority
          onError={() => setImgError(true)}
        />
      )}

      {/* Fallback initials when image missing */}
      {imgError && (
        <div className="absolute inset-0 grid place-items-center">
          <span className="text-6xl md:text-7xl font-extrabold text-foreground/20">EK</span>
        </div>
      )}

      {/* Subtle top vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
    </motion.div>
  );
}

// --------------------
// Floating Elements Component
// --------------------
function FloatingElements() {
  return (
    <>
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 right-20 w-4 h-4 bg-blue-500/20 rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute top-1/3 left-10 w-2 h-2 bg-green-400/30 rounded-full"
        animate={{
          y: [0, 15, 0],
          x: [0, 10, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-3 h-3 border border-orange-400/20 rounded-full"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>
    </>
  );
}

// --------------------
// Code Terminal Component
// --------------------
function CodeTerminal() {
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % (codeLines.length + 1));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="relative"
    >
      {/* Terminal Window */}
      <div className="bg-black/60 backdrop-blur-sm border border-white/10 rounded-lg p-6 font-mono text-sm max-w-lg">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-700/50">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
          </div>
          <span className="text-xs text-white/70 ml-2">erick-koine.dev</span>
        </div>

        {/* Code Content */}
        <div className="space-y-1">
          {codeLines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{
                opacity: index <= currentLine ? 1 : 0.3,
                color: index <= currentLine ? "#10b981" : "#6b7280"
              }}
              transition={{ duration: 0.3 }}
              className="text-[color:var(--brand-green)]"
            >
              {line}
            </motion.div>
          ))}

          {/* Blinking Cursor */}
          <motion.div
            className="inline-block w-2 h-4 bg-[color:var(--brand-green)] ml-1"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </div>
      </div>
    </motion.div>
  );
}

// --------------------
// Hero Component
// --------------------
function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [typedIndex, setTypedIndex] = useState(0);

  // rotate words
  useEffect(() => setMounted(true), []);
  useEffect(() => {
    const interval = setInterval(() => {
      setTypedIndex((prev) => (prev + 1) % typedWords.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  // subtle parallax
  const { scrollYProgress } = useScroll();
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const terminalY = useTransform(scrollYProgress, [0, 1], [0, 15]);

  // mouse-follow light
  const sectionRef = useRef<HTMLElement | null>(null);
  const onMouseMove = (e: React.MouseEvent) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
  };

  if (!mounted) return null;

  return (
    <section
      ref={sectionRef as any}
      onMouseMove={onMouseMove}
      id="home"
      className="min-h-dvh bg-background text-foreground relative overflow-hidden"
    >

      {/* Background FX layers */}
      <BackgroundFX />
      <WatermarkEMK />
      <FloatingElements />

      {/* Main Content Container */}
      <div className="container mx-auto max-w-7xl px-6 lg:px-12 min-h-[calc(100dvh-5rem)] flex items-center justify-center z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">

          {/* Left Side - Main Content */}
          <div className="space-y-8">
            {/* Small Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <div className="w-8 h-px bg-[color:var(--brand-orange)]"></div>
              <span className="text-[color:var(--brand-orange)] text-sm font-medium tracking-wider uppercase">
                Full-Stack Developer with Business Acumen & Creative Edge
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-6"
            >
              <div className="h-auto">
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={typedIndex}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight"
                  >
                    <span className="bg-gradient-to-r from-[color:var(--brand-green)] to-[color:var(--brand-blue)] bg-clip-text text-transparent">
                      {typedWords[typedIndex]}
                    </span>
                    <motion.span
                      aria-hidden
                      className="inline-block w-2 h-10 align-middle bg-[color:var(--brand-green)] ml-2"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  </motion.h1>
                </AnimatePresence>
              </div>

              {/* Roles */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-wrap gap-2"
              >
                {roles.map((r, i) => (
                  <Badge
                    key={r}
                    variant="outline"
                    className={`${["text-[color:var(--brand-blue)] border-[color:var(--brand-blue)]/40 bg-[color:var(--brand-blue)]/5","text-[color:var(--brand-green)] border-[color:var(--brand-green)]/40 bg-[color:var(--brand-green)]/5","text-[color:var(--brand-orange)] border-[color:var(--brand-orange)]/40 bg-[color:var(--brand-orange)]/5","text-[color:var(--brand-red)] border-[color:var(--brand-red)]/40 bg-[color:var(--brand-red)]/5"][i % 4]}`}
                  >
                    {r}
                  </Badge>
                ))}
              </motion.div>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-xl lg:text-2xl text-foreground/80 leading-relaxed max-w-2xl mx-auto"
              >
                I bring insight into key business issues, the technical skill to engineer solutions, and the confidence to act—refined through 7+ years of solving real problems.
              </motion.p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-lg"
            >
              Backend, frontend, and infrastructure — delivering technology that accelerates business outcomes
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-white text-gray-950 hover:bg-gray-100 px-8 py-6 text-base font-medium rounded-none transition-all duration-300"
              >
                <Link href="#work" aria-label="See my work">See My Work</Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-[color:var(--brand-green)] text-[color:var(--brand-green)] hover:bg-[color:var(--brand-green)] hover:text-gray-950 px-8 py-6 text-base font-medium rounded-none transition-all duration-300"
              >
                <Link href="#contact" aria-label="Get in touch">Get in Touch</Link>
              </Button>
            </motion.div>
          </div>

          {/* Right Side - Portrait + Code Terminal overlay */}
          <div className="relative flex justify-center lg:justify-end">
            <motion.div style={{ y: portraitY }} className="max-w-full">
              <HeroPortrait />
            </motion.div>
            <motion.div className="absolute -bottom-10 -right-10 z-10 max-w-[90vw]" style={{ y: terminalY }}>
              <CodeTerminal />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400/70 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-green-400/60 to-transparent" />
      </motion.div>
    </section>
  );
}

// --------------------
// Main Hero Component
// --------------------
export function Hero() {
  return <HeroSection />;
}
