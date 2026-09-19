import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';
import { personalInfo } from '../../data/personalInfo';
import { heroStats } from '../../data/stats';
import profilePic  from '../../assets/picofme.png'; // adjust path as per your assets folder
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf, FaMapMarkerAlt } from 'react-icons/fa';
import { SiReact, SiNextdotjs, SiNodedotjs } from 'react-icons/si';
import { Sparkles, Brain, Bot } from 'lucide-react';

export function Hero() {
  // const [active isActive] = useState(false);
  
  const codeSnippet = `const developer = {
  name: "Nilesh Kumar",
  role: "Full-Stack Developer",
  status: "B.Tech IT Student",
  focus: ["MERN", "Next.js", "GenAI"],
  hackathon: "SIH '25 National Winner",
  motto: "Solve real-world problems"
 };`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="hero" className="relative min-h-screen pb-2 flex flex-col justify-between pt-24 md:pt-32 overflow-hidden border-b-2 border-slate-950 bg-slate-50 bg-grid-pattern dark:bg-navy-dark transition-colors duration-300">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-500/2 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-yellow-500/2 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero Content (Left) */}
          <div className="lg:col-span-7 text-left space-y-6">
            <motion.div variants={itemVariants}>
              <Badge variant="accent" className="font-bold tracking-wider px-3 py-1">
                Hi, I'm
              </Badge>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white font-display leading-[0.95]"
            >
              Nilesh Kumar
            </motion.h1>

            <motion.h2 
              variants={itemVariants}
              className="text-xl sm:text-2xl md:text-3xl font-extrabold text-accent-blue tracking-tight"
            >
              Full-Stack Developer & B.Tech IT Student
            </motion.h2>

            <motion.div variants={itemVariants}>
              <Badge variant="primary" className="border-slate-200 bg-slate-100 text-slate-700 dark:border-slate-800 dark:bg-slate-900/80 px-4 py-1.5 text-sm normal-case font-semibold dark:text-slate-300">
                Competitive Programmer · LeetCode Knight
              </Badge>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed"
            >
              I build full-stack AI-powered applications using the MERN stack, Next.js, and modern generative AI tools.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <Button href="#projects" variant="accent">
                Explore projects ↘
              </Button>
              <Button href="#contact" variant="outline">
                Contact me ↗
              </Button>
            </motion.div>

            {/* Location & Social Icons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center gap-6 pt-4 border-t border-slate-200 dark:border-slate-900"
            >
              <div className="flex items-center gap-2 text-sm font-bold text-slate-500 dark:text-slate-400">
                <FaMapMarkerAlt className="text-accent-yellow w-4 h-4" />
                <span>Jhansi, Uttar Pradesh</span>
              </div>

              <div className="flex items-center gap-3">
  <motion.a
    href={personalInfo.github}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.85, rotate: -15 }}
    transition={{ type: "spring", stiffness: 400, damping: 15 }}
    className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 text-slate-600 hover:border-slate-350 hover:text-slate-900 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400 dark:hover:border-slate-700 dark:hover:text-white flex items-center justify-center transition-colors duration-300"
    title="GitHub"
  >
    <FaGithub className="w-4 h-4" />
  </motion.a>

  <motion.a
    href={personalInfo.linkedin}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.85, rotate: 15 }}
    transition={{ type: "spring", stiffness: 400, damping: 15 }}
    className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 text-slate-600 hover:border-slate-350 hover:text-slate-900 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400 dark:hover:border-slate-700 dark:hover:text-white flex items-center justify-center transition-colors duration-300"
    title="LinkedIn"
  >
    <FaLinkedin className="w-4 h-4" />
  </motion.a>

  <motion.a
    href={personalInfo.github === '#' ? '#' : `mailto:${personalInfo.email}`}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.85, rotate: -15 }}
    transition={{ type: "spring", stiffness: 400, damping: 15 }}
    className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 text-slate-600 hover:border-slate-350 hover:text-slate-900 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400 dark:hover:border-slate-700 dark:hover:text-white flex items-center justify-center transition-colors duration-300"
    title="Email"
  >
    <FaEnvelope className="w-4 h-4" />
  </motion.a>

  <motion.a
    href={personalInfo.resumeFile}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.85, rotate: 15 }}
    transition={{ type: "spring", stiffness: 400, damping: 15 }}
    className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 text-slate-600 hover:border-slate-350 hover:text-slate-900 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400 dark:hover:border-slate-700 dark:hover:text-white flex items-center justify-center transition-colors duration-300"
    title="Resume"
  >
    <FaFilePdf className="w-4 h-4" />
  </motion.a>
</div>
            </motion.div>
          </div>

          {/* Code Editor Mockup (Right) */}
          {/* Profile Picture (Right) */}
{/* Profile Picture (Right) */}
      {/* Profile Picture & Floating Tech Badges (Right) */}
      <div className="lg:col-span-5 relative flex items-center justify-center mt-8 lg:mt-0 py-8">
        <motion.div
          variants={itemVariants}
          className="relative z-10"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        >
          <div className="group relative w-[250px] h-[250px] xs:w-[280px] xs:h-[280px] sm:w-[320px] sm:h-[320px] md:w-[340px] md:h-[340px] rounded-full border-4 border-slate-950 shadow-[6px_6px_0px_rgba(15,23,42,1)] overflow-hidden bg-white dark:bg-slate-900 cursor-pointer">
            
            {/* Profile Image */}
            <img
              src={profilePic}
              alt="Nilesh Kumar"
              className="w-full h-full object-cover grayscale-0 group-hover:grayscale group-active:grayscale transition-all duration-700 ease-in-out"
            />

            {/* Animated shimmer/scan overlay - shows on hover/touch */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500 pointer-events-none">
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-white/25 to-transparent"
                animate={{ y: ["-100%", "200%"] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              />
            </div>

            {/* Subtle ring pulse on hover */}
            <div className="absolute inset-0 rounded-full ring-0 group-hover:ring-4 group-active:ring-4 ring-accent-blue/40 transition-all duration-500 pointer-events-none" />
          </div>
        </motion.div>

        {/* 1. Gemini AI (Top-Left) */}
        <motion.div
          className="absolute top-1 left-2 sm:top-2 sm:left-4 z-20"
          animate={{ y: [0, -10, 0], x: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        >
          <div className="bg-amber-400 border-2 border-slate-950 text-slate-950 shadow-[3px_3px_0px_rgba(15,23,42,1)] px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-xs sm:text-sm font-black flex items-center gap-1.5 rounded-full hover:scale-110 transition-transform cursor-pointer">
            <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
            <span>Gemini AI</span>
          </div>
        </motion.div>

        {/* 2. Next.js (Top-Right) */}
        <motion.div
          className="absolute top-1 right-2 sm:top-2 sm:right-4 z-20"
          animate={{ y: [0, -12, 0], x: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 5.6, delay: 0.6, ease: "easeInOut" }}
        >
          <div className="bg-white dark:bg-slate-900 border-2 border-slate-950 dark:border-slate-700 text-slate-900 dark:text-white shadow-[3px_3px_0px_rgba(15,23,42,1)] dark:shadow-[3px_3px_0px_rgba(0,0,0,0.6)] px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-xs sm:text-sm font-black flex items-center gap-1.5 rounded-full hover:scale-110 transition-transform cursor-pointer">
            <SiNextdotjs className="w-3.5 h-3.5 text-slate-950 dark:text-white" />
            <span>Next.js</span>
          </div>
        </motion.div>

        {/* 3. Node.js (Mid-Right) */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 -right-2 sm:-right-6 z-20"
          animate={{ y: [0, 8, 0], x: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 4.8, delay: 1.2, ease: "easeInOut" }}
        >
          <div className="bg-white dark:bg-slate-900 border-2 border-slate-950 dark:border-slate-700 text-slate-900 dark:text-white shadow-[3px_3px_0px_rgba(15,23,42,1)] dark:shadow-[3px_3px_0px_rgba(0,0,0,0.6)] px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-xs sm:text-sm font-black flex items-center gap-1.5 rounded-full hover:scale-110 transition-transform cursor-pointer">
            <SiNodedotjs className="w-3.5 h-3.5 text-emerald-500" />
            <span>Node.js</span>
          </div>
        </motion.div>

        {/* 4. RAG (Bottom-Right) */}
        <motion.div
          className="absolute bottom-1 right-2 sm:bottom-2 sm:right-4 z-20"
          animate={{ y: [0, 10, 0], x: [0, -4, 0] }}
          transition={{ repeat: Infinity, duration: 5.2, delay: 0.4, ease: "easeInOut" }}
        >
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 border-2 border-slate-950 text-white shadow-[3px_3px_0px_rgba(15,23,42,1)] px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-xs sm:text-sm font-black flex items-center gap-1.5 rounded-full hover:scale-110 transition-transform cursor-pointer">
            <Brain className="w-3.5 h-3.5 text-yellow-300" />
            <span>RAG</span>
          </div>
        </motion.div>

        {/* 5. React.js (Bottom-Left) */}
        <motion.div
          className="absolute bottom-1 left-2 sm:bottom-2 sm:left-4 z-20"
          animate={{ y: [0, 12, 0], x: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 6, delay: 1.6, ease: "easeInOut" }}
        >
          <div className="bg-white dark:bg-slate-900 border-2 border-slate-950 dark:border-slate-700 text-slate-900 dark:text-white shadow-[3px_3px_0px_rgba(15,23,42,1)] dark:shadow-[3px_3px_0px_rgba(0,0,0,0.6)] px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-xs sm:text-sm font-black flex items-center gap-1.5 rounded-full hover:scale-110 transition-transform cursor-pointer">
            <SiReact className="w-3.5 h-3.5 text-sky-400" />
            <span>React.js</span>
          </div>
        </motion.div>

        {/* 6. LLMs (Mid-Left) */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 -left-2 sm:-left-6 z-20"
          animate={{ y: [0, -8, 0], x: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 4.5, delay: 1, ease: "easeInOut" }}
        >
          <div className="bg-white dark:bg-slate-900 border-2 border-slate-950 dark:border-slate-700 text-slate-900 dark:text-white shadow-[3px_3px_0px_rgba(15,23,42,1)] dark:shadow-[3px_3px_0px_rgba(0,0,0,0.6)] px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-xs sm:text-sm font-black flex items-center gap-1.5 rounded-full hover:scale-110 transition-transform cursor-pointer">
            <Bot className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />
            <span>LLMs</span>
          </div>
        </motion.div>
      </div>
        </motion.div>
      </div>

    </section>
  );
}
