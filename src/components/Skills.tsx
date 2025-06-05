import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Brain } from 'lucide-react';

interface TechnicalSkills {
  languages: string[];
  frameworks: string[];
  tools: string[];
  machineLearning: string[];
}

interface SkillsProps {
  technicalSkills: TechnicalSkills;
}

const Skills = ({ technicalSkills }: SkillsProps) => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      skills: technicalSkills.languages,
      color: 'text-blue-600 dark:text-blue-400'
    },
    {
      title: 'Frameworks & Libraries',
      icon: Database,
      skills: technicalSkills.frameworks,
      color: 'text-green-600 dark:text-green-400'
    },
    {
      title: 'Machine Learning',
      icon: Brain,
      skills: technicalSkills.machineLearning,
      color: 'text-red-600 dark:text-red-400'
    },
    {
      title: 'Tools & Technologies',
      icon: Cloud,
      skills: technicalSkills.tools,
      color: 'text-purple-600 dark:text-purple-400'
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="section-heading">Skills & Technologies</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-gray-200 dark:border-slate-700 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <category.icon className={`w-6 h-6 ${category.color}`} />
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="px-3 py-1 bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-full text-sm font-mono text-slate-700 dark:text-slate-300 hover:border-blue-600/50 dark:hover:border-blue-400/50 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
            </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I'm always eager to learn new technologies and stay up-to-date with the latest developments 
            in software engineering, machine learning, and web development. Currently exploring 
            advanced AI/ML techniques and modern web frameworks.
          </p>
        </motion.div>
      </motion.div>
      </div>
  );
};

export default Skills;
