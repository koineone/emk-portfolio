"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="container py-20">
      <div className="grid gap-10 md:grid-cols-[1fr_1px_1fr]">
        {/* Left: Intro + Facts */}
        <div className="max-w-xl">
          <h2 className="text-2xl font-semibold tracking-tight">About</h2>
          <p className="mt-2 text-foreground/70">
            I’m Erick Koine, an ICT Support and Developer with over 7 years of experience across finance, consulting,
            and education sectors. I specialize in IT infrastructure administration, web development, automation, and creative design.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Quick Facts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-1 text-sm text-foreground/80">
                <div>📍 Nairobi, Kenya</div>
                <div>💼 7+ years in ICT Support & Development</div>
                <div>🏢 Banking, consulting, and academia</div>
                <div>🎨 Founder of Bush Bristles</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Focus Areas</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-foreground/80">
                • IT Infrastructure (Windows, Linux, Mac, AD, O365, Azure)
                <br />• Web Development (Python, Django, HTML/CSS, WordPress, Next.js)
                <br />• Automation & Scripting (PowerShell, Robocopy, batch files)
                <br />• Creative Design (Adobe Suite, branding)
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block bg-foreground/10 w-px" />

        {/* Right: Timeline */}
        <div>
          <h3 className="text-lg font-medium">Timeline</h3>
          <ol className="mt-4 space-y-6 border-l border-foreground/10 pl-6">
            <li>
              <div className="-ml-[31px] h-2.5 w-2.5 rounded-full bg-[color:var(--brand-green)]" />
              <p className="mt-2 text-sm text-foreground/80">
                2024—now · Freelance — Building Bush Bristles and delivering design + tech solutions.
              </p>
            </li>
            <li>
              <div className="-ml-[31px] h-2.5 w-2.5 rounded-full bg-[color:var(--brand-orange)]" />
              <p className="mt-2 text-sm text-foreground/80">
                2022—2024 · Dry Associates Investment Bank — ICT support automation, web revamp coordination.
              </p>
            </li>
            <li>
              <div className="-ml-[31px] h-2.5 w-2.5 rounded-full bg-[color:var(--brand-blue)]" />
              <p className="mt-2 text-sm text-foreground/80">
                2020—2022 · Oracle Edge — IT support, documentation, stakeholder training.
              </p>
            </li>
            <li>
              <div className="-ml-[31px] h-2.5 w-2.5 rounded-full bg-[color:var(--brand-red)]" />
              <p className="mt-2 text-sm text-foreground/80">
                2018—2020 · Dry Associates Investment Bank — Core support and process improvements.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

