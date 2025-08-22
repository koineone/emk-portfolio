import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import Link from "next/link";
import { Button } from "@/components/ui/button";

import { CustomCursor } from "@/components/custom-cursor";

import { Logo } from "@/components/logo";

import { Footer } from "@/components/footer";

import { PageTransition } from "@/components/page-transition";

export const metadata: Metadata = {
  title: "Erick Koine — Designer • Developer • ICT Professional",
  description:
    "Portfolio of Erick Koine: ICT support, web development, design, and automation.",
  metadataBase: new URL("https://www.example.com"),
  icons: { icon: "/emk-logo-light.svg" },
  manifest: "/manifest.webmanifest",
};

import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-dvh`}
      >
        <ThemeProvider>
          <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/80 backdrop-blur-md">
            <div className="container flex h-16 items-center justify-between">
              <Link href="/" aria-label="Erick Koine" className="hover:opacity-80 transition-opacity">
                <Logo size={32} />
              </Link>

              <div className="flex items-center gap-6">
                <nav className="hidden md:flex nav-links text-sm">
                  <a className="nav-link hover:text-[color:var(--brand-blue)] transition-colors" href="#home">home</a>
                  <a className="nav-link hover:text-[color:var(--brand-blue)] transition-colors" href="#about">about</a>
                  <a className="nav-link hover:text-[color:var(--brand-blue)] transition-colors" href="#expertise">expertise</a>
                  <a className="nav-link hover:text-[color:var(--brand-blue)] transition-colors" href="#work">work</a>
                  <a className="nav-link hover:text-[color:var(--brand-blue)] transition-colors" href="#contact">contact</a>
                </nav>

                <div className="flex items-center gap-3">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="hidden sm:inline-flex border-[color:var(--brand-green)] text-[color:var(--brand-green)] hover:bg-[color:var(--brand-green)] hover:text-white"
                  >
                    <a href="/resume.pdf" download>
                      📄 Resume
                    </a>
                  </Button>
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </header>
          <PageTransition>
            {children}
            <Footer />
          </PageTransition>
          <CustomCursor />
        </ThemeProvider>
      </body>
    </html>
  );
}
