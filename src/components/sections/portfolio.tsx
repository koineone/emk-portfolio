"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const TAGS = ["All", "Design", "Web", "IT", "Business"] as const;

type Tag = typeof TAGS[number];

type Project = {
  title: string;
  summary: string;
  tags: Tag[];
  images?: string[];
  details?: string | {
    challenge: string;
    solution: string;
    impact: string;
  };
  stack?: string[];
};

const PROJECTS: Project[] = [
  {
    title: "IT Infrastructure Transformation",
    summary: "Reduced IT costs by 18% while improving system reliability for 40+ users.",
    tags: ["IT", "Business"],
    stack: ["Windows Server 2019", "Hyper-V", "Veeam", "Python"],
    images: ["/projects/dry-1.svg"],
    details: {
      challenge: "Dry Associates faced escalating IT costs, frequent system downtime, and manual processes that hindered productivity across 5 departments.",
      solution: "Implemented comprehensive infrastructure overhaul including Hyper-V virtualization, automated backup systems with Veeam, and developed Python-based automation scripts for routine tasks.",
      impact: "Achieved 18% cost reduction ($15K+ savings), eliminated paper workflows, improved system uptime to 99.5%, and reduced manual task time by 60%."
    }
  },
  {
    title: "Digital Transformation Initiative",
    summary: "Eliminated paper processes and reduced external design costs by 80%.",
    tags: ["Web", "Business", "Design"],
    stack: ["Python", "Django", "Adobe Creative Suite", "WordPress"],
    images: ["/projects/salmasamu-1.svg", "/projects/salmasamu-2.svg"],
    details: {
      challenge: "Multiple clients required expensive external design services and relied on inefficient paper-based workflows that slowed business operations.",
      solution: "Developed in-house design capabilities using Adobe Creative Suite, created electronic forms system, and built custom web solutions using Python/Django framework.",
      impact: "Reduced external design costs by 80%, eliminated paper workflows across 5 departments, improved process efficiency by 40%, and generated $12K+ in additional revenue through in-house services."
    }
  },
  {
    title: "Bush Bristles Brand & Technology Studio",
    summary: "Founded dual-division company combining creative design with technical solutions.",
    tags: ["Design", "Business", "Web"],
    stack: ["Branding", "Next.js", "Business Strategy", "Adobe Creative Suite"],
    images: ["/projects/bush-bristles-1.svg", "/projects/bush-bristles-2.svg"],
    details: {
      challenge: "Market gap existed for integrated creative and technical services, with most providers specializing in only one area, leading to fragmented client experiences.",
      solution: "Established Bush Bristles as a comprehensive studio offering both creative design and technical development services under one roof, ensuring seamless project delivery.",
      impact: "Successfully launched 15+ client projects, achieved 95% client retention rate, and established sustainable revenue streams across both creative and technical service divisions."
    }
  },
  {
    title: "Enterprise Security & Monitoring System",
    summary: "Implemented comprehensive security infrastructure protecting 40+ endpoints.",
    tags: ["IT", "Business"],
    stack: ["ESET", "Zabbix", "FortiGate", "CCTV Systems"],
    images: ["/projects/cerny-1.svg"],
    details: {
      challenge: "Organization lacked centralized security monitoring, had inconsistent endpoint protection, and no real-time network visibility, creating significant security vulnerabilities.",
      solution: "Deployed enterprise-grade security stack including ESET endpoint protection, Zabbix network monitoring, FortiGate firewall management, and 40-camera CCTV system with centralized monitoring.",
      impact: "Achieved 100% endpoint compliance, reduced security incidents by 90%, implemented 24/7 monitoring coverage, and established comprehensive audit trail for compliance requirements."
    }
  }
];

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



export function PortfolioSection() {
  const [active, setActive] = useState<Tag>("All");
  const visible = PROJECTS.filter((p) => active === "All" || p.tags.includes(active));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="relative py-20 overflow-hidden" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--brand-blue)]/5 via-transparent to-[color:var(--brand-green)]/5" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Featured Work</h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            A showcase of projects spanning design, development, and business solutions
          </p>
        </motion.div>

      <motion.div
        className="mb-8 flex flex-wrap justify-center gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {TAGS.map((t) => (
          <motion.button
            key={t}
            onClick={() => setActive(t)}
            className={`relative rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
              active === t
                ? "bg-[color:var(--brand-blue)] text-white border-[color:var(--brand-blue)] shadow-lg"
                : "border-foreground/20 hover:border-[color:var(--brand-blue)]/40 hover:bg-[color:var(--brand-blue)]/5"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {active === t && (
              <motion.div
                className="absolute inset-0 bg-[color:var(--brand-blue)] rounded-full"
                layoutId="activeFilter"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{t}</span>
          </motion.button>
        ))}
      </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto"
        >
        <AnimatePresence>
          {visible.map((p, index) => (
            <motion.div
              key={p.title}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              layout
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="cursor-pointer group"
                  >
                    <Card className="overflow-hidden border-foreground/10 hover:border-[color:var(--brand-blue)]/30 transition-all duration-300 hover:shadow-xl">
                      <div className="relative overflow-hidden">
                        {p.images && p.images.length > 0 ? (
                          <div className="relative aspect-video overflow-hidden">
                            <Image
                              src={p.images[0]}
                              alt={p.title}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        ) : (
                          <div className="aspect-video bg-gradient-to-br from-[color:var(--brand-blue)]/10 to-[color:var(--brand-green)]/10 flex items-center justify-center">
                            <span className="text-4xl opacity-50">🚀</span>
                          </div>
                        )}

                        {/* Hover overlay */}
                        <motion.div
                          className="absolute inset-0 bg-[color:var(--brand-blue)]/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                        >
                          <span className="text-white font-medium">View Details</span>
                        </motion.div>
                      </div>

                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg group-hover:text-[color:var(--brand-blue)] transition-colors">
                          {p.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-foreground/70 mb-4">{p.summary}</p>
                        <div className="flex flex-wrap gap-2">
                          {p.tags.map((t) => (
                            <Badge
                              key={t}
                              variant="secondary"
                              className="text-xs"
                            >
                              {t}
                            </Badge>
                          ))}
                        </div>
                        {p.stack && (
                          <div className="mt-3 flex flex-wrap gap-1">
                            {p.stack.slice(0, 3).map((s) => (
                              <span
                                key={s}
                                className="text-xs bg-[color:var(--brand-blue)]/10 text-[color:var(--brand-blue)] px-2 py-1 rounded"
                              >
                                {s}
                              </span>
                            ))}
                            {p.stack.length > 3 && (
                              <span className="text-xs text-foreground/50">
                                +{p.stack.length - 3} more
                              </span>
                            )}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                </DialogTrigger>
                <DialogContent className="w-full max-w-6xl max-h-[80vh] overflow-y-auto p-6 rounded-xl">
                  {/* Landscape Layout - Horizontal Flow */}
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Left: Image/Carousel */}
                    <div className="flex-1">
                      {p.images && p.images.length ? (
                        <Carousel className="relative">
                          <CarouselContent>
                            {p.images.map((src, idx) => (
                              <CarouselItem key={idx}>
                                <div className="relative aspect-video overflow-hidden rounded-lg">
                                  <Image src={src} alt={`${p.title} screenshot ${idx + 1}`} fill className="object-cover" />
                                </div>
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious className="left-3 w-8 h-8" />
                          <CarouselNext className="right-3 w-8 h-8" />
                        </Carousel>
                      ) : (
                        <div className="aspect-video rounded-lg bg-gradient-to-br from-[color:var(--brand-blue)]/10 to-[color:var(--brand-green)]/10 flex items-center justify-center">
                          <span className="text-5xl opacity-30">🚀</span>
                        </div>
                      )}
                    </div>

                    {/* Right: Text/Details */}
                    <div className="flex-1 space-y-4">
                      <h2 className="text-2xl font-bold">{p.title}</h2>

                      {/* Project Description */}
                      {p.details && (
                        <div className="space-y-4">
                          {typeof p.details === 'string' ? (
                            <p className="text-sm text-foreground/80 leading-relaxed">
                              {p.details}
                            </p>
                          ) : (
                            <>
                              <div className="bg-red-50 dark:bg-red-950/20 rounded-lg p-4 border-l-4 border-red-500">
                                <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">🎯 Challenge</h4>
                                <p className="text-sm text-red-600 dark:text-red-300 leading-relaxed">{p.details.challenge}</p>
                              </div>
                              <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 border-l-4 border-blue-500">
                                <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">🔧 Solution</h4>
                                <p className="text-sm text-blue-600 dark:text-blue-300 leading-relaxed">{p.details.solution}</p>
                              </div>
                              <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 border-l-4 border-green-500">
                                <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">📈 Impact</h4>
                                <p className="text-sm text-green-600 dark:text-green-300 leading-relaxed">{p.details.impact}</p>
                              </div>
                            </>
                          )}
                        </div>
                      )}

                      {/* Technologies */}
                      {p.stack && (
                        <div>
                          <h4 className="font-semibold mb-2">Technologies used</h4>
                          <div className="flex flex-wrap gap-2">
                            {p.stack.map((s) => (
                              <span
                                key={s}
                                className="px-3 py-1.5 text-xs rounded-full bg-[color:var(--brand-blue)]/20 border border-[color:var(--brand-blue)]/40 text-[color:var(--brand-blue)] font-medium"
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Categories */}
                      <div>
                        <h4 className="font-semibold mb-2">Categories</h4>
                        <div className="flex flex-wrap gap-2">
                          {p.tags.map((t) => (
                            <span
                              key={t}
                              className="px-3 py-1.5 text-xs rounded-full bg-[color:var(--brand-green)]/20 border border-[color:var(--brand-green)]/40 text-[color:var(--brand-green)] font-medium"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

