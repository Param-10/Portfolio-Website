import { useEffect, useRef, useState } from 'react';
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
      duration: 'May 2025 - Aug 2025',
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
      duration: 'Feb 2025 - July 2025',
      type: 'Part-time',
      description: [
        'Contributed to a protective indicators study on mitigating robot abuse with the Pepper robot by running participant experiments, analyzing behavioral data, and contributing to a research paper accepted for publication at HRI 2026',
        'Developed an Android mobile application for a grant study on a recipe recommender robot (Misty), creating integrations between the app and robot using Gemini API and Google Cloud SDK to enable seamless communication'
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
      title: 'Student Assistant - Digital Initiatives',
      company: 'USF Libraries',
      location: 'University of South Florida',
      duration: 'Aug 2024 - Present',
      type: 'Part-time',
      description: [
        'Built web-scraping and validation tools to cross-check Excel records with USF Digital Commons images, reducing manual review time by 70% and streamlining error detection',
        'Improved cataloging accuracy by standardizing metadata, resulting in efficient retrieval for 1,000+ items'
      ]
    },
    {
      id: 'finds-ai',
      title: 'Machine Learning Engineer',
      company: 'Finds.ai',
      location: 'Remote',
      duration: 'Oct 2025 - Jan 2026',
      type: 'Internship',
      description: [
        'Built scrapers and curated datasets, and helped train and integrate gender and clothing recognition models with embeddings for visual search'
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

  const parseMonthYear = (value: string): Date => {
    const trimmed = value.trim();
    if (/present/i.test(trimmed)) {
      return new Date(8640000000000000); // far future to prioritize ongoing roles
    }

    const monthMap: Record<string, number> = {
      jan: 0,
      january: 0,
      feb: 1,
      february: 1,
      mar: 2,
      march: 2,
      apr: 3,
      april: 3,
      may: 4,
      jun: 5,
      june: 5,
      jul: 6,
      july: 6,
      aug: 7,
      august: 7,
      sep: 8,
      sept: 8,
      september: 8,
      oct: 9,
      october: 9,
      nov: 10,
      november: 10,
      dec: 11,
      december: 11,
    };

    const match = trimmed.match(/^([A-Za-z]+)\s+(\d{4})$/);
    if (match) {
      const [, monthStr, yearStr] = match;
      const monthIndex = monthMap[monthStr.toLowerCase()];
      const year = Number(yearStr);
      if (!Number.isNaN(year) && monthIndex !== undefined) {
        return new Date(year, monthIndex, 1);
      }
    }

    return new Date(0);
  };

  const sortedExperiences = experiences.slice().sort((a, b) => {
    const [aStartStr, aEndStr = ''] = a.duration.split(' - ');
    const [bStartStr, bEndStr = ''] = b.duration.split(' - ');

    const aEnd = parseMonthYear(aEndStr);
    const bEnd = parseMonthYear(bEndStr);
    if (bEnd.getTime() !== aEnd.getTime()) {
      return bEnd.getTime() - aEnd.getTime();
    }

    const aStart = parseMonthYear(aStartStr);
    const bStart = parseMonthYear(bStartStr);
    return bStart.getTime() - aStart.getTime();
  });

  const [activeExperience, setActiveExperience] = useState(sortedExperiences[0]?.id || '');
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);
  const mobileContainerRef = useRef<HTMLDivElement | null>(null);
  const mobileCardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const currentExperience = sortedExperiences.find(exp => exp.id === activeExperience) || sortedExperiences[0];

  const scrollToIndex = (index: number) => {
    const clamped = Math.max(0, Math.min(sortedExperiences.length - 1, index));
    const target = mobileCardRefs.current[clamped];
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      setCurrentMobileIndex(clamped);
      setActiveExperience(sortedExperiences[clamped].id);
    }
  };

  useEffect(() => {
    const container = mobileContainerRef.current;
    if (!container) return;

    let rafId = 0;
    const handleScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const containerRect = container.getBoundingClientRect();
        const containerCenter = containerRect.left + containerRect.width / 2;

        let closestIndex = 0;
        let closestDistance = Number.POSITIVE_INFINITY;

        mobileCardRefs.current.forEach((card, index) => {
          if (!card) return;
          const rect = card.getBoundingClientRect();
          const cardCenter = rect.left + rect.width / 2;
          const distance = Math.abs(cardCenter - containerCenter);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        });

        if (closestIndex !== currentMobileIndex) {
          setCurrentMobileIndex(closestIndex);
          setActiveExperience(sortedExperiences[closestIndex].id);
        }
      });
    };

    handleScroll();
    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      container.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [currentMobileIndex, sortedExperiences]);

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
        
        {/* Mobile Swipe Carousel */}
        <div className="block lg:hidden">
          <div className="relative">
            {/* Card Container */}
            <div
              ref={mobileContainerRef}
              className="mx-8 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
            >
              <div className="flex gap-4 pr-4">
                {sortedExperiences.map((exp, index) => (
                  <div
                    key={exp.id}
                    ref={(el) => (mobileCardRefs.current[index] = el)}
                    className="snap-center shrink-0 w-full"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      animate={{ scale: index === currentMobileIndex ? 1.03 : 1 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      viewport={{ once: true }}
                      className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-lg h-[420px] flex flex-col"
                      onClick={() => scrollToIndex(index)}
                    >
                      <div className="space-y-4 flex-1 overflow-y-auto scrollbar-hide pr-1">
                        <div>
                          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 leading-tight">
                            <span className="block">{exp.title}</span>
                            <span className="text-blue-600 dark:text-blue-400 block mt-1">
                              @ {exp.company}
                            </span>
                          </h3>
                          <p className="text-sm font-mono text-slate-600 dark:text-slate-400 mt-2">
                            {exp.duration}
                          </p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            {exp.location} · {exp.type}
                          </p>
                        </div>

                        <ul className="space-y-3">
                          {exp.description.map((item, detailIndex) => (
                            <li key={detailIndex} className="flex items-start">
                              <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">▹</span>
                              <span className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>

                        {exp.link && (
                          <a
                            href={exp.link}
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
                  </div>
                ))}
              </div>
            </div>

            {/* Dot Indicators */}
            <div className="mt-4 flex items-center justify-center gap-1">
              {sortedExperiences.map((exp, index) => (
                <button
                  key={`dot-${exp.id}`}
                  onClick={() => scrollToIndex(index)}
                  aria-label={`Go to ${exp.company}`}
                  className={`h-1 w-1 rounded-full transition-all duration-200 ${
                    index === currentMobileIndex
                      ? 'bg-blue-600 dark:bg-blue-400'
                      : 'bg-slate-400/50 dark:bg-slate-500/50'
                  }`}
                />
              ))}
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
