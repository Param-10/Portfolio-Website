import { ArrowUp, Github } from "lucide-react";
import { portfolio } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 text-sm text-secondary-text sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p>&copy; 2026 {portfolio.name}</p>
          <p className="mt-1 text-xs leading-5">
            Built with {portfolio.footerStack}.{" "}
            <a
              href={portfolio.links.source}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-1 text-text underline decoration-border underline-offset-4 transition-colors hover:decoration-text focus:outline-none focus-visible:ring-2 focus-visible:ring-text"
              aria-label="View this portfolio's source code on GitHub (opens in a new tab)"
            >
              <Github size={13} strokeWidth={1.8} aria-hidden="true" />
              View source
            </a>
          </p>
        </div>

        <a href="#home" className="text-link w-fit" aria-label="Back to top">
          Back to top
          <ArrowUp size={15} strokeWidth={1.8} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
