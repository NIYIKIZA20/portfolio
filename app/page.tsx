import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { VideoIntroSection } from "@/components/video-intro-section";
// <CHANGE> Removed VideoShowcaseSection import for simplicity and professionalism
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { BlogSection } from "@/components/blog-section";
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
        <VideoIntroSection />
      </IntersectionObserver>

      {/* <CHANGE> Removed VideoShowcaseSection for cleaner, more professional layout */}

      <IntersectionObserver>
        <AboutSection />
      </IntersectionObserver>

      <IntersectionObserver>
        <ProjectsSection />
      </IntersectionObserver>

      <IntersectionObserver>
        <BlogSection />
      </IntersectionObserver>

      <IntersectionObserver>
        <ContactSection />
      </IntersectionObserver>

      <Footer />
      <ChatModal />
    </main>
  );
}
