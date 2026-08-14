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
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: reduceMotion ? 0 : 0.58, delay: reduceMotion ? 0 : delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </Component>
  );
}
