import { ArrowDownRight, FileText } from "lucide-react";
import { portfolio } from "../data/portfolio";

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden border-b border-border px-5 pb-20 pt-24 sm:px-6 sm:pb-24 sm:pt-28 lg:flex lg:min-h-[min(900px,100dvh)] lg:items-center lg:py-32"
    >
      <div className="dot-grid pointer-events-none absolute inset-0 -z-10 opacity-75" />
      <div className="line-grid pointer-events-none absolute inset-x-0 top-0 -z-10 h-52 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <p className="vertical-label pointer-events-none absolute left-8 top-1/2 hidden -translate-y-1/2 font-mono text-[11px] uppercase tracking-[0.22em] text-text/30 xl:block">
        Build · Test · Ship
      </p>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.65fr)] lg:gap-20 xl:pl-16">
        <div className="max-w-4xl">
          <p className="max-w-full font-mono text-[10px] font-medium uppercase leading-5 tracking-[0.16em] text-secondary-text sm:text-xs sm:tracking-[0.2em]">
            {portfolio.eyebrow}
          </p>

          <h1
            id="hero-heading"
            className="mt-6 text-balance text-[clamp(3.25rem,8vw,7.2rem)] font-semibold leading-[0.9] tracking-[-0.075em] text-text"
          >
            Hey, I&apos;m Paramveer.
          </h1>

          <p className="mt-6 max-w-[62ch] text-pretty text-base leading-7 text-secondary-text sm:text-lg sm:leading-8">
            {portfolio.subheadline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#work" className="button-primary group">
              View work
              <ArrowDownRight
                size={17}
                strokeWidth={1.8}
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </a>
            <a
              href={portfolio.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary"
              aria-label="Resume PDF (opens in a new tab)"
            >
              <FileText size={16} strokeWidth={1.8} aria-hidden="true" />
              Resume
            </a>
          </div>

        </div>

        <div className="relative mx-auto w-full max-w-[390px] lg:mr-0 lg:max-w-[430px]">
          <div className="group relative overflow-hidden border border-border bg-background p-2.5 transition-[border-color,box-shadow] duration-300 hover:border-text hover:shadow-[0_16px_42px_rgba(0,0,0,0.1)] sm:p-3">
            <picture>
              <source srcSet={portfolio.portrait.optimizedSrc} type="image/webp" />
              <img
                src={portfolio.portrait.src}
                alt="Paramveer Singh Bhele, software engineer and Columbia artificial intelligence student"
                width={portfolio.portrait.width}
                height={portfolio.portrait.height}
                decoding="async"
                className="aspect-[3/4] w-full object-cover object-center grayscale contrast-[1.06] transition-[filter,transform] duration-500 ease-out group-hover:scale-[1.02] group-hover:grayscale-0"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}
