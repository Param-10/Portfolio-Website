import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  type: string;
  description: string[];
  link?: string;
}

function Experience() {
  const experiences: ExperienceItem[] = [
    {
      id: 'ai4all',
      title: 'AI4ALL Ignite Fellow',
      company: 'AI4ALL',
      location: 'Remote',
      duration: 'May 2025 - Present',
      type: 'Internship',
      description: [
        'Selected for the highly competitive AI4ALL Ignite, a comprehensive 13-week, national accelerator designed to equip undergraduate students with the skills and connections for successful careers in AI and machine learning',
        'Developing an AI technical portfolio project through live virtual classes, peer collaboration, and mentorship from AI industry professionals',
        'Focusing on responsible AI and ethical practices while building expertise in artificial intelligence and machine learning applications'
      ]
    },
    {
      id: 'rare-lab',
      title: 'Undergraduate Research Assistant',
      company: 'RARE Lab',
      location: 'University of South Florida',
      duration: 'Feb 2025 - Present',
      type: 'Part-time',
      description: [
        'Designed and deployed survey tools to analyze human-robot interaction studies, capturing key behavioral insights',
        'Utilized Pandas and NumPy to assess the datasets generated, and improve interaction models by 20%',
        'Collaborated on AI/ML projects for multiple robots, training models and implementing intelligent control'
      ],
      link: 'https://therarelab.com/people/paramveer-singh-bhele/'
    },
    {
      id: 'usf-library',
      title: 'Student Assistant - Collections and Discovery',
      company: 'USF Libraries',
      location: 'University of South Florida',
      duration: 'Aug 2024 - Present',
      type: 'Part-time',
      description: [
        'Indexed 10,000+ images in Excel, enriching metadata to cut classification errors by 25% and boost catalog recall',
        'Improved cataloging accuracy by standardizing metadata, resulting in efficient retrieval for 1,000+ items'
      ]
    },
    {
      id: 'peer-mentor',
      title: 'Peer Mentor For Learning Teams',
      company: 'USF College of Engineering',
      location: 'University of South Florida',
      duration: 'Apr 2023 - Aug 2024',
      type: 'Part-time',
      description: [
        'Strengthened Calculus mastery for 25+ engineering students via tailored classes and problem-solving drills',
        'Secured 100% engagement in EGN 4930 by orchestrating interactive peer-learning sessions weekly'
      ]
    },
    {
      id: 'coefficient',
      title: 'App Developer Intern',
      company: 'Coefficient Software Systems',
      location: 'Navi Mumbai, India',
      duration: 'May 2022 - Jul 2022',
      type: 'Internship',
      description: [
        'Profiled 500+ US, UK, and Australian universities, producing benchmarking dashboards for product positioning',
        'Improved UI/UX for Learn English app, maintaining 100,000+ downloads and a 4.4/5 on the Google Play Store'
      ],
      link: 'https://play.google.com/store/apps/details?id=com.vocabulary.wordoftheday&hl=en_US'
    }
  ];

  const [activeExperience, setActiveExperience] = useState(experiences[0].id);
  const currentExperience = experiences.find(exp => exp.id === activeExperience) || experiences[0];

  return (
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="section-heading">Where I've Worked</h2>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Tab Navigation */}
          <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible">
            <div className="flex lg:flex-col border-b-2 lg:border-b-0 lg:border-l-2 border-slate-200 dark:border-slate-700 min-w-max lg:min-w-0">
              {experiences.map((exp) => (
                <button
                  key={exp.id}
                  onClick={() => setActiveExperience(exp.id)}
                  className={`text-left px-4 py-3 text-sm font-mono whitespace-nowrap lg:whitespace-normal transition-all duration-300 border-b-2 lg:border-b-0 lg:border-l-2 ${
                    activeExperience === exp.id
                      ? 'text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400 bg-blue-600/5 dark:bg-blue-400/5'
                      : 'text-slate-600 dark:text-slate-400 border-transparent hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {exp.company}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
              <div className="flex-1">
            <motion.div
              key={activeExperience}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                  {currentExperience.title}
                  <span className="text-blue-600 dark:text-blue-400"> @ {currentExperience.company}</span>
                </h3>
                <p className="text-sm font-mono text-slate-600 dark:text-slate-400 mt-1">
                  {currentExperience.duration}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {currentExperience.location} · {currentExperience.type}
                </p>
          </div>

              <ul className="space-y-3">
                {currentExperience.description.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">▹</span>
                    <span className="text-slate-600 dark:text-slate-400">{item}</span>
              </li>
                ))}
            </ul>

              {currentExperience.link && (
                <a
                  href={currentExperience.link}
              target="_blank"
              rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-mono text-sm"
            >
                  View Project
                  <ExternalLink className="w-4 h-4" />
            </a>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>
      </div>
  );
}

export default Experience;
