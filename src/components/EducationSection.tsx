import { portfolio } from "../data/portfolio";
import LogoBox from "./LogoBox";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function EducationSection() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="scroll-mt-24 border-y border-border bg-surface py-20 sm:py-24 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeader
          id="education-heading"
          eyebrow="Academic path"
          title="Education."
          className="mb-12 md:mb-16"
        />

        <div className="grid gap-4 lg:grid-cols-2">
          {portfolio.education.map((item, index) => (
            <Reveal
              as="article"
              key={item.school}
              delay={index * 0.06}
              className="group grid gap-5 border border-border bg-background p-5 transition-colors duration-300 hover:border-text sm:p-7 sm:grid-cols-[auto_1fr]"
            >
              <LogoBox logo={item.logo} label={item.school} />
              <div className="min-w-0">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <h3 className="text-balance text-2xl font-semibold tracking-[-0.045em] text-text">
                      {item.school}
                    </h3>
                    <p className="mt-2 text-base text-secondary-text">{item.degree}</p>
                  </div>
                  <div className="shrink-0 font-mono text-xs leading-6 text-secondary-text tabular-nums sm:text-right">
                    <p>{item.period}</p>
                    <p className="text-[11px] opacity-80">{item.location}</p>
                  </div>
                </div>
                <p className="mt-6 border-l border-border pl-4 font-mono text-xs leading-6 text-text">
                  {item.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
