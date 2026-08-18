import Link from "next/link";
import { Linkedin, Instagram, Facebook, Twitter } from "lucide-react";
import { NairobiTime } from "@/components/nairobi-time";

const social = [
  { href: "https://www.linkedin.com/in/erick-koine/", label: "LinkedIn", icon: Linkedin },
  { href: "https://x.com/bushbristles", label: "X", icon: Twitter },
  { href: "https://instagram.com/bushbristles", label: "Instagram", icon: Instagram },
  { href: "https://facebook.com/bushbristles", label: "Facebook", icon: Facebook },
];

export function Footer() {
  return (
    <footer className="border-t border-foreground/10">
      <div className="container flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg font-semibold tracking-tight text-foreground">Erick Koine</p>
          <p className="mt-1 text-sm text-[color:var(--muted-foreground)]">
            Developer × Designer × Systems · <NairobiTime />
          </p>
        </div>
        <div className="flex items-center gap-2">
          {social.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-foreground/12 text-foreground/70 transition-colors hover:border-foreground/30 hover:text-foreground"
            >
              <s.icon className="h-4 w-4" />
            </Link>
          ))}
        </div>
      </div>
      <div className="container pb-8 text-xs text-foreground/45">
        © {new Date().getFullYear()} Erick Koine. All rights reserved.
      </div>
    </footer>
  );
}
