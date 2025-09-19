"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const TAGS = ["All", "Web", "Design", "Branding", "Automation"] as const;

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
  featured?: boolean;
  year?: string;
  client?: string;
};

const PROJECTS: Project[] = [
  {
    title: "Dry Associates CDS Trading System",
    summary: "End-to-end trading workflow system that streamlined operations and reduced processing time by 60%.",
    tags: ["Web", "Automation"],
    stack: ["Python", "Django", "PostgreSQL", "REST APIs"],
    images: ["/projects/dry-1.svg"],
    featured: true,
    year: "2024",
    client: "Dry Associates Investment Bank",
    details: {
      challenge: "Manual CDS trading processes were time-consuming, error-prone, and lacked proper audit trails, hindering the bank's operational efficiency.",
      solution: "Developed a comprehensive web-based trading system with automated workflows, real-time data processing, and integrated compliance tracking.",
      impact: "Reduced processing time by 60%, eliminated manual errors, improved compliance reporting, and saved $25K+ annually in operational costs."
    }
  },
  {
    title: "Crypsense Crypto Platform",
    summary: "Modern cryptocurrency trading platform with real-time analytics and secure wallet integration.",
    tags: ["Web", "Design"],
    stack: ["Next.js", "TypeScript", "TailwindCSS", "Figma"],
    images: ["/projects/salmasamu-1.svg", "/projects/salmasamu-2.svg"],
    featured: true,
    year: "2023",
    client: "Crypsense",
    details: {
      challenge: "Existing crypto platforms lacked intuitive design and real-time data visualization, creating barriers for new users entering the cryptocurrency market.",
      solution: "Designed and developed a user-friendly platform with real-time charts, secure authentication, and responsive design optimized for both desktop and mobile.",
      impact: "Increased user engagement by 150%, reduced onboarding time by 40%, and achieved 4.8/5 user satisfaction rating."
    }
  },
  {
    title: "Salma Samu Beauty Brand",
    summary: "Complete brand identity and e-commerce platform for luxury beauty products.",
    tags: ["Branding", "Design", "Web"],
    stack: ["Adobe Creative Suite", "Shopify", "Brand Strategy"],
    images: ["/projects/salmasamu-1.svg", "/projects/salmasamu-2.svg"],
    year: "2023",
    client: "Salma Samu",
    details: {
      challenge: "New beauty brand needed comprehensive identity and online presence to compete in the saturated luxury beauty market.",
      solution: "Created elegant brand identity, packaging design, and custom e-commerce platform with integrated social media marketing tools.",
      impact: "Launched successfully with 200+ pre-orders, achieved 85% brand recognition in target market, and generated $50K+ in first quarter sales."
    }
  },
  {
    title: "Bush Bristles Creative Studio",
    summary: "Founded creative and technology studio serving 15+ clients with integrated design and development services.",
    tags: ["Branding", "Web"],
    stack: ["Brand Strategy", "Next.js", "Adobe Creative Suite", "Business Development"],
    images: ["/projects/bush-bristles-1.svg", "/projects/bush-bristles-2.svg"],
    featured: true,
    year: "2024",
    client: "Bush Bristles",
    details: {
      challenge: "Market gap existed for integrated creative and technical services, with most providers specializing in only one area.",
      solution: "Established comprehensive studio offering both creative design and technical development under one roof with streamlined project delivery.",
      impact: "Successfully launched 15+ client projects, achieved 95% client retention rate, and established sustainable revenue streams across both divisions."
    }
  },
  {
    title: "Cerny Bureau Enterprises",
    summary: "Corporate identity and digital presence for professional consulting firm.",
    tags: ["Branding", "Design"],
    stack: ["Adobe Creative Suite", "Brand Guidelines", "Print Design"],
    images: ["/projects/cerny-1.svg"],
    year: "2023",
    client: "Cerny Bureau",
    details: {
      challenge: "Established consulting firm needed modern rebrand to reflect their expertise and attract high-value clients in competitive market.",
      solution: "Developed sophisticated brand identity with comprehensive guidelines, professional collateral, and cohesive digital presence.",
      impact: "Increased client inquiries by 120%, improved brand perception scores by 60%, and secured 3 major enterprise contracts within 6 months."
    }
  },
  {
    title: "IT Infrastructure Automation",
    summary: "Automated backup and monitoring systems reducing manual tasks by 75% across enterprise environment.",
    tags: ["Automation"],
    stack: ["PowerShell", "Python", "Veeam", "Zabbix"],
    year: "2022",
    client: "Dry Associates",
    details: {
      challenge: "Manual IT processes were time-consuming, error-prone, and prevented the team from focusing on strategic initiatives.",
      solution: "Implemented comprehensive automation suite for backups, monitoring, reporting, and routine maintenance tasks.",
      impact: "Reduced manual task time by 75%, improved system reliability to 99.8% uptime, and freed up 20+ hours weekly for strategic projects."
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
    <section id="work" className="relative py-32 overflow-hidden" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--brand-blue)]/3 via-transparent to-[color:var(--brand-green)]/3" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Featured Work</h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            A curated selection of projects showcasing the intersection of design, technology, and strategic impact.
          </p>
        </motion.div>

        {/* Filter Tags */}
        <motion.div
          className="mb-12 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {TAGS.map((t) => (
            <motion.button
              key={t}
              onClick={() => setActive(t)}
              className={`relative rounded-xl border-2 px-6 py-3 text-sm font-medium transition-all duration-300 ${
                active === t
                  ? "bg-[color:var(--brand-blue)] text-white border-[color:var(--brand-blue)] shadow-lg"
                  : "border-foreground/20 hover:border-[color:var(--brand-blue)]/40 hover:bg-[color:var(--brand-blue)]/5"
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {active === t && (
                <motion.div
                  className="absolute inset-0 bg-[color:var(--brand-blue)] rounded-xl"
                  layoutId="activeFilter"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{t}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-none"
        >
        <AnimatePresence mode="wait">
          {visible.map((p, index) => (
            <motion.div
              key={p.title}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              layout
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={p.featured ? "md:col-span-2 lg:col-span-2" : ""}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="cursor-pointer group h-full"
                  >
                    <Card className="overflow-hidden border-2 border-foreground/10 hover:border-[color:var(--brand-blue)]/30 transition-all duration-500 hover:shadow-2xl h-full">
                      <div className="relative overflow-hidden">
                        {p.images && p.images.length > 0 ? (
                          <div className={`relative overflow-hidden ${p.featured ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
                            <Image
                              src={p.images[0]}
                              alt={p.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Featured Badge */}
                            {p.featured && (
                              <div className="absolute top-4 left-4">
                                <Badge className="bg-[color:var(--brand-green)] text-white border-0 shadow-lg">
                                  Featured
                                </Badge>
                              </div>
                            )}

                            {/* Year Badge */}
                            {p.year && (
                              <div className="absolute top-4 right-4">
                                <Badge variant="outline" className="bg-white/90 text-foreground border-white/50 backdrop-blur-sm">
                                  {p.year}
                                </Badge>
                              </div>
                            )}
                          </div>
                        ) : (
                          <div className={`bg-gradient-to-br from-[color:var(--brand-blue)]/10 to-[color:var(--brand-green)]/10 flex items-center justify-center ${p.featured ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
                            <span className="text-4xl opacity-50">🚀</span>
                          </div>
                        )}

                        {/* Hover overlay */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-[color:var(--brand-blue)]/95 via-[color:var(--brand-blue)]/80 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
                          initial={{ opacity: 0, y: 20 }}
                          whileHover={{ opacity: 1, y: 0 }}
                        >
                          <div className="text-center text-white">
                            <div className="text-2xl mb-2">👁️</div>
                            <span className="font-medium">View Case Study</span>
                          </div>
                        </motion.div>
                      </div>

                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between gap-4">
                          <CardTitle className="text-xl font-bold group-hover:text-[color:var(--brand-blue)] transition-colors leading-tight">
                            {p.title}
                          </CardTitle>
                          {p.client && (
                            <span className="text-xs text-foreground/60 font-medium shrink-0">
                              {p.client}
                            </span>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-foreground/70 leading-relaxed">{p.summary}</p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {p.tags.map((t) => (
                            <Badge
                              key={t}
                              variant="outline"
                              className="text-xs border-[color:var(--brand-blue)]/30 text-[color:var(--brand-blue)] hover:bg-[color:var(--brand-blue)]/10"
                            >
                              {t}
                            </Badge>
                          ))}
                        </div>

                        {/* Tech Stack */}
                        {p.stack && (
                          <div className="flex flex-wrap gap-2">
                            {p.stack.slice(0, 3).map((s) => (
                              <span
                                key={s}
                                className="text-xs bg-foreground/5 text-foreground/70 px-3 py-1 rounded-full font-medium"
                              >
                                {s}
                              </span>
                            ))}
                            {p.stack.length > 3 && (
                              <span className="text-xs text-foreground/50 px-3 py-1">
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
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-[color:var(--brand-blue)] mb-4">
                      {p.title}
                    </DialogTitle>
                  </DialogHeader>

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

