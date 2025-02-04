import { useState, useEffect, useMemo, useCallback } from 'react';
import { Mail, Github, Linkedin} from 'lucide-react';
import ParticleBackground from './components/ParticleBackground';

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
  const [showContent, setShowContent] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [typingText, setTypingText] = useState('');
  const messages = useMemo(() => [
    'Initializing system...',
    'Running security protocols...',
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
            setShowContent(true);
            setIsAnimating(false);
          }, 1000);
        });
      }
    };

    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, [isAnimating, typeWriter, messages]);

  const portfolioData = {
    name: "Your Name",
    title: "Full Stack Developer",
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

  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  return (
    <div className="min-h-screen bg-black/0 text-white relative">
      <div className="fixed inset-0" style={{ zIndex: 0 }}>
        <ParticleBackground />
      </div>

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-black/50 backdrop-blur-sm z-20 border-b border-green-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-green-500 text-xl font-bold">~/your-name</h1>
            <div className="flex space-x-6">
              <a href="#about" className="text-green-500 hover:text-green-400 transition-colors">./about</a>
              <a href="#experience" className="text-green-500 hover:text-green-400 transition-colors">./experience</a>
              <a href="#projects" className="text-green-500 hover:text-green-400 transition-colors">./projects</a>
              <a href="#contact" className="text-green-500 hover:text-green-400 transition-colors">./contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10">
        {isAnimating ? (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
            <div className="text-green-500 font-mono">
              <span className="inline-block">{'>'}</span>
              <span className="inline-block ml-2">{typingText}</span>
              <span className="inline-block animate-pulse">_</span>
            </div>
          </div>
        ) : showContent ? (
          <div className="container mx-auto px-6 space-y-48">
            {/* Hero Section */}
            <section className="min-h-screen flex items-center">
              <div className="space-y-6 max-w-2xl">
                <div className="space-y-2">
                  <p className="text-green-500">$ whoami</p>
                  <h1 className="text-5xl font-bold text-green-500">Your Name</h1>
                </div>
                <div className="space-y-2">
                  <p className="text-green-500">$ pwd</p>
                  <p className="text-xl text-gray-300">~/position/company</p>
                </div>
                <div className="space-y-2">
                  <p className="text-green-500">$ cat about.txt</p>
                  <p className="text-gray-400">Brief introduction about yourself</p>
                </div>
              </div>
            </section>

            {/* About Section */}
            <section id="about" className="min-h-screen py-16">
              <div className="bg-black/40 backdrop-blur-[2px] rounded-lg p-8 border border-green-500/20 hover:bg-black/50 transition-colors">
                <h2 className="text-3xl font-bold text-green-500 mb-8 section-title">About Me</h2>
                <div className="prose prose-invert prose-green">
                  {/* Your about content */}
                </div>
              </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="min-h-screen py-16">
              <div className="bg-black/40 backdrop-blur-[2px] rounded-lg p-8 border border-green-500/20 hover:bg-black/50 transition-colors">
                <h2 className="text-3xl font-bold text-green-500 mb-8 section-title">Experience</h2>
                <div className="space-y-8">
                  {portfolioData.experience.map((exp, index) => (
                    <div key={index} className="border border-green-500/20 rounded-lg p-6 hover:bg-black/50 transition-colors">
                      <h3 className="text-xl font-bold text-green-400">{exp.title}</h3>
                      <p className="text-gray-400">{exp.company} • {exp.period}</p>
                      <p className="mt-4 text-gray-300">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="min-h-screen py-16">
              <div className="bg-black/40 backdrop-blur-[2px] rounded-lg p-8 border border-green-500/20 hover:bg-black/50 transition-colors">
                <h2 className="text-3xl font-bold text-green-500 mb-8 section-title">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {portfolioData.projects.map((project, index) => (
                    <div key={index} className="border border-green-500/20 rounded-lg p-6 hover:bg-black/50 transition-colors">
                      <h3 className="text-xl font-bold text-green-400">{project.title}</h3>
                      <p className="mt-2 text-gray-300">{project.description}</p>
                      <div className="mt-4 flex space-x-4">
                        <a 
                          href={project.link}
                          className="text-green-500 hover:text-green-400 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-6 h-6" />
                        </a>
                        <a 
                          href={project.demoLink}
                          className="text-green-500 hover:text-green-400 transition-colors"
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
              <div className="bg-black/40 backdrop-blur-[2px] rounded-lg p-8 border border-green-500/20 hover:bg-black/50 transition-colors">
                <h2 className="text-3xl font-bold text-green-500 mb-8 section-title">Contact Me</h2>
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
                      <label htmlFor="name" className="block text-green-400 mb-2">
                        Your Name <span className="text-green-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full bg-black/30 border border-green-500/20 rounded-lg p-3 text-white focus:border-green-500 focus:outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-green-400 mb-2">
                        Your Email <span className="text-green-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full bg-black/30 border border-green-500/20 rounded-lg p-3 text-white focus:border-green-500 focus:outline-none"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-green-400 mb-2">
                        Phone Number <span className="text-gray-400">(Optional)</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full bg-black/30 border border-green-500/20 rounded-lg p-3 text-white focus:border-green-500 focus:outline-none"
                        placeholder="+1 (234) 567-8900"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-green-400 mb-2">
                        Your Message <span className="text-green-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        className="w-full bg-black/30 border border-green-500/20 rounded-lg p-3 text-white focus:border-green-500 focus:outline-none"
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
                      className="bg-green-500 text-black px-6 py-3 rounded-lg hover:bg-green-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-full"
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
                      <p className="text-green-500 text-center">
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

            {/* Footer */}
            <footer className="py-16 text-center text-gray-400">
              <div className="flex justify-center space-x-6 mb-4">
                <a href="#" className="text-green-500 hover:text-green-400"><Github className="w-6 h-6" /></a>
                <a href="#" className="text-green-500 hover:text-green-400"><Linkedin className="w-6 h-6" /></a>
                <a href="#" className="text-green-500 hover:text-green-400"><Mail className="w-6 h-6" /></a>
              </div>
              <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
            </footer>
          </div>
        ) : (
          <div className="h-screen flex items-center justify-center">
            <div className="text-center space-y-2">
              <p className="text-sm text-green-500">Press Enter to hack</p>
              <p className="text-xs text-green-400 animate-pulse">System ready...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;