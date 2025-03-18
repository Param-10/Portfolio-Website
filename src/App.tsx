import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react'; // Import sun and moon icons
import Home from './components/Home';
// Lazy load non-critical components
const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Leadership = lazy(() => import('./components/Leadership'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Contact = lazy(() => import('./components/Contact'));

import { portfolioData } from './data';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    // Load the theme from localStorage or default to 'light'
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    // Apply the theme to the document root
    document.documentElement.setAttribute('data-theme', theme);
    // Save the theme to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <Router>
      {/* Create a separate component for route prefetching */}
      <RouteHandler />
      
      <div className="min-h-screen relative">
        {/* Navigation Bar */}
        <nav className="fixed top-0 left-0 right-0 z-20 backdrop-blur-sm">
          <div className="container mx-auto px-4 md:px-6 py-4">
            <div className="flex justify-between items-center">
              <Link 
                to="/" 
                className="text-3xl font-bold hover:translate-y-[-2px] transition-transform duration-200"
              >
                Paramveer
              </Link>
              <button
                className="md:hidden transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={isMenuOpen}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <div className="hidden md:flex space-x-4 items-center">
                <Link to="/about" className="px-3 py-2">About</Link>
                <Link to="/experience" className="px-3 py-2">Experience</Link>
                <Link to="/leadership" className="px-3 py-2">Leadership</Link>
                <Link to="/projects" className="px-3 py-2">Projects</Link>
                <Link to="/skills" className="px-3 py-2">Skills</Link>
                <Link to="/contact" className="px-3 py-2">Contact</Link>
                
                {/* Theme toggle button with icons */}
                <button 
                  onClick={toggleTheme} 
                  className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-transform transform hover:scale-110 shadow-lg"
                  aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                  {theme === 'dark' ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="relative z-10 pt-24">
          <div className="container mx-auto px-6 space-y-4">
            <AnimatePresence>
              <Suspense fallback={<div className="flex justify-center py-12">Loading...</div>}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/experience" element={<Experience />} />
                  <Route path="/leadership" element={<Leadership />} />
                  <Route path="/projects" element={<Projects projects={portfolioData.projects} />} />
                  <Route path="/skills" element={<Skills technicalSkills={portfolioData.technicalSkills} />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </Suspense>
            </AnimatePresence>

            {/* Copyright */}
            <div className="py-4 text-center">
              <p>© {new Date().getFullYear()} Paramveer Singh Bhele. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

// Create a separate component that can use Router hooks safely
function RouteHandler() {
  const location = useLocation(); // Now this is used within Router context
  
  useEffect(() => {
    // Prefetch components for common routes when user is on the home page
    if (location.pathname === '/') {
      const prefetchRoutes = async () => {
        // Wait a bit after initial load before prefetching
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Prefetch critical routes
        import('./components/About');
        import('./components/Experience');
        import('./components/Projects');
      };
      
      prefetchRoutes();
    }
  }, [location]);

  return null; // This component doesn't render anything
}

export default App;
