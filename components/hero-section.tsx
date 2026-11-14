"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, Facebook } from "lucide-react";
import { WhatsAppIcon, XIcon } from "@/components/icons/social-icons";
import { useEffect, useState } from "react";
import Image from "next/image";
import { CV_URL } from "@/lib/profile-data";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleDownloadCV = () => {
    window.open(CV_URL, "_blank");
  };

  const handleViewWork = () => {
    document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
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

            {/* Greeting */}
            <p
              className="text-base md:text-lg font-medium text-muted-foreground mb-3 animate-fade-in"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Hello, my name is
            </p>

            {/* Name */}
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight animate-fade-in-up"
              style={{
                fontFamily: "var(--font-heading)",
                animationDelay: "0.1s",
              }}
            >
              <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 dark:from-white dark:via-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
                JB Niyikiza
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
                Smart Manufacturing | Embedded Systems &amp; IoT
              </h2>
              <div className="mt-3 h-1 w-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto lg:mx-0" />
            </div>

            {/* Description */}
            <p
              className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed animate-fade-in-up max-w-lg mx-auto lg:mx-0"
              style={{ fontFamily: "var(--font-body)", animationDelay: "0.3s" }}
            >
              Smart Manufacturing Engineer with a background in Electronics and
              Telecommunications, combining additive manufacturing, 3D/4D
              modelling and printing, semiconductor fabrication, PCB design, and
              embedded and IoT systems. MSc student at NTU Singapore, driven to
              contribute to chip design, semiconductor manufacturing, and advanced
              device R&amp;D.
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
              <a
                href="https://www.facebook.com/niyikizajb/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:border-blue-600 hover:text-blue-600 hover:bg-blue-600/5 transition-all duration-300"
                aria-label="Facebook Profile"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://x.com/jb_niyikiza"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:border-foreground hover:text-foreground hover:bg-foreground/5 transition-all duration-300"
                aria-label="X (Twitter) Profile"
              >
                <XIcon className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/250789092847"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:border-emerald-500 hover:text-emerald-500 hover:bg-emerald-500/5 transition-all duration-300"
                aria-label="Chat on WhatsApp"
              >
                <WhatsAppIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right: Profile Image - Portrait Style */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative animate-hero-image">
              {/* Soft ambient glow behind image */}
              <div className="absolute -inset-8 bg-gradient-to-br from-blue-400/20 via-indigo-400/15 to-purple-400/10 dark:from-blue-500/25 dark:via-indigo-500/20 dark:to-purple-500/15 rounded-[2rem] blur-2xl pointer-events-none" />

              {/* Animated gradient ring */}
              <div className="absolute -inset-1 rounded-[1.75rem] bg-gradient-to-br from-blue-500/40 via-indigo-500/30 to-purple-500/40 opacity-60 blur-sm" />

              {/* Main image container — portrait shape, rounded corners */}
              <div className="relative w-72 h-[26rem] md:w-80 md:h-[28rem] lg:w-[22rem] lg:h-[30rem] rounded-2xl overflow-hidden
                shadow-[0_20px_60px_-10px_rgba(0,0,0,0.20),0_8px_20px_-8px_rgba(0,0,0,0.12)]
                dark:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.65),0_8px_20px_-8px_rgba(0,0,0,0.40)]
                ring-1 ring-black/8 dark:ring-white/8">
                <Image
                  src="/jean-baptiste-profile.jpg"
                  alt="Jean Baptiste Niyikiza"
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
