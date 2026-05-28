import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { portfolio } from "../data/portfolio";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.09, delayChildren: 0.16 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.72, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative isolate min-h-[100dvh] overflow-hidden px-5 pb-16 pt-24 sm:px-6 md:pt-28 lg:flex lg:items-center"
    >
      <div className="dot-grid pointer-events-none absolute inset-0 -z-10 opacity-80" />
      <div className="line-grid pointer-events-none absolute inset-x-0 top-0 -z-10 h-48 opacity-70" />
      <div className="vertical-label pointer-events-none absolute left-5 top-1/2 hidden -translate-y-1/2 font-mono text-[11px] tracking-[0.22em] text-secondary-text xl:block">
        Software / AI / ML / AI Infra
      </div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.02fr_0.78fr] lg:gap-16 xl:pl-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.h1
            variants={itemVariants}
            className="text-balance text-[clamp(3.2rem,8vw,7.2rem)] font-semibold leading-[0.9] tracking-[-0.075em] text-text"
          >
            {portfolio.name}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-[760px] text-balance text-2xl font-medium leading-[1.08] tracking-[-0.045em] text-text sm:text-3xl md:text-4xl lg:text-[3.15rem]"
          >
            {portfolio.title}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-[64ch] text-pretty text-base leading-7 text-secondary-text sm:text-lg"
          >
            {portfolio.subheadline}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <a
              href="#experience"
              className="group inline-flex min-h-11 items-center gap-2 rounded-md bg-text px-5 py-3 text-sm font-medium text-background transition-transform duration-200 hover:scale-[1.015] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-text focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              View Experience
              <ArrowRight size={16} strokeWidth={1.8} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <a
              href={portfolio.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-medium text-text transition-colors duration-200 hover:border-text active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-text focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <FileText size={16} strokeWidth={1.8} />
              Resume
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="no-scrollbar mt-6 flex max-w-3xl gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:overflow-visible sm:pb-0"
          >
            {portfolio.metadataChips.map((chip) => (
              <span
                key={chip}
                className="shrink-0 rounded-md border border-border bg-surface px-2.5 py-1.5 font-mono text-[10px] text-secondary-text sm:px-3 sm:text-[11px]"
              >
                {chip}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.32 }}
          className="relative mx-auto mt-24 w-full max-w-[440px] lg:mr-0 lg:mt-0"
        >
          <motion.div
            whileHover={reduceMotion ? undefined : { y: -6 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="group relative"
          >
            <div className="absolute -inset-4 -z-10 translate-x-4 translate-y-4 border border-border bg-surface" />
            <div className="relative overflow-hidden border border-text bg-background p-3 transition-colors duration-300 group-hover:border-text dark:border-border">
              <img
                src={portfolio.portrait}
                alt="Paramveer Singh Bhele portrait"
                className="aspect-[4/5] w-full object-cover grayscale contrast-[1.08] transition duration-500 ease-out group-hover:scale-[1.035] group-hover:grayscale-0"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
