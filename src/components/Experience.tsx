import React from 'react';

function Experience() {
  return (
    <section id="experience" className="py-4 scroll-mt-20">
      <div className="rounded-lg p-6 border">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Experience
        </h2>

        {/* Professional Experience */}
        <div className="space-y-4">
          {/* Undergraduate Researcher RARE Lab*/}
          <div className="p-4 rounded-lg">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
              <div className="flex-1">
                <h3 className="text-lg font-semibold">Undergraduate Researcher</h3>
                <p className="text-sm md:text-base">RARE Lab, University of South Florida · Part-time</p>
              </div>
              <div className="md:text-right">
                <p className="text-sm md:text-base">Feb 2025 - Present</p>
                <p className="text-xs md:text-sm">Tampa, Florida, United States · On-site</p>
              </div>
            </div>
            <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
              <li>
                Gained in-depth understanding of human-robot interaction by designing and implementing comprehensive survey instruments to collect qualitative and quantitative data
              </li>
              <li>
                Identified critical behavioral trends and patterns in human-robot interaction by utilizing Python, Pandas, and NumPy for advanced statistical analysis on large datasets from interactions and survey responses
              </li>
              <li>
                Advanced safety and social perception understanding of female-presenting robotic platforms by contributing to a project focused on developing physical protective solutions for the Pepper robot within Human-Robot Interaction (HRI) and AI research
              </li>
            </ul>
          </div>

          {/* University Library Experience */}
          <div className="p-4 rounded-lg">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
              <div className="flex-1">
                <h3 className="text-lg font-semibold">Student Assistant - Collections and Discovery</h3>
                <p className="text-sm md:text-base">University of South Florida Libraries · Part-time</p>
              </div>
              <div className="md:text-right">
                <p className="text-sm md:text-base">Aug 2024 - Present</p>
                <p className="text-xs md:text-sm">Tampa, Florida, United States · On-site</p>
              </div>
            </div>
            <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
              <li>
                Improved cataloging accuracy and retrieval efficiency for over 1,000 library materials by meticulously managing and standardizing metadata
              </li>
              <li>
                Enhanced library collection organization and accessibility for over 10,000 items by providing accurate and efficient data entry support
              </li>
            </ul>
          </div>

          {/* Peer Mentor Experience */}
          <div className="p-4 rounded-lg">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-semibold">Peer Mentor for Learning Team</h3>
                <p className="text-sm md:text-base">USF College of Engineering · Part-time</p>
              </div>
              <div className="md:text-right">
                <p className="text-sm md:text-base">Apr 2023 - Aug 2024</p>
                <p className="text-xs md:text-sm">Tampa, Florida, United States · On-site</p>
              </div>
            </div>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>
                Elevated academic performance in Calculus for first-year engineering students through personalized mentoring and targeted problem-solving instruction
              </li>
              <li>
                Enhanced collaborative learning and problem-solving skills for students in EGN 4930 by facilitating interactive weekly Learning Team sessions
              </li>
              <li>
                Improved student academic success and retention through consistent one-on-one academic counseling sessions throughout the semester
              </li>
              <li>
                Increased student confidence and exam readiness for 50+ students by organizing and leading comprehensive exam preparation study sessions
              </li>
            </ul>
          </div>

          {/* Coefficient Software Internship */}
          <div className="p-4 rounded-lg">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-semibold">Summer Intern</h3>
                <p className="text-sm md:text-base">COEFFICIENT SOFTWARE SYSTEMS PRIVATE LIMITED · Internship</p>
              </div>
              <div className="md:text-right">
                <p className="text-sm md:text-base">May 2022 - Jul 2022</p>
                <p className="text-xs md:text-sm">Navi Mumbai, India · Hybrid</p>
              </div>
            </div>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>
                Gained comprehensive insights into global higher education trends by compiling and analyzing data on top universities across the USA, Canada, UK, and Australia
              </li>
              <li>
                Enhanced mobile application usability by applying UI/UX design principles to cross-platform projects
              </li>
              <li>
                Drove user engagement and contributed to the success of the "Word of the Day" app, achieving 100,000+ downloads and a 4.1/5 Play Store rating
              </li>
              <li>
                Optimized reporting processes by providing technical support for existing reports and dashboards
              </li>
              <li>
                Ensured high-quality application releases by conducting thorough functionality testing during development phases
              </li>
            </ul>
            <a
              href="https://bit.ly/googlestore1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-sm"
            >
              View on Google Play Store →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
