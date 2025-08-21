import Link from "next/link";

export const metadata = {
  title: "Blog | Erick Koine",
  description: "Thoughts on design, development, and ICT.",
};

const posts = [
  {
    slug: "design-and-tech-together",
    title: "How Design and Tech Work Together to Solve Real Problems",
    excerpt: "A practical look at blending aesthetics with systems thinking to deliver outcomes.",
    tags: ["Design", "Strategy"],
  },
  {
    slug: "7-years-ict-support-lessons",
    title: "What 7 Years in ICT Support Taught Me About Business Growth",
    excerpt: "From troubleshooting to transformation—lessons that impact revenue and reliability.",
    tags: ["ICT", "Operations"],
  },
  {
    slug: "nextjs-15-portfolios",
    title: "Building Modern Portfolios with Next.js 15",
    excerpt: "Performance, polish, and process for a winning personal site.",
    tags: ["Web", "Next.js"],
  },
];

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
      <p className="mt-2 text-sm text-foreground/70">
        Notes on design, development, and ICT operations.
      </p>

      <ul className="mt-8 space-y-6">
        {posts.map((p) => (
          <li key={p.slug} className="rounded-lg border border-foreground/10 p-5 hover:bg-foreground/5 transition">
            <Link href={`/blog/${p.slug}`} className="block">
              <h2 className="text-xl font-medium">{p.title}</h2>
              <p className="mt-1 text-sm text-foreground/70">{p.excerpt}</p>
              <div className="mt-3 flex gap-2 text-xs text-foreground/60">
                {p.tags.map((t) => (
                  <span key={t} className="rounded bg-foreground/10 px-2 py-0.5">
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

