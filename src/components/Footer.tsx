import { ArrowUp, Bot, FileText, Github } from "lucide-react";
import { portfolio, XLogo } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 text-sm text-secondary-text sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p>&copy; 2026 {portfolio.name}</p>
          <p className="mt-1 flex flex-wrap items-center gap-x-3 text-xs leading-5">
            <span>Built with {portfolio.footerStack}.</span>
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
            <a
              href={portfolio.links.x}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-1 text-text underline decoration-border underline-offset-4 transition-colors hover:decoration-text focus:outline-none focus-visible:ring-2 focus-visible:ring-text"
              aria-label="Paramveer Singh Bhele on X (opens in a new tab)"
            >
              <XLogo size={13} aria-hidden="true" />
              X
            </a>
            <a
              href={portfolio.resumeHtml}
              className="inline-flex min-h-11 items-center gap-1 text-text underline decoration-border underline-offset-4 transition-colors hover:decoration-text focus:outline-none focus-visible:ring-2 focus-visible:ring-text"
            >
              <FileText size={13} strokeWidth={1.8} aria-hidden="true" />
              HTML resume
            </a>
            <a
              href={portfolio.agentSummary}
              className="inline-flex min-h-11 items-center gap-1 text-text underline decoration-border underline-offset-4 transition-colors hover:decoration-text focus:outline-none focus-visible:ring-2 focus-visible:ring-text"
            >
              <Bot size={13} strokeWidth={1.8} aria-hidden="true" />
              AI-readable summary
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
