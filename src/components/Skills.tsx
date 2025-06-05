import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Brain } from 'lucide-react';
import {
  SiPython,
  SiCplusplus,
  SiC,
  SiSharp,
  SiTypescript,
  SiJavascript,
  SiMysql,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiDotnet,
  SiFlask,
  SiSupabase,
  SiGooglegemini,
  SiOpencv,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiAmazonwebservices,
  SiDocker,
  SiGithub,
  SiJupyter,
  SiXcode,
  SiAndroidstudio
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';

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
  // Icon mapping for each technology with brand color
  const skillIcons: { [key: string]: { icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>, color: string } } = {
    // Languages
    'Python': { icon: SiPython, color: '#3776AB' },
    'C++': { icon: SiCplusplus, color: '#00599C' },
    'C': { icon: SiC, color: '#A8B9CC' },
    'C#': { icon: SiSharp, color: '#239120' },
    'Java': { icon: FaJava, color: '#007396' },
    'TypeScript': { icon: SiTypescript, color: '#3178C6' },
    'JavaScript': { icon: SiJavascript, color: '#F7DF1E' },
    'MySQL': { icon: SiMysql, color: '#4479A1' },
    
    // Frameworks & Libraries
    'React.js': { icon: SiReact, color: '#61DAFB' },
    'Next.js': { icon: SiNextdotjs, color: '#000000' },
    'Node.js': { icon: SiNodedotjs, color: '#339933' },
    'Express': { icon: SiExpress, color: '#000000' },
    '.NET': { icon: SiDotnet, color: '#512BD4' },
    'Flask': { icon: SiFlask, color: '#000000' },
    'Supabase': { icon: SiSupabase, color: '#3ECF8E' },
    'Gemini API': { icon: SiGooglegemini, color: '#4285F4' },
    'REST APIs': { icon: SiNodedotjs, color: '#339933' },
    'OpenAI API': { icon: SiReact, color: '#61DAFB' },
    
    // Machine Learning
    'NumPy': { icon: SiNumpy, color: '#013243' },
    'Pandas': { icon: SiPandas, color: '#150458' },
    'Scikit-learn': { icon: SiScikitlearn, color: '#F7931E' },
    'TensorFlow': { icon: SiTensorflow, color: '#FF6F00' },
    'PyTorch': { icon: SiPytorch, color: '#EE4C2C' },
    'OpenCV': { icon: SiOpencv, color: '#5C3EE8' },
    'Matplotlib': { icon: SiPython, color: '#3776AB' },
    'DeepFace': { icon: SiPython, color: '#3776AB' },
    
    // Tools & Technologies
    'AWS Cloud': { icon: SiAmazonwebservices, color: '#FF9900' },
    'Docker': { icon: SiDocker, color: '#2496ED' },
    'GitHub': { icon: SiGithub, color: '#181717' },
    'VS Code': { icon: VscCode, color: '#007ACC' },
    'Jupyter': { icon: SiJupyter, color: '#F37626' },
    'Android Studio': { icon: SiAndroidstudio, color: '#3DDC84' },
    'Xcode': { icon: SiXcode, color: '#147EFB' }
  };

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
                {category.skills.map((skill, skillIndex) => {
                  const iconData = skillIcons[skill];
                  return (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-2 px-3 py-1 bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-full text-sm font-mono hover:border-blue-600/50 dark:hover:border-blue-400/50 transition-colors"
                    >
                      {iconData && (
                        <iconData.icon className="w-4 h-4 flex-shrink-0" style={{ color: iconData.color }} />
                      )}
                      <span className="text-slate-700 dark:text-slate-300">{skill}</span>
                    </motion.span>
                  );
                })}
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
