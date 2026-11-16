"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { skillAreas, workedWith, type SkillLevel } from "@/lib/profile-data";

const levelWidth: Record<SkillLevel, string> = {
  Advanced: "w-[90%]",
  Proficient: "w-[70%]",
  Familiar: "w-[45%]",
};

export function SkillsExperienceSection() {
  const [activeId, setActiveId] = useState(skillAreas[0].id);
  const active = skillAreas.find((a) => a.id === activeId) ?? skillAreas[0];

  return (
    <section id="skills" className="py-24 bg-slate-50 border-y border-slate-200/70 dark:bg-muted/10 dark:border-transparent scroll-mt-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* Section heading */}
          <div className="text-center mb-12">
            <p
              className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400 mb-3"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              What I build
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Skills &amp; Experience
            </h2>
            <div className="mx-auto mt-4 h-1 w-14 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full" />
          </div>

          {/* Area tabs */}
          <div role="tablist" className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {skillAreas.map((area) => {
              const isActive = area.id === activeId;
              return (
                <button
                  key={area.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="skill-panel"
                  onClick={() => setActiveId(area.id)}
                  className={`flex items-center gap-3 rounded-xl border px-4 py-3.5 text-left transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-transparent shadow-xl scale-[1.02]"
                      : "bg-card border-border/60 hover:border-foreground/30 hover:-translate-y-0.5"
                  }`}
                >
                  <span
                    className={`shrink-0 p-2 rounded-lg ${
                      isActive ? "bg-white/15 dark:bg-slate-900/10" : area.bg
                    }`}
                  >
                    <area.icon className={`h-5 w-5 ${isActive ? "" : area.color}`} />
                  </span>
                  <span
                    className="text-sm font-semibold leading-tight"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {area.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active area: skills left, image right. Keyed so it re-animates on tab change */}
          <div
            key={active.id}
            id="skill-panel"
            role="tabpanel"
            className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl border border-border/60 bg-card overflow-hidden shadow-xl shadow-slate-900/[0.06] dark:shadow-sm animate-fade-in-up"
          >
            <div className="p-7 md:p-10 flex flex-col justify-center">
              <h3
                className="text-2xl md:text-3xl font-bold mb-8 leading-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {active.tagline}
              </h3>
              <ul className="space-y-5">
                {active.skills.map((skill) => (
                  <li key={skill.name}>
                    <div
                      className="flex justify-between text-sm mb-2"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground text-xs">{skill.level}</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 origin-left animate-grow-x ${levelWidth[skill.level]}`}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative min-h-[18rem] lg:min-h-full bg-muted">
              <Image
                src={active.image}
                alt={active.title}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3 text-white">
                <span className="p-2.5 rounded-xl bg-white/15 backdrop-blur-md">
                  <active.icon className="h-6 w-6" />
                </span>
                <span
                  className="text-xl font-bold"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {active.title}
                </span>
              </div>
            </div>
          </div>

          {/* Projects for the active area */}
          {active.projects.length > 0 && (
            <div key={`${active.id}-projects`} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 animate-fade-in-up">
              {active.projects.map((project) => {
                const card = (
                  <>
                    <div className="relative h-44 overflow-hidden bg-muted">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {project.url && (
                        <span className="absolute top-3 right-3 p-2 rounded-full bg-white/90 text-slate-900 opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      )}
                    </div>
                    <div className="p-5">
                      <h4
                        className="font-bold mb-1"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {project.title}
                      </h4>
                      <p
                        className="text-sm text-muted-foreground mb-3"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 bg-muted text-muted-foreground text-xs font-medium rounded-md"
                            style={{ fontFamily: "var(--font-body)" }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </>
                );
                const className =
                  "group block overflow-hidden rounded-2xl border border-border/60 bg-card shadow-md shadow-slate-900/[0.04] dark:shadow-none hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500";
                return project.url ? (
                  <a
                    key={project.title}
                    href={project.url}
                    target={project.url.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {card}
                  </a>
                ) : (
                  <div key={project.title} className={className}>
                    {card}
                  </div>
                );
              })}
            </div>
          )}

        </div>
      </div>

      {/* Where I've built: logos link to each organization */}
      <div className="mt-20">
        <p
          className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground mb-6"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Different companies and organizations I've worked with:
        </p>
        <div
          style={{
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="flex w-max animate-marquee gap-6 pr-6 py-2">
            {[...workedWith, ...workedWith].map((org, i) => (
              <a
                key={i}
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={org.name}
                title={org.name}
                aria-hidden={i >= workedWith.length ? true : undefined}
                tabIndex={i >= workedWith.length ? -1 : undefined}
                className="relative flex h-20 w-44 md:h-24 md:w-52 shrink-0 items-center justify-center rounded-xl bg-white px-4 py-3 shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:ring-white/10"
              >
                <span className="relative h-full w-full">
                  <Image
                    src={org.logo}
                    alt={org.name}
                    fill
                    sizes="208px"
                    className="object-contain"
                  />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
