"use client";

import { Reveal, SectionHeading } from "@/components/reveal";

const achievements = [
  {
    number: "60%",
    unit: "workflow time reduced",
    description: "CDS trading operations moved off manual process at Dry Associates.",
  },
  {
    number: "80%",
    unit: "design cost reduced",
    description: "In-house forms, profiles and brand materials instead of outsourcing.",
  },
  {
    number: "15+",
    unit: "client projects",
    description: "Work delivered through Bush Bristles across brand, web and systems.",
  },
  {
    number: "7+",
    unit: "years in the field",
    description: "ICT, software and creative work across finance, consulting and education.",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-20 sm:py-24 lg:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Impact"
          title="Numbers that came from the work."
          description="A few results worth standing behind. The case studies explain the rest."
        />

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-[1.5rem] border border-foreground/10 bg-foreground/10 md:grid-cols-4">
          {achievements.map((item, i) => (
            <Reveal key={item.unit} delay={i * 0.06}>
              <article className="h-full bg-background p-5 sm:p-7">
                <div className="font-display text-3xl font-semibold tracking-tight text-[color:var(--accent)] sm:text-4xl md:text-[2.75rem]">
                  {item.number}
                </div>
                <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.14em] text-foreground/50">
                  {item.unit}
                </p>
                <p className="mt-3 hidden text-sm leading-relaxed text-foreground/55 sm:block">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
