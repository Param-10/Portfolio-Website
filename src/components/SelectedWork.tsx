import { useState } from "react";
import { ArrowUpRight, ChevronDown, ChevronUp, Github } from "lucide-react";
import { portfolio, type Project, type ProjectImage } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function SelectedWork() {
  const [showAllOtherWork, setShowAllOtherWork] = useState(false);
  const [flagship, ...supportingProjects] = portfolio.selectedProjects;
  const visibleOtherProjects = showAllOtherWork
    ? portfolio.otherProjects
    : portfolio.otherProjects.slice(0, 3);

  return (
    <section id="work" aria-labelledby="work-heading" className="scroll-mt-24 py-20 sm:py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeader
          id="work-heading"
          eyebrow="Engineering portfolio"
          title="Selected work."
          description="Five projects that show how I approach AI systems, backend workflows, product engineering, and software used beyond the classroom."
          className="mb-12 md:mb-16"
        />

        <Reveal as="article" className="border border-border bg-surface p-4 sm:p-6 lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-start lg:gap-12">
            <ProjectMedia image={flagship.image} title={flagship.title} priority />

            <div className="flex h-full flex-col">
              <ProjectHeading project={flagship} />
              {flagship.metric ? <Metric>{flagship.metric}</Metric> : null}
              <p className="mt-5 text-pretty text-base leading-7 text-secondary-text">
                {flagship.description}
              </p>
              <TechList tech={flagship.tech} className="mt-6" />
              <ProjectLinks project={flagship} className="mt-7" />
            </div>
          </div>
          {flagship.caseStudy ? <CaseStudyDetails project={flagship} /> : null}
        </Reveal>

        <div className="mt-6 grid gap-6 md:auto-rows-fr md:grid-cols-2">
          {supportingProjects.map((project, index) => (
            <Reveal
              as="article"
              key={project.title}
              delay={index * 0.05}
              className="group flex h-full flex-col border border-border bg-surface p-4 transition-colors duration-300 hover:border-text sm:p-5"
            >
              <ProjectMedia image={project.image} title={project.title} />
              <ProjectHeading project={project} />

              {project.recognition ? (
                <p className="mt-4 border-l-2 border-text pl-3 text-sm font-medium leading-6 text-text">
                  {project.recognition}
                </p>
              ) : null}
              {project.metric ? <Metric>{project.metric}</Metric> : null}

              <p className="mt-4 text-pretty text-sm leading-6 text-secondary-text">
                {project.description}
              </p>
              <TechList tech={project.tech} className="mt-5" />
              <ProjectLinks project={project} className="mt-6" />
              {project.caseStudy ? <CaseStudyDetails project={project} compact /> : null}
            </Reveal>
          ))}
        </div>

        <div className="mt-20 border-t border-border pt-10 md:mt-24 md:pt-12">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary-text">
                Archive
              </p>
              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-text sm:text-4xl">
                Other work
              </h3>
            </div>
            <p className="max-w-md text-sm leading-6 text-secondary-text sm:text-right">
              Smaller product, interaction, and experimental builds.
            </p>
          </div>

          <div id="other-work-grid" className="grid gap-4 lg:grid-cols-3">
            {visibleOtherProjects.map((project) => (
              <article
                key={project.title}
                className="group flex h-full flex-col border border-border bg-background p-4 transition-colors duration-300 hover:border-text"
              >
                <ProjectMedia image={project.image} title={project.title} compact />
                <ProjectHeading project={project} compact />
                <p className="mt-4 text-sm leading-6 text-secondary-text">{project.description}</p>
                <TechList tech={project.tech} className="mt-5" />
                <ProjectLinks project={project} className="mt-6" />
              </article>
            ))}
          </div>

          {portfolio.otherProjects.length > 3 ? (
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAllOtherWork((current) => !current)}
                aria-expanded={showAllOtherWork}
                aria-controls="other-work-grid"
                className="inline-flex min-h-11 items-center gap-2 border border-border bg-surface px-5 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-text transition-colors hover:border-text focus:outline-none focus-visible:ring-2 focus-visible:ring-text focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {showAllOtherWork ? "Show less" : `Show all ${portfolio.otherProjects.length} projects`}
                {showAllOtherWork ? (
                  <ChevronUp size={16} strokeWidth={1.8} aria-hidden="true" />
                ) : (
                  <ChevronDown size={16} strokeWidth={1.8} aria-hidden="true" />
                )}
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function ProjectHeading({ project, compact = false }: { project: Project; compact?: boolean }) {
  const Heading = compact ? "h4" : "h3";

  return (
    <header className="flex items-start justify-between gap-5">
      <div>
        <p className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-secondary-text">
          {project.number} — {project.category}
        </p>
        <Heading
          className={`${compact ? "mt-2 text-2xl" : "mt-3 text-3xl sm:text-4xl"} text-balance font-semibold tracking-[-0.05em] text-text`}
        >
          {project.title}
        </Heading>
      </div>
    </header>
  );
}

function ProjectMedia({
  image,
  title,
  compact = false,
  priority = false,
}: {
  image?: ProjectImage;
  title: string;
  compact?: boolean;
  priority?: boolean;
}) {
  const [hasError, setHasError] = useState(false);
  const heightClass = compact ? "h-44" : "h-52 sm:h-64 lg:h-72";

  if (!image) {
    return null;
  }

  if (hasError) {
    return (
      <div
        className={`dot-grid relative mb-6 flex ${heightClass} overflow-hidden border border-border bg-muted p-5`}
        aria-hidden="true"
      >
        <div className="mt-auto max-w-sm border-l border-text pl-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-secondary-text">
            {title}
          </p>
          <p className="mt-2 text-xl font-semibold tracking-[-0.04em] text-text">
            Information architecture → interaction → shipped experience
          </p>
        </div>
      </div>
    );
  }

  const objectFit = image.fit === "contain" ? "object-contain p-3" : "object-cover";

  return (
    <div className={`mb-6 overflow-hidden border border-border bg-muted ${heightClass}`}>
      <picture>
        {image.optimizedSrc ? <source srcSet={image.optimizedSrc} type="image/webp" /> : null}
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onError={() => setHasError(true)}
          style={{ objectPosition: image.position ?? "center" }}
          className={`size-full ${objectFit} grayscale transition-[filter,transform] duration-500 ease-out group-hover:scale-[1.02] group-hover:grayscale-0`}
        />
      </picture>
    </div>
  );
}

function Metric({ children }: { children: string }) {
  return (
    <p className="mt-5 w-fit border border-border bg-background px-3 py-2 font-mono text-xs font-medium text-text tabular-nums">
      {children}
    </p>
  );
}

function TechList({ tech, className = "" }: { tech: string[]; className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`} aria-label="Technology stack">
      {tech.map((item) => (
        <li
          key={item}
          className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-[10px] text-secondary-text"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function ProjectLinks({ project, className = "" }: { project: Project; className?: string }) {
  return (
    <div className={`mt-auto flex flex-wrap gap-x-5 gap-y-3 ${className}`} aria-label={`${project.title} links`}>
      {project.links.map((link) => {
        const Icon = link.kind === "github" ? Github : ArrowUpRight;

        return (
          <a
            key={`${project.title}-${link.label}`}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex min-h-11 items-center gap-2 py-2 text-sm font-medium text-text underline decoration-border underline-offset-4 transition-colors hover:decoration-text focus:outline-none focus-visible:ring-2 focus-visible:ring-text focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label={`${link.label} for ${project.title} (opens in a new tab)`}
          >
            <Icon size={16} strokeWidth={1.8} aria-hidden="true" />
            {link.label}
          </a>
        );
      })}
    </div>
  );
}

function CaseStudyDetails({ project, compact = false }: { project: Project; compact?: boolean }) {
  if (!project.caseStudy) {
    return null;
  }

  const caseStudy = project.caseStudy;

  return (
    <details className={`case-study group/details border-t border-border ${compact ? "mt-7 pt-1" : "mt-8 pt-2 lg:mt-10"}`}>
      <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 py-3 text-sm font-medium text-text focus:outline-none focus-visible:ring-2 focus-visible:ring-text focus-visible:ring-offset-2 focus-visible:ring-offset-surface [&::-webkit-details-marker]:hidden">
        <span>Explore case study</span>
        <ChevronDown
          size={17}
          strokeWidth={1.8}
          aria-hidden="true"
          className="transition-transform duration-200 group-open/details:rotate-180"
        />
      </summary>

      <div className="grid gap-px border border-border bg-border md:grid-cols-2">
        <CaseStudyBlock label="Problem" body={caseStudy.problem} />
        <CaseStudyBlock label="What I built" body={caseStudy.contribution} />

        <div className="bg-background p-5 md:col-span-2 sm:p-6">
          <h4 className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-secondary-text">
            Architecture / approach
          </h4>
          <ol className="mt-5 grid gap-2 lg:grid-cols-5">
            {caseStudy.architecture.map((step, index) => (
              <li key={step} className="relative border border-border bg-surface p-3 pr-7 text-xs leading-5 text-text">
                <span className="mb-2 block font-mono text-[9px] text-secondary-text">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {step}
                {index < caseStudy.architecture.length - 1 ? (
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 rotate-90 text-secondary-text lg:rotate-0" aria-hidden="true">
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </div>

        <CaseStudyBlock label="Engineering challenge" body={caseStudy.challenge} />
        <CaseStudyBlock label="Result" body={caseStudy.result} />
      </div>
    </details>
  );
}

function CaseStudyBlock({ label, body }: { label: string; body: string }) {
  return (
    <div className="bg-background p-5 sm:p-6">
      <h4 className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-secondary-text">
        {label}
      </h4>
      <p className="mt-3 text-sm leading-6 text-text">{body}</p>
    </div>
  );
}
