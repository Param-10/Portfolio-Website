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
    <div className="container mx-auto px-4 md:px-6 flex items-center justify-center min-h-[75vh]">
      <motion.div
        className="max-w-4xl w-full text-center lg:text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={itemVariants}
          className="text-blue-600 dark:text-blue-400 font-mono text-base md:text-lg mb-3 md:mb-4"
        >
          Hi, my name is
        </motion.p>
        
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 dark:text-slate-100 mb-3 md:mb-4 leading-tight"
        >
          Paramveer Singh Bhele.
        </motion.h1>
        
        
        
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 mb-6 md:mb-8 leading-relaxed px-2 md:px-0"
        >
          I'm an aspiring Software Developer and Computer Science student at the University of South Florida, 
          passionate about creating impactful applications and digital solutions. With experience in building 
          real-world projects and winning hackathons, I specialize in full-stack development, AI/ML, and 
          scalable software systems.
        </motion.p>
        
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start px-2 md:px-0"
        >
          <a
            href={`${import.meta.env.BASE_URL}Paramveer_Singh_Bhele_Resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline w-full sm:w-auto"
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
            className="btn-primary w-full sm:w-auto"
          >
            Get In Touch
          </button>
        </motion.div>
      </motion.div>
      </div>
  );
};

export default Home;
