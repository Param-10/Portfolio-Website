import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Folder, Award, ChevronDown, ChevronUp } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  link: string;
  demoLink: string;
  devpostLink?: string;
  details?: string[];
  timeline?: string;
  skills?: string[];
  featured?: boolean;
  image?: string;
}

interface ProjectsProps {
  projects: (Project & { details?: string[]; timeline?: string; skills?: string[]; featured?: boolean; devpostLink?: string })[];
}

// Helper function to parse timeline and get a comparable date
function parseTimeline(timeline: string): Date {
  if (!timeline) return new Date(0);
  
  // Handle "Present" in timeline
  if (timeline.includes('Present')) {
    return new Date(); // Current date for present projects
  }
  
  // Extract the end date or single date
  const parts = timeline.split(' - ');
  const dateStr = parts.length > 1 ? parts[1] : parts[0];
  
  // Handle "Month Year" format
  const monthYearMatch = dateStr.match(/([A-Za-z]+)\s+(\d{4})/);
  if (monthYearMatch) {
    const [, month, year] = monthYearMatch;
    const monthMap: { [key: string]: number } = {
      'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
      'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
    };
    return new Date(parseInt(year), monthMap[month] || 0, 1);
  }
  
  return new Date(0);
}

function Projects({ projects }: ProjectsProps) {
  const [expandedSkills, setExpandedSkills] = useState<{ [key: number]: boolean }>({});
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Define the best 3 projects to show initially
  const bestProjectTitles = [
    "CarbonCTRL (Hackathon Winner)",
    "Focus Timer Extension", 
    "Fraud Detection Dashboard"
  ];
  
  // Get the initial best projects in the specified order
  const getBestProjects = () => {
    return bestProjectTitles.map(title => 
      projects.find(project => project.title === title)
    ).filter(Boolean) as typeof projects;
  };
  
  // Sort all projects by timeline (latest to oldest)
  const getSortedProjects = () => {
    return [...projects].sort((a, b) => {
      const dateA = parseTimeline(a.timeline || '');
      const dateB = parseTimeline(b.timeline || '');
      return dateB.getTime() - dateA.getTime(); // Latest first
    });
  };
  
  const displayedProjects = showAllProjects ? getSortedProjects() : getBestProjects();
  const remainingProjectsCount = Math.max(0, projects.length - 3);

  const toggleSkills = (projectIndex: number) => {
    setExpandedSkills(prev => ({
      ...prev,
      [projectIndex]: !prev[projectIndex]
    }));
  };

  const toggleShowProjects = async () => {
    setIsTransitioning(true);
    
    // Small delay to let the transition state take effect
    await new Promise(resolve => setTimeout(resolve, 100));
    
    setShowAllProjects(!showAllProjects);
    setExpandedSkills({});
    
    // Reset transition state after animation completes
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  // Unified animation variants for all project cards
  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 30,
      scale: 0.95
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: index * 0.1,
        duration: 0.6
      }
    }),
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.3
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 1000,
        damping: 20
      }
    }
  };

  // Container animation for the grid
  const containerVariants = {
    hidden: { 
      opacity: 0 
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="section-heading">Some Things I've Built</h2>
        
        <AnimatePresence mode="wait">
          {!showAllProjects ? (
            <motion.p 
              key="featured-label"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center text-slate-600 dark:text-slate-400 mb-8 font-mono text-sm"
            >
              Featuring my best projects
            </motion.p>
          ) : (
            <motion.p 
              key="all-label"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="text-center text-slate-600 dark:text-slate-400 mb-8 font-mono text-sm"
            >
              All projects sorted by timeline (latest to oldest)
            </motion.p>
          )}
        </AnimatePresence>

        {/* Projects Grid with Unified Animation */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={showAllProjects ? 'all-projects' : 'featured-projects'}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {displayedProjects.map((project, index) => (
              <motion.div
                key={`${showAllProjects ? 'all' : 'featured'}-${project.title}`}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover="hover"
                className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-blue-600/50 dark:hover:border-blue-400/50 transition-all duration-300 hover:shadow-xl group shadow-sm"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Project Header */}
                <div className="flex justify-between items-start mb-4">
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 600, damping: 15, duration: 0.2 }}
                  >
                    <Folder className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                  </motion.div>
                  <div className="flex gap-3">
                    {project.link && project.link !== "#" && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        aria-label="GitHub"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 600, damping: 15, duration: 0.2 }}
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    )}
                    {project.demoLink && project.demoLink !== "#" && (
                      <motion.a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        aria-label="Live Demo"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 600, damping: 15, duration: 0.2 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    )}
                    {project.devpostLink && (
                      <motion.a
                        href={project.devpostLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        aria-label="Devpost"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 600, damping: 15, duration: 0.2 }}
                      >
                        <Award className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    {project.timeline && (
                      <p className="text-sm font-mono text-slate-600 dark:text-slate-400">
                        {project.timeline}
                      </p>
                    )}
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {project.details && project.details.length > 0 && (
                    <ul className="space-y-1">
                      {project.details.slice(0, 2).map((detail, idx) => (
                        <li key={idx} className="text-xs text-slate-600 dark:text-slate-400 flex items-start">
                          <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1 flex-shrink-0 text-xs">▹</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}

                  {project.skills && (
                    <div className="mt-4">
                      <div className="flex flex-wrap gap-2">
                        {/* Always show first 4 skills */}
                        {project.skills.slice(0, 4).map((skill, idx) => (
                          <motion.span
                            key={idx}
                            whileHover={{ scale: 1.1, y: -2 }}
                            transition={{ type: "spring", stiffness: 600, damping: 15, duration: 0.2 }}
                            className="text-xs font-mono text-slate-600 dark:text-slate-400 bg-gray-100 dark:bg-slate-700 px-2 py-1 rounded"
                          >
                            {skill}
                          </motion.span>
                        ))}
                        
                        {/* Show remaining skills with animation when expanded */}
                        <AnimatePresence>
                          {expandedSkills[index] && project.skills.length > 4 && 
                            project.skills.slice(4).map((skill, idx) => (
                              <motion.span
                                key={idx + 4}
                                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.8, y: -10 }}
                                whileHover={{ scale: 1.1, y: -2 }}
                                transition={{ duration: 0.2, delay: idx * 0.05 }}
                                className="text-xs font-mono text-slate-600 dark:text-slate-400 bg-gray-100 dark:bg-slate-700 px-2 py-1 rounded"
                              >
                                {skill}
                              </motion.span>
                            ))
                          }
                        </AnimatePresence>
                        
                        {/* Toggle button for remaining skills */}
                        {project.skills.length > 4 && (
                          <motion.button
                            onClick={() => toggleSkills(index)}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 600, damping: 15, duration: 0.2 }}
                            className="text-xs font-mono text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors px-2 py-1 rounded border border-blue-600/30 dark:border-blue-400/30 hover:border-blue-600 dark:hover:border-blue-400 hover:bg-blue-600/10 dark:hover:bg-blue-400/10"
                            title={expandedSkills[index] ? 'Show less' : `Show ${project.skills.length - 4} more skills`}
                          >
                            {expandedSkills[index] ? 'Show less' : `+${project.skills.length - 4} more`}
                          </motion.button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Enhanced Show More/Less Button */}
        {remainingProjectsCount > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12"
          >
            <motion.button
              onClick={toggleShowProjects}
              disabled={isTransitioning}
              whileHover={{ 
                scale: isTransitioning ? 1 : 1.05,
                boxShadow: isTransitioning ? "none" : "0 10px 25px -5px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: isTransitioning ? 1 : 0.95 }}
              transition={{ type: "spring", stiffness: 600, damping: 15, duration: 0.2 }}
              className={`flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-500 dark:to-blue-400 text-white hover:from-blue-700 hover:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-500 font-mono text-sm rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl group ${
                isTransitioning ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              <span>
                {showAllProjects ? 'Show Featured Projects' : `See All Projects (${remainingProjectsCount} more)`}
              </span>
              <motion.div
                animate={{ rotate: showAllProjects ? 180 : 0 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
              >
                {showAllProjects ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </motion.div>
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default Projects;
