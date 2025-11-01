import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export function ProjectsSection() {
  const projects = [
    {
      title: "Dating App - Tie the Knot",
      description:
        "A modern dating and wedding planning application that connects couples and helps them plan their perfect wedding. Features user matching, venue booking, and vendor connections.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2EmE9EHTvLXdhKGptURsT3unvjoASa.png",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      liveUrl:
        "https://personal-portifolio-yse9-kfp067xk5-niyikizas-projects.vercel.app/",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "A modern, responsive portfolio website showcasing my skills and projects. Built with Next.js, featuring dark/light mode, smooth animations, and interactive components.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-I8xnFUTzzCJeEBgjyKsN8g2MaP4MVG.png",
      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      liveUrl:
        "https://personal-portifolio-git-main-niyikizas-projects.vercel.app/",
    },
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      image: "/ecommerce-dashboard.png",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      liveUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Featured Projects
            </h2>
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
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader>
                  <CardTitle
                    className="text-xl"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p
                    className="text-muted-foreground"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-primary/10 text-primary text-sm rounded-md"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button size="sm" className="w-full" asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
