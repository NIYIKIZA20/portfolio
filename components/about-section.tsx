import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Globe, Smartphone } from "lucide-react";
import Image from "next/image";

export function AboutSection() {
  const skills = [
    {
      icon: Globe,
      title: "Frontend Development",
      description: "React, Next.js, TypeScript, Tailwind CSS",
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Node.js, Python, PostgreSQL, MongoDB",
    },
    {
      icon: Code,
      title: "Full Stack Solutions",
      description: "End-to-end application development",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "React Native, Progressive Web Apps",
    },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              About Me
            </h2>

            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_MG_0087%20%281%29.jpg-Tlwy0Pa8KBN2SbcpmOuFl34qRBoxQN.jpeg"
                    alt="Jean Baptiste N. - Full Stack Web Developer"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full opacity-20 blur-sm"></div>
              </div>
            </div>

            <p
              className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              I'm a passionate Full Stack Web Developer with expertise in modern
              web technologies. I love creating digital solutions that make a
              difference, combining technical excellence with user-centered
              design to deliver exceptional experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                      <skill.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {skill.title}
                  </h3>
                  <p
                    className="text-muted-foreground"
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
