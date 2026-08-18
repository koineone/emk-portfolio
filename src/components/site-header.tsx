"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { NairobiTime } from "@/components/nairobi-time";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "#home", label: "Home", id: "home" },
  { href: "#work", label: "Work", id: "work" },
  { href: "#expertise", label: "Expertise", id: "expertise" },
  { href: "#about", label: "About", id: "about" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const sections = NAV.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0, 0.2, 0.5, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-[70] transition-colors duration-300",
          scrolled || open
            ? "border-b border-foreground/10 bg-background/85 backdrop-blur-xl"
            : "border-b border-transparent bg-background/50 backdrop-blur-md"
        )}
      >
        <div className="container flex h-14 items-center justify-between gap-3 md:h-16 lg:h-[4.5rem]">
          <Link
            href="#home"
            aria-label="Erick Koine"
            className="flex shrink-0 items-center"
            onClick={() => {
              setOpen(false);
              setActive("#home");
            }}
          >
            <Logo height={32} />
          </Link>

          <nav className="hidden md:block" aria-label="Primary">
            <ul className="flex items-center rounded-full border border-foreground/12 bg-foreground/[0.04] p-1 backdrop-blur-xl">
              {NAV.map((item) => {
                const isActive = active === item.href;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setActive(item.href)}
                      className={cn(
                        "relative flex h-9 items-center whitespace-nowrap rounded-full px-2.5 text-xs font-medium transition-colors lg:px-4 lg:text-[13px]",
                        isActive ? "text-background" : "text-foreground/70 hover:text-foreground"
                      )}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-full bg-foreground"
                          transition={{ type: "spring", stiffness: 500, damping: 36 }}
                        />
                      )}
                      <span className="relative z-10">{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center justify-end">
            <div className="flex items-center rounded-full border border-foreground/12 bg-foreground/[0.04] p-0.5 md:hidden">
              <ThemeToggle compact />
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>

            <div className="hidden items-center gap-2 md:flex">
              <a
                href="/resume.pdf"
                download
                className="inline-flex h-10 items-center gap-2 rounded-full bg-foreground px-4 text-[13px] font-medium text-background transition-opacity hover:opacity-90"
              >
                <Download className="h-3.5 w-3.5" />
                Resume
              </a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-background text-foreground md:hidden"
          >
            <div className="flex h-dvh flex-col px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-24">
              <nav className="flex flex-1 flex-col" aria-label="Mobile">
                {NAV.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => {
                      setActive(item.href);
                      setOpen(false);
                    }}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.35 }}
                    className="flex min-h-16 items-baseline gap-4 border-b border-foreground/8"
                  >
                    <span className="font-mono text-xs text-foreground/35">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={cn(
                        "font-display text-[2.4rem] font-semibold tracking-tight",
                        active === item.href ? "text-foreground" : "text-foreground/55"
                      )}
                    >
                      {item.label}
                    </span>
                  </motion.a>
                ))}
              </nav>

              <div className="mt-8 flex items-center justify-between gap-4">
                <ThemeToggle />
                <p className="text-xs text-foreground/45">
                  <NairobiTime />
                </p>
              </div>
              <a
                href="/resume.pdf"
                download
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-foreground text-base font-medium text-background"
              >
                Download résumé
                <Download className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
