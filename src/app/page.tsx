import { Hero } from "@/components/hero";
import { AboutSection, PortfolioSection, SkillsSection, TestimonialsSection, ContactSection, ExpertiseSection, ExperienceSection } from "@/components/sections";

export default function Home() {
  return (
    <main>
      <Hero />
      <ExpertiseSection />
      <PortfolioSection />
      <ExperienceSection />
      <SkillsSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
