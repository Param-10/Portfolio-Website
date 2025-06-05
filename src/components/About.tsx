import { motion } from 'framer-motion';
import profileImage from '../assets/My_Image.jpg';

function About() {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start">
          <div className="md:col-span-2 space-y-3 md:space-y-4 order-2 md:order-1">
            <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
              Hello! I'm Paramveer, a Computer Science student at the University of South Florida with a Minor in Entrepreneurship. 
              I'm passionate about building software that solves real-world problems and creating digital solutions that make a meaningful impact.
            </p>
            
            <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
              I've gained hands-on experience through internships at AI4ALL, Coefficient Software, and research at the RARE Lab, 
              working on cutting-edge projects in AI/ML, mobile app development, and human-robot interaction. Recently, I won 1st place 
              at HackaBull 2025 with CarbonCTRL, an AI-powered carbon management platform.
            </p>
            
            <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
              My goal is to become a full-stack software developer, specializing in scalable, user-centric applications 
              that leverage modern technologies to drive innovation and positive change.
            </p>
          </div>
          
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <motion.div
              className="relative group"
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative z-10 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl">
                <img
                  src={profileImage}
                  alt="Paramveer Singh Bhele"
                  className="w-full h-full object-cover object-center filter grayscale hover:grayscale-0 transition-all duration-300"
                  style={{ 
                    objectPosition: 'center 50%',
                    transform: 'scale(1.5)'
                  }}
                />
              </div>
              <div className="absolute top-4 left-4 md:top-5 md:left-5 w-48 h-48 md:w-64 md:h-64 border-2 border-blue-600 dark:border-blue-400 rounded-full -z-10 group-hover:top-2 group-hover:left-2 md:group-hover:top-3 md:group-hover:left-3 transition-all duration-300"></div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
