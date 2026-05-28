import { portfolio } from "../data/portfolio";
import Reveal from "./Reveal";

export default function ContactCTA() {
  return (
    <section className="bg-surface py-28 pb-40 md:py-36 md:pb-36">
      <div id="contact" className="mx-auto max-w-7xl scroll-mt-4 px-5 sm:px-6 md:scroll-mt-6">
        <Reveal className="grid gap-10 border border-border bg-background p-6 sm:p-10 md:grid-cols-[1.1fr_0.9fr] md:p-12">
          <div>
            <p className="mb-5 font-mono text-xs text-secondary-text">Contact</p>
            <h2 className="text-balance text-5xl font-semibold leading-[0.96] tracking-[-0.07em] text-text md:text-7xl">
              Let&apos;s build something useful.
            </h2>
          </div>

          <div className="flex flex-col justify-end gap-8">
            <p className="max-w-[46ch] text-pretty text-base leading-7 text-secondary-text">
              {portfolio.contactBody}
            </p>

            <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
              {portfolio.contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                  className="rounded-md border border-border bg-surface px-4 py-3 text-center text-sm font-medium text-text transition-colors duration-200 hover:border-text active:scale-[0.98]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
