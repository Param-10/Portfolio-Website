import { portfolio } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function SkillsGrid() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-24 border-y border-border bg-surface py-20 sm:py-24 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeader
          id="skills-heading"
          eyebrow="Technical toolkit"
          title="Skills I use to ship."
          description="Grouped for quick scanning, with project-specific models and tools kept where they have context."
          className="mb-12 md:mb-16"
        />

        <div className="grid gap-4 md:grid-cols-2">
          {portfolio.skills.map((group, index) => (
            <Reveal
              as="article"
              key={group.title}
              delay={index * 0.05}
              className="group border border-border bg-background p-5 transition-colors duration-300 hover:border-text sm:p-6"
            >
              <div className="flex items-center justify-between gap-4 border-b border-border pb-5">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center border border-border bg-surface text-secondary-text transition-colors group-hover:text-text">
                    <group.icon size={18} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <h3 className="text-xl font-semibold tracking-[-0.035em] text-text">
                    {group.title}
                  </h3>
                </div>
                <span className="font-mono text-[10px] text-secondary-text">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2.5" aria-label={`${group.title} skills`}>
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-border bg-surface px-3 py-2 text-sm text-text"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
