"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleDownloadCV = () => {
    window.open(
      "https://docs.google.com/document/d/1ffuINqC_QJB0kCKz892DSso3-QS9sbWR9aOeQW6RO9g/edit",
      "_blank",
    );
  };

  const handleViewWork = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  if (!mounted) return null;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(5,150,105,0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Greeting */}
            <div className="mb-4 animate-fade-in">
              <span
                className="text-lg text-muted-foreground"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Hello, my name is
              </span>
            </div>

            {/* Name */}
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-black mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in-up"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Jean Baptiste N.
            </h1>

            {/* Title */}
            <h2
              className="text-xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-4 animate-fade-in-up"
              style={{
                fontFamily: "var(--font-heading)",
                animationDelay: "0.2s",
              }}
            >
              Full Stack Web Developer
            </h2>

            {/* Description */}
            <p
              className="text-base md:text-lg lg:text-xl text-muted-foreground mb-6 leading-relaxed animate-fade-in-up"
              style={{ fontFamily: "var(--font-body)", animationDelay: "0.4s" }}
            >
              I create exceptional digital experiences through innovative web
              solutions. Passionate about turning ideas into reality with modern
              technologies and clean, efficient code.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8 animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground animate-pulse-glow shadow-professional"
                onClick={handleViewWork}
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent shadow-professional"
                onClick={handleDownloadCV}
              >
                <Download className="h-4 w-4 mr-2" />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div
              className="flex justify-center lg:justify-start space-x-6 animate-fade-in-up"
              style={{ animationDelay: "0.8s" }}
            >
              <a
                href="https://github.com/NIYIKIZA20"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
                aria-label="GitHub Profile"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/niyikiza-jean-baptiste2025/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:jbniyikiza20@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
                aria-label="Send Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div
              className="relative animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              {/* Profile Image Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Gradient Background Circle */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 animate-pulse-slow" />

                {/* Outer Ring */}
                <div className="absolute inset-2 rounded-full border-2 border-primary/30 animate-spin-slow" />

                {/* Profile Image */}
                <div className="absolute inset-4 rounded-full overflow-hidden shadow-2xl ring-4 ring-primary/20 hover:ring-primary/40 transition-all duration-300">
                  <Image
                    src="/jean-baptiste-profile.jpg"
                    alt="Jean Baptiste Niyikiza - Full Stack Web Developer"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    priority
                  />
                </div>

                {/* Floating Elements */}
                {/* <div
                  className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                />
                <div
                  className="absolute -bottom-4 -left-4 w-4 h-4 bg-accent rounded-full animate-bounce"
                  style={{ animationDelay: "1s" }}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
