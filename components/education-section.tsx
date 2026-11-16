import Image from "next/image";
import { education } from "@/lib/profile-data";

export function EducationSection() {
  return (
    <section id="education" className="py-24 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* Section heading */}
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Education
            </h2>
            <div className="mx-auto mt-4 h-1 w-14 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full" />
          </div>

          {/* Most recent first */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Connector line behind the cards */}
            <div className="hidden md:block absolute top-[5.5rem] left-[16%] right-[16%] h-px bg-gradient-to-r from-blue-500/50 via-indigo-500/50 to-blue-500/50" />

            {education.map((item, i) => (
              <div
                key={item.school}
                className="group relative flex flex-col rounded-2xl border border-border/60 bg-card p-6 text-center shadow-lg shadow-slate-900/[0.05] dark:shadow-none hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
              >
                {i === 0 && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs font-semibold shadow-md"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Current
                  </span>
                )}

                <div className="relative mx-auto mb-6 h-32 w-full rounded-xl bg-white ring-1 ring-black/5 overflow-hidden">
                  <Image
                    src={item.logo}
                    alt={`${item.school} logo`}
                    fill
                    sizes="(min-width: 768px) 30vw, 90vw"
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* School name first: not every logo spells it out */}
                <h3
                  className="text-lg font-bold leading-snug mb-1"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.school}
                </h3>
                <p
                  className="text-sm font-medium text-foreground/80 mb-1"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {item.degree}
                </p>
                <span
                  className="mx-auto mb-4 text-xs font-semibold tracking-wider text-muted-foreground"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.period}
                </span>

                <span
                  className="mx-auto mb-6 px-3 py-1 rounded-full bg-blue-500/10 text-blue-700 dark:text-blue-300 text-xs font-semibold"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {item.highlight}
                </span>

                <div className="mt-auto pt-4 border-t border-border/60 flex items-center gap-2">
                  <Image
                    src={`/flags/${item.country}.svg`}
                    alt=""
                    width={28}
                    height={19}
                    className="h-[19px] w-7 rounded-[3px] object-cover ring-1 ring-black/10 shadow-sm"
                  />
                  <span
                    className="text-xs text-muted-foreground"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {item.location}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
