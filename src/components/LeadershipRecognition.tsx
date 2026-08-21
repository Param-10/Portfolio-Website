import { portfolio } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function LeadershipRecognition() {
  const RecognitionIcon = portfolio.recognitionIcon;

  return (
    <section
      id="recognition"
      aria-labelledby="recognition-heading"
      className="scroll-mt-24 py-20 sm:py-24 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeader
          id="recognition-heading"
          eyebrow="Beyond the build"
          title="Leadership & recognition"
          description="A compact view of teams led, programs completed, and work recognized."
          className="mb-12 md:mb-16"
        />

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.65fr]">
          <Reveal className="border border-border bg-surface">
            <ul className="grid divide-y divide-border sm:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)_10.75rem]">
              {portfolio.recognition.map((item) => (
                <li
                  key={`${item.organization}-${item.title}`}
                  className="grid grid-cols-1 gap-3 p-5 sm:col-span-3 sm:grid-cols-subgrid sm:items-center sm:gap-5 sm:p-6"
                >
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-secondary-text">
                      {item.type}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold tracking-[-0.025em] text-text">
                      {item.organization}
                    </h3>
                  </div>
                  <p className="min-w-0 text-sm font-medium leading-6 text-text">{item.title}</p>
                  {item.period ? (
                    <p className="font-mono text-[11px] text-secondary-text tabular-nums sm:text-right">
                      {item.period}
                    </p>
                  ) : (
                    <span className="hidden sm:block" aria-hidden="true" />
                  )}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08} className="relative overflow-hidden border border-border bg-text p-6 text-background sm:p-7">
            <div className="line-grid pointer-events-none absolute inset-0 opacity-10" />
            <div className="relative">
              <RecognitionIcon size={24} strokeWidth={1.6} aria-hidden="true" />
              <h3 className="mt-8 text-2xl font-semibold tracking-[-0.045em]">
                Academic recognition
              </h3>
              <ul className="mt-6 divide-y divide-background/20 border-y border-background/20">
                {portfolio.academicRecognition.map((item) => (
                  <li
                    key={item.name}
                    className="flex flex-col gap-1 py-4 text-sm leading-6 text-background/80 sm:flex-row sm:items-start sm:justify-between sm:gap-4"
                  >
                    <span>
                      <span className="block">{item.name}</span>
                      {item.issuer || item.period ? (
                        <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.1em] text-background/55">
                          {[item.issuer, item.period].filter(Boolean).join(" · ")}
                        </span>
                      ) : null}
                    </span>
                    {item.amount ? (
                      <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.12em] text-background">
                        {item.amount}
                      </span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
