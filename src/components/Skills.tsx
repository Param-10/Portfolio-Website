import React from 'react';

interface TechnicalSkills {
  languages: string[];
  frameworks: string[];
  tools: string[];
  courses: string[];
}

interface SkillsProps {
  technicalSkills: TechnicalSkills;
}

const Skills = ({ technicalSkills }: SkillsProps) => {
  return (
    <section id="skills" className="py-4 scroll-mt-20">
      <div className="rounded-lg p-6 border">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(technicalSkills).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-2">{category}</h3>
              <ul>
                {skills.map((skill: string, index: number) => (
                  <li key={index} className="py-1">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
