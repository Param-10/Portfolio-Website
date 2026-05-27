import { useState } from "react";
import type { LogoMeta } from "../data/portfolio";

type LogoBoxProps = {
  logo: LogoMeta;
  label: string;
  className?: string;
};

export default function LogoBox({ logo, label, className = "" }: LogoBoxProps) {
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <div
      className={`grid size-14 shrink-0 place-items-center border border-border bg-background text-lg font-semibold text-text shadow-[inset_0_0_0_6px_var(--surface)] ${className}`}
      aria-label={`${label} logo`}
    >
      {!logoFailed ? (
        <img
          src={logo.src}
          alt=""
          className="max-h-9 max-w-9 grayscale"
          onError={() => setLogoFailed(true)}
        />
      ) : (
        <span>{logo.fallback}</span>
      )}
    </div>
  );
}
