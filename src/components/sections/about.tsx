"use client";

import { MapPin, ArrowRight } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/reveal";

const stats = [
  { value: "7+", label: "Years experience" },
  { value: "15+", label: "Projects delivered" },
  { value: "3", label: "Core disciplines" },
  { value: "NBO", label: "Based in Nairobi" },
];

const timeline = [
  {
    title: "IT Support",
    body: "Networking, hardware and the unglamorous work of keeping people productive.",
  },
  {
    title: "Systems",
    body: "Internal platforms that replaced slow, manual processes — including the Dry Associates operations system.",
  },
  {
    title: "Development",
    body: "Web products, brand systems and digital experiences for clients through Bush Bristles.",
  },
  {
    title: "Strategy",
    body: "The work now sits where software, infrastructure and business decisions meet.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 sm:py-24 lg:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="About"
          title="Beyond the code."
          description="Seven years turning business problems into systems that actually get used."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="text-base leading-relaxed text-foreground/70 sm:text-lg">
                I&apos;m Erick Koine — a developer and designer who came up through ICT, not a bootcamp
                slide deck. I started by fixing the things that break. I stayed because the interesting
                problems were always one layer above the ticket.
              </p>
            </Reveal>
            <Reveal delay={0.08} className="mt-5">
              <p className="text-base leading-relaxed text-foreground/70 sm:text-lg">
                By day I work on software and infrastructure. Beyond that I run{" "}
                <span className="text-foreground">Bush Bristles</span> — a creative technology studio
                helping businesses with branding, websites and digital systems.
              </p>
            </Reveal>

            <Reveal delay={0.12} className="mt-8 flex items-center gap-2 text-sm text-foreground/55">
              <MapPin className="h-4 w-4 text-[color:var(--accent)]" />
              Nairobi, Kenya
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[1.5rem] border border-foreground/10 bg-foreground/10">
              {stats.map((s) => (
                <div key={s.label} className="bg-background p-5 sm:p-6">
                  <div className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-[0.14em] text-foreground/45">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-16">
          <p className="mb-8 text-[11px] font-medium uppercase tracking-[0.22em] text-foreground/40">
            The path
          </p>
          <ol className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
            {timeline.map((step, i) => (
              <li
                key={step.title}
                className="relative border-t border-foreground/10 py-6 sm:border-t-0 sm:border-l sm:px-6 sm:first:border-l-0 sm:first:pl-0"
              >
                <div className="mb-3 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-[color:var(--accent)]">
                  {String(i + 1).padStart(2, "0")}
                  {i < timeline.length - 1 && (
                    <ArrowRight className="hidden h-3 w-3 text-foreground/25 lg:inline" />
                  )}
                </div>
                <h3 className="font-display text-xl font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/60">{step.body}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
