import { useCallback, useEffect, useRef, useState, type Ref } from "react";
import {
  motion,
  type MotionValue,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
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
  mouseX: MotionValue<number>;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
  reduceMotion: boolean;
};

export default function DockNav() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const mouseX = useMotionValue(Number.POSITIVE_INFINITY);
  const reduceMotion = Boolean(useReducedMotion());

  const internalItems = portfolio.navItems;
  const externalItems = portfolio.dockExternalLinks;
  const themeIndex = internalItems.length + externalItems.length;

  const updateActiveSection = useCallback(() => {
    const anchorY = window.innerWidth >= 768 ? 176 : window.innerHeight - 132;
    const hashSection = window.location.hash.slice(1);
    const hashItem = internalItems.find((item) => item.section === hashSection);

    if (hashItem) {
      const hashElement = document.getElementById(hashItem.section);
      const hashTop = hashElement?.getBoundingClientRect().top;

      if (typeof hashTop === "number" && hashTop > -80 && hashTop <= anchorY + 80) {
        setActiveSection(hashItem.section);
        return;
      }
    }

    let currentSection = internalItems[0]?.section ?? "home";

    for (const item of internalItems) {
      const section = document.getElementById(item.section);

      if (section && section.getBoundingClientRect().top <= anchorY) {
        currentSection = item.section;
      }
    }

    const isPageEnd =
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;

    if (isPageEnd) {
      currentSection = internalItems.at(-1)?.section ?? currentSection;
    }

    setActiveSection(currentSection);
  }, [internalItems]);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme") as "light" | "dark" | null;
    const initialTheme = storedTheme ?? "light";

    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  useEffect(() => {
    let frame = 0;

    const scheduleActiveUpdate = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(() => {
        frame = 0;
        updateActiveSection();
      });
    };

    scheduleActiveUpdate();
    window.addEventListener("scroll", scheduleActiveUpdate, { passive: true });
    window.addEventListener("resize", scheduleActiveUpdate);
    window.addEventListener("hashchange", scheduleActiveUpdate);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", scheduleActiveUpdate);
      window.removeEventListener("resize", scheduleActiveUpdate);
      window.removeEventListener("hashchange", scheduleActiveUpdate);
    };
  }, [updateActiveSection]);

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
      <motion.div
        onMouseMove={(event) => mouseX.set(event.clientX)}
        onMouseLeave={() => {
          mouseX.set(Number.POSITIVE_INFINITY);
          setHoveredIndex(null);
        }}
        className="flex h-14 items-center gap-1.5 rounded-full border border-border bg-white/94 px-2.5 py-2 shadow-[0_16px_46px_rgba(0,0,0,0.09)] backdrop-blur-xl dark:bg-[#050505]/90 dark:shadow-[0_18px_46px_rgba(0,0,0,0.42)]"
      >
        <div className="flex items-center gap-1">
          {internalItems.map((item, index) => (
            <DockButton
              key={item.href}
              {...item}
              index={index}
              active={activeSection === item.section}
              onClick={() => {
                setActiveSection(item.section);
                setHoveredIndex(index);
              }}
              mouseX={mouseX}
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
              mouseX={mouseX}
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
          mouseX={mouseX}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
          reduceMotion={reduceMotion}
        />
      </motion.div>
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
  mouseX,
  hoveredIndex,
  setHoveredIndex,
  reduceMotion,
}: DockButtonProps & Partial<NavItem> & Partial<ContactLink>) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const isHovered = hoveredIndex === index;
  const distance = useTransform(mouseX, (value) => {
    const bounds = ref.current?.getBoundingClientRect();

    if (!bounds || !Number.isFinite(value)) {
      return Number.POSITIVE_INFINITY;
    }

    return value - bounds.left - bounds.width / 2;
  });

  const widthValue = useTransform(distance, [-170, -95, 0, 95, 170], [40, 47, 58, 47, 40]);
  const yValue = useTransform(distance, [-170, -95, 0, 95, 170], [0, -1.5, -4, -1.5, 0]);
  const iconScaleValue = useTransform(distance, [-130, -60, 0, 60, 130], [1, 1.06, 1.28, 1.06, 1]);
  const springConfig = { mass: 0.16, stiffness: 320, damping: 24 };
  const width = useSpring(widthValue, springConfig);
  const y = useSpring(yValue, springConfig);
  const iconScale = useSpring(iconScaleValue, springConfig);
  const motionStyle = reduceMotion ? { width: 40, height: 40 } : { width, height: 40, y };
  const className = `group relative flex shrink-0 items-center justify-center rounded-full border text-[#686868] transition-colors duration-200 hover:border-border hover:bg-surface hover:text-text focus:outline-none focus-visible:ring-2 focus-visible:ring-text focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:text-secondary-text ${
    mobile ? "" : "hidden md:grid"
  } ${active ? "border-border bg-surface text-text shadow-[0_8px_20px_rgba(0,0,0,0.07)] dark:text-text" : "border-transparent"}`;

  const content = (
    <>
      <motion.span
        style={reduceMotion ? undefined : { scale: iconScale }}
        className="grid size-7 place-items-center rounded-full sm:size-8"
      >
        <Icon size={20} strokeWidth={active ? 2.1 : 1.85} />
      </motion.span>
      {active ? <span className="absolute -bottom-1.5 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-text" /> : null}
      <motion.span
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 4 }}
        transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute top-[calc(100%+0.55rem)] hidden whitespace-nowrap rounded-md border border-border bg-text px-2.5 py-1 font-mono text-xs text-background md:block"
      >
        {label}
      </motion.span>
    </>
  );

  if (href) {
    const isMail = href.startsWith("mailto:");

    return (
      <motion.a
        ref={ref as Ref<HTMLAnchorElement>}
        href={href}
        target={external && !isMail ? "_blank" : undefined}
        rel={external && !isMail ? "noreferrer" : undefined}
        style={motionStyle}
        onHoverStart={() => setHoveredIndex(index)}
        onHoverEnd={() => setHoveredIndex(null)}
        onClick={onClick}
        onFocus={() => setHoveredIndex(index)}
        onBlur={() => setHoveredIndex(null)}
        className={className}
        aria-label={label}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as Ref<HTMLButtonElement>}
      type="button"
      onClick={onClick}
      style={motionStyle}
      onHoverStart={() => setHoveredIndex(index)}
      onHoverEnd={() => setHoveredIndex(null)}
      onFocus={() => setHoveredIndex(index)}
      onBlur={() => setHoveredIndex(null)}
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
