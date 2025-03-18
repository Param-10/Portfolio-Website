import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import profileImage from '../assets/My_Image.jpg';

const Home = () => {
  // Respect user's reduced motion preferences
  const prefersReducedMotion = useReducedMotion();

  const textVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: prefersReducedMotion ? 0 : i * 0.2, 
        duration: prefersReducedMotion ? 0.1 : 0.6,
      },
    }),
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: prefersReducedMotion ? 0.1 : 0.8 }}
      className="min-h-screen flex flex-col items-center justify-center py-4"
    >
      <div className="flex flex-col items-center gap-6">
        <motion.img
          src={profileImage}
          alt="Profile"
          className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-2xl will-change-transform"
          whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
          transition={{ duration: 0.4 }}
          loading="eager"
          decoding="async"
        />
        
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center"
          custom={0}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Paramveer Singh Bhele
        </motion.h1>
        
        <motion.p
          className="text-xl text-center"
          custom={1}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Aspiring Software Engineer | CS Student @ University of South Florida
        </motion.p>
        
        <motion.a
          href="/public/Paramveer_Singh_Bhele_Resume.pdf"
          className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-8 rounded-xl transition-transform transform hover:scale-105 shadow-lg"
          target="_blank"
          rel="noopener noreferrer"
          custom={2}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          View Resume
        </motion.a>
      </div>
    </motion.section>
  );
}

export default Home;
