import { portfolio } from "../data/portfolio";
import LogoBox from "./LogoBox";
import Reveal from "./Reveal";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mb-14 grid gap-6 lg:grid-cols-[0.82fr_1fr]">
          <div>
            <p className="mb-4 font-mono text-xs text-secondary-text">Experience</p>
            <h2 className="text-balance text-4xl font-semibold tracking-[-0.055em] text-text md:text-6xl">
              Engineering experience across software products, applied ML, research systems, and digital infrastructure.
            </h2>
          </div>
          <p className="max-w-[68ch] text-pretty text-base leading-7 text-secondary-text lg:pt-12">
            Across internships, research, and campus roles, I&apos;ve worked on
            backend workflows, ML/data pipelines, robot interfaces, and tools
            that make real systems easier to use, evaluate, and maintain.
          </p>
        </div>

        <div className="grid gap-4">
          {portfolio.experience.map((job, index) => (
            <Reveal
              key={`${job.role}-${job.company}`}
              delay={index * 0.07}
              className="grid gap-6 border border-border bg-surface p-5 transition-colors duration-300 hover:border-text sm:p-7 lg:grid-cols-[auto_1fr_auto]"
            >
              <LogoBox logo={job.logo} label={job.company} />

              <div>
                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-3">
                  <h3 className="text-2xl font-semibold tracking-[-0.04em] text-text">
                    {job.role}
                  </h3>
                  <p className="text-base text-secondary-text">{job.company}</p>
                </div>

                <ul className="mt-6 grid gap-3 md:grid-cols-2">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="relative pl-4 text-pretty text-sm leading-6 text-text before:absolute before:left-0 before:top-2.5 before:size-1 before:bg-secondary-text"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="font-mono text-xs leading-6 text-secondary-text lg:text-right">
                {job.period}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
