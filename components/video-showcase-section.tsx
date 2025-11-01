"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink, Clock, Eye } from "lucide-react";

interface VideoItem {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  views: string;
  youtubeId: string;
  category: "tutorial" | "project-showcase" | "tech-talk" | "behind-scenes";
}

const videoShowcase: VideoItem[] = [
  {
    id: "1",
    title: "Building a Full-Stack E-commerce App",
    description:
      "Complete walkthrough of building a modern e-commerce application with React, Node.js, and PostgreSQL.",
    thumbnail: "/video-ecommerce-tutorial.png",
    duration: "45:30",
    views: "12.5K",
    youtubeId: "R5U5gjUXx4Y",
    category: "tutorial",
  },
  {
    id: "2",
    title: "My Development Setup & Workflow",
    description:
      "A deep dive into my development environment, tools, and productivity tips for full-stack development.",
    thumbnail: "/video-dev-setup.png",
    duration: "25:15",
    views: "8.2K",
    youtubeId: "R5U5gjUXx4Y",
    category: "behind-scenes",
  },
  {
    id: "3",
    title: "React Performance Optimization Tips",
    description:
      "Advanced techniques for optimizing React applications, including memoization, lazy loading, and more.",
    thumbnail: "/video-react-performance.png",
    duration: "32:45",
    views: "15.7K",
    youtubeId: "R5U5gjUXx4Y",
    category: "tech-talk",
  },
];

export function VideoShowcaseSection() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Videos" },
    { id: "tutorial", label: "Tutorials" },
    { id: "project-showcase", label: "Projects" },
    { id: "tech-talk", label: "Tech Talks" },
    { id: "behind-scenes", label: "Behind Scenes" },
  ];

  const filteredVideos =
    activeCategory === "all"
      ? videoShowcase
      : videoShowcase.filter((video) => video.category === activeCategory);

  const getCategoryColor = (category: VideoItem["category"]) => {
    switch (category) {
      case "tutorial":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "project-showcase":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "tech-talk":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      case "behind-scenes":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Video Content & Tutorials
            </h2>
            <p
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Explore my video content where I share development tutorials,
              project walkthroughs, and insights from my coding journey.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className="mb-2"
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video) => (
              <Card
                key={video.id}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={
                      video.thumbnail ||
                      "/placeholder.svg?height=200&width=350&query=video thumbnail"
                    }
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-primary rounded-full p-4">
                      <Play className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {video.duration}
                  </div>

                  {/* Category Badge */}
                  <div
                    className={`absolute top-2 left-2 px-2 py-1 rounded text-xs font-medium ${getCategoryColor(video.category)}`}
                  >
                    {video.category.replace("-", " ")}
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3
                    className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {video.title}
                  </h3>
                  <p
                    className="text-muted-foreground mb-4"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {video.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Eye className="h-4 w-4" />
                      <span style={{ fontFamily: "var(--font-body)" }}>
                        {video.views} views
                      </span>
                    </div>
                    <a
                      href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Video Modal */}
          {selectedVideo && (
            <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
              <div className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
                    title={selectedVideo.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3
                        className="text-2xl font-bold mb-2"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {selectedVideo.title}
                      </h3>
                      <p
                        className="text-muted-foreground"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {selectedVideo.description}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      onClick={() => setSelectedVideo(null)}
                    >
                      ✕
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
