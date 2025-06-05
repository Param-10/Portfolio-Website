import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/My_Image.jpg';

function About() {
  const technologies = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Node.js',
    'Python',
    'C++',
    'SQL',
    'MongoDB',
    'AWS',
    'TensorFlow',
    'Scikit-learn',
    'Git'
  ];

  return (
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-2 space-y-4">
            <p className="text-slate-600 dark:text-slate-400">
              Hello! My name is Paramveer and I'm passionate about building software that solves real-world problems. 
              My journey into software development began in 2022 when I started experimenting with web technologies, 
              and I quickly discovered my love for creating digital solutions that make a meaningful impact.
            </p>
            
            <p className="text-slate-600 dark:text-slate-400">
              As a Computer Science student at the University of South Florida with a Minor in Entrepreneurship, 
              I've gained hands-on experience through internships, research positions, and competitive programming. 
              I've had the privilege of working at companies like AI4ALL, Coefficient Software, and the RARE Lab, 
              where I've contributed to cutting-edge projects in AI/ML, mobile app development, and human-robot interaction.
            </p>
            
            <p className="text-slate-600 dark:text-slate-400">
              I'm particularly excited about hackathons and collaborative development — recently winning 1st place 
              at HackaBull 2025 with CarbonCTRL, an AI-powered carbon management platform. I thrive on building 
              end-to-end applications, from face detection systems deployed on cloud platforms to real-time 
              tracking applications serving university students.
            </p>
            
            <p className="text-slate-600 dark:text-slate-400">
              My goal is to become a full-stack software developer, specializing in creating scalable, 
              user-centric applications that leverage modern technologies like React, Python, and cloud computing 
              to drive innovation and positive change.
            </p>
            
            <p className="text-slate-600 dark:text-slate-400">
              Here are some technologies I've been working with recently:
            </p>
            
            <ul className="grid grid-cols-2 gap-2 text-sm font-mono text-slate-600 dark:text-slate-400">
              {technologies.map((tech, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">▹</span>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex justify-center md:justify-end">
            <motion.div
              className="relative group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative z-10 w-64 h-64 rounded overflow-hidden">
                <img
                  src={profileImage}
                  alt="Paramveer Singh Bhele"
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="absolute top-5 left-5 w-64 h-64 border-2 border-blue-600 dark:border-blue-400 rounded -z-10 group-hover:top-3 group-hover:left-3 transition-all duration-300"></div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
