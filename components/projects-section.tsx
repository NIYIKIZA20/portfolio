import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function ProjectsSection() {
  const projects = [
    {
      title: "Tie the Knot",
      description:
        "A modern dating and wedding planning application that connects couples and helps them plan their perfect wedding. Features user matching, venue booking, and vendor connections.",
      image: "/datingapp.png",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "NestJS", "TypeScript", "Supabase"],
      liveUrl: "https://tieknot.vercel.app/",
    },
    {
      title: "Aguka",
      description:
        "A modern, responsive community saving and lending platform. Built with React and Tailwind on the frontend, Node.js, Express and TypeScript on the server side.",
      image: "/aguka.png",
      technologies: ["React", "Tailwind CSS", "TypeScript", "Node.js", "Webpack"],
      liveUrl: "https://aguka2025.vercel.app/",
    },
    {
      title: "MEP Electric",
      description:
        "A full-stack web application for showcasing MEP business and its portfolio. Features user authentication, interactive UI, admin dashboard and payment integration.",
      image: "/ecommerce-dashboard.png",
      technologies: ["Next.js", "NestJS", "TypeScript", "Stripe"],
      liveUrl: "https://meperictrictech.com",
    },
    {
      title: "Clean Water Monitoring",
      description:
        "A real-time water quality monitoring system using IoT sensors to measure parameters like pH, turbidity, and temperature. Data is transmitted to a web dashboard for analysis and alerts.",
      image: "/placeholder.svg",
      technologies: ["Research", "IoT", "Sensors", "Embedded Systems"],
      liveUrl: "https://sciforum.net/paper/view/17629",
    },
  ];

  const doubled = [...projects, ...projects];

  return (
    <section id="projects" className="py-24 bg-muted/25 dark:bg-muted/10 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* Section heading */}
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Featured Projects
            </h2>
            <div className="mx-auto mt-3 mb-6 h-1 w-14 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full" />
            <p
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Here are some of my recent projects that showcase my skills in
              full-stack development, from concept to deployment.
            </p>
          </div>

        </div>
      </div>

      {/* Horizontal auto-scroll carousel — full viewport width */}
      <div
        className="relative"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 80px, black calc(100% - 80px), transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 80px, black calc(100% - 80px), transparent)",
        }}
      >
        <div className="flex gap-6 animate-marquee w-max px-6 pb-4">
          {doubled.map((project, index) => (
            <Card
              key={index}
              className="group flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border bg-white dark:bg-slate-800/80 w-80 flex-shrink-0"
            >
              {/* Project image */}
              <div className="relative overflow-hidden h-48 shrink-0">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span
                    className="px-2.5 py-1 bg-white/90 dark:bg-black/80 text-foreground text-xs font-semibold rounded-full backdrop-blur-sm"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Live
                  </span>
                </div>
              </div>

              <CardHeader className="pb-2">
                <CardTitle
                  className="text-lg"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex flex-col flex-1 space-y-3">
                <p
                  className="text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-3"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-0.5 bg-muted text-muted-foreground text-xs font-medium rounded-md border border-border/60"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span
                      className="px-2 py-0.5 bg-muted text-muted-foreground text-xs font-medium rounded-md border border-border/60"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <Button
                  size="sm"
                  className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-700 dark:hover:bg-slate-100 transition-all duration-300 font-semibold"
                  asChild
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-3.5 w-3.5 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* View All Projects CTA */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-700 dark:hover:bg-slate-100 font-semibold px-10 transition-all duration-300 gap-2"
              asChild
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <Link href="/projects">
                View All Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
