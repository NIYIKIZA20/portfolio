import { Header } from "@/components/header";
import Head from 'next/head';
import { HeroSection } from "@/components/hero-section";
// <CHANGE> Removed VideoShowcaseSection import for simplicity and professionalism
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { ChatModal } from "@/components/chat-modal";
import { IntersectionObserver } from "@/components/intersection-observer";


export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Head>
        <title>Jean Baptiste | Full-Stack Software Developer & IoT Engineer</title>
        <meta name="description" content="Portfolio of Jean Baptiste, a Software Developer specializing in React, Next.js, Node.js, and Embedded Systems (ESP32) based in Rwanda." />
        <meta property="og:title" content="Jean Baptiste | Full-Stack Developer Portfolio" />
        <meta property="og:description" content="Explore web platforms and innovative IoT projects built by JB." />
        <meta property="og:image" content="https://yourportfolio.vercel.app/og-image.jpg" />
      </Head>
      <HeroSection />
      
      <IntersectionObserver>
        <AboutSection />
      </IntersectionObserver>

      <IntersectionObserver>
        <ProjectsSection />
      </IntersectionObserver>

      <IntersectionObserver>
        <ContactSection />
      </IntersectionObserver>

      <Footer />
      <ChatModal />
    </main>
  );
}
