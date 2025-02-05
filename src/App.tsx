import { useState, useEffect, useMemo, useCallback } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import ParticleBackground from './components/ParticleBackground';
import profileImage from './assets/My_Image.jpg';

interface Project {
  title: string;
  description: string;
  link: string;
  demoLink: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

function App() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [typingText, setTypingText] = useState('');
  const messages = useMemo(() => [
    'Initializing system...',
    'Accessing mainframe...',
    'Decrypting data...',
    'Access granted...'
  ], []);

  const typeWriter = useCallback(async (messages: string[]) => {
    for (const message of messages) {
      setTypingText('');
      for (let i = 0; i < message.length; i++) {
        setTypingText(prev => prev + message[i]);
        await new Promise(resolve => setTimeout(resolve, 50));
      }
      await new Promise(resolve => setTimeout(resolve, 800));
    }
  }, []);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Enter' && !isAnimating) {
        setIsAnimating(true);
        typeWriter(messages).then(() => {
          setTimeout(() => {
            setIsAnimating(false);
          }, 1000);
        });
      }
    };

    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, [isAnimating, typeWriter, messages]);

  const portfolioData = {
    name: "Paramveer Singh Bhele",
    title: "Aspiring Software Developer",
    image: "https://images.unsplash.com/photo-1519648023493-d82b5f8d7b8a?w=300&h=300&fit=crop",
    about: "Passionate developer with expertise in React, Node.js, and cloud technologies.",
    experience: [
      { 
        title: "Senior Developer", 
        company: "Tech Corp", 
        period: "2020-Present",
        description: "Led development of key features and mentored junior developers."
      },
      { 
        title: "Full Stack Developer", 
        company: "StartupX", 
        period: "2018-2020",
        description: "Built and maintained multiple web applications."
      }
    ] as Experience[],
    education: "B.S. in Computer Science @ University of South Florida",
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

  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  return (
    <div className="min-h-screen bg-black text-white relative">
      <div className="fixed inset-0" style={{ zIndex: 0 }}>
        <ParticleBackground />
      </div>

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-black/80 via-purple-950/50 to-black/80 z-20 backdrop-blur-sm border-b border-purple-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text text-xl font-bold">Paramveer</h1>
            <div className="flex space-x-6">
              <a href="#about" className="text-purple-400 hover:text-purple-300 transition-colors">About</a>
              <a href="#experience" className="text-purple-400 hover:text-purple-300 transition-colors">Experience</a>
              <a href="#projects" className="text-purple-400 hover:text-purple-300 transition-colors">Projects</a>
              <a href="#contact" className="text-purple-400 hover:text-purple-300 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 pt-20">
        <div className="container mx-auto px-6 space-y-24">
          {/* Hero Section */}
          <section className="min-h-screen flex items-center">
            <div className="space-y-6 max-w-3xl flex items-start gap-12">
              <img 
                src={profileImage} 
                alt="Paramveer Singh Bhele" 
                className="w-64 h-64 object-cover rounded-lg border-2 border-purple-500/50 hover:border-purple-500 transition-colors shadow-lg shadow-purple-500/20"
              />
              <div className="space-y-8">
                <div>
                  <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text mb-4">
                    Paramveer Singh Bhele
                  </h1>
                  <p className="text-xl text-purple-200/80 mb-6">CS Junior @ University of South Florida</p>
                  <p className="text-purple-400 mb-6">{typingText}</p>
                  {/* Social Links */}
                  <div className="flex gap-4">
                    <a 
                      href="https://github.com/Param-10" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                    <a 
                      href="https://linkedin.com/in/paramveer-singh-bhele" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a 
                      href="mailto:bheleparamveer@gmail.com" 
                      className="text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <Mail className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="min-h-screen py-16">
            <div className="bg-gradient-to-br from-purple-950/30 via-black/50 to-purple-950/30 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text mb-8">
                About Me
              </h2>
              <div className="space-y-8 text-purple-200/80">
                <div>
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">🚀 Innovator, Problem Solver, and Aspiring Tech Leader</h3>
                  <p className="leading-relaxed">
                    Driven by an insatiable curiosity for technology and a passion for creating impactful solutions, 
                    I am pursuing a Bachelor of Science in Computer Science with a Minor in Entrepreneurship at the 
                    University of South Florida. From building real-time applications to streamlining data systems, 
                    I thrive at the intersection of logic, creativity, and innovation.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">🌟 Mission and What Drives Me</h3>
                  <p className="leading-relaxed">
                    My mission is to harness technology to solve real-world challenges while inspiring others to 
                    explore the vast possibilities in the tech domain. I am fueled by a commitment to lifelong 
                    learning, collaboration, and creating tools that empower users and enhance experiences.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">💡 Core Competencies</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Proficient in programming languages including Python, JavaScript, and C++.</li>
                    <li>Skilled in data manipulation, machine learning, visualization, frontend development.</li>
                    <li>Adept at managing teams, fostering collaboration, and delivering results under tight deadlines.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">⬆️ Looking Ahead</h3>
                  <p className="leading-relaxed">
                    As a tech enthusiast and problem solver, I am excited to explore new challenges and contribute 
                    to impactful projects. Let's connect and discuss how we can innovate and create together!
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="min-h-screen py-16">
            <div className="bg-gradient-to-br from-purple-950/30 via-black/50 to-purple-950/30 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text mb-8">
                Experience
              </h2>
              <div className="space-y-8">
                {portfolioData.experience.map((exp, index) => (
                  <div key={index} className="border border-purple-500/20 rounded-lg p-6 hover:bg-black/50 transition-colors">
                    <h3 className="text-xl font-bold text-purple-400">{exp.title}</h3>
                    <p className="text-gray-400">{exp.company} • {exp.period}</p>
                    <p className="mt-4 text-gray-300">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="min-h-screen py-16">
            <div className="bg-gradient-to-br from-purple-950/30 via-black/50 to-purple-950/30 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text mb-8">
                Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {portfolioData.projects.map((project, index) => (
                  <div key={index} className="border border-purple-500/20 rounded-lg p-6 hover:bg-black/50 transition-colors">
                    <h3 className="text-xl font-bold text-purple-400">{project.title}</h3>
                    <p className="mt-2 text-gray-300">{project.description}</p>
                    <div className="mt-4 flex space-x-4">
                      <a 
                        href={project.link}
                        className="text-purple-500 hover:text-purple-400 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-6 h-6" />
                      </a>
                      <a 
                        href={project.demoLink}
                        className="text-purple-500 hover:text-purple-400 transition-colors"
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
          </section>

          {/* Contact Section */}
          <section id="contact" className="min-h-screen py-16">
            <div className="bg-gradient-to-br from-purple-950/30 via-black/50 to-purple-950/30 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text mb-8">
                Contact Me
              </h2>
              <div className="max-w-xl">
                <form 
                  action="https://formspree.io/f/xanqjzyj" 
                  method="POST"
                  className="space-y-6"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setFormStatus('sending');
                    
                    try {
                      const form = e.target as HTMLFormElement;
                      const response = await fetch(form.action, {
                        method: 'POST',
                        body: new FormData(form),
                        headers: {
                          'Accept': 'application/json'
                        }
                      });
                      
                      if (response.ok) {
                        setFormStatus('sent');
                        form.reset();
                      } else {
                        throw new Error('Form submission failed');
                      }
                    } catch {
                      setFormStatus('error');
                    }
                  }}
                >
                  <div>
                    <label htmlFor="name" className="block text-purple-400 mb-2">
                      Your Name <span className="text-purple-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full bg-black/30 border border-purple-500/20 rounded-lg p-3 text-white focus:border-purple-500 focus:outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-purple-400 mb-2">
                      Your Email <span className="text-purple-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-black/30 border border-purple-500/20 rounded-lg p-3 text-white focus:border-purple-500 focus:outline-none"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-purple-400 mb-2">
                      Phone Number <span className="text-gray-400">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full bg-black/30 border border-purple-500/20 rounded-lg p-3 text-white focus:border-purple-500 focus:outline-none"
                      placeholder="+1 (234) 567-8900"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-purple-400 mb-2">
                      Your Message <span className="text-purple-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full bg-black/30 border border-purple-500/20 rounded-lg p-3 text-white focus:border-purple-500 focus:outline-none"
                      placeholder="Hello! I'd like to connect about..."
                    ></textarea>
                  </div>

                  {/* Hidden Recipient Email Field */}
                  <input 
                    type="hidden" 
                    name="_replyto" 
                    value="bheleparamveer@gmail.com"
                  />
                  
                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="bg-purple-500 text-black px-6 py-3 rounded-lg hover:bg-purple-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-full"
                  >
                    {formStatus === 'sending' ? (
                      'Sending...'
                    ) : formStatus === 'sent' ? (
                      'Message Sent!'
                    ) : formStatus === 'error' ? (
                      'Error - Try Again'
                    ) : (
                      'Send Message'
                    )}
                  </button>

                  {/* Form Status Messages */}
                  {formStatus === 'sent' && (
                    <p className="text-purple-500 text-center">
                      Thank you for your message! I'll get back to you soon.
                    </p>
                  )}
                  {formStatus === 'error' && (
                    <p className="text-red-500 text-center">
                      Sorry, there was an error sending your message. Please try again.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </section>

          {/* Copyright */}
          <div className="py-8 text-center text-purple-400/60">
            <p>© {new Date().getFullYear()} Paramveer Singh Bhele. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;