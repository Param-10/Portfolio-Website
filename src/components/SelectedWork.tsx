import { motion, useReducedMotion } from "framer-motion";
import { portfolio, type Project } from "../data/portfolio";

export default function SelectedWork() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-10 md:py-16">
      <div id="projects" className="mx-auto max-w-7xl scroll-mt-4 px-5 sm:px-6 md:scroll-mt-6">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 font-mono text-xs text-secondary-text">Projects</p>
          <h2 className="text-balance text-4xl font-semibold tracking-[-0.055em] text-text md:text-6xl">
            Practical intelligent systems, from pull-request security to applied ML products.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          <ProjectCard project={portfolio.projects[0]} index={0} className="md:col-span-12" feature />
          <ProjectCard project={portfolio.projects[1]} index={1} className="md:col-span-6" />
          <ProjectCard project={portfolio.projects[2]} index={2} className="md:col-span-6" />
          <ProjectCard project={portfolio.projects[3]} index={3} className="md:col-span-12" wide />
        </div>
      </div>
    </section>
  );

  function ProjectCard({
    project,
    index,
    className,
    feature = false,
    wide = false,
  }: {
    project: Project;
    index: number;
    className: string;
    feature?: boolean;
    wide?: boolean;
  }) {
    return (
      <motion.article
        initial={{ opacity: 0, y: reduceMotion ? 0 : 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-90px" }}
        transition={{ duration: 0.64, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
        whileHover={reduceMotion ? undefined : { y: -4 }}
        className={`group border border-border bg-surface p-6 transition-colors duration-300 hover:border-text dark:hover:border-background sm:p-8 ${className}`}
      >
        <div className={feature ? "grid gap-8 lg:grid-cols-[0.72fr_1fr]" : wide ? "grid gap-8 lg:grid-cols-[0.46fr_1fr]" : ""}>
          <div className="flex min-h-full flex-col">
            <div className="mb-8 flex items-start justify-between gap-6">
              <span className="font-mono text-xs text-secondary-text">{project.number}</span>
              {project.links.length > 0 ? (
                <div className="flex flex-wrap justify-end gap-2">
                  {project.links.map((link) => (
                    link.href ? (
                      <a
                        key={`${project.title}-${link.label}`}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group/link relative grid size-9 place-items-center rounded-full border border-border text-secondary-text transition-colors duration-200 hover:border-text hover:text-text"
                        aria-label={`${project.title} ${link.label}`}
                      >
                        <link.icon size={17} strokeWidth={1.9} />
                        <span className="pointer-events-none absolute top-10 whitespace-nowrap rounded-md border border-border bg-text px-2 py-1 font-mono text-[11px] text-background opacity-0 transition-opacity duration-200 group-hover/link:opacity-100">
                          {link.label}
                        </span>
                      </a>
                    ) : (
                      <span
                        key={`${project.title}-${link.label}`}
                        className="inline-flex h-9 items-center gap-2 rounded-full border border-border px-3 font-mono text-[11px] text-secondary-text"
                      >
                        <link.icon size={15} strokeWidth={1.9} />
                        {link.label}
                      </span>
                    )
                  ))}
                </div>
              ) : null}
            </div>

            <h3 className="text-balance text-3xl font-semibold tracking-[-0.05em] text-text md:text-4xl">
              {project.title}
            </h3>

            <p className="mt-5 max-w-[58ch] text-pretty text-base leading-7 text-secondary-text">
              {project.description}
            </p>
          </div>

          <div className="flex min-h-full flex-col justify-between gap-8">
            <p className="border-l border-border pl-4 font-mono text-xs leading-6 text-text">
              {project.outcome}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-border bg-background px-2.5 py-1.5 font-mono text-[11px] text-secondary-text"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.article>
    );
  }
}
