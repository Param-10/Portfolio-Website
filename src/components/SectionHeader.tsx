type SectionHeaderProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export default function SectionHeader({
  id,
  eyebrow,
  title,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <header className={`max-w-3xl ${className}`}>
      <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-secondary-text">
        {eyebrow}
      </p>
      <h2 id={id} className="mt-4 text-balance text-4xl font-semibold tracking-[-0.055em] text-text sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-[62ch] text-pretty text-base leading-7 text-secondary-text sm:text-lg sm:leading-8">
          {description}
        </p>
      ) : null}
    </header>
  );
}
