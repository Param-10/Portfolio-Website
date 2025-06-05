import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const Home = () => {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
        delayChildren: prefersReducedMotion ? 0 : 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: prefersReducedMotion ? 0.1 : 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="container mx-auto px-6 flex items-center justify-center min-h-screen">
      <motion.div
        className="max-w-4xl w-full text-center lg:text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={itemVariants}
          className="text-blue-600 dark:text-blue-400 font-mono text-lg mb-4"
        >
          Hi, my name is
        </motion.p>
        
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 dark:text-slate-100 mb-4"
        >
          Paramveer Singh Bhele.
        </motion.h1>
        
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-600 dark:text-slate-400 mb-6 whitespace-nowrap"
        >
          I build real world full stack projects.
        </motion.h2>
        
        <motion.p
          variants={itemVariants}
          className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 mb-8"
        >
          I'm an aspiring Software Developer and Computer Science student at the University of South Florida, 
          passionate about creating impactful applications and digital solutions. With experience in building 
          real-world projects and winning hackathons, I specialize in full-stack development, AI/ML, and 
          scalable software systems.
        </motion.p>
        
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
        >
          <a
            href="/Paramveer_Singh_Bhele_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600/10 dark:hover:bg-blue-400/10 font-mono text-sm rounded transition-all duration-300 hover:scale-105"
          >
            Check out my resume!
          </a>
          
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                const yOffset = -64; // Adjust this value to match your navbar height
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600 font-mono text-sm rounded transition-all duration-300 hover:scale-105"
        >
            Get In Touch
          </button>
        </motion.div>
      </motion.div>
      </div>
  );
};

export default Home;
