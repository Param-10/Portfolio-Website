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
      className={`grid size-16 shrink-0 place-items-center overflow-hidden border border-border bg-white p-2 text-lg font-semibold text-black shadow-[inset_0_0_0_6px_var(--surface)] ${className}`}
      aria-label={`${label} logo`}
    >
      {!logoFailed ? (
        <img
          src={logo.src}
          alt=""
          className="max-h-11 max-w-12 object-contain grayscale contrast-[1.08] transition duration-300 ease-out group-hover:grayscale-0"
          onError={() => setLogoFailed(true)}
        />
      ) : (
        <span>{logo.fallback}</span>
      )}
    </div>
  );
}
