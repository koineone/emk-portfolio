import { Hero } from "@/components/hero";
import { AboutSection, PortfolioSection, SkillsSection, TestimonialsSection, ContactSection } from "@/components/sections";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <PortfolioSection />
      <SkillsSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
