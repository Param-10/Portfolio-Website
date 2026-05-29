import Reveal from "./Reveal";

export default function AboutSection() {
  return (
    <section className="py-10 md:py-16">
      <div id="about" className="mx-auto max-w-7xl scroll-mt-4 px-5 sm:px-6 md:scroll-mt-6">
        <Reveal>
          <div className="border-t border-border pt-10">

            <div className="grid gap-8 lg:grid-cols-[0.82fr_1fr]">
              <h2 className="text-balance text-4xl font-semibold tracking-[-0.055em] text-text md:text-5xl">
                A bit about me.
              </h2>

              <div className="max-w-[68ch] space-y-5 text-pretty text-base leading-7 text-secondary-text">
                <p>
                  I enjoy building software that turns technical ideas into reliable, real-world systems.
                  My work sits between <strong className="font-semibold text-text">software engineering</strong> and <strong className="font-semibold text-text">applied AI</strong>,
                  from full-stack products and backend workflows to ML pipelines, data tools, and user-facing
                  applications.
                </p>

                <p>
                  I&apos;m a <strong className="font-semibold text-text">Computer Science graduate from the University of South Florida</strong> with
                  a minor in Entrepreneurship, and an incoming <strong className="font-semibold text-text">Columbia MS AI student</strong> with an
                  AI Infrastructure concentration. Along the way, I&apos;ve received academic recognition through the
                  <strong className="font-semibold text-text"> USF Green and Gold Directors Award</strong>,
                  <strong className="font-semibold text-text"> Annette L. Raymund Endowed Scholarship Fund</strong>,
                  <strong className="font-semibold text-text"> Computer Science Foundation Scholarship</strong>, and
                  <strong className="font-semibold text-text"> Engineering Annual Fund Scholarship</strong>.
                </p>

                <p>
                  I&apos;ve worked as a <strong className="font-semibold text-text">Machine Learning Engineer Intern</strong>,
                  <strong className="font-semibold text-text"> Undergraduate Research Assistant at RARE Lab</strong>,
                  <strong className="font-semibold text-text"> Student Assistant at USF Libraries</strong>, Peer Mentor for engineering students,
                  and App Developer Intern. Across these roles, I&apos;ve worked on backend model workflows, metadata
                  validation tools, research systems, mobile applications, and software used by real users.
                </p>

                <p>
                  Outside of technical work, I&apos;ve led and supported student organizations at USF as
                  <strong className="font-semibold text-text"> Head of Logistics for TEDx at USF</strong>,
                  <strong className="font-semibold text-text"> Vice President of the Students of India Association</strong>, and
                  <strong className="font-semibold text-text"> Database Director for SHPE</strong>. I also won the
                  <strong className="font-semibold text-text"> Best Use of Gemini API</strong> track at HackaBull 2025 with CarbonCTRL,
                  ranking 1st among 70+ projects.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
