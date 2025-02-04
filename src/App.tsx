import { useState, useEffect } from 'react';
import { Terminal, Mail, Github, Linkedin, Code, Briefcase, GraduationCap, Send } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  link: string;
  demoLink: string;
}

function App() {
  const [showContent, setShowContent] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationText, setAnimationText] = useState('');
  
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Enter' && !isAnimating) {
        setIsAnimating(true);
        setAnimationText('Initiating sequence...');
        setTimeout(() => {
          setAnimationText('Access granted...');
          setTimeout(() => {
            setShowContent(true);
            setIsAnimating(false);
          }, 1000);
        }, 1000);
      }
    };

    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, [isAnimating]);

  const portfolioData = {
    name: "Your Name",
    title: "Full Stack Developer",
    image: "https://images.unsplash.com/photo-1519648023493-d82b5f8d7b8a?w=300&h=300&fit=crop",
    about: "Passionate developer with expertise in React, Node.js, and cloud technologies.",
    experience: [
      { title: "Senior Developer", company: "Tech Corp", period: "2020-Present" },
      { title: "Full Stack Developer", company: "StartupX", period: "2018-2020" }
    ],
    education: "B.S. Computer Science",
    skills: ["React", "TypeScript", "Node.js", "AWS", "Python", "Docker"],
    projects: [
      {
        title: "Project 1",
        description: "Description of project 1",
        link: "https://github.com/yourusername/project1",
        demoLink: "https://project1-demo.com"
      },
      {
        title: "Project 2",
        description: "Description of project 2",
        link: "https://github.com/yourusername/project2",
        demoLink: "https://project2-demo.com"
      }
    ] as Project[]
  };

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono p-4 overflow-y-auto relative">
      {/* Matrix-style background */}


      <div className="max-w-4xl mx-auto relative">
        {!showContent && (
          <div className="text-center space-y-2">
            <p className="text-sm text-green-500">Press Enter to hack</p>
            <p className="text-xs text-green-400 animate-pulse">{animationText}</p>
          </div>
        )}
        
        {showContent && (
          <div className="space-y-8 animate-fadeIn">
            <header className="space-y-4">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setShowContactForm(true)}
                  className="border border-green-500 p-2 rounded hover:bg-green-500 hover:text-black transition-colors flex items-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Contact Me</span>
                </button>
                <div className="flex items-center space-x-4">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-green-500">
                    <img 
                      src={portfolioData.image} 
                      alt={portfolioData.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold">{portfolioData.name}</h1>
                    <p className="text-green-400">{portfolioData.title}</p>
                  </div>
                </div>
              </div>
            </header>

            <section className="space-y-4">
              <div className="flex items-center space-x-4">
                <a href="mailto:your@email.com" className="hover:text-green-300 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="https://github.com/yourusername" className="hover:text-green-300 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/yourusername" className="hover:text-green-300 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
              
              <div className="border border-green-500 p-4 rounded">
                <h2 className="flex items-center space-x-2 mb-2">
                  <Code className="w-5 h-5" />
                  <span>About</span>
                </h2>
                <p>{portfolioData.about}</p>
              </div>

              <div className="border border-green-500 p-4 rounded">
                <h2 className="flex items-center space-x-2 mb-2">
                  <Briefcase className="w-5 h-5" />
                  <span>Experience</span>
                </h2>
                {portfolioData.experience.map((exp, index) => (
                  <div key={index} className="mb-2">
                    <h3 className="text-green-300">{exp.title}</h3>
                    <p className="text-sm">{exp.company} | {exp.period}</p>
                  </div>
                ))}
              </div>

              <div className="border border-green-500 p-4 rounded">
                <h2 className="flex items-center space-x-2 mb-2">
                  <GraduationCap className="w-5 h-5" />
                  <span>Education</span>
                </h2>
                <p>{portfolioData.education}</p>
              </div>

              <div className="border border-green-500 p-4 rounded">
                <h2 className="flex items-center space-x-2 mb-2">
                  <Code className="w-5 h-5" />
                  <span>Projects</span>
                </h2>
                <div className="space-y-4">
                  {portfolioData.projects.map((project, index) => (
                    <div key={index} className="flex items-start justify-between">
                      <div>
                        <h3 className="text-green-300">{project.title}</h3>
                        <p className="text-sm">{project.description}</p>
                      </div>
                      <div className="flex space-x-3">
                        <a 
                          href={project.link}
                          className="text-green-300 hover:text-green-400"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                        <a 
                          href={project.demoLink}
                          className="border border-green-500 px-2 py-1 rounded text-sm hover:bg-green-500 hover:text-black transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Demo
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-green-500 p-4 rounded">
                <h2 className="flex items-center space-x-2 mb-2">
                  <Code className="w-5 h-5" />
                  <span>Skills</span>
                </h2>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills.map((skill, index) => (
                    <span key={index} className="px-2 py-1 border border-green-500 rounded text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {showContactForm && (
                <div className="border border-green-500 p-4 rounded">
                  <h2 className="flex items-center space-x-2 mb-4">
                    <Terminal className="w-5 h-5" />
                    <span>Establish Connection</span>
                  </h2>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your handle"
                      className="w-full bg-black border border-green-500 p-2 rounded text-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                    />
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full bg-black border border-green-500 p-2 rounded text-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                    />
                    <textarea
                      placeholder="Your message"
                      rows={4}
                      className="w-full bg-black border border-green-500 p-2 rounded text-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                    ></textarea>
                    <button
                      type="submit"
                      className="w-full border border-green-500 p-2 rounded hover:bg-green-500 hover:text-black transition-colors"
                    >
                      SEND
                    </button>
                  </form>
                </div>
              )}
            </section>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;