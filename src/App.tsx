import { useState, useEffect } from 'react';
import { Terminal, Mail, Github, Linkedin, Code, Briefcase, GraduationCap, ExternalLink, Send } from 'lucide-react';

function TypeWriter({ text, onComplete }: { text: string; onComplete?: () => void }) {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(timer);
        onComplete?.();
      }
    }, 50);
    
    return () => clearInterval(timer);
  }, [text, onComplete]);

  return <span>{displayText}</span>;
}

function App() {
  const [stage, setStage] = useState<'initial' | 'hacking' | 'complete'>('initial');
  const [showContent, setShowContent] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && stage === 'initial') {
        setStage('hacking');
        setTimeout(() => {
          setStage('complete');
          setShowContent(true);
        }, 3000);
      }
    };

    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, [stage]);

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
        title: "Project Alpha",
        description: "A real-time collaboration platform built with WebSocket",
        link: "https://github.com/yourusername/project-alpha",
        demoLink: "https://project-alpha-demo.com"
      },
      {
        title: "Project Beta",
        description: "AI-powered data analytics dashboard",
        link: "https://github.com/yourusername/project-beta",
        demoLink: "https://project-beta-demo.com"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono p-4 overflow-y-auto relative">
      {/* Matrix-style background */}


      <div className="max-w-4xl mx-auto relative">
        {stage === 'initial' && (
          <div className="flex items-center space-x-2">
            <Terminal className="w-5 h-5" />
            <TypeWriter text="Press ENTER to hack this system..." />
          </div>
        )}
        
        {stage === 'hacking' && (
          <div className="space-y-2">
            <TypeWriter text="Initiating hack sequence..." />
            <div className="animate-pulse">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="text-xs opacity-75">
                  {Array.from({ length: 50 }).map(() => (
                    Math.random() > 0.5 ? '1' : '0'
                  )).join('')}
                </div>
              ))}
            </div>
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
                      <a 
                        href={project.link}
                        className="text-green-300 hover:text-green-400"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
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