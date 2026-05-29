import { portfolio } from "../data/portfolio";
import LogoBox from "./LogoBox";
import Reveal from "./Reveal";

export default function ExperienceTimeline() {
  return (
    <section className="py-10 md:py-16">
      <div id="experience" className="mx-auto max-w-7xl scroll-mt-4 px-5 sm:px-6 md:scroll-mt-6">
        <div className="mb-10">
          <h2 className="text-4xl font-semibold tracking-[-0.055em] text-text md:text-5xl">
            Work experience.
          </h2>
        </div>

        <div className="grid gap-4">
          {portfolio.experience.map((job, index) => (
            <Reveal
              key={`${job.role}-${job.company}`}
              delay={index * 0.07}
              className="group grid gap-6 border border-border bg-surface p-5 transition-colors duration-300 hover:border-text sm:p-7 lg:grid-cols-[auto_1fr_auto]"
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
