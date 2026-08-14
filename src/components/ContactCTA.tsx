import { ArrowUpRight } from "lucide-react";
import { portfolio } from "../data/portfolio";
import Reveal from "./Reveal";

export default function ContactCTA() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-24 py-20 sm:py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <Reveal className="group relative overflow-hidden border border-border bg-surface p-6 transition-colors duration-300 hover:border-text sm:p-8 lg:p-12">
          <div className="dot-grid pointer-events-none absolute inset-x-0 top-0 h-40 opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent)]" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary-text">
                Contact
              </p>
              <h2
                id="contact-heading"
                className="mt-4 text-balance text-4xl font-semibold tracking-[-0.06em] text-text sm:text-5xl md:text-6xl"
              >
                Let&apos;s build something useful.
              </h2>
              <p className="mt-5 max-w-3xl text-pretty text-base leading-7 text-secondary-text sm:text-lg sm:leading-8">
                {portfolio.contactBody}
              </p>
            </div>

            <a href={`mailto:${portfolio.email}`} className="button-primary w-fit">
              Email me
              <ArrowUpRight size={17} strokeWidth={1.8} aria-hidden="true" />
            </a>
          </div>

          <nav aria-label="Contact links" className="relative z-10 mt-10 border-t border-border pt-6">
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {portfolio.contactLinks.slice(1).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link min-h-11"
                    aria-label={`${link.label} (opens in a new tab)`}
                  >
                    <link.icon size={16} strokeWidth={1.8} aria-hidden="true" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Reveal>
      </div>
    </section>
  );
}
