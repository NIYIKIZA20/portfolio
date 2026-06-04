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
      "https://drive.google.com/file/d/1yw5e9MObECB6LTKeRFrHER-496jHOyk-/view?usp=drive_link",
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
      {/* Background: layered gradient + dot grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/60 dark:from-slate-950 dark:via-gray-950 dark:to-indigo-950/50" />
      <div
        className="absolute inset-0 opacity-50 dark:opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(148,163,184,0.22) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
      {/* Ambient radial light */}
      <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-indigo-400/10 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">

          {/* Left: Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">

            {/* Greeting chip */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-border/70 bg-background/80 backdrop-blur-sm text-sm text-muted-foreground mb-6 animate-fade-in shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Hello, my name is
            </div>

            {/* Name */}
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight animate-fade-in-up"
              style={{
                fontFamily: "var(--font-heading)",
                animationDelay: "0.1s",
              }}
            >
              <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 dark:from-white dark:via-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
                Jean Baptiste Niyikiza
              </span>
            </h1>

            {/* Title with accent underline */}
            <div
              className="mb-7 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <h2
                className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground/80"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Embedded Systems and Web Developer
              </h2>
              <div className="mt-3 h-1 w-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto lg:mx-0" />
            </div>

            {/* Description */}
            <p
              className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed animate-fade-in-up max-w-lg mx-auto lg:mx-0"
              style={{ fontFamily: "var(--font-body)", animationDelay: "0.3s" }}
            >
              I create exceptional digital experiences through innovative web
              solutions. Passionate about turning ideas into reality with modern
              technologies and clean, efficient code.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                size="lg"
                className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-700 dark:hover:bg-slate-100 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 font-semibold"
                onClick={handleViewWork}
                style={{ fontFamily: "var(--font-heading)" }}
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-border hover:border-slate-400 dark:hover:border-slate-500 hover:bg-muted/60 transition-all duration-300 hover:-translate-y-0.5 font-semibold"
                onClick={handleDownloadCV}
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <Download className="h-4 w-4 mr-2" />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div
              className="flex justify-center lg:justify-start gap-3 animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              <a
                href="https://github.com/NIYIKIZA20"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:border-foreground hover:text-foreground hover:bg-foreground/5 transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/niyikiza-jean-baptiste2025/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:border-blue-500 hover:text-blue-500 hover:bg-blue-500/5 transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:jbniyikiza20@gmail.com"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:border-foreground hover:text-foreground hover:bg-foreground/5 transition-all duration-300"
                aria-label="Send Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right: Profile Image - Portrait Style */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div
              className="relative animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              {/* Soft ambient glow behind image */}
              <div className="absolute -inset-10 bg-gradient-to-br from-blue-400/15 via-indigo-400/10 to-purple-400/10 dark:from-blue-500/25 dark:via-indigo-500/20 dark:to-purple-500/15 rounded-full blur-3xl pointer-events-none" />

              {/* Offset decorative background frame */}
              <div className="absolute inset-0 translate-x-4 translate-y-5 rounded-2xl bg-gradient-to-br from-slate-200/90 to-slate-100/70 dark:from-slate-700/60 dark:to-slate-800/50 border border-slate-300/60 dark:border-slate-600/30" />

              {/* Main image container — portrait shape, rounded corners */}
              <div className="relative w-72 h-[26rem] md:w-80 md:h-[28rem] lg:w-[22rem] lg:h-[30rem] rounded-2xl overflow-hidden
                shadow-[0_20px_60px_-10px_rgba(0,0,0,0.20),0_8px_20px_-8px_rgba(0,0,0,0.12)]
                dark:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.65),0_8px_20px_-8px_rgba(0,0,0,0.40)]
                ring-1 ring-black/8 dark:ring-white/8">
                <Image
                  src="/jean-baptiste-profile.jpg"
                  alt="Jean Baptiste Niyikiza - Full Stack Web Developer"
                  fill
                  className="object-cover object-top transition-transform duration-700 hover:scale-105"
                  priority
                />
                {/* Subtle vignette at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
