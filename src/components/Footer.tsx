import { portfolio } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 text-sm text-secondary-text sm:px-6 md:flex-row md:items-center md:justify-between">
        <p>
          &copy; 2026 {portfolio.name}
        </p>

        <div className="flex flex-wrap gap-5 font-mono text-xs">
          <span>{portfolio.footerLine}</span>
        </div>
      </div>
    </footer>
  );
}
