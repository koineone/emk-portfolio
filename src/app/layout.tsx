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
import { Home, User, Briefcase, FolderOpen, Mail, Download, Sun, Moon } from "lucide-react";

import { CustomCursor } from "@/components/custom-cursor";

import { Logo } from "@/components/logo";

import { Footer } from "@/components/footer";

import { PageTransition } from "@/components/page-transition";
import { Preloader } from "@/components/preloader";

export const metadata: Metadata = {
  title: "Erick Koine — Designer • Developer • ICT Professional",
  description:
    "Portfolio of Erick Koine: ICT support, web development, design, and automation.",
  metadataBase: new URL("https://www.example.com"),
  icons: { icon: "/emk-logo-color.svg" },
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
          <Preloader />
          <header className="sticky top-0 z-50 border-b border-foreground/20 bg-background/95 backdrop-blur-md">
            <div className="container px-4 sm:px-6 lg:px-8 flex h-20 items-center gap-6">
              <Link href="/" aria-label="Erick Koine" className="hover:opacity-80 transition-opacity">
                <Logo height={48} className="translate-y-[1px]" />
              </Link>

              <div className="contents">
                <nav className="hidden md:flex items-center gap-6 pl-4">
                  <a className="flex items-center gap-2 text-sm text-foreground/70 hover:text-[color:var(--brand-blue)] transition-colors" href="#home">
                    <Home className="h-4 w-4" />
                    Home
                  </a>
                  <a className="flex items-center gap-2 text-sm text-foreground/70 hover:text-[color:var(--brand-blue)] transition-colors" href="#about">
                    <User className="h-4 w-4" />
                    About
                  </a>
                  <a className="flex items-center gap-2 text-sm text-foreground/70 hover:text-[color:var(--brand-blue)] transition-colors" href="#expertise">
                    <Briefcase className="h-4 w-4" />
                    Expertise
                  </a>
                  <a className="flex items-center gap-2 text-sm text-foreground/70 hover:text-[color:var(--brand-blue)] transition-colors" href="#work">
                    <FolderOpen className="h-4 w-4" />
                    Work
                  </a>
                  <a className="flex items-center gap-2 text-sm text-foreground/70 hover:text-[color:var(--brand-blue)] transition-colors" href="#contact">
                    <Mail className="h-4 w-4" />
                    Contact
                  </a>
                </nav>

                <div className="flex items-center gap-3 ml-auto">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="hidden sm:inline-flex border-[color:var(--brand-green)] text-[color:var(--brand-green)] hover:bg-[color:var(--brand-green)] hover:text-white"
                  >
                    <a href="/resume.pdf" download className="flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      Resume
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
