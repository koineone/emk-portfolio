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
          <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/60 backdrop-blur">
            <div className="container flex h-14 items-center justify-between">
              <Link href="/" aria-label="Erick Koine">
                <Logo size={28} />
              </Link>
              <nav className="nav-links text-sm">
                <a className="nav-link" href="#home">home</a>
                <a className="nav-link" href="#expertise">expertise</a>
                <a className="nav-link" href="#work">work</a>
                <a className="nav-link" href="#experience">experience</a>
                <a className="nav-link" href="#contact">contact</a>
                <ThemeToggle />
              </nav>
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
