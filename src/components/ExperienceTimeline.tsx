import { ArrowUpRight, Linkedin } from "lucide-react";
import { portfolio } from "../data/portfolio";
import LogoBox from "./LogoBox";
import Reveal from "./Reveal";

export default function ExperienceTimeline() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-24 border-y border-border bg-surface py-20 sm:py-24 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <h2
          id="experience-heading"
          className="mb-10 text-2xl font-semibold tracking-[-0.04em] text-text sm:text-3xl md:mb-12"
        >
          Experience
        </h2>

        <ol className="grid gap-4">
          {portfolio.experience.map((job, index) => (
            <li key={`${job.role}-${job.company}`}>
              <Reveal
                as="article"
                delay={index * 0.05}
                className="group grid gap-5 border border-border bg-background p-5 transition-colors duration-300 hover:border-text sm:p-7 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-7"
              >
                <LogoBox logo={job.logo} label={job.company} />

                <div>
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between md:gap-8">
                    <div>
                      <h3 className="text-balance text-2xl font-semibold tracking-[-0.045em] text-text">
                        {job.role}
                      </h3>
                      <p className="mt-1 text-base text-secondary-text">{job.company}</p>
                    </div>
                    <p className="shrink-0 font-mono text-xs leading-6 text-secondary-text tabular-nums md:text-right">
                      {job.period}
                    </p>
                  </div>

                  <ul className={`mt-6 grid gap-3 ${job.bullets.length > 1 ? "md:grid-cols-2" : ""}`}>
                    {job.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="relative pl-4 text-pretty text-sm leading-6 text-text before:absolute before:left-0 before:top-2.5 before:size-1 before:bg-secondary-text"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {(job.websiteUrl || job.linkedinUrl) && (
                    <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                      {job.websiteUrl ? (
                        <a
                          href={job.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-link"
                          aria-label={`${job.company} website (opens in a new tab)`}
                        >
                          <ArrowUpRight size={15} strokeWidth={1.8} aria-hidden="true" />
                          Company site
                        </a>
                      ) : null}
                      {job.linkedinUrl ? (
                        <a
                          href={job.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-link"
                          aria-label={`${job.company} on LinkedIn (opens in a new tab)`}
                        >
                          <Linkedin size={14} strokeWidth={1.8} aria-hidden="true" />
                          LinkedIn
                        </a>
                      ) : null}
                    </div>
                  )}
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
