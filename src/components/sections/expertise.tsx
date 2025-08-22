export function ExpertiseSection() {
  const items = [
    {
      title: "Software Development",
      copy:
        "Experienced in both functional and OOP: Python, Java, JavaScript, TypeScript."
    },
    {
      title: "Frontend Dev — React, Next.js",
      copy:
        "Passionate about UI/UX. 5+ years experience in React, HTML, CSS, JS."
    },
    {
      title: "Flutter Dev — Android, iOS",
      copy:
        "Skilled in developing hybrid mobile apps and cross‑platform solutions."
    }
  ];

  return (
    <section id="expertise" className="container py-20">
      <h2 className="text-3xl font-semibold tracking-tight text-center">My Expertise</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {items.map((it) => (
          <div key={it.title} className="rounded-lg border border-foreground/10 p-5 bg-background/60">
            <h3 className="font-semibold">{it.title}</h3>
            <p className="mt-2 text-sm text-foreground/70">{it.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

