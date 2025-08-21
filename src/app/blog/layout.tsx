import type { ReactNode } from "react";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <main className="container mx-auto max-w-3xl px-6 py-16">
      {children}
    </main>
  );
}

