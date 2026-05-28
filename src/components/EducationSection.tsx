import { portfolio } from "../data/portfolio";
import LogoBox from "./LogoBox";

export default function EducationSection() {
  return (
    <section className="border-y border-border bg-surface py-24 md:py-28">
      <div id="education" className="mx-auto max-w-7xl scroll-mt-4 px-5 sm:px-6 md:scroll-mt-6">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-4 font-mono text-xs text-secondary-text">Education</p>
            <h2 className="text-balance text-4xl font-semibold tracking-[-0.055em] text-text md:text-5xl">
              Formal CS foundation with a focused AI graduate path.
            </h2>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {portfolio.education.map((item) => (
            <article
              key={item.school}
              className="group grid gap-5 border border-border bg-background p-5 transition-colors duration-300 hover:border-text sm:p-7 md:grid-cols-[auto_1fr]"
            >
              <LogoBox logo={item.logo} label={item.school} />
              <div>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.04em] text-text">
                      {item.school}
                    </h3>
                    <p className="mt-2 text-base text-secondary-text">{item.degree}</p>
                  </div>
                  <p className="shrink-0 font-mono text-xs leading-6 text-secondary-text sm:text-right">
                    {item.period}
                  </p>
                </div>
                <p className="mt-6 border-l border-border pl-4 font-mono text-xs leading-6 text-text">
                  {item.detail}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
