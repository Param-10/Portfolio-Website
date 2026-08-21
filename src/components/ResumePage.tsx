import type { ReactNode } from "react";
import { ArrowLeft, ArrowUpRight, Download, Mail } from "lucide-react";
import { portfolio } from "../data/portfolio";

type ResumeSectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

function ResumeSection({ id, title, children }: ResumeSectionProps) {
  return (
    <section aria-labelledby={id} className="border-t border-border py-10 sm:py-12">
      <h2 id={id} className="text-2xl font-semibold tracking-[-0.04em] text-text sm:text-3xl">
        {title}
      </h2>
      <div className="mt-7">{children}</div>
    </section>
  );
}

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background font-sans text-text">
      <a
        href="#resume-content"
        className="fixed left-4 top-4 z-50 -translate-y-24 rounded-md bg-text px-4 py-3 text-sm font-medium text-background transition-transform focus:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-text"
      >
        Skip to resume content
      </a>

      <header className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-5 py-8 sm:px-6 md:flex-row md:items-center md:justify-between">
          <a href={import.meta.env.BASE_URL} className="text-link w-fit">
            <ArrowLeft size={16} strokeWidth={1.8} aria-hidden="true" />
            Portfolio
          </a>
          <nav aria-label="Resume actions" className="flex flex-wrap gap-3">
            <a href={`mailto:${portfolio.email}`} className="button-secondary">
              <Mail size={16} strokeWidth={1.8} aria-hidden="true" />
              Email
            </a>
            <a
              href={portfolio.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary"
            >
              <Download size={16} strokeWidth={1.8} aria-hidden="true" />
              Download PDF
            </a>
          </nav>
        </div>
      </header>

      <main id="resume-content" tabIndex={-1} className="mx-auto max-w-5xl px-5 pb-16 pt-14 outline-none sm:px-6 sm:pt-20">
        <section aria-labelledby="resume-heading" className="pb-12 sm:pb-16">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-secondary-text">
            Software Engineering · AI Systems · Infrastructure
          </p>
          <h1
            id="resume-heading"
            className="mt-5 text-balance text-5xl font-semibold leading-[0.95] tracking-[-0.065em] text-text sm:text-6xl md:text-7xl"
          >
            Paramveer Singh Bhele — Resume
          </h1>
          <p className="mt-6 max-w-3xl text-pretty text-lg leading-8 text-secondary-text">
            Software engineer and Columbia University M.S. Artificial Intelligence student focused on AI infrastructure, backend systems, machine-learning applications, and production product engineering.
          </p>
          <p className="mt-5 text-sm text-secondary-text">
            Last updated <time dateTime={portfolio.lastUpdated}>August 15, 2026</time>. This HTML version is the searchable, accessible companion to the downloadable PDF.
          </p>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a className="text-link" href={`mailto:${portfolio.email}`}>{portfolio.email}</a>
            <a className="text-link" href={portfolio.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="text-link" href={portfolio.links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="text-link" href={portfolio.links.x} target="_blank" rel="noopener noreferrer">X</a>
          </div>
        </section>

        <ResumeSection id="resume-experience" title="Engineering experience">
          <div className="space-y-10">
            {portfolio.experience.map((job) => (
              <article key={`${job.role}-${job.company}`}>
                <div className="grid gap-2 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start sm:gap-6">
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-text">{job.role}</h3>
                    <p className="mt-1 text-base text-secondary-text">{job.company}</p>
                  </div>
                  <p className="font-mono text-xs uppercase tracking-[0.12em] text-secondary-text sm:text-right">{job.period}</p>
                </div>
                <ul className="mt-4 space-y-2 pl-5 text-sm leading-7 text-secondary-text marker:text-text">
                  {job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </ResumeSection>

        <ResumeSection id="resume-projects" title="Selected engineering work">
          <div className="grid gap-5 md:grid-cols-2">
            {portfolio.selectedProjects.map((project) => (
              <article key={project.title} className="flex h-full flex-col border border-border bg-surface p-5 sm:p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-secondary-text">{project.category}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-text">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-secondary-text">{project.description}</p>
                <p className="mt-4 text-xs leading-6 text-secondary-text"><span className="font-medium text-text">Stack:</span> {project.tech.join(", ")}</p>
                <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-5">
                  {project.links.map((link) => (
                    <a key={`${project.title}-${link.label}`} className="text-link" href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.label}
                      <ArrowUpRight size={14} strokeWidth={1.8} aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </ResumeSection>

        <ResumeSection id="resume-education" title="Education">
          <div className="space-y-7">
            {portfolio.education.map((education) => (
              <article key={education.school} className="grid gap-2 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-6">
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-text">{education.school}</h3>
                  <p className="mt-1 text-sm leading-6 text-secondary-text">{education.degree} · {education.detail}</p>
                </div>
                <div className="font-mono text-xs uppercase tracking-[0.12em] text-secondary-text sm:text-right">
                  <p>{education.period}</p>
                  <p className="mt-1">{education.location}</p>
                </div>
              </article>
            ))}
          </div>
        </ResumeSection>

        <ResumeSection id="resume-recognition" title="Leadership and recognition">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold tracking-[-0.025em] text-text">Leadership and programs</h3>
              <ul className="mt-4 space-y-4">
                {portfolio.recognition.map((item) => (
                  <li key={`${item.organization}-${item.title}`}>
                    <p className="font-medium text-text">{item.title}</p>
                    <p className="mt-1 text-sm leading-6 text-secondary-text">{item.organization}{item.period ? ` · ${item.period}` : ""}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold tracking-[-0.025em] text-text">Academic recognition</h3>
              <ul className="mt-4 space-y-4">
                {portfolio.academicRecognition.map((item) => (
                  <li key={item.name}>
                    <p className="font-medium text-text">{item.name}</p>
                    <p className="mt-1 text-sm leading-6 text-secondary-text">
                      {[item.issuer, item.period, item.amount].filter(Boolean).join(" · ")}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ResumeSection>

        <ResumeSection id="resume-skills" title="Technical skills">
          <dl className="grid gap-6 sm:grid-cols-2">
            {portfolio.skills.map((group) => (
              <div key={group.title}>
                <dt className="font-medium text-text">{group.title}</dt>
                <dd className="mt-2 text-sm leading-7 text-secondary-text">{group.skills.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </ResumeSection>
      </main>

      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 text-sm text-secondary-text sm:px-6 md:flex-row md:items-center md:justify-between">
          <p>Verified portfolio information for {portfolio.name}.</p>
          <div className="flex flex-wrap gap-x-5">
            <a className="text-link" href={portfolio.links.x} target="_blank" rel="noopener noreferrer">X</a>
            <a className="text-link" href={portfolio.agentSummary}>AI-readable summary</a>
            <a className="text-link" href={import.meta.env.BASE_URL}>Full portfolio</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
