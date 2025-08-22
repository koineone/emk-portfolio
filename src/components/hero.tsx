"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  
  // Mouse tracking for interactive split
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring animations
  const springConfig = { damping: 25, stiffness: 700 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
      mouseX.set(clientX);
      mouseY.set(clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 -z-20"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
              rgba(24, 90, 165, 0.1) 0%, 
              rgba(27, 167, 119, 0.05) 25%, 
              transparent 50%),
            linear-gradient(135deg, 
              rgba(24, 90, 165, 0.03) 0%, 
              rgba(221, 117, 49, 0.02) 50%, 
              rgba(199, 19, 59, 0.03) 100%)
          `
        }}
        animate={{
          background: [
            `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(24, 90, 165, 0.1) 0%, rgba(27, 167, 119, 0.05) 25%, transparent 50%), linear-gradient(135deg, rgba(24, 90, 165, 0.03) 0%, rgba(221, 117, 49, 0.02) 50%, rgba(199, 19, 59, 0.03) 100%)`,
            `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(27, 167, 119, 0.1) 0%, rgba(221, 117, 49, 0.05) 25%, transparent 50%), linear-gradient(135deg, rgba(27, 167, 119, 0.03) 0%, rgba(199, 19, 59, 0.02) 50%, rgba(24, 90, 165, 0.03) 100%)`
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Floating geometric elements */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -z-10 inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.div
          className="absolute left-[8%] top-[25%] h-1 w-16 rounded bg-[color:var(--brand-red)]"
          animate={{ x: [0, 12, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[15%] top-[20%] size-20 border-[3px] border-[color:var(--brand-orange)] rounded-full"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute left-[70%] top-[60%] size-6 bg-[color:var(--brand-green)] rounded-full"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Designer */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="text-sm font-medium text-[color:var(--brand-orange)] tracking-wider uppercase">
                Creative Designer
              </span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                I craft
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-[color:var(--brand-blue)] to-[color:var(--brand-green)] bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                experiences
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-lg md:text-xl text-foreground/70 max-w-md"
            >
              Where design meets technology. Building digital solutions that look stunning and work flawlessly.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                asChild 
                size="lg" 
                className="bg-[color:var(--brand-blue)] hover:bg-[color:var(--brand-blue)]/90 text-white"
              >
                <Link href="#portfolio">View My Work</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-[color:var(--brand-green)] text-[color:var(--brand-green)] hover:bg-[color:var(--brand-green)] hover:text-white"
              >
                <Link href="#contact">Hire Me</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Developer */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Code-like visual element */}
            <motion.div
              className="bg-foreground/5 backdrop-blur-sm rounded-lg p-6 border border-foreground/10"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-[color:var(--brand-red)]"></div>
                <div className="w-3 h-3 rounded-full bg-[color:var(--brand-orange)]"></div>
                <div className="w-3 h-3 rounded-full bg-[color:var(--brand-green)]"></div>
              </div>
              
              <div className="space-y-2 font-mono text-sm">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 1 }}
                  className="overflow-hidden"
                >
                  <span className="text-[color:var(--brand-blue)]">const</span>{" "}
                  <span className="text-[color:var(--brand-green)]">developer</span>{" "}
                  <span className="text-foreground/70">=</span>{" "}
                  <span className="text-[color:var(--brand-orange)]">{`{`}</span>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                  className="pl-4"
                >
                  <span className="text-[color:var(--brand-green)]">name</span>
                  <span className="text-foreground/70">:</span>{" "}
                  <span className="text-[color:var(--brand-red)]">'Erick Koine'</span>
                  <span className="text-foreground/70">,</span>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.7 }}
                  className="pl-4"
                >
                  <span className="text-[color:var(--brand-green)]">skills</span>
                  <span className="text-foreground/70">:</span>{" "}
                  <span className="text-[color:var(--brand-orange)]">[</span>
                  <span className="text-[color:var(--brand-red)]">'Next.js'</span>
                  <span className="text-foreground/70">,</span>{" "}
                  <span className="text-[color:var(--brand-red)]">'Python'</span>
                  <span className="text-[color:var(--brand-orange)]">]</span>
                  <span className="text-foreground/70">,</span>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.9 }}
                  className="pl-4"
                >
                  <span className="text-[color:var(--brand-green)]">passion</span>
                  <span className="text-foreground/70">:</span>{" "}
                  <span className="text-[color:var(--brand-red)]">'Building the future'</span>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.1 }}
                >
                  <span className="text-[color:var(--brand-orange)]">{`}`}</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Floating tech icons */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-[color:var(--brand-blue)] rounded-lg flex items-center justify-center text-white text-xs font-bold"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              JS
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 -left-4 w-8 h-8 bg-[color:var(--brand-green)] rounded-lg flex items-center justify-center text-white text-xs font-bold"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              PY
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
