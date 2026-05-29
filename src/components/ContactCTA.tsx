import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function ContactCTA() {
  return (
    <section className="py-10 md:py-16">
      <div id="contact" className="mx-auto max-w-7xl scroll-mt-4 px-5 sm:px-6 md:scroll-mt-6">
        <Reveal className="group relative border border-border bg-surface p-5 transition-colors duration-300 hover:border-text sm:p-7">
          <div className="dot-grid pointer-events-none absolute inset-x-0 top-0 h-32 opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent)]" />

          <div className="relative z-10">
            <p className="mb-4 font-mono text-xs text-secondary-text">Contact</p>

            <h2 className="text-balance text-4xl font-semibold tracking-[-0.055em] text-text md:text-6xl">
              Let&apos;s build something useful.
            </h2>

            <p className="mt-5 max-w-[64ch] text-pretty text-base leading-7 text-secondary-text sm:text-lg">
              Open to software engineering, AI/ML engineering, research collaborations, and product-focused roles where practical systems matter.
            </p>

            <a
              href="mailto:paramveerbhele@gmail.com"
              className="group/link mt-6 inline-flex items-center gap-2 text-base font-medium text-text transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-text focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
            >
              <span className="border-b border-transparent transition-colors duration-200 group-hover/link:border-text">
                Get in touch
              </span>
              <ArrowRight size={16} strokeWidth={1.8} className="transition-transform duration-200 group-hover/link:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
