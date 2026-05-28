import type { CSSProperties } from "react";
import { portfolio } from "../data/portfolio";
import Reveal from "./Reveal";

export default function SkillsGrid() {
  return (
    <section className="py-28 md:py-36">
      <div id="skills" className="mx-auto max-w-7xl scroll-mt-4 px-5 sm:px-6 md:scroll-mt-6">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 font-mono text-xs text-secondary-text">Skills & Tools</p>
          <h2 className="text-balance text-4xl font-semibold tracking-[-0.055em] text-text md:text-6xl">
            A balanced toolkit across software engineering, applied AI, backend systems, and cloud tools.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {portfolio.skills.map((group, index) => (
            <Reveal
              key={group.title}
              delay={index * 0.06}
              className="group border border-border bg-surface p-5 transition-colors duration-300 hover:border-text sm:p-6 lg:grid lg:grid-cols-[260px_1fr] lg:items-start lg:gap-8"
            >
              <div className="mb-6 flex items-start justify-between gap-4 lg:mb-0">
                <div className="flex items-center gap-4">
                  <div className="grid size-12 place-items-center border border-border bg-background text-secondary-text transition-colors duration-300 group-hover:text-text">
                    <group.icon size={20} strokeWidth={1.85} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.04em] text-text">
                      {group.title}
                    </h3>
                    <p className="mt-1 font-mono text-xs text-secondary-text">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    style={{ "--skill-color": skill.color } as CSSProperties}
                    className="group/skill inline-flex min-h-11 items-center gap-2.5 rounded-full border border-border bg-background px-3.5 py-2 text-sm font-medium text-text shadow-[0_1px_0_rgba(0,0,0,0.03)] transition duration-300 hover:-translate-y-0.5 hover:border-text hover:shadow-[0_10px_24px_rgba(0,0,0,0.06)]"
                  >
                    <skill.icon
                      size={20}
                      className="shrink-0 text-secondary-text transition duration-300 group-hover/skill:text-[var(--skill-color)]"
                    />
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
