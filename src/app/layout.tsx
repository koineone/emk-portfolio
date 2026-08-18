import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/page-transition";
import { Preloader } from "@/components/preloader";
import { CustomCursor } from "@/components/custom-cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Erick Koine — Developer × Designer × Systems",
  description:
    "Erick Koine builds technology that solves business problems — from software and infrastructure to digital experiences. Based in Nairobi.",
  metadataBase: new URL("https://www.example.com"),
  icons: { icon: "/emk-logo-color.svg" },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F4F1EA" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} antialiased min-h-dvh font-sans`}
      >
        <ThemeProvider>
          <Preloader />
          <SiteHeader />
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
