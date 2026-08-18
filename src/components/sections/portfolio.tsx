"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Reveal, SectionHeading } from "@/components/reveal";

const TAGS = ["All", "Web", "Design", "Branding", "Automation"] as const;
type Tag = (typeof TAGS)[number];

type Project = {
  title: string;
  kicker: string;
  summary: string;
  tags: Tag[];
  images?: string[];
  details: { challenge: string; solution: string; impact: string };
  stack: string[];
  featured?: boolean;
  year: string;
  client: string;
  outcome?: string;
};

const PROJECTS: Project[] = [
  {
    title: "Dry Associates CDS System",
    kicker: "Financial operations platform",
    summary:
      "End-to-end trading workflow system that connected prospecting, administration and settlement into one operational flow.",
    tags: ["Web", "Automation"],
    stack: ["Python", "Django", "PostgreSQL", "REST APIs"],
    images: ["/projects/dry-1.svg"],
    featured: true,
    year: "2024",
    client: "Dry Associates Investment Bank",
    outcome: "60% less processing time",
    details: {
      challenge:
        "Manual CDS trading processes were slow, error-prone, and lacked a reliable audit trail.",
      solution:
        "A web-based operations system with automated workflows, real-time processing, and compliance tracking.",
      impact:
        "Processing time dropped by 60%, manual errors were removed from the core path, and reporting became consistent.",
    },
  },
  {
    title: "Crypsense Product Platform",
    kicker: "Crypto product UX & web",
    summary:
      "Product design and web platform for a cryptocurrency product — analytics UI, onboarding flow, and a coherent visual system.",
    tags: ["Web", "Design"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Figma"],
    images: ["/projects/salmasamu-1.svg", "/projects/salmasamu-2.svg"],
    featured: true,
    year: "2023",
    client: "Crypsense",
    details: {
      challenge:
        "The product needed a clearer interface and a web experience that new users could actually follow.",
      solution:
        "Designed and built a responsive web platform with real-time charts, authentication, and a tighter information hierarchy.",
      impact:
        "A clearer onboarding path and a product surface that could be used on both desktop and mobile.",
    },
  },
  {
    title: "Salma Samu Beauty Brand",
    kicker: "Identity + commerce",
    summary: "Brand identity and e-commerce presence for a luxury beauty line.",
    tags: ["Branding", "Design", "Web"],
    stack: ["Adobe Creative Suite", "Shopify", "Brand Strategy"],
    images: ["/projects/salmasamu-1.svg", "/projects/salmasamu-2.svg"],
    year: "2023",
    client: "Salma Samu",
    details: {
      challenge:
        "A new beauty brand needed a complete identity and a shoppable digital presence.",
      solution:
        "Brand system, packaging direction, and a commerce storefront with social-ready assets.",
      impact:
        "Launched with a coherent brand across print, packaging and web.",
    },
  },
  {
    title: "Bush Bristles Studio",
    kicker: "Creative technology studio",
    summary:
      "Founded a studio at the intersection of design and technology — branding, websites and digital systems under one roof.",
    tags: ["Branding", "Web"],
    stack: ["Brand Strategy", "Next.js", "Adobe Creative Suite"],
    images: ["/projects/bush-bristles-1.svg", "/projects/bush-bristles-2.svg"],
    featured: true,
    year: "2024",
    client: "Bush Bristles",
    outcome: "15+ client projects",
    details: {
      challenge:
        "Most providers split creative and technical work. Clients had to stitch the two together.",
      solution:
        "A studio model that delivers brand, web and systems from one team.",
      impact:
        "15+ projects delivered with a 95% client retention rate across both divisions.",
    },
  },
  {
    title: "Cerny Bureau Enterprises",
    kicker: "Corporate identity",
    summary: "Corporate identity and digital presence for a professional consulting firm.",
    tags: ["Branding", "Design"],
    stack: ["Adobe Creative Suite", "Brand Guidelines", "Print Design"],
    images: ["/projects/cerny-1.svg"],
    year: "2023",
    client: "Cerny Bureau",
    details: {
      challenge:
        "An established consulting firm needed a modern identity that still felt serious.",
      solution:
        "Brand system, guidelines, print collateral and a cohesive digital presence.",
      impact:
        "A clearer professional image across proposals, print and web.",
    },
  },
  {
    title: "Infrastructure Automation",
    kicker: "Enterprise IT operations",
    summary:
      "Backup and monitoring automation that took routine maintenance off the critical path.",
    tags: ["Automation"],
    stack: ["PowerShell", "Python", "Veeam", "Zabbix"],
    year: "2022",
    client: "Dry Associates",
    outcome: "75% fewer manual tasks",
    details: {
      challenge:
        "Manual backups, monitoring and reporting were consuming the IT team's week.",
      solution:
        "Automated backup, monitoring and reporting across the environment.",
      impact:
        "Manual task time dropped by 75%, with 99.8% uptime through automated watch.",
    },
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="group w-full text-left"
        >
          <article className="overflow-hidden rounded-[1.5rem] border border-foreground/10 bg-foreground/[0.02] transition-transform duration-300 md:hover:-translate-y-1">
            <div className="relative aspect-[16/10] overflow-hidden bg-foreground/5">
              {project.images?.[0] ? (
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--brand-blue)]/15 to-[color:var(--accent)]/15" />
              )}
              <div className="absolute left-4 top-4 flex items-center gap-2">
                <span className="rounded-full bg-background/85 px-2.5 py-1 font-mono text-[11px] text-foreground/70 backdrop-blur">
                  {number}
                </span>
                {project.featured && (
                  <span className="rounded-full bg-[color:var(--accent)] px-2.5 py-1 text-[11px] font-medium text-white">
                    Featured
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-4 p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-foreground/45">
                    {project.kicker}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-semibold tracking-tight sm:text-2xl">
                    {project.title}
                  </h3>
                </div>
                <span className="shrink-0 pt-1 text-xs text-foreground/40">{project.year}</span>
              </div>

              <p className="text-[15px] leading-relaxed text-foreground/65">{project.summary}</p>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-foreground/10 px-3 py-1 text-xs text-foreground/60"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between gap-3 pt-1">
                {project.outcome ? (
                  <span className="text-sm font-medium text-[color:var(--accent)]">
                    {project.outcome}
                  </span>
                ) : (
                  <span />
                )}
                <span className="inline-flex items-center gap-1 text-sm font-medium text-foreground">
                  View case study
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </div>
          </article>
        </button>
      </DialogTrigger>

      <DialogContent className="max-h-[90dvh] w-[min(96vw,920px)] overflow-y-auto rounded-2xl p-5 sm:p-8">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl font-semibold tracking-tight">
            {project.title}
          </DialogTitle>
        </DialogHeader>
        <p className="text-sm text-foreground/50">{project.client} · {project.year}</p>

        {project.images?.length ? (
          <Carousel className="mt-4">
            <CarouselContent>
              {project.images.map((src, idx) => (
                <CarouselItem key={src}>
                  <div className="relative aspect-video overflow-hidden rounded-xl bg-foreground/5">
                    <Image src={src} alt={`${project.title} ${idx + 1}`} fill className="object-cover" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {project.images.length > 1 && (
              <>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </>
            )}
          </Carousel>
        ) : null}

        <div className="mt-6 grid gap-5">
          {[
            { label: "Challenge", body: project.details.challenge },
            { label: "Solution", body: project.details.solution },
            { label: "Impact", body: project.details.impact },
          ].map((block) => (
            <div key={block.label}>
              <p className="text-[11px] uppercase tracking-[0.18em] text-foreground/40">{block.label}</p>
              <p className="mt-1.5 text-[15px] leading-relaxed text-foreground/75">{block.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span key={s} className="rounded-full border border-foreground/10 px-3 py-1 text-xs text-foreground/60">
              {s}
            </span>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function PortfolioSection() {
  const [active, setActive] = useState<Tag>("All");
  const visible = PROJECTS.filter((p) => active === "All" || p.tags.includes(active));

  return (
    <section id="work" className="relative py-20 sm:py-24 lg:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects that had to work in the real world."
          description="Software, brand systems and infrastructure — chosen because they moved a business, not because they looked good in a grid."
        />

        <Reveal delay={0.1} className="mt-10">
          <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 no-scrollbar sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
            {TAGS.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setActive(tag)}
                className={`h-11 shrink-0 rounded-full px-5 text-sm font-medium transition-colors ${
                  active === tag
                    ? "bg-foreground text-background"
                    : "border border-foreground/12 text-foreground/65 hover:border-foreground/30"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
          <AnimatePresence mode="popLayout">
            {visible.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
