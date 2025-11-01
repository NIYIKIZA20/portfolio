"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink, Globe } from "lucide-react";

export function VideoIntroSection() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<"en" | "fr">("en");

  const videos = {
    en: {
      youtubeId: "R5U5gjUXx4Y",
      title: "Jean Baptiste N. - Introduction Video (English)",
      description:
        "Learn about my background, skills, and passion for development",
    },
    fr: {
      youtubeId: "-Y7fBWO8oyI",
      title: "Jean Baptiste N. - Vidéo de Présentation (Français)",
      description:
        "Découvrez mon parcours, mes compétences et ma passion pour le développement",
    },
  };

  const currentVideo = videos[selectedLanguage];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Get to Know Me
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Watch my introduction video to learn more about my journey, passion
            for development, and what drives me to create exceptional digital
            experiences.
          </p>

          <div className="flex justify-center gap-2 mt-6">
            <Button
              variant={selectedLanguage === "en" ? "default" : "outline"}
              onClick={() => {
                setSelectedLanguage("en");
                setIsVideoLoaded(false);
              }}
              className="flex items-center gap-2"
            >
              <Globe className="h-4 w-4" />
              English
            </Button>
            <Button
              variant={selectedLanguage === "fr" ? "default" : "outline"}
              onClick={() => {
                setSelectedLanguage("fr");
                setIsVideoLoaded(false);
              }}
              className="flex items-center gap-2"
            >
              <Globe className="h-4 w-4" />
              Français
            </Button>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative aspect-video bg-card rounded-lg overflow-hidden shadow-2xl group">
            {!isVideoLoaded && (
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Button
                  onClick={() => setIsVideoLoaded(true)}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
                >
                  <Play className="h-6 w-6 mr-2" />
                  {selectedLanguage === "en"
                    ? "Watch Introduction"
                    : "Regarder la Présentation"}
                </Button>
              </div>
            )}

            {isVideoLoaded && (
              <iframe
                src={`https://www.youtube.com/embed/${currentVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                title={currentVideo.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}

            {/* Video overlay with additional info */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <h3
                    className="text-white font-semibold"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {currentVideo.title}
                  </h3>
                  <p
                    className="text-white/80 text-sm"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {currentVideo.description}
                  </p>
                </div>
                <a
                  href={`https://www.youtube.com/watch?v=${currentVideo.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary transition-colors"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Video Description */}
          <div className="mt-8 text-center">
            <p
              className="text-muted-foreground max-w-2xl mx-auto mb-6"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {selectedLanguage === "en"
                ? "In this video, I share my background, technical expertise, and the projects that have shaped my career. Discover how I can help bring your ideas to life through innovative web development solutions."
                : "Dans cette vidéo, je partage mon parcours, mes compétences techniques et les projets qui ont façonné ma carrière. Découvrez comment je peux aider à donner vie à vos idées grâce à des solutions innovantes en développement web."}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="text-center p-4 bg-card rounded-lg">
                <div
                  className="text-2xl font-bold text-primary mb-1"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  3+
                </div>
                <div
                  className="text-sm text-muted-foreground"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {selectedLanguage === "en"
                    ? "Years Experience"
                    : "Années d'Expérience"}
                </div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg">
                <div
                  className="text-2xl font-bold text-primary mb-1"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  25+
                </div>
                <div
                  className="text-sm text-muted-foreground"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {selectedLanguage === "en"
                    ? "Projects Completed"
                    : "Projets Terminés"}
                </div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg">
                <div
                  className="text-2xl font-bold text-primary mb-1"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  10+
                </div>
                <div
                  className="text-sm text-muted-foreground"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {selectedLanguage === "en"
                    ? "Technologies Mastered"
                    : "Technologies Maîtrisées"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
