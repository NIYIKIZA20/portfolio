import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

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
  ];

  return (
    <section id="projects" className="py-24 bg-muted/25 dark:bg-muted/10">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-400 hover:-translate-y-2 border-border/60 bg-card/80 backdrop-blur-sm"
              >
                {/* Project image */}
                <div className="relative overflow-hidden h-48">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Live badge on hover */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-2.5 py-1 bg-white/90 dark:bg-black/80 text-foreground text-xs font-semibold rounded-full backdrop-blur-sm" style={{ fontFamily: "var(--font-heading)" }}>
                      Live
                    </span>
                  </div>
                </div>

                <CardHeader className="pb-2">
                  <CardTitle
                    className="text-xl"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p
                    className="text-sm text-muted-foreground leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2.5 py-0.5 bg-muted/80 dark:bg-muted/60 text-foreground/70 text-xs font-medium rounded-md border border-border/50"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Button
                    size="sm"
                    className="w-full mt-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-700 dark:hover:bg-slate-100 transition-all duration-300 font-semibold"
                    asChild
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-3.5 w-3.5 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
