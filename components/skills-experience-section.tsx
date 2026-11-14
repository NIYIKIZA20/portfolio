"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import { Briefcase, ExternalLink, Award, Users, Languages } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  skillAreas,
  experience,
  leadership,
  awards,
  languages,
  type SkillLevel,
} from "@/lib/profile-data";

const levelWidth: Record<SkillLevel, string> = {
  Advanced: "w-[90%]",
  Proficient: "w-[70%]",
  Familiar: "w-[45%]",
};

export function SkillsExperienceSection() {
  const [activeId, setActiveId] = useState(skillAreas[0].id);
  const active = skillAreas.find((a) => a.id === activeId) ?? skillAreas[0];
  const roles = experience.filter((e) => active.relatedRoles.includes(e.role));

  return (
    <section id="skills" className="py-24 bg-muted/25 dark:bg-muted/10 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* Section heading */}
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Skills &amp; Experience
            </h2>
            <div className="mx-auto mt-3 mb-6 h-1 w-14 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full" />
            <p
              className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Pick an area to see skill levels, the projects behind them, and
              where I applied them.
            </p>
          </div>

          {/* Area tabs */}
          <div role="tablist" className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
            {skillAreas.map((area) => {
              const isActive = area.id === activeId;
              return (
                <button
                  key={area.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="skill-panel"
                  onClick={() => setActiveId(area.id)}
                  className={`group text-center rounded-xl border p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer ${
                    isActive
                      ? "bg-card border-foreground/40 shadow-lg ring-1 ring-foreground/10"
                      : "bg-card/60 border-border/60"
                  }`}
                >
                  <div className="mb-3 flex justify-center">
                    <div className={`p-3 rounded-xl ${area.bg}`}>
                      <area.icon className={`h-7 w-7 ${area.color}`} />
                    </div>
                  </div>
                  <h3
                    className="text-sm md:text-base font-semibold leading-snug"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {area.title}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Active area details */}
          <Card id="skill-panel" role="tabpanel" className="border-border/60 mb-20">
            <CardContent className="p-6 md:p-10">
              <p
                className="text-lg text-muted-foreground mb-8 leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {active.summary}
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Skill levels */}
                <div>
                  <h4
                    className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Skill level
                  </h4>
                  <ul className="space-y-4">
                    {active.skills.map((skill) => (
                      <li key={skill.name}>
                        <div
                          className="flex justify-between text-sm mb-1.5"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                          <div
                            className={`h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 ${levelWidth[skill.level]}`}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Where it was applied */}
                <div className="space-y-8">
                  {roles.length > 0 && (
                    <div>
                      <h4
                        className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        Applied at
                      </h4>
                      <ul className="space-y-3">
                        {roles.map((r) => (
                          <li key={r.role + r.company} className="flex gap-3">
                            <Briefcase className="h-4 w-4 mt-1 shrink-0 text-muted-foreground" />
                            <div style={{ fontFamily: "var(--font-body)" }}>
                              <p className="font-medium text-sm">{r.role}</p>
                              <p className="text-xs text-muted-foreground">
                                {r.company} · {r.period}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {active.id === "others" && (
                    <>
                      <InfoList icon={Users} title="Leadership & volunteering">
                        {leadership.map((l) => (
                          <li key={l.role}>
                            <p className="font-medium text-sm">{l.role}</p>
                            <p className="text-xs text-muted-foreground">
                              {l.org} · {l.period}
                            </p>
                          </li>
                        ))}
                      </InfoList>
                      <InfoList icon={Award} title="Certifications & awards">
                        {awards.map((a) => (
                          <li key={a} className="text-sm">{a}</li>
                        ))}
                      </InfoList>
                      <InfoList icon={Languages} title="Languages">
                        {languages.map((l) => (
                          <li key={l.name} className="text-sm">
                            <span className="font-medium">{l.name}</span>
                            <span className="text-muted-foreground"> · {l.level}</span>
                          </li>
                        ))}
                      </InfoList>
                    </>
                  )}
                </div>
              </div>

              {/* Projects */}
              {active.projects.length > 0 && (
                <div className="mt-12">
                  <h4
                    className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Projects
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {active.projects.map((project) => (
                      <div
                        key={project.title}
                        className="group flex flex-col overflow-hidden rounded-xl border border-border bg-background hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                      >
                        <div className="relative h-40 overflow-hidden bg-muted">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="flex flex-col flex-1 p-5 gap-3">
                          <h5
                            className="font-bold leading-tight"
                            style={{ fontFamily: "var(--font-heading)" }}
                          >
                            {project.title}
                          </h5>
                          <p
                            className="text-sm text-muted-foreground leading-relaxed flex-1"
                            style={{ fontFamily: "var(--font-body)" }}
                          >
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-0.5 bg-muted text-muted-foreground text-xs font-medium rounded-md border border-border/60"
                                style={{ fontFamily: "var(--font-body)" }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          {project.url && (
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                              style={{ fontFamily: "var(--font-heading)" }}
                            >
                              <ExternalLink className="h-3.5 w-3.5" />
                              View
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Experience timeline */}
          <h3
            className="text-2xl md:text-3xl font-bold mb-10 text-center"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Experience
          </h3>
          <ol className="relative border-l-2 border-border ml-3 space-y-10">
            {experience.map((job) => (
              <li key={job.role + job.company} className="pl-8 relative">
                <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 ring-4 ring-background" />
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-2">
                  <h4
                    className="text-lg font-bold"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {job.role}
                    <span className="font-medium text-blue-600 dark:text-blue-400">
                      {" "}· {job.company}
                    </span>
                  </h4>
                  <span
                    className="text-sm text-muted-foreground shrink-0 italic"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {job.period}
                  </span>
                </div>
                <ul
                  className="list-disc pl-5 space-y-1 text-muted-foreground"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

        </div>
      </div>
    </section>
  );
}

function InfoList({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4
        className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        <Icon className="h-4 w-4" />
        {title}
      </h4>
      <ul className="space-y-2.5" style={{ fontFamily: "var(--font-body)" }}>
        {children}
      </ul>
    </div>
  );
}
