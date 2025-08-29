"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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
      duration: 0.6
    }
  }
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5
    }
  }
};

export function ExpertiseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = {
    "Tech Skills": {
      icon: "💻",
      color: "var(--brand-blue)",
      skills: [
        { name: "Next.js & React", level: 90, icon: "⚛️" },
        { name: "Python & Django", level: 88, icon: "🐍" },
        { name: "TypeScript & JavaScript", level: 85, icon: "📜" },
        { name: "Cloud Infrastructure (Azure, AWS)", level: 82, icon: "☁️" },
        { name: "Database Design (PostgreSQL, MySQL)", level: 80, icon: "🗃️" },
        { name: "DevOps & Automation", level: 85, icon: "🤖" },
        { name: "System Administration", level: 92, icon: "🖥️" },
        { name: "Network Security", level: 88, icon: "🛡️" }
      ]
    },
    "Design Skills": {
      icon: "🎨",
      color: "var(--brand-green)",
      skills: [
        { name: "UI/UX Design", level: 88, icon: "🖌️" },
        { name: "Adobe Creative Suite", level: 90, icon: "🎭" },
        { name: "Brand Identity Design", level: 85, icon: "🏷️" },
        { name: "Web Design", level: 87, icon: "🌐" },
        { name: "Print Design", level: 82, icon: "📄" },
        { name: "Digital Marketing Materials", level: 85, icon: "📱" },
        { name: "Prototyping & Wireframing", level: 80, icon: "📐" },
        { name: "Design Systems", level: 83, icon: "🧩" }
      ]
    },
    "Soft Skills": {
      icon: "🤝",
      color: "var(--brand-orange)",
      skills: [
        { name: "Problem Solving", level: 95, icon: "🔍" },
        { name: "Project Management", level: 90, icon: "📊" },
        { name: "Team Leadership", level: 87, icon: "👥" },
        { name: "Client Communication", level: 92, icon: "💬" },
        { name: "Strategic Thinking", level: 88, icon: "🎯" },
        { name: "Creative Innovation", level: 90, icon: "💡" },
        { name: "Adaptability", level: 93, icon: "🔄" },
        { name: "Mentoring & Training", level: 85, icon: "🎓" }
      ]
    }
  };

  return (
    <section id="expertise" className="relative py-32 overflow-hidden" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--brand-green)]/3 via-transparent to-[color:var(--brand-blue)]/3" />

      <div className="container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-foreground/70 max-w-3xl mx-auto"
          >
            A unique blend of technical mastery, creative vision, and strategic thinking that drives exceptional results.
          </motion.p>
        </motion.div>

        {/* Three-category grid layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
        {Object.entries(skillCategories).map(([categoryName, categoryData], categoryIndex) => {

          return (
            <motion.div
              key={categoryName}
              variants={itemVariants}
              className="relative group"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Glow effect */}
              <div
                className="absolute -inset-1 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${categoryData.color}40, ${categoryData.color}20)`
                }}
              />

              <Card
                className="relative z-10 transition-all duration-300 h-full border-2 hover:shadow-xl"
                style={{
                  borderColor: `${categoryData.color}30`,
                }}
              >
                <CardHeader className="text-center pb-6">
                  <motion.div
                    className="mx-auto w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-4 shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${categoryData.color}20, ${categoryData.color}10)`
                    }}
                    whileHover={{ scale: 1.1, rotate: categoryIndex % 2 === 0 ? 5 : -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {categoryData.icon}
                  </motion.div>
                  <CardTitle
                    className="text-xl font-bold leading-tight"
                    style={{ color: categoryData.color }}
                  >
                    {categoryName}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {categoryData.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      custom={index}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-3 text-sm font-medium">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="leading-tight">{skill.name}</span>
                        </span>
                        <span className="text-xs text-foreground/60 font-mono bg-foreground/5 px-2 py-1 rounded">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-foreground/10 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{
                            background: `linear-gradient(90deg, ${categoryData.color}, ${categoryData.color}80)`
                          }}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1.2, delay: (categoryIndex * 0.3) + (index * 0.1) + 0.5 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-center mt-20"
      >
        <motion.p
          variants={itemVariants}
          className="text-lg text-foreground/70 mb-4"
        >
          Ready to bring your vision to life with both creative flair and technical excellence?
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-4 text-sm text-foreground/50"
        >
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[color:var(--brand-blue)]"></span>
            Technical Mastery
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[color:var(--brand-green)]"></span>
            Creative Vision
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[color:var(--brand-orange)]"></span>
            Strategic Impact
          </span>
        </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
