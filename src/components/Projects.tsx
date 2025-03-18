import React from 'react';
import { Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  link: string;
  demoLink: string;
  details?: string[];
  timeline?: string;
  skills?: string[];
}

interface ProjectsProps {
  projects: (Project & { details?: string[]; timeline?: string; skills?: string[] })[];
}

function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="py-4 scroll-mt-20">
      <div className="rounded-lg p-6 border">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col p-4 rounded-lg">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold">
                  {project.title}
                </h3>
                <div className="flex items-center gap-4">
                  {project.timeline && (
                    <span className="italic text-sm">
                      {project.timeline}
                    </span>
                  )}
                  <div className="flex gap-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                    {project.demoLink && project.demoLink !== "#" && (
                      <a
                        href={project.demoLink}
                        className="text-sm flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <p className="mt-1">
                {project.description}
              </p>
              {project.details && project.details.length > 0 && (
                <ul className="mt-1 list-disc list-inside">
                  {project.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              )}
              {/* Skills Section */}
              {project.skills && project.skills.length > 0 && (
                <div className="mt-2">
                  <strong className="">Skills:</strong>
                  <span> {" "}
                    {project.skills.join(' · ')}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
