export function ExperienceSection() {
  const highlights = [
    {
      role: "ICT Support & Developer — Dry Associates Investment Bank",
      copy:
        "Automated processes, managed redesign, improved uptime and cut costs."
    },
    {
      role: "Founder — Bush Bristles",
      copy:
        "Branding and technology studio delivering web, automation and design."
    }
  ];
  return (
    <section id="experience" className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--brand-red)]/5 via-transparent to-[color:var(--brand-orange)]/5" />

      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12 text-center">Experience</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {highlights.map((h) => (
              <div key={h.role} className="rounded-xl border border-foreground/10 p-8 bg-background/50 backdrop-blur-sm hover:border-[color:var(--brand-blue)]/30 transition-all duration-300">
                <div className="text-xl font-semibold mb-4">{h.role}</div>
                <div className="text-base text-foreground/70 leading-relaxed">{h.copy}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

