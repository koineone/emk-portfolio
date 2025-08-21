import Link from "next/link";
import { Linkedin, Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-foreground/10">
      <div className="container flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-foreground/60">© {new Date().getFullYear()} Erick Koine. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link className="hover:opacity-80" href="https://www.linkedin.com/in/erick-koine/" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></Link>
          <Link className="hover:opacity-80" href="https://x.com/bushbristles" aria-label="X (Twitter)"><Twitter className="h-5 w-5" /></Link>
          <Link className="hover:opacity-80" href="https://instagram.com/bushbristles" aria-label="Instagram"><Instagram className="h-5 w-5" /></Link>
          <Link className="hover:opacity-80" href="https://facebook.com/bushbristles" aria-label="Facebook"><Facebook className="h-5 w-5" /></Link>
        </div>
      </div>
    </footer>
  );
}

