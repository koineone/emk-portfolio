import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com";
  const now = new Date().toISOString();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/blog/design-and-tech-together`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/blog/7-years-ict-support-lessons`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/blog/nextjs-15-portfolios`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];
}

