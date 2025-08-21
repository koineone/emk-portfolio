"use client";

import { motion } from "framer-motion";

const skills = [
  { label: "Technical Support", level: 90 },
  { label: "Web Development", level: 70 },
  { label: "Automation", level: 80 },
  { label: "Creative Design", level: 75 },
];

export function SkillsSection() {
  return (
    <section id="skills" className="container py-20">
      <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
      <div className="mt-8 space-y-4">
        {skills.map((s) => (
          <div key={s.label}>
            <div className="mb-1 flex items-center justify-between text-sm">
              <span>{s.label}</span>
              <span className="text-foreground/60">{s.level}%</span>
            </div>
            <div className="h-2 rounded bg-foreground/10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="h-full rounded bg-foreground/80"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

