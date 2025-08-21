"use client";

import { useState } from "react";
import Image from "next/image";
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

export function PortfolioSection() {
  const [active, setActive] = useState<Tag>("All");
  const visible = PROJECTS.filter((p) => active === "All" || p.tags.includes(active));

  return (
    <section id="portfolio" className="container py-20">
      <div className="mb-6 flex flex-wrap gap-2">
        {TAGS.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`rounded-full border px-3 py-1 text-sm ${
              active === t ? "bg-foreground text-background" : "border-foreground/20"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {visible.map((p) => (
          <Dialog key={p.title}>
            <DialogTrigger asChild>
              <Card className="hover:shadow-md transition cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-base">{p.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/70">{p.summary}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Badge key={t} variant="secondary">{t}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle>{p.title}</DialogTitle>
              </DialogHeader>
              <div className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
                <div>
                  {p.images && p.images.length ? (
                    <Carousel className="relative">
                      <CarouselContent>
                        {p.images.map((src, idx) => (
                          <CarouselItem key={idx}>
                            <div className="relative aspect-video overflow-hidden rounded">
                              <Image src={src} alt="" fill className="object-cover" />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
                  ) : (
                    <div className="aspect-video rounded bg-foreground/10" />
                  )}
                </div>
                <div>
                  {p.details && <p className="text-sm text-foreground/80">{p.details}</p>}
                  {p.stack && (
                    <div className="mt-3 flex flex-wrap gap-2 text-xs">
                      {p.stack.map((s) => (
                        <span key={s} className="rounded bg-foreground/10 px-2 py-0.5">{s}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
}

