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
    <section id="experience" className="container py-20">
      <h2 className="text-3xl font-semibold tracking-tight">Experience</h2>
      <div className="mt-6 space-y-4">
        {highlights.map((h) => (
          <div key={h.role} className="rounded-lg border border-foreground/10 p-4">
            <div className="font-medium">{h.role}</div>
            <div className="text-sm text-foreground/70">{h.copy}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

