import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { portfolio, type ContactLink, type IconComponent, type NavItem } from "../data/portfolio";

type DockButtonProps = {
  label: string;
  href?: string;
  icon: IconComponent;
  index: number;
  active?: boolean;
  mobile?: boolean;
  external?: boolean;
  onClick?: () => void;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
  reduceMotion: boolean;
};

export default function DockNav() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const reduceMotion = Boolean(useReducedMotion());

  const internalItems = portfolio.navItems;
  const externalItems = portfolio.dockExternalLinks;
  const themeIndex = internalItems.length + externalItems.length;

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme") as "light" | "dark" | null;
    const initialTheme = storedTheme ?? "light";

    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  useEffect(() => {
    const sections = internalItems
      .map((item) => document.getElementById(item.section))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-18% 0px -64% 0px",
        threshold: [0.15, 0.35, 0.55],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [internalItems]);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    window.localStorage.setItem("theme", nextTheme);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: reduceMotion ? 0 : -14, x: "-50%" }}
      animate={{ opacity: 1, y: 0, x: "-50%" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-5 left-1/2 z-50 md:bottom-auto md:top-5"
      aria-label="Primary navigation"
    >
      <div className="flex items-center gap-2 rounded-full border border-border bg-background/86 px-2.5 py-2 shadow-[0_16px_46px_rgba(0,0,0,0.08)] backdrop-blur-xl dark:bg-background/82 dark:shadow-[0_18px_46px_rgba(0,0,0,0.42)]">
        <div className="flex items-center gap-1">
          {internalItems.map((item, index) => (
            <DockButton
              key={item.href}
              {...item}
              index={index}
              active={activeSection === item.section}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        <DockDivider className="hidden md:block" />

        <div className="hidden items-center gap-1 md:flex">
          {externalItems.map((item, index) => (
            <DockButton
              key={item.href}
              {...item}
              index={internalItems.length + index}
              external
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        <DockDivider />

        <DockButton
          label="Theme"
          icon={theme === "light" ? Moon : Sun}
          index={themeIndex}
          onClick={toggleTheme}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
          reduceMotion={reduceMotion}
        />
      </div>
    </motion.nav>
  );
}

function DockButton({
  label,
  href,
  icon: Icon,
  index,
  active = false,
  mobile = true,
  external = false,
  onClick,
  hoveredIndex,
  setHoveredIndex,
  reduceMotion,
}: DockButtonProps & Partial<NavItem> & Partial<ContactLink>) {
  const isHovered = hoveredIndex === index;
  const isNeighbor = hoveredIndex !== null && Math.abs(hoveredIndex - index) === 1;
  const scale = reduceMotion ? 1 : isHovered ? 1.14 : isNeighbor ? 1.04 : 1;
  const className = `group relative grid size-11 place-items-center rounded-full border border-transparent text-secondary-text transition-colors duration-200 hover:border-border hover:bg-surface hover:text-text focus:outline-none focus-visible:ring-2 focus-visible:ring-text focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
    mobile ? "" : "hidden md:grid"
  } ${active ? "text-text" : ""}`;

  const content = (
    <>
      <motion.span
        animate={{ scale }}
        transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
        className="grid size-8 place-items-center rounded-full"
      >
        <Icon size={21} strokeWidth={active ? 2.1 : 1.85} />
      </motion.span>
      {active ? <span className="absolute bottom-1 size-1 rounded-full bg-text" /> : null}
      <motion.span
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 4 }}
        className="pointer-events-none absolute top-12 hidden whitespace-nowrap rounded-md border border-border bg-text px-2.5 py-1 font-mono text-xs text-background md:block"
      >
        {label}
      </motion.span>
    </>
  );

  if (href) {
    const isMail = href.startsWith("mailto:");

    return (
      <motion.a
        href={href}
        target={external && !isMail ? "_blank" : undefined}
        rel={external && !isMail ? "noreferrer" : undefined}
        onHoverStart={() => setHoveredIndex(index)}
        onHoverEnd={() => setHoveredIndex(null)}
        className={className}
        aria-label={label}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      onHoverStart={() => setHoveredIndex(index)}
      onHoverEnd={() => setHoveredIndex(null)}
      className={className}
      aria-label={label}
    >
      {content}
    </motion.button>
  );
}

function DockDivider({ className = "" }: { className?: string }) {
  return <div className={`h-7 w-px bg-border ${className}`} />;
}
