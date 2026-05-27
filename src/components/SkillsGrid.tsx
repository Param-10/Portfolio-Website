import { portfolio } from "../data/portfolio";
import Reveal from "./Reveal";

export default function SkillsGrid() {
  return (
    <section id="skills" className="py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 font-mono text-xs text-secondary-text">Skills & Tools</p>
          <h2 className="text-balance text-4xl font-semibold tracking-[-0.055em] text-text md:text-6xl">
            A balanced toolkit across software engineering, applied AI, backend systems, and research workflows.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
          {portfolio.skills.map((group, index) => (
            <Reveal
              key={group.title}
              delay={index * 0.06}
              className="group border border-border bg-surface p-5 transition-colors duration-300 hover:border-text"
            >
              <div className="mb-8 flex items-center justify-between gap-4">
                <div className="grid size-11 place-items-center border border-border bg-background text-secondary-text transition-colors duration-300 group-hover:text-text">
                  <group.icon size={20} strokeWidth={1.85} />
                </div>
                <span className="font-mono text-xs text-secondary-text">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="min-h-12 text-xl font-semibold tracking-[-0.04em] text-text">
                {group.title}
              </h3>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-border bg-background px-2.5 py-1.5 font-mono text-[11px] text-secondary-text"
                  >
                    {skill}
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
