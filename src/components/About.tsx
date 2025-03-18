import React from 'react';
import profileImage from '../assets/My_Image.jpg';

function About() {
  return (
    <section id="about" className="py-4 scroll-mt-20">
      <div className="rounded-lg p-6 border">
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-bold mb-4 w-full text-center">
            About Me
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">🚀 AI & Data Enthusiast | Aspiring Tech Leader</h3>
              <p className="leading-relaxed">
                I am a Computer Science student at the University of South Florida with a Minor in Entrepreneurship,
                passionate about leveraging AI, machine learning, and cloud computing to solve real-world challenges.
                My experience spans building ML models, crafting data-driven solutions, and developing scalable applications.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">🌟 Mission</h3>
              <p className="leading-relaxed">
                Committed to using technology to drive innovation and empower users, I aim to create impactful tools
                while inspiring others to explore the transformative potential of AI and data.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">💡 Core Skills</h3>
              <ul className="space-y-2 ml-4">
                <li>
                  <span className="font-medium">AI/ML:</span> Developing predictive models (e.g., Logistic Regression),
                  pre-processing data, and creating interactive dashboards for insights.
                </li>
                <li>
                  <span className="font-medium">Data & Cloud:</span> Expertise in data manipulation, visualization
                  (Python libraries), and integrating APIs into cloud-ready applications.
                </li>
                <li>
                  <span className="font-medium">Programming:</span> Proficient in Python, JavaScript, C++, SQL,
                  and frontend tools like HTML/CSS.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
