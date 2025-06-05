import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Folder, Award } from 'lucide-react';

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

function Projects({ projects }: ProjectsProps) {
  const [expandedSkills, setExpandedSkills] = useState<{ [key: number]: boolean }>({});

  const toggleSkills = (projectIndex: number) => {
    setExpandedSkills(prev => ({
      ...prev,
      [projectIndex]: !prev[projectIndex]
    }));
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

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-blue-600/50 dark:hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group shadow-sm"
            >
              {/* Project Header */}
              <div className="flex justify-between items-start mb-4">
                <Folder className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                <div className="flex gap-3">
                  {project.link && project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                    {project.demoLink && project.demoLink !== "#" && (
                      <a
                        href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                  {project.devpostLink && (
                    <a
                      href={project.devpostLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      aria-label="Devpost"
                      >
                      <Award className="w-5 h-5" />
                      </a>
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
                        <span
                          key={idx}
                          className="text-xs font-mono text-slate-600 dark:text-slate-400 bg-gray-100 dark:bg-slate-700 px-2 py-1 rounded"
                        >
                          {skill}
                  </span>
                      ))}
                      
                      {/* Show remaining skills with animation when expanded */}
                      <AnimatePresence>
                        {expandedSkills[index] && project.skills.length > 4 && 
                          project.skills.slice(4).map((skill, idx) => (
                            <motion.span
                              key={idx + 4}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.8 }}
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
                        <button
                          onClick={() => toggleSkills(index)}
                          className="text-xs font-mono text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors px-2 py-1 rounded border border-blue-600/30 dark:border-blue-400/30 hover:border-blue-600 dark:hover:border-blue-400 hover:bg-blue-600/10 dark:hover:bg-blue-400/10"
                          title={expandedSkills[index] ? 'Show less' : `Show ${project.skills.length - 4} more skills`}
                        >
                          {expandedSkills[index] ? 'Show less' : `+${project.skills.length - 4} more`}
                        </button>
                      )}
                    </div>
                </div>
              )}
            </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      </div>
  );
}

export default Projects;
