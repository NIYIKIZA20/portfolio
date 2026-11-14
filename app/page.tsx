import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { EducationSection } from "@/components/education-section";
import { SkillsExperienceSection } from "@/components/skills-experience-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { ChatModal } from "@/components/chat-modal";
import { IntersectionObserver } from "@/components/intersection-observer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />

      <IntersectionObserver>
        <EducationSection />
      </IntersectionObserver>

      <IntersectionObserver>
        <SkillsExperienceSection />
      </IntersectionObserver>

      <IntersectionObserver>
        <ContactSection />
      </IntersectionObserver>

      <Footer />
      <ChatModal />
    </main>
  );
}
