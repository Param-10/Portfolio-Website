import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { portfolioData } from './data';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState(() => {
    // Check if we're on the client side
    if (typeof window !== 'undefined') {
      // First check localStorage, then system preference, default to light
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme;
      }
      
      // Check system preference
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    
    return 'light';
  });

  const sections = [
    { id: 'home', label: 'Home', number: '01' },
    { id: 'about', label: 'About', number: '01' },
    { id: 'experience', label: 'Experience', number: '02' },
    { id: 'projects', label: 'Work', number: '03' },
    { id: 'skills', label: 'Skills', number: '04' },
    { id: 'contact', label: 'Contact', number: '05' },
  ];

  useEffect(() => {
    // Apply theme to document root
    const root = document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    
    // Save to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Add system theme change listener
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      // Only change if user hasn't manually set a preference
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-50/90 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.button
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              Paramveer
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {sections.slice(1).map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === section.id
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                  }`}
                >
                  <span className="text-blue-600 dark:text-blue-400 mr-1">{section.number}.</span>
                  {section.label}
                </button>
              ))}
              <button
                onClick={toggleTheme}
                className="theme-toggle"
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-gray-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800"
            >
              <div className="container mx-auto px-4 py-4 space-y-4">
                {sections.slice(1).map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="block w-full text-left text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                  >
                    <span className="text-blue-600 dark:text-blue-400 mr-1">{section.number}.</span>
                    {section.label}
                  </button>
                ))}
                <button
                  onClick={toggleTheme}
                  className="flex items-center space-x-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors px-2 py-1 rounded"
                  title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                  {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  <span>Toggle Theme</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Fixed Social Links */}
      <div className="hidden lg:flex fixed left-8 bottom-0 flex-col items-center space-y-4 z-40">
        <a
          href="https://github.com/Param-10"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/paramveer-singh-bhele/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href="mailto:bheleparamveer@gmail.com"
          className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <Mail className="w-5 h-5" />
        </a>
        <div className="w-px h-24 bg-slate-400 dark:bg-slate-600"></div>
      </div>

      {/* Fixed Email */}
      <div className="hidden lg:flex fixed right-8 bottom-0 flex-col items-center space-y-4 z-40">
        <a
          href="mailto:bheleparamveer@gmail.com"
          className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors writing-mode-vertical-rl text-sm tracking-widest"
          style={{ writingMode: 'vertical-rl' }}
        >
          bheleparamveer@gmail.com
        </a>
        <div className="w-px h-24 bg-slate-400 dark:bg-slate-600"></div>
      </div>

      {/* Main Content */}
      <main className="pt-20">
        <section id="home" className="min-h-screen">
          <Home />
        </section>
        
        <section id="about" className="min-h-screen py-20">
          <About />
        </section>
        
        <section id="experience" className="min-h-screen py-20">
          <Experience />
        </section>
        
        <section id="projects" className="min-h-screen py-20">
          <Projects projects={portfolioData.projects} />
        </section>
        
        <section id="skills" className="min-h-screen py-20">
          <Skills technicalSkills={portfolioData.technicalSkills} />
        </section>
        
        <section id="contact" className="min-h-screen py-20">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
