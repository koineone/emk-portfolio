"use client";

import { Star } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/reveal";

const testimonials = [
  {
    quote:
      "Erick has the rare ability to combine deep technical knowledge with a creative eye for design. His work on our IT infrastructure and website redesign exceeded all expectations.",
    author: "Sarah Johnson",
    role: "ICT Manager",
    company: "Dry Associates Investment Bank",
    initials: "SJ",
  },
  {
    quote:
      "Professional, reliable, and innovative. He transformed our digital presence completely, delivering both stunning design and robust functionality.",
    author: "Michael Chen",
    role: "Operations Director",
    company: "Cerny Bureau Enterprises",
    initials: "MC",
  },
  {
    quote:
      "Working with Erick was a game-changer for our business. His dual expertise in design and development meant we got everything we needed from one talented professional.",
    author: "Amara Okafor",
    role: "Founder",
    company: "Salmasamuafrica",
    initials: "AO",
  },
  {
    quote:
      "Erick's automation solutions saved us countless hours and significantly reduced our operational costs. His technical skills are matched only by his professionalism.",
    author: "David Kimani",
    role: "IT Coordinator",
    company: "Oracle Edge",
    initials: "DK",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-20 sm:py-24 lg:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Clients"
          title="What working together feels like."
        />

        <Reveal delay={0.1} className="mt-12">
          <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 no-scrollbar md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0">
            {testimonials.map((t) => (
              <article
                key={t.author}
                className="min-w-[85%] snap-start rounded-[1.5rem] border border-foreground/10 p-6 sm:p-7 md:min-w-0"
              >
                <div className="flex gap-1 text-[color:var(--accent)]" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-[15px] leading-relaxed text-foreground/75">
                  {t.quote}
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-foreground/8 text-xs font-semibold">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{t.author}</p>
                    <p className="text-xs text-foreground/50">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
