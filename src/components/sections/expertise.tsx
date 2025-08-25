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
    "ICT Operations & Infrastructure": [
      { name: "IT Infrastructure Administration", level: 95, icon: "🖥️" },
      { name: "Domain Administration & Active Directory", level: 92, icon: "🔐" },
      { name: "Network Administration and Monitoring (Zabbix)", level: 88, icon: "🌐" },
      { name: "Virtualization (Hyper-V, VMware)", level: 85, icon: "📦" },
      { name: "Cloud Services Administration (Azure, Office 365)", level: 90, icon: "☁️" },
      { name: "Backup & Disaster Recovery (Veeam, Acronis)", level: 87, icon: "💾" },
      { name: "Firewall Management (FortiGate, OPNsense)", level: 83, icon: "🛡️" },
      { name: "SAN/NAS Infrastructure", level: 80, icon: "🗄️" },
      { name: "PBX/IPBX Configuration (Avaya, 3CX)", level: 78, icon: "📞" },
      { name: "Endpoint Security Administration (ESET, Kaspersky)", level: 85, icon: "🔒" },
      { name: "Operating Systems (Windows, Linux, Mac OSX/iOS)", level: 93, icon: "💻" }
    ],
    "Development & Programming": [
      { name: "Python Programming", level: 88, icon: "🐍" },
      { name: "Django Framework", level: 85, icon: "🎯" },
      { name: "Web Development (HTML/CSS, JavaScript)", level: 82, icon: "🌐" },
      { name: "Database Management (PostgreSQL/MySQL)", level: 80, icon: "🗃️" },
      { name: "Version Control (GitHub/Bitbucket)", level: 85, icon: "📝" },
      { name: "Scripting & Automation (PowerShell)", level: 90, icon: "🤖" },
      { name: "In-house System Development & Troubleshooting", level: 87, icon: "🔧" }
    ],
    "Design & Creative": [
      { name: "Graphic Design (Adobe Creative Suite)", level: 88, icon: "🎨" },
      { name: "Website Design & Development", level: 85, icon: "🖌️" },
      { name: "Marketing Materials Design", level: 82, icon: "📄" },
      { name: "Digital Content Creation", level: 80, icon: "🎭" },
      { name: "Brand Consistency Management", level: 85, icon: "🏷️" },
      { name: "Print & Web Quality Assurance", level: 83, icon: "✅" }
    ],
    "Business Strategy & Management": [
      { name: "Project Management", level: 90, icon: "📊" },
      { name: "Budgeting & Cost Management", level: 88, icon: "💰" },
      { name: "Vendor Relationship Management", level: 85, icon: "🤝" },
      { name: "Team Leadership & Training", level: 87, icon: "👥" },
      { name: "Customer Service & Support", level: 92, icon: "🎧" },
      { name: "Problem-solving & Troubleshooting", level: 95, icon: "🔍" },
      { name: "Documentation & Reporting", level: 88, icon: "📋" },
      { name: "Inventory & Asset Management", level: 83, icon: "📦" }
    ]
  };

  return (
    <section id="expertise" className="relative py-20 overflow-hidden" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--brand-green)]/5 via-transparent to-[color:var(--brand-blue)]/5" />

      <div className="container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            Comprehensive Expertise
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-6 text-xl text-foreground/70 max-w-4xl mx-auto"
          >
            Strategic technology professional combining deep technical knowledge, creative design, and business acumen to drive measurable results.
          </motion.p>
        </motion.div>

        {/* Four-category grid layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-6 max-w-7xl mx-auto"
        >
        {Object.entries(skillCategories).map(([categoryName, skills], categoryIndex) => {
          const colors = [
            { from: "var(--brand-blue)", to: "var(--brand-green)", border: "var(--brand-blue)" },
            { from: "var(--brand-green)", to: "var(--brand-orange)", border: "var(--brand-green)" },
            { from: "var(--brand-orange)", to: "var(--brand-red)", border: "var(--brand-orange)" },
            { from: "var(--brand-red)", to: "var(--brand-blue)", border: "var(--brand-red)" }
          ];
          const colorScheme = colors[categoryIndex % colors.length];
          const icons = ["🖥️", "💻", "🎨", "📊"];
          const categoryIcon = icons[categoryIndex % icons.length];

          return (
            <motion.div
              key={categoryName}
              variants={itemVariants}
              className="relative"
            >
              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r from-[color:${colorScheme.from}] to-[color:${colorScheme.to}] rounded-xl blur opacity-20 transition-opacity duration-300 hover:opacity-30`} />

              <Card className={`relative z-10 border-[color:${colorScheme.border}]/20 hover:border-[color:${colorScheme.border}]/40 transition-all duration-300 h-full`}>
                <CardHeader className="text-center pb-4">
                  <motion.div
                    className={`mx-auto w-12 h-12 bg-gradient-to-br from-[color:${colorScheme.from}] to-[color:${colorScheme.to}] rounded-full flex items-center justify-center text-xl mb-3`}
                    whileHover={{ scale: 1.1, rotate: categoryIndex % 2 === 0 ? 5 : -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {categoryIcon}
                  </motion.div>
                  <CardTitle className={`text-lg font-bold text-[color:${colorScheme.border}] leading-tight`}>
                    {categoryName}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 max-h-80 overflow-y-auto">
                  {skills.slice(0, 6).map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      custom={index}
                      className="space-y-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-xs font-medium">
                          <span className="text-sm">{skill.icon}</span>
                          <span className="leading-tight">{skill.name}</span>
                        </span>
                        <span className="text-xs text-foreground/60 font-mono">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-foreground/10 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r from-[color:${colorScheme.from}] to-[color:${colorScheme.to}] rounded-full`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: (categoryIndex * 0.2) + (index * 0.1) + 0.5 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                  {skills.length > 6 && (
                    <div className="text-xs text-foreground/60 text-center pt-2">
                      +{skills.length - 6} more skills
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
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
      </div>
    </section>
  );
}
