import { portfolio } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="mx-auto max-w-7xl px-5 text-sm text-secondary-text sm:px-6">
        <p>
          &copy; 2026 {portfolio.name}
        </p>
      </div>
    </footer>
  );
}
