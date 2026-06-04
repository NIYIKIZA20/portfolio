import { Card, CardContent } from "@/components/ui/card";
import { Globe, Server, Layers, Cpu } from "lucide-react";

export function AboutSection() {
  const skills = [
    {
      icon: Globe,
      title: "Frontend Development",
      description: "React, Next.js, TypeScript, Tailwind CSS",
      color: "text-blue-500",
      bg: "bg-blue-500/10 group-hover:bg-blue-500/20",
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Node.js, Python, PostgreSQL, MongoDB",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10 group-hover:bg-emerald-500/20",
    },
    {
      icon: Layers,
      title: "3D Printing & Enclosure Design",
      description: "CAD and SolidWorks, 3D printing, CNC machining",
      color: "text-orange-500",
      bg: "bg-orange-500/10 group-hover:bg-orange-500/20",
    },
    {
      icon: Cpu,
      title: "Embedded Systems & IoT",
      description: "Industrial PCB design, circuit design & firmware",
      color: "text-violet-500",
      bg: "bg-violet-500/10 group-hover:bg-violet-500/20",
    },
  ];

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* Section heading */}
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              About Me
            </h2>
            <div className="mx-auto mt-3 mb-6 h-1 w-14 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full" />
            <p
              className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              I&apos;m a passionate Embedded Systems Engineer and Full Stack Web Developer with expertise in modern
              web technologies. I love creating digital solutions that make a
              difference — combining technical excellence with user-centered
              design to deliver exceptional experiences.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { value: "3+", label: "Years Experience", accent: "from-blue-500/20 to-blue-500/5", text: "text-blue-600 dark:text-blue-400" },
              { value: "25+", label: "Projects Completed", accent: "from-emerald-500/20 to-emerald-500/5", text: "text-emerald-600 dark:text-emerald-400" },
              { value: "10+", label: "Technologies Mastered", accent: "from-indigo-500/20 to-indigo-500/5", text: "text-indigo-600 dark:text-indigo-400" },
            ].map((stat, i) => (
              <Card
                key={i}
                className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br ${stat.accent} border-border/60`}
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`text-5xl font-black mb-2 ${stat.text}`}
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {stat.value}
                  </div>
                  <p
                    className="text-base text-muted-foreground font-medium"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Skills Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5 border-border/60"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className={`p-3 rounded-xl transition-colors duration-300 ${skill.bg}`}>
                      <skill.icon className={`h-7 w-7 ${skill.color}`} />
                    </div>
                  </div>
                  <h3
                    className="text-base font-semibold mb-2 leading-snug"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {skill.title}
                  </h3>
                  <p
                    className="text-sm text-muted-foreground leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
