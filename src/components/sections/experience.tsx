"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements = [
    {
      number: "6-8",
      unit: "tickets daily",
      description: "Resolved IT tickets daily improving company productivity",
      icon: "🎯",
      color: "var(--brand-blue)"
    },
    {
      number: "80%",
      unit: "cost reduction",
      description: "Saved company costs by designing in-house forms, profiles, and brand materials",
      icon: "💰",
      color: "var(--brand-green)"
    },
    {
      number: "60%",
      unit: "time saved",
      description: "Delivered end-to-end CDS trading workflow reducing processing time",
      icon: "⚡",
      color: "var(--brand-orange)"
    },
    {
      number: "15+",
      unit: "projects",
      description: "Successfully launched client projects through Bush Bristles studio",
      icon: "🚀",
      color: "var(--brand-red)"
    },
    {
      number: "99.8%",
      unit: "uptime",
      description: "Achieved system reliability through automated monitoring and maintenance",
      icon: "🛡️",
      color: "var(--brand-blue)"
    },
    {
      number: "95%",
      unit: "retention",
      description: "Client retention rate across creative and technical service divisions",
      icon: "🤝",
      color: "var(--brand-green)"
    }
  ];

  return (
    <section id="experience" className="relative py-32 overflow-hidden" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--brand-red)]/3 via-transparent to-[color:var(--brand-orange)]/3" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Impact & Achievements
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Measurable results that demonstrate the value of combining technical expertise with strategic thinking.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.description}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <Card className="border-2 border-foreground/10 hover:border-[color:var(--brand-blue)]/30 transition-all duration-300 hover:shadow-xl h-full">
                <CardContent className="p-8 text-center space-y-4">
                  <motion.div
                    className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center text-2xl shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${achievement.color}20, ${achievement.color}10)`
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {achievement.icon}
                  </motion.div>

                  <div>
                    <motion.div
                      className="text-4xl md:text-5xl font-bold mb-2"
                      style={{ color: achievement.color }}
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.5, type: "spring", stiffness: 200 }}
                    >
                      {achievement.number}
                    </motion.div>
                    <div className="text-sm font-medium text-foreground/60 uppercase tracking-wider mb-4">
                      {achievement.unit}
                    </div>
                  </div>

                  <p className="text-foreground/70 leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

