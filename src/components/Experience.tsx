import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

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
      id: 'tedx-usf',
      title: 'Head of Logistics',
      company: 'TEDx at USF',
      location: 'University of South Florida',
      duration: 'Jun 2024 - Jan 2025',
      type: 'Leadership',
      description: [
        'Leading logistics coordination for university-wide TEDx events, managing venue arrangements and speaker accommodations',
        'Organizing cross-functional team collaboration between event planning, marketing, and technical production teams',
        'Streamlining event operations workflow to enhance attendee experience and ensure seamless event execution'
      ]
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
      id: 'shpe-usf',
      title: 'Database Director',
      company: 'Society of Hispanic Professional Engineers at USF',
      location: 'University of South Florida',
      duration: 'Jan 2024 - May 2024',
      type: 'Leadership',
      description: [
        'Managing comprehensive member database and communication systems for 1000+ active student engineers',
        'Implementing data-driven strategies to track member engagement and improve retention rates',
        'Collaborating with executive board to optimize organizational operations and member experience'
      ]
    },
    {
      id: 'sia-usf',
      title: 'Vice President',
      company: 'Students of India Association',
      location: 'University of South Florida',
      duration: 'Jan 2024 - May 2024',
      type: 'Leadership',
      description: [
        'Leading strategic initiatives and organizational development for 500+ international student members',
        'Coordinating cultural events, networking opportunities, and academic support programs',
        'Collaborating with university administration and other student organizations to enhance campus diversity initiatives'
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

  const [activeExperience, setActiveExperience] = useState(experiences[0]?.id || '');
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);

  const sortedExperiences = experiences.sort((a, b) => {
    const aDate = new Date(a.duration.split(' - ')[0]);
    const bDate = new Date(b.duration.split(' - ')[0]);
    return bDate.getTime() - aDate.getTime();
  });

  const currentExperience = sortedExperiences.find(exp => exp.id === activeExperience) || sortedExperiences[0];

  const nextMobileCard = () => {
    const nextIndex = (currentMobileIndex + 1) % sortedExperiences.length;
    setCurrentMobileIndex(nextIndex);
    setActiveExperience(sortedExperiences[nextIndex].id);
  };

  const prevMobileCard = () => {
    const prevIndex = currentMobileIndex === 0 ? sortedExperiences.length - 1 : currentMobileIndex - 1;
    setCurrentMobileIndex(prevIndex);
    setActiveExperience(sortedExperiences[prevIndex].id);
  };

  return (
    <div className="container mx-auto px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="section-heading">Where I've Worked</h2>
        
        {/* Mobile Card Swiper */}
        <div className="block lg:hidden">
          <div className="relative">
            {/* Navigation Arrows */}
            {currentMobileIndex > 0 && (
              <button
                onClick={prevMobileCard}
                className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 p-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
            
            {currentMobileIndex < sortedExperiences.length - 1 && (
              <button
                onClick={nextMobileCard}
                className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 p-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}

            {/* Card Container */}
            <div className="mx-10 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentExperience.id}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-lg"
                >
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 leading-tight">
                        <span className="block">{currentExperience.title}</span>
                        <span className="text-blue-600 dark:text-blue-400 block mt-1">
                          @ {currentExperience.company}
                        </span>
                      </h3>
                      <p className="text-sm font-mono text-slate-600 dark:text-slate-400 mt-2">
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
                          <span className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {currentExperience.link && (
                      <a
                        href={currentExperience.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-mono text-sm transition-colors"
                      >
                        View Project
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Desktop Tab Layout */}
        <div className="hidden lg:flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Tab Navigation */}
          <div className="relative">
            <div className="flex flex-col border-l-2 border-slate-200 dark:border-slate-700">
              {sortedExperiences.map((exp) => (
                <button
                  key={exp.id}
                  onClick={() => setActiveExperience(exp.id)}
                  className={`text-left px-6 py-3 text-base font-mono transition-all duration-300 border-l-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 ${
                    activeExperience === exp.id
                      ? 'text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400 bg-blue-600/10 dark:bg-blue-400/10'
                      : 'text-slate-600 dark:text-slate-400 border-transparent hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {exp.company}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <motion.div
              key={activeExperience}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div>
                <h3 className="text-lg lg:text-xl font-semibold text-slate-900 dark:text-slate-100 leading-tight">
                  <span className="block sm:inline">{currentExperience.title}</span>
                  <span className="text-blue-600 dark:text-blue-400 block sm:inline sm:ml-1">
                    @ {currentExperience.company}
                  </span>
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
                    <span className="text-blue-600 dark:text-blue-400 mr-2 lg:mr-3 mt-1 flex-shrink-0">▹</span>
                    <span className="text-slate-600 dark:text-slate-400 text-sm lg:text-base leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {currentExperience.link && (
                <a
                  href={currentExperience.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-mono text-sm transition-colors"
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
