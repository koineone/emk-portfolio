import { Hero } from "@/components/hero";
import {
  AboutSection,
  PortfolioSection,
  ContactSection,
  ExpertiseSection,
  ExperienceSection,
} from "@/components/sections";
import { TestimonialsSection } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <PortfolioSection />
      <ExpertiseSection />
      <AboutSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
