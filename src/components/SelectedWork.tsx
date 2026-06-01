import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { portfolio, type Project } from "../data/portfolio";

export default function SelectedWork() {
  const reduceMotion = useReducedMotion();
  const [isExpanded, setIsExpanded] = useState(false);

  const initialProjects = portfolio.projects.slice(0, 4);
  const extraProjects = portfolio.projects.slice(4);

  return (
    <section className="py-10 md:py-16">
      <div id="projects" className="mx-auto max-w-7xl scroll-mt-4 px-5 sm:px-6 md:scroll-mt-6">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-balance text-4xl font-semibold tracking-[-0.055em] text-text md:text-6xl">
            A few of my best projects.
          </h2>
        </div>

        {/* Projects Grid with layout positioning for smooth shifts */}
        <motion.div layout="position" className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {initialProjects.map((project, index) => (
            <motion.div layout="position" key={project.title}>
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
          <AnimatePresence initial={false}>
            {isExpanded &&
              extraProjects.map((project, index) => (
                <motion.div
                  layout="position"
                  key={project.title}
                  initial={{ opacity: 0, y: reduceMotion ? 0 : 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
                  transition={{
                    opacity: { duration: 0.35 },
                    y: { type: "spring", stiffness: 100, damping: 15 },
                    delay: reduceMotion ? 0 : index * 0.06,
                  }}
                >
                  <ProjectCard project={project} index={index + 4} />
                </motion.div>
              ))}
          </AnimatePresence>
        </motion.div>

        {/* Premium Interactive Toggle Button */}
        <motion.div layout="position" className="mt-12 flex justify-center">
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            whileHover={reduceMotion ? undefined : { scale: 1.02, y: -2 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="group relative flex items-center gap-2.5 border border-border bg-surface px-6 py-3 font-mono text-xs uppercase tracking-widest text-text transition-colors duration-300 hover:border-text hover:bg-muted dark:hover:border-background"
          >
            <span>{isExpanded ? "Show fewer projects" : "Show more projects"}</span>
            <motion.span
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="inline-flex items-center"
            >
              <ChevronDown size={14} strokeWidth={2} />
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );

  function ProjectCard({
    project,
    index,
  }: {
    project: Project;
    index: number;
  }) {
    return (
      <motion.article
        initial={{ opacity: 0, y: reduceMotion ? 0 : 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-90px" }}
        transition={{ duration: 0.64, delay: (index % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
        whileHover={reduceMotion ? undefined : { y: -4 }}
        className="group flex h-full flex-col border border-border bg-surface p-4 transition-colors duration-300 hover:border-text dark:hover:border-background sm:p-5"
      >
        <ProjectImage src={project.image} alt={`${project.title} preview`} title={project.title} />

        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <span className="mb-1 block font-mono text-[10px] text-secondary-text">{project.number}</span>
            <h3 className="text-xl font-semibold tracking-tight text-text">
              {project.title}
            </h3>
          </div>

          {project.links.length > 0 && (
            <div className="flex shrink-0 gap-2">
              {project.links.map((link) =>
                link.href ? (
                  <a
                    key={`${project.title}-${link.label}`}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group/link relative grid size-8 place-items-center rounded-full border border-border text-secondary-text transition-colors duration-200 hover:border-text hover:text-text"
                    aria-label={`${project.title} ${link.label}`}
                  >
                    <link.icon size={15} strokeWidth={1.9} />
                    <span className="pointer-events-none absolute bottom-10 whitespace-nowrap rounded-md border border-border bg-text px-2 py-1 font-mono text-[10px] text-background opacity-0 transition-opacity duration-200 group-hover/link:opacity-100">
                      {link.label}
                    </span>
                  </a>
                ) : null
              )}
            </div>
          )}
        </div>

        <p className="mb-5 text-pretty text-sm leading-6 text-secondary-text">
          {project.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-2">
          {project.tech.map((skill) => (
            <span
              key={skill}
              className="rounded-md border border-border bg-background px-2 py-0.5 font-mono text-[10px] text-secondary-text"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.article>
    );
  }
}

function ProjectImage({ src, alt, title }: { src?: string; alt: string; title: string }) {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    let placeholderText = "Backend & API Engine";
    if (title.toLowerCase().includes("spam")) {
      placeholderText = "Adversarial ML Pipeline";
    }

    return (
      <div className="mb-4 flex h-40 w-full flex-col items-center justify-center rounded-md border border-border bg-muted text-center p-4 sm:h-44 md:h-48 lg:h-52">
        <span className="font-mono text-xs font-semibold text-text">{placeholderText}</span>
        <span className="mt-1.5 font-mono text-[9px] uppercase tracking-wider text-secondary-text">No Frontend UI / Backend Only</span>
      </div>
    );
  }

  const isMobileMockup = title.toLowerCase().includes("matchup") || title.toLowerCase().includes("focus timer");

  return (
    <div className={`mb-4 h-40 w-full overflow-hidden rounded-md border border-border sm:h-44 md:h-48 lg:h-52 ${isMobileMockup ? "bg-muted" : "bg-background"}`}>
      <img
        src={src}
        alt={alt}
        onError={() => setHasError(true)}
        className={`size-full ${isMobileMockup ? "object-contain p-2" : "object-cover object-top"} grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-[1.03]`}
        loading="lazy"
      />
    </div>
  );
}
