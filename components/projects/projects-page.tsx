"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowLeft, Code2, Layers, Cpu, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const allProjects = [
  {
    id: 1,
    title: "Tie the Knot",
    description:
      "A modern dating and wedding planning application that connects couples and helps them plan their perfect wedding. Features user matching, venue booking, vendor connections, and real-time chat between matched users.",
    image: "/datingapp.png",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "NestJS", "TypeScript", "Supabase"],
    liveUrl: "https://tieknot.vercel.app/",
    category: "Web App",
    featured: true,
    year: "2024",
    status: "Live",
  },
  {
    id: 2,
    title: "Aguka",
    description:
      "A modern, responsive community saving and lending platform. Built with React and Tailwind on the frontend, Node.js, Express and TypeScript on the server side. Enables groups to manage shared funds transparently.",
    image: "/aguka.png",
    technologies: ["React", "Tailwind CSS", "TypeScript", "Node.js", "Webpack"],
    liveUrl: "https://aguka2025.vercel.app/",
    category: "Full-Stack",
    featured: false,
    year: "2025",
    status: "Live",
  },
  {
    id: 3,
    title: "MEP Electric",
    description:
      "A full-stack web application for showcasing MEP business and its portfolio. Features user authentication, interactive UI, admin dashboard and Stripe payment integration for service bookings.",
    image: "/ecommerce-dashboard.png",
    technologies: ["Next.js", "NestJS", "TypeScript", "Stripe"],
    liveUrl: "https://meperictrictech.com",
    category: "Full-Stack",
    featured: false,
    year: "2024",
    status: "Live",
  },
  {
    id: 4,
    title: "Clean Water Monitoring",
    description:
      "A real-time water quality monitoring system using IoT sensors to measure parameters like pH, turbidity, and temperature. Data is transmitted to a web dashboard for analysis and automated alerts. Research published in peer-reviewed proceedings.",
    image: "/placeholder.svg",
    technologies: ["Research", "IoT", "ESP32", "Sensors", "Embedded Systems"],
    liveUrl: "https://sciforum.net/paper/view/17629",
    category: "IoT & Research",
    featured: false,
    year: "2023",
    status: "Published",
  },
];

const filters = [
  { label: "All Projects", value: "All", icon: Globe },
  { label: "Web Apps", value: "Web App", icon: Code2 },
  { label: "Full-Stack", value: "Full-Stack", icon: Layers },
  { label: "IoT & Research", value: "IoT & Research", icon: Cpu },
];

const statusColors: Record<string, string> = {
  Live: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
  Published: "bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/30",
};

export function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter);

  const featuredProject = activeFilter === "All" ? allProjects.find((p) => p.featured) : null;
  const gridProjects =
    activeFilter === "All" ? allProjects.filter((p) => !p.featured) : filtered;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Hero */}
      <div className="relative pt-24 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-[#0a0a0f] dark:via-slate-900 dark:to-[#0a0a0f] overflow-hidden">
        {/* Dot grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1.5px, transparent 1.5px)",
            backgroundSize: "36px 36px",
          }}
        />
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm mb-10 group"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Home
          </Link>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            All Projects
          </h1>
          <p
            className="text-lg text-slate-400 max-w-2xl mb-14 leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            A collection of work spanning web applications, full-stack platforms, and IoT
            research — each built to solve real-world problems.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-10">
            {[
              { value: allProjects.length, label: "Projects" },
              { value: "15+", label: "Technologies" },
              { value: "3+", label: "Years Building" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-3xl md:text-4xl font-bold text-white"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-sm text-slate-400 mt-0.5"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">

          {/* Filter bar */}
          <div className="flex flex-wrap gap-3 mb-14">
            {filters.map(({ label, value, icon: Icon }) => {
              const count =
                value === "All"
                  ? allProjects.length
                  : allProjects.filter((p) => p.category === value).length;
              const isActive = activeFilter === value;
              return (
                <button
                  key={value}
                  onClick={() => setActiveFilter(value)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 border cursor-pointer ${
                    isActive
                      ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-slate-900 dark:border-white shadow-md scale-[1.02]"
                      : "bg-transparent text-muted-foreground border-border hover:border-slate-400 dark:hover:border-slate-500 hover:text-foreground"
                  }`}
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                  <span
                    className={`text-xs px-1.5 py-0.5 rounded-full font-semibold ${
                      isActive
                        ? "bg-white/20 dark:bg-black/20"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Featured project — only shown when "All" filter is active */}
          {featuredProject && (
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="text-xs font-semibold uppercase tracking-widest text-muted-foreground"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Featured
                </span>
                <div className="h-px flex-1 bg-border" />
              </div>

              <Card className="overflow-hidden border border-border bg-white dark:bg-slate-800/80 hover:shadow-2xl transition-all duration-500 group">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Image */}
                  <div className="relative h-64 md:h-auto min-h-[280px] overflow-hidden">
                    <Image
                      src={featuredProject.image || "/placeholder.svg"}
                      alt={featuredProject.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/20 dark:to-black/50" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span
                        className="px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {featuredProject.category}
                      </span>
                    </div>
                  </div>

                  {/* Details */}
                  <CardContent className="p-8 md:p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className="text-sm text-muted-foreground"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {featuredProject.year}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                        <span
                          className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${statusColors[featuredProject.status] ?? ""}`}
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                          {featuredProject.status}
                        </span>
                      </div>

                      <h2
                        className="text-2xl md:text-3xl font-bold mb-4 leading-tight"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {featuredProject.title}
                      </h2>
                      <p
                        className="text-muted-foreground leading-relaxed mb-6"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {featuredProject.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {featuredProject.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-md border border-border/60"
                            style={{ fontFamily: "var(--font-body)" }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button
                      className="w-full sm:w-auto bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-700 dark:hover:bg-slate-100 font-semibold transition-all duration-300"
                      asChild
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      <a
                        href={featuredProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Live Project
                      </a>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </div>
          )}

          {/* Projects grid */}
          {gridProjects.length > 0 && (
            <div>
              {featuredProject && (
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="text-xs font-semibold uppercase tracking-widest text-muted-foreground"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    More Projects
                  </span>
                  <div className="h-px flex-1 bg-border" />
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {gridProjects.map((project) => (
                  <Card
                    key={project.id}
                    className="group flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border bg-white dark:bg-slate-800/80"
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden h-48 shrink-0">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-3 left-3">
                        <span
                          className="px-2.5 py-1 bg-white/90 dark:bg-black/80 text-foreground text-xs font-semibold rounded-full backdrop-blur-sm"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <CardContent className="flex flex-col flex-1 p-5 space-y-4">
                      <div className="flex items-start justify-between gap-2">
                        <h3
                          className="text-lg font-bold leading-tight"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          {project.title}
                        </h3>
                        <span
                          className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full border shrink-0 mt-0.5 ${statusColors[project.status] ?? ""}`}
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          <span className="w-1 h-1 rounded-full bg-current" />
                          {project.status}
                        </span>
                      </div>

                      <p
                        className="text-sm text-muted-foreground leading-relaxed flex-1"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-0.5 bg-muted text-muted-foreground text-xs font-medium rounded-md border border-border/60"
                            style={{ fontFamily: "var(--font-body)" }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <span
                          className="text-xs text-muted-foreground"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {project.year}
                        </span>
                        <Button
                          size="sm"
                          className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-700 dark:hover:bg-slate-100 transition-all duration-300 font-semibold"
                          asChild
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
                            Live Demo
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-28">
              <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-5">
                <Globe className="h-7 w-7 text-muted-foreground" />
              </div>
              <h3
                className="text-xl font-bold mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                No projects found
              </h3>
              <p
                className="text-muted-foreground"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Try selecting a different category.
              </p>
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
