import Image from "next/image";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { education } from "@/lib/profile-data";

export function EducationSection() {
  return (
    <section id="education" className="py-24 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* Section heading */}
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Education
            </h2>
            <div className="mx-auto mt-3 mb-6 h-1 w-14 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full" />
            <p
              className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              From mathematics and physics, to electronics and telecommunications,
              to smart manufacturing.
            </p>
          </div>

          {/* Timeline, most recent first */}
          <div className="space-y-8">
            {education.map((item) => (
              <Card
                key={item.school}
                className="group overflow-hidden border-border/60 hover:shadow-lg transition-all duration-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-[18rem_1fr]">
                  <div className="relative h-48 md:h-full min-h-[12rem] overflow-hidden bg-muted">
                    <Image
                      src={item.image}
                      alt={item.school}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-2">
                      <GraduationCap className="h-5 w-5 shrink-0" />
                      <span
                        className="text-sm font-semibold uppercase tracking-wide"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {item.school}
                      </span>
                    </div>
                    <h3
                      className="text-xl md:text-2xl font-bold mb-3 leading-snug"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {item.degree}
                    </h3>
                    <div
                      className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted-foreground mb-4"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-4 w-4" />
                        {item.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-4 w-4" />
                        {item.location}
                      </span>
                    </div>
                    <p
                      className="text-muted-foreground leading-relaxed"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {item.detail}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
