import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const focusAreas = [
  ["01", "AI product systems", "Model workflows, evaluation, and reliable application boundaries."],
  ["02", "Backend infrastructure", "APIs, persistence, data pipelines, and deployment paths."],
  ["03", "Product engineering", "Interfaces and tools that make technical systems useful."],
];

export default function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-24 py-20 sm:py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <Reveal>
          <div className="grid gap-10 border-b border-border pb-10 lg:grid-cols-[0.78fr_1.1fr] lg:items-end lg:gap-20 lg:pb-12">
            <SectionHeader id="about-heading" eyebrow="About" title="Systems behind the model." />
            <p className="max-w-[62ch] text-pretty text-xl font-medium leading-8 tracking-[-0.025em] text-text sm:text-2xl sm:leading-9">
              I build software at the intersection of backend engineering and applied AI — from developer tools and ML pipelines to full-stack products and research systems.
            </p>
          </div>

          <div className="grid border-b border-border sm:grid-cols-3">
            {focusAreas.map(([number, title, description], index) => (
              <div
                key={title}
                className={`grid grid-cols-[auto_1fr] gap-4 py-6 sm:px-6 ${
                  index === 0 ? "sm:pl-0" : "border-t border-border sm:border-l sm:border-t-0"
                }`}
              >
                <span className="font-mono text-[10px] text-secondary-text">{number}</span>
                <div>
                  <h3 className="text-sm font-medium text-text">{title}</h3>
                  <p className="mt-2 text-xs leading-5 text-secondary-text">{description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-10 pt-10 lg:grid-cols-2 lg:gap-20 lg:pt-12">
            <div className="grid gap-4 sm:grid-cols-[7rem_1fr]">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-secondary-text">
                Background
              </p>
              <p className="text-pretty text-base leading-8 text-secondary-text">
                I graduated from the University of South Florida with a B.S. in Computer Science and minor in Entrepreneurship, and I am pursuing an M.S. in Artificial Intelligence at Columbia University with a focus on AI Infrastructure.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-[7rem_1fr]">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-secondary-text">
                Current focus
              </p>
              <p className="text-pretty text-base leading-8 text-secondary-text">
                I&apos;m particularly interested in APIs, model workflows, infrastructure, data pipelines, evaluation, and the software needed to turn models into reliable products.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
