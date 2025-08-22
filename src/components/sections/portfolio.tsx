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
  details?: string;
  stack?: string[];
};

const PROJECTS: Project[] = [
  {
    title: "Bush Bristles",
    summary: "Founded a dual-division brand for creative + tech services.",
    tags: ["Design", "Business"],
    stack: ["Branding", "Design", "Web"],
    images: ["/projects/bush-bristles-1.svg", "/projects/bush-bristles-2.svg"],
    details:
      "Built a cohesive brand system and service model combining creative design and technical implementation.",
  },
  {
    title: "Salmasamuafrica",
    summary: "Brand identity and website for a luxury African fashion label.",
    tags: ["Design", "Web", "Business"],
    stack: ["Branding", "Next.js", "Design"],
    images: ["/projects/salmasamu-1.svg", "/projects/salmasamu-2.svg"],
    details:
      "Led visual identity work and implemented a fast, elegant catalog site with a minimal CMS.",
  },
  {
    title: "Cerny Bureau Enterprises",
    summary: "Corporate logistics site simplifying complex services.",
    tags: ["Web", "Business"],
    stack: ["Next.js", "UI/UX"],
    images: ["/projects/cerny-1.svg"],
    details:
      "Clarified offerings, streamlined navigation, and improved conversion through clearer copy and flows.",
  },
  {
    title: "Dry Associates Investment Bank",
    summary: "Automated ICT processes, managed website redesign, cut IT costs.",
    tags: ["IT", "Business"],
    stack: ["Windows", "Linux", "Automation"],
    images: ["/projects/dry-1.svg"],
    details:
      "Drove cost reductions by scripting routine tasks, improving uptime, and coordinating web updates.",
  },
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
    <section id="work" className="container py-20" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Featured Work</h2>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
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
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2"
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
                <DialogContent className="max-w-4xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">{p.title}</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
                    <div>
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
                          <CarouselPrevious />
                          <CarouselNext />
                        </Carousel>
                      ) : (
                        <div className="aspect-video rounded-lg bg-gradient-to-br from-[color:var(--brand-blue)]/10 to-[color:var(--brand-green)]/10 flex items-center justify-center">
                          <span className="text-6xl opacity-30">🚀</span>
                        </div>
                      )}
                    </div>
                    <div className="space-y-4">
                      {p.details && (
                        <div>
                          <h4 className="font-semibold mb-2">About this project</h4>
                          <p className="text-sm text-foreground/80 leading-relaxed">{p.details}</p>
                        </div>
                      )}
                      {p.stack && (
                        <div>
                          <h4 className="font-semibold mb-2">Technologies used</h4>
                          <div className="flex flex-wrap gap-2">
                            {p.stack.map((s) => (
                              <span
                                key={s}
                                className="text-xs bg-[color:var(--brand-blue)]/10 text-[color:var(--brand-blue)] px-3 py-1 rounded-full border border-[color:var(--brand-blue)]/20"
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      <div>
                        <h4 className="font-semibold mb-2">Categories</h4>
                        <div className="flex flex-wrap gap-2">
                          {p.tags.map((t) => (
                            <Badge
                              key={t}
                              variant="outline"
                              className="border-[color:var(--brand-green)]/30 text-[color:var(--brand-green)]"
                            >
                              {t}
                            </Badge>
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
    </section>
  );
}

