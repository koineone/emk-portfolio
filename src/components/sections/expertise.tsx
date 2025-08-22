"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
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
      ease: "easeOut"
    }
  }
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export function ExpertiseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredSide, setHoveredSide] = useState<'design' | 'tech' | null>(null);

  const designSkills = [
    { name: "UI/UX Design", level: 90, icon: "🎨" },
    { name: "Branding", level: 85, icon: "🏷️" },
    { name: "Adobe Creative Suite", level: 88, icon: "🖌️" },
    { name: "Digital Art", level: 80, icon: "🎭" },
    { name: "Fashion Design", level: 75, icon: "👗" },
    { name: "Print Design", level: 82, icon: "📄" }
  ];

  const techSkills = [
    { name: "Next.js/React", level: 92, icon: "⚛️" },
    { name: "Python/Django", level: 88, icon: "🐍" },
    { name: "Cloud/Azure", level: 85, icon: "☁️" },
    { name: "IT Infrastructure", level: 90, icon: "🖥️" },
    { name: "Automation", level: 87, icon: "🤖" },
    { name: "Database Management", level: 83, icon: "🗄️" }
  ];

  return (
    <section id="expertise" className="container py-20" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-center mb-16"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold tracking-tight"
        >
          Dual Expertise
        </motion.h2>
        <motion.p 
          variants={itemVariants}
          className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto"
        >
          Where creativity meets technology. I bring both design thinking and technical precision to every project.
        </motion.p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid lg:grid-cols-2 gap-8 relative"
      >
        {/* Design Side */}
        <motion.div
          variants={itemVariants}
          className="relative"
          onMouseEnter={() => setHoveredSide('design')}
          onMouseLeave={() => setHoveredSide(null)}
        >
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br from-[color:var(--brand-orange)]/10 to-[color:var(--brand-red)]/10 rounded-2xl transition-opacity duration-300 ${
              hoveredSide === 'design' ? 'opacity-100' : 'opacity-0'
            }`}
          />
          
          <Card className="relative z-10 border-[color:var(--brand-orange)]/20 hover:border-[color:var(--brand-orange)]/40 transition-all duration-300">
            <CardHeader className="text-center pb-6">
              <motion.div
                className="mx-auto w-16 h-16 bg-gradient-to-br from-[color:var(--brand-orange)] to-[color:var(--brand-red)] rounded-full flex items-center justify-center text-2xl mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                🎨
              </motion.div>
              <CardTitle className="text-2xl font-bold text-[color:var(--brand-orange)]">
                Creative Designer
              </CardTitle>
              <p className="text-foreground/60">
                Bringing ideas to life through visual storytelling and user-centered design
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              {designSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={skillVariants}
                  custom={index}
                  className="space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm font-medium">
                      <span>{skill.icon}</span>
                      {skill.name}
                    </span>
                    <span className="text-xs text-foreground/60">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-foreground/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[color:var(--brand-orange)] to-[color:var(--brand-red)] rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    />
                  </div>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Tech Side */}
        <motion.div
          variants={itemVariants}
          className="relative"
          onMouseEnter={() => setHoveredSide('tech')}
          onMouseLeave={() => setHoveredSide(null)}
        >
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br from-[color:var(--brand-blue)]/10 to-[color:var(--brand-green)]/10 rounded-2xl transition-opacity duration-300 ${
              hoveredSide === 'tech' ? 'opacity-100' : 'opacity-0'
            }`}
          />
          
          <Card className="relative z-10 border-[color:var(--brand-blue)]/20 hover:border-[color:var(--brand-blue)]/40 transition-all duration-300">
            <CardHeader className="text-center pb-6">
              <motion.div
                className="mx-auto w-16 h-16 bg-gradient-to-br from-[color:var(--brand-blue)] to-[color:var(--brand-green)] rounded-full flex items-center justify-center text-2xl mb-4"
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                💻
              </motion.div>
              <CardTitle className="text-2xl font-bold text-[color:var(--brand-blue)]">
                Technical Developer
              </CardTitle>
              <p className="text-foreground/60">
                Building robust, scalable solutions with modern technologies and best practices
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              {techSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={skillVariants}
                  custom={index}
                  className="space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm font-medium">
                      <span>{skill.icon}</span>
                      {skill.name}
                    </span>
                    <span className="text-xs text-foreground/60">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-foreground/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[color:var(--brand-blue)] to-[color:var(--brand-green)] rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    />
                  </div>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Center divider with animated line */}
        <motion.div
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block"
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="w-16 h-16 bg-background border-4 border-foreground/20 rounded-full flex items-center justify-center">
            <motion.div
              className="w-2 h-2 bg-gradient-to-r from-[color:var(--brand-orange)] to-[color:var(--brand-blue)] rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        variants={itemVariants}
        className="text-center mt-16"
      >
        <motion.p
          variants={itemVariants}
          className="text-lg text-foreground/70"
        >
          Ready to bring your vision to life with both creative flair and technical excellence?
        </motion.p>
      </motion.div>
    </section>
  );
}
