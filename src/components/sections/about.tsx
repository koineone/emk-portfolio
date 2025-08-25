"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const
    }
  }
};

const timelineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const timelineItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export function AboutSection() {
  const ref = useRef(null);
  const timelineRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const timelineInView = useInView(timelineRef, { once: true, margin: "-50px" });

  return (
    <section id="about" className="relative py-20 overflow-hidden" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--brand-orange)]/5 via-transparent to-[color:var(--brand-red)]/5" />

      <div className="container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-12 lg:grid-cols-[1fr_1px_1fr] max-w-7xl mx-auto"
        >
        {/* Left: Intro + Facts */}
        <motion.div variants={itemVariants} className="max-w-xl">
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold tracking-tight"
          >
            My Story
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="mt-4 text-lg text-foreground/70 leading-relaxed"
          >
            I&apos;m Erick Koine, where technology meets creativity. With over 7 years of experience across finance, consulting,
            and education sectors, I bridge the gap between technical excellence and beautiful design.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="mt-8 grid gap-6 sm:grid-cols-2"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <Card className="border-[color:var(--brand-blue)]/20 hover:border-[color:var(--brand-blue)]/40 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-[color:var(--brand-blue)]">⚡</span>
                    Quick Facts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-foreground/80">
                  <div className="flex items-center gap-2">
                    <span className="text-[color:var(--brand-green)]">📍</span>
                    Nairobi, Kenya
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[color:var(--brand-orange)]">💼</span>
                    7+ years in ICT & Development
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[color:var(--brand-blue)]">🏢</span>
                    Banking, consulting, academia
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[color:var(--brand-red)]">🎨</span>
                    Founder of Bush Bristles
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <Card className="border-[color:var(--brand-green)]/20 hover:border-[color:var(--brand-green)]/40 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-[color:var(--brand-green)]">🎯</span>
                    Focus Areas
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-foreground/80 space-y-2">
                  <div>• IT Infrastructure (Windows, Linux, Mac, AD, O365, Azure)</div>
                  <div>• Web Development (Python, Django, HTML/CSS, WordPress, Next.js)</div>
                  <div>• Automation & Scripting (PowerShell, Robocopy, batch files)</div>
                  <div>• Creative Design (Adobe Suite, branding)</div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div 
          variants={itemVariants}
          className="hidden md:block bg-gradient-to-b from-[color:var(--brand-blue)] via-[color:var(--brand-green)] to-[color:var(--brand-orange)] w-px opacity-30" 
        />

        {/* Right: Enhanced Timeline */}
        <motion.div
          ref={timelineRef}
          variants={timelineVariants}
          initial="hidden"
          animate={timelineInView ? "visible" : "hidden"}
        >
          <motion.h3 
            variants={timelineItemVariants}
            className="text-2xl font-semibold mb-2"
          >
            Journey
          </motion.h3>
          <motion.p 
            variants={timelineItemVariants}
            className="text-foreground/60 mb-6"
          >
            From ICT support to full-stack development and creative design
          </motion.p>
          
          <motion.ol 
            variants={timelineVariants}
            className="space-y-8 border-l-2 border-[color:var(--brand-blue)]/20 pl-8"
          >
            <motion.li variants={timelineItemVariants} className="relative">
              <motion.div 
                className="absolute -left-[41px] h-4 w-4 rounded-full bg-[color:var(--brand-green)] border-4 border-background"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
              <div className="bg-gradient-to-r from-[color:var(--brand-green)]/10 to-transparent p-4 rounded-lg border border-[color:var(--brand-green)]/20">
                <h4 className="font-semibold text-[color:var(--brand-green)]">2024 — Present</h4>
                <p className="text-sm font-medium mt-1">Freelance & Bush Bristles Founder</p>
                <p className="text-sm text-foreground/70 mt-2">
                  Building Bush Bristles and delivering comprehensive design + tech solutions. 
                  Blending creativity with technology for businesses worldwide.
                </p>
              </div>
            </motion.li>
            
            <motion.li variants={timelineItemVariants} className="relative">
              <motion.div 
                className="absolute -left-[41px] h-4 w-4 rounded-full bg-[color:var(--brand-orange)] border-4 border-background"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
              <div className="bg-gradient-to-r from-[color:var(--brand-orange)]/10 to-transparent p-4 rounded-lg border border-[color:var(--brand-orange)]/20">
                <h4 className="font-semibold text-[color:var(--brand-orange)]">2022 — 2024</h4>
                <p className="text-sm font-medium mt-1">Dry Associates Investment Bank</p>
                <p className="text-sm text-foreground/70 mt-2">
                  ICT support automation and web development. Led website revamp coordination 
                  and implemented automated solutions for banking operations.
                </p>
              </div>
            </motion.li>
            
            <motion.li variants={timelineItemVariants} className="relative">
              <motion.div 
                className="absolute -left-[41px] h-4 w-4 rounded-full bg-[color:var(--brand-blue)] border-4 border-background"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
              <div className="bg-gradient-to-r from-[color:var(--brand-blue)]/10 to-transparent p-4 rounded-lg border border-[color:var(--brand-blue)]/20">
                <h4 className="font-semibold text-[color:var(--brand-blue)]">2020 — 2022</h4>
                <p className="text-sm font-medium mt-1">Oracle Edge</p>
                <p className="text-sm text-foreground/70 mt-2">
                  IT support specialist focusing on documentation, stakeholder training, 
                  and system optimization in educational technology.
                </p>
              </div>
            </motion.li>
            
            <motion.li variants={timelineItemVariants} className="relative">
              <motion.div 
                className="absolute -left-[41px] h-4 w-4 rounded-full bg-[color:var(--brand-red)] border-4 border-background"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
              <div className="bg-gradient-to-r from-[color:var(--brand-red)]/10 to-transparent p-4 rounded-lg border border-[color:var(--brand-red)]/20">
                <h4 className="font-semibold text-[color:var(--brand-red)]">2018 — 2020</h4>
                <p className="text-sm font-medium mt-1">Dry Associates Investment Bank</p>
                <p className="text-sm text-foreground/70 mt-2">
                  Started my journey in ICT support, focusing on core infrastructure 
                  and process improvements in the financial sector.
                </p>
              </div>
            </motion.li>
          </motion.ol>
        </motion.div>
      </motion.div>
      </div>
    </section>
  );
}
