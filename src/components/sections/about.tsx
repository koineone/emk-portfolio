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
    <section id="about" className="relative py-32 overflow-hidden" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--brand-orange)]/3 via-transparent to-[color:var(--brand-red)]/3" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Beyond the Code
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Where technology meets creativity, and problems become opportunities for innovation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-16 lg:grid-cols-[1fr_1px_1fr] max-w-7xl mx-auto"
        >
        {/* Left: Confident Intro */}
        <motion.div variants={itemVariants} className="space-y-8">
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
              Who I Am
            </h3>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              I&apos;m Erick Koine, a developer and designer hybrid who thrives at the intersection of technology and creativity.
              With over 7 years of experience across finance, consulting, and education sectors, I don&apos;t just build solutions —
              I craft experiences that make a difference.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              From solving everyday IT challenges to designing systems that save time and money, I&apos;ve learned that the best
              technology is invisible — it just works, beautifully and efficiently.
            </p>
          </motion.div>

          {/* Modern Stats Cards */}
          <motion.div
            variants={itemVariants}
            className="grid gap-6 sm:grid-cols-2"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="group"
            >
              <Card className="border-[color:var(--brand-blue)]/20 hover:border-[color:var(--brand-blue)]/40 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[color:var(--brand-blue)]/10 flex items-center justify-center">
                      <span className="text-[color:var(--brand-blue)] text-lg">⚡</span>
                    </div>
                    Quick Facts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-foreground/80">
                  <div className="flex items-center gap-3">
                    <span className="text-[color:var(--brand-green)]">📍</span>
                    <span>Nairobi, Kenya</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[color:var(--brand-orange)]">💼</span>
                    <span>7+ years in ICT & Development</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[color:var(--brand-blue)]">🏢</span>
                    <span>Banking, consulting, academia</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[color:var(--brand-red)]">🎨</span>
                    <span>Founder of Bush Bristles</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="group"
            >
              <Card className="border-[color:var(--brand-green)]/20 hover:border-[color:var(--brand-green)]/40 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[color:var(--brand-green)]/10 flex items-center justify-center">
                      <span className="text-[color:var(--brand-green)] text-lg">🎯</span>
                    </div>
                    What I Do
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-foreground/80 space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="text-[color:var(--brand-blue)] mt-1">•</span>
                    <span>Systems that save time and money</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[color:var(--brand-green)] mt-1">•</span>
                    <span>Experiences that build trust</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[color:var(--brand-orange)] mt-1">•</span>
                    <span>Products that stand out</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[color:var(--brand-red)] mt-1">•</span>
                    <span>Technology that truly wins</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="hidden lg:block bg-gradient-to-b from-[color:var(--brand-blue)] via-[color:var(--brand-green)] to-[color:var(--brand-orange)] w-px opacity-30"
        />

        {/* Right: Journey Timeline */}
        <motion.div
          ref={timelineRef}
          variants={timelineVariants}
          initial="hidden"
          animate={timelineInView ? "visible" : "hidden"}
          className="space-y-8"
        >
          <motion.div variants={timelineItemVariants}>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
              My Journey
            </h3>
            <p className="text-lg text-foreground/70 mb-2">
              From IT Support → to Systems → to Strategy
            </p>
            <p className="text-foreground/60 mb-8">
              I started by solving everyday IT challenges — networking, hardware, and user support. But I didn&apos;t stop there.
            </p>
          </motion.div>

          {/* Journey Story Cards */}
          <motion.div
            variants={timelineVariants}
            className="space-y-6"
          >
            <motion.div
              variants={timelineItemVariants}
              className="group"
            >
              <Card className="border-[color:var(--brand-green)]/20 hover:border-[color:var(--brand-green)]/40 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[color:var(--brand-green)]/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-[color:var(--brand-green)] text-xl">🚀</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[color:var(--brand-green)] mb-2">Building Systems</h4>
                      <p className="text-foreground/70 text-sm leading-relaxed">
                        I grew into building systems that save time and money (Dry Associates in-house system),
                        designing experiences that build trust (Cerny Bureau Enterprises), and branding products
                        that stand out (Crypsense, Salma Samu).
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={timelineItemVariants}
              className="group"
            >
              <Card className="border-[color:var(--brand-blue)]/20 hover:border-[color:var(--brand-blue)]/40 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[color:var(--brand-blue)]/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-[color:var(--brand-blue)] text-xl">🎯</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[color:var(--brand-blue)] mb-2">Strategic Impact</h4>
                      <p className="text-foreground/70 text-sm leading-relaxed">
                        Today, I work at the intersection of development, design, and business impact — helping
                        companies go beyond "just working" to truly winning with technology.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      </div>
    </section>
  );
}
