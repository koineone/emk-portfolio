"use client";

import { useState } from "react";
import { Code2, Cloud, PenTool } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/reveal";

const disciplines = [
  {
    id: "engineering",
    title: "Engineering",
    icon: Code2,
    description: "Digital systems from backend architecture to frontend experiences.",
    skills: ["Python", "Django", "Next.js", "React", "TypeScript", "PostgreSQL", "MySQL", "REST APIs"],
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    icon: Cloud,
    description: "Reliable business IT — networks, cloud, automation and uptime.",
    skills: ["Microsoft 365", "Azure", "Linux", "Networking", "PowerShell", "Veeam", "Zabbix", "Security"],
  },
  {
    id: "creative",
    title: "Creative",
    icon: PenTool,
    description: "Brand identities and digital experiences built to communicate.",
    skills: ["UI/UX", "Adobe Creative Suite", "Brand Identity", "Web Design", "Print", "Prototyping"],
  },
];

export function ExpertiseSection() {
  const [active, setActive] = useState(disciplines[0].id);
  const current = disciplines.find((d) => d.id === active) ?? disciplines[0];

  return (
    <section id="expertise" className="relative py-20 sm:py-24 lg:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="What I do"
          title="Three disciplines. One way of working."
          description="I sit at the intersection of software, infrastructure and design — so the work doesn't stall between teams."
        />

        <Reveal className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-foreground/12 bg-foreground/10 sm:grid-cols-3">
          {[
            { step: "01", title: "Diagnose", body: "Find the bottleneck — process, system, or brand." },
            { step: "02", title: "Design", body: "Shape the simplest thing that will actually get used." },
            { step: "03", title: "Deliver", body: "Ship, measure, and leave it running without you." },
          ].map((item) => (
            <div key={item.step} className="bg-background px-5 py-5 sm:p-6">
              <p className="font-mono text-[11px] text-[color:var(--accent)]">{item.step}</p>
              <h3 className="mt-2 font-display text-xl font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[color:var(--muted-foreground)]">{item.body}</p>
            </div>
          ))}
        </Reveal>

        {/* Mobile: tabs + pills */}
        <div className="mt-12 md:hidden">
          <div className="-mx-5 flex gap-2 overflow-x-auto px-5 no-scrollbar">
            {disciplines.map((d) => (
              <button
                key={d.id}
                type="button"
                onClick={() => setActive(d.id)}
                className={`h-11 shrink-0 rounded-full px-5 text-sm font-medium transition-colors ${
                  active === d.id
                    ? "bg-foreground text-background"
                    : "border border-foreground/12 text-foreground/65"
                }`}
              >
                {d.title}
              </button>
            ))}
          </div>
          <div className="mt-8">
            <p className="text-[15px] leading-relaxed text-foreground/65">{current.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {current.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-foreground/10 bg-foreground/[0.03] px-3.5 py-2 text-sm text-foreground/75"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop: three cards */}
        <div className="mt-14 hidden gap-6 md:grid md:grid-cols-3">
          {disciplines.map((d, i) => {
            const Icon = d.icon;
            return (
              <Reveal key={d.id} delay={i * 0.08}>
                <article className="h-full rounded-[1.5rem] border border-foreground/10 p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--accent)]/10 text-[color:var(--accent)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight">{d.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-foreground/60">{d.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {d.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-foreground/10 px-3 py-1.5 text-xs text-foreground/65"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
