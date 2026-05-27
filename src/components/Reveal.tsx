import { PropsWithChildren } from "react";
import { motion, useReducedMotion } from "framer-motion";

type RevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article";
}>;

export default function Reveal({
  as = "div",
  children,
  className,
  delay = 0,
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const components = {
    div: motion.div,
    section: motion.section,
    article: motion.article,
  };
  const Component = components[as];

  return (
    <Component
      initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.64, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </Component>
  );
}
