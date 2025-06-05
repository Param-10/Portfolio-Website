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
  SiAndroidstudio,
  SiJira,
  SiGit
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
    'Xcode': { icon: SiXcode, color: '#147EFB' },
    'Git': { icon: SiGit, color: '#F05032' },
    'Jira': { icon: SiJira, color: '#0052CC' },
    'Microsoft 365': { icon: SiMysql, color: '#D83B01' }
  };

  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      skills: technicalSkills.languages,
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30',
      borderColor: 'border-blue-200 dark:border-blue-800'
    },
    {
      title: 'Frameworks & Libraries',
      icon: Database,
      skills: technicalSkills.frameworks,
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-50 dark:bg-green-950/30',
      borderColor: 'border-green-200 dark:border-green-800'
    },
    {
      title: 'Machine Learning',
      icon: Brain,
      skills: technicalSkills.machineLearning,
      color: 'text-red-600 dark:text-red-400',
      bgColor: 'bg-red-50 dark:bg-red-950/30',
      borderColor: 'border-red-200 dark:border-red-800'
    },
    {
      title: 'Tools & Technologies',
      icon: Cloud,
      skills: technicalSkills.tools,
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-50 dark:bg-purple-950/30',
      borderColor: 'border-purple-200 dark:border-purple-800'
    }
  ];

  return (
    <div className="container mx-auto px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="section-heading">Skills & Technologies</h2>
        
        {/* Single unified view with all skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-slate-800 p-4 md:p-6 lg:p-8 rounded-xl border border-gray-200 dark:border-slate-700 shadow-lg"
        >
          <div className="space-y-6 md:space-y-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="space-y-3 md:space-y-4"
              >
                {/* Category Header */}
                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                  <div className={`p-1.5 md:p-2 rounded-lg ${category.bgColor} ${category.borderColor} border`}>
                    <category.icon className={`w-4 h-4 md:w-5 md:h-5 ${category.color}`} />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-slate-900 dark:text-slate-100">
                    {category.title}
                  </h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-gray-300 dark:from-slate-600 to-transparent"></div>
                </div>
                
                {/* Skills Grid */}
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {category.skills.map((skill, skillIndex) => {
                    const iconData = skillIcons[skill];
                    return (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.03,
                          type: "spring",
                          stiffness: 300,
                          damping: 20
                        }}
                        viewport={{ once: true }}
                        className="flex items-center gap-1.5 md:gap-2 px-2.5 py-1.5 md:px-4 md:py-2 bg-gray-50 dark:bg-slate-700/50 border border-gray-200 dark:border-slate-600 rounded-lg text-xs md:text-sm font-mono hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-200 hover:shadow-md cursor-pointer group"
                      >
                        {iconData && (
                          <iconData.icon 
                            className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" 
                            style={{ color: iconData.color }} 
                          />
                        )}
                        <span className="text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors duration-200">
                          {skill}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-gray-200 dark:border-slate-700 shadow-lg">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
                  Continuous Learning & Growth
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                  I'm always eager to learn new technologies and stay up-to-date with the latest developments 
                  in software engineering, machine learning, and web development. Currently exploring 
                  advanced AI/ML techniques and modern web frameworks to build innovative solutions.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full">
                    Always Learning
                  </span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium rounded-full">
                    Innovation Focused
                  </span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium rounded-full">
                    Future-Ready
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
