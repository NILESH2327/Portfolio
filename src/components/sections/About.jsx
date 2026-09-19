import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { 
  GraduationCap, 
  Trophy, 
  Code2, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  ArrowRight,
  Maximize2
} from 'lucide-react';

import collegePic1 from '../../assets/images/journey/college1.jpeg';
import collegePic2 from '../../assets/images/journey/college2.JPG';
import sihWin from '../../assets/images/journey/sih-trophy.jpeg';

const journeyPhotos = [
  { 
    src: sihWin, 
    title: "SIH 2025 National Winner Trophy", 
    subtitle: "Smart India Hackathon 2025 · Ministry of Education & AICTE", 
    tag: "CHAMPION",
    tagColor: "bg-amber-400 text-slate-950"
  },
  { 
    src: collegePic2, 
    title: "Team Winning Moment on Stage", 
    subtitle: "Grand Finale stage with the winning cheque among 10,000+ teams nationwide", 
    tag: "GRAND FINALE",
    tagColor: "bg-emerald-400 text-slate-950"
  },
  { 
    src: collegePic1, 
    title: "Nilesh Kumar — Campus & Builder Roots", 
    subtitle: "BIET Jhansi · Information Technology undergrad turning ideas into code", 
    tag: "BIET JHANSI",
    tagColor: "bg-sky-400 text-slate-950"
  },
];

const tags = [
  "Full-Stack Systems", 
  "MERN + Next.js", 
  "Generative AI", 
  "REST APIs", 
  "Clean UI", 
  "Problem Solving",
  "RAG Architecture",
  "System Design"
];

const AUTOPLAY_INTERVAL = 4000; // ms

export function About() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [clickAnim, setClickAnim] = useState(false);

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % journeyPhotos.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((prev) => (prev - 1 + journeyPhotos.length) % journeyPhotos.length);
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, next, index]);

  const handlePhotoClick = () => {
    setClickAnim(true);
    setTimeout(() => setClickAnim(false), 200);
    next();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="about" className="py-12 md:py-20 relative border-b-2 border-slate-950 bg-slate-50 bg-grid-pattern dark:bg-navy-dark/60 transition-colors duration-300 scroll-mt-10">
      {/* Background soft ambient accents */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-400/5 dark:bg-amber-400/2 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/2 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants}>
            <SectionHeading
              label="PERSONAL STORY"
              heading="About."
              description="From a small-town engineering campus to a national hackathon stage — here's how I build and think."
            />
          </motion.div>

          {/* Quick Highlight Metrics Strip */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10 -mt-2">
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-950 dark:border-slate-800 shadow-[3px_3px_0px_rgba(15,23,42,1)] dark:shadow-[3px_3px_0px_rgba(0,0,0,0.6)] flex items-center gap-3">
              <span className="w-9 h-9 rounded-xl bg-amber-400 text-slate-950 border border-slate-950 flex items-center justify-center flex-shrink-0 font-black text-sm">
                🏆
              </span>
              <div>
                <p className="text-base sm:text-lg font-black text-slate-950 dark:text-white leading-tight">1st Place</p>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">SIH '25 National Winner</p>
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-950 dark:border-slate-800 shadow-[3px_3px_0px_rgba(15,23,42,1)] dark:shadow-[3px_3px_0px_rgba(0,0,0,0.6)] flex items-center gap-3">
              <span className="w-9 h-9 rounded-xl bg-blue-500 text-white border border-slate-950 flex items-center justify-center flex-shrink-0 font-black text-sm">
                10k+
              </span>
              <div>
                <p className="text-base sm:text-lg font-black text-slate-950 dark:text-white leading-tight">10,000+</p>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Teams Competed</p>
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-950 dark:border-slate-800 shadow-[3px_3px_0px_rgba(15,23,42,1)] dark:shadow-[3px_3px_0px_rgba(0,0,0,0.6)] flex items-center gap-3">
              <span className="w-9 h-9 rounded-xl bg-emerald-400 text-slate-950 border border-slate-950 flex items-center justify-center flex-shrink-0 font-black text-sm">
                ⚔️
              </span>
              <div>
                <p className="text-base sm:text-lg font-black text-slate-950 dark:text-white leading-tight">Knight</p>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">LeetCode Top 5%</p>
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-950 dark:border-slate-800 shadow-[3px_3px_0px_rgba(15,23,42,1)] dark:shadow-[3px_3px_0px_rgba(0,0,0,0.6)] flex items-center gap-3">
              <span className="w-9 h-9 rounded-xl bg-purple-400 text-slate-950 border border-slate-950 flex items-center justify-center flex-shrink-0 font-black text-sm">
                🚀
              </span>
              <div>
                <p className="text-base sm:text-lg font-black text-slate-950 dark:text-white leading-tight">5+ Apps</p>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Full-Stack Deployed</p>
              </div>
            </div>
          </motion.div>

          {/* Main Content Grid: Narrative Bio (Left) + Crazy Interactive Photo Showcase (Right) */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">

            {/* LEFT — Narrative Dossier & Minimalist Quote (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {/* Card 1: Academic & Roots */}
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-950 dark:border-slate-800 shadow-[4px_4px_0px_rgba(15,23,42,1)] dark:shadow-[4px_4px_0px_rgba(0,0,0,0.6)] hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-3 mb-2.5">
                  <span className="w-9 h-9 rounded-xl bg-amber-400 border-2 border-slate-950 text-slate-950 flex items-center justify-center shadow-[1.5px_1.5px_0px_rgba(15,23,42,1)]">
                    <GraduationCap className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-amber-600 dark:text-amber-400">Education</span>
                    <h3 className="text-base font-black text-slate-900 dark:text-white leading-none">BIET Jhansi · IT Undergrad</h3>
                  </div>
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                  Information Technology student (2022–2026), spending most of my time in the space between clean backend architecture and generative AI — REST APIs, optimized database schemas, and AI-integrated product features.
                </p>
              </div>

              {/* Card 2: Builder DNA */}
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-950 dark:border-slate-800 shadow-[4px_4px_0px_rgba(15,23,42,1)] dark:shadow-[4px_4px_0px_rgba(0,0,0,0.6)] hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-3 mb-2.5">
                  <span className="w-9 h-9 rounded-xl bg-sky-400/20 border-2 border-slate-950 text-sky-600 dark:text-sky-400 flex items-center justify-center shadow-[1.5px_1.5px_0px_rgba(15,23,42,1)]">
                    <Code2 className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-sky-600 dark:text-sky-400">Engineering Approach</span>
                    <h3 className="text-base font-black text-slate-900 dark:text-white leading-none">Built For End-to-End Usability</h3>
                  </div>
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                  Whether it's a role-based hospital management system (Medixthon), a multi-tenant AI chatbot SaaS, or a voice-enabled farming assistant (Krishi Sakhi) — I prioritize shipping software that real users can intuitively navigate.
                </p>
              </div>

              {/* Card 3: Hackathon Glory */}
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-950 dark:border-slate-800 shadow-[4px_4px_0px_rgba(15,23,42,1)] dark:shadow-[4px_4px_0px_rgba(0,0,0,0.6)] hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-3 mb-2.5">
                  <span className="w-9 h-9 rounded-xl bg-emerald-400/20 border-2 border-slate-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shadow-[1.5px_1.5px_0px_rgba(15,23,42,1)]">
                    <Trophy className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400">SIH 2025 Glory</span>
                    <h3 className="text-base font-black text-slate-900 dark:text-white leading-none">1st Place Nationwide</h3>
                  </div>
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                  Led our team to national victory at Smart India Hackathon 2025 among 10,000+ teams across India — a defining milestone that proved the value of fast execution and teamwork.
                </p>
              </div>

              {/* REFINED MINIMALIST QUOTE (Replaces the chunky blue block) */}
              <div className="relative p-5 rounded-2xl bg-white dark:bg-slate-900/80 border-2 border-slate-950 dark:border-slate-800 shadow-[4px_4px_0px_rgba(15,23,42,1)] dark:shadow-[4px_4px_0px_rgba(0,0,0,0.6)] overflow-hidden">
                <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-accent-yellow" />
                <div className="flex items-start gap-3 pl-1">
                  <span className="flex-shrink-0 mt-0.5 text-accent-yellow">
                    <Quote className="w-5 h-5 fill-accent-yellow/20" />
                  </span>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base leading-snug italic">
                      "I build software from idea to working product — with a focus on AI integration, clean APIs, and real-world usability."
                    </p>
                    <p className="mt-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                      — Nilesh Kumar · Core Philosophy
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — Crazy Interactive Journey Photo Deck (7 Cols) */}
            <div className="lg:col-span-7">
              <div 
                className="relative rounded-3xl border-2 border-slate-950 dark:border-slate-700 bg-slate-950 text-white shadow-[6px_6px_0px_rgba(15,23,42,1)] dark:shadow-[6px_6px_0px_rgba(0,0,0,0.8)] overflow-hidden group"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {/* Top Story Progress Bars (Instagram / Apple Style) */}
                <div className="p-4 sm:p-5 pb-2 flex items-center justify-between gap-2 border-b border-white/10 relative z-20 bg-slate-950/80 backdrop-blur-md">
                  <div className="flex items-center gap-2 flex-1">
                    {journeyPhotos.map((photo, i) => (
                      <button
                        key={i}
                        onClick={(e) => { e.stopPropagation(); setIndex(i); }}
                        className="flex-1 h-1.5 rounded-full overflow-hidden bg-white/20 transition-all hover:h-2"
                        title={`Jump to ${photo.title}`}
                        aria-label={`Go to slide ${i + 1}`}
                      >
                        <div 
                          className={`h-full bg-amber-400 rounded-full transition-all duration-300 ${
                            i === index ? 'w-full' : i < index ? 'w-full opacity-60' : 'w-0'
                          }`}
                        />
                      </button>
                    ))}
                  </div>

                  {/* Auto-scroll & Click Prompt Pill */}
                  <div className="flex items-center gap-2 pl-2">
                    <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-white/10 text-white/80 border border-white/15">
                      <span className={`w-1.5 h-1.5 rounded-full ${isPaused ? 'bg-amber-400' : 'bg-emerald-400 animate-pulse'}`} />
                      {isPaused ? 'Paused' : 'Auto-playing'}
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[11px] font-mono font-bold bg-amber-400 text-slate-950">
                      0{index + 1} / 0{journeyPhotos.length}
                    </span>
                  </div>
                </div>

                {/* THE PHOTO VIEWPORT (Auto-scrolls + Click anywhere on photo advances) */}
                <div 
                  onClick={handlePhotoClick}
                  className="relative w-full h-[360px] xs:h-[400px] sm:h-[460px] md:h-[500px] overflow-hidden bg-slate-900/90 flex items-center justify-center cursor-pointer select-none"
                  title="Click anywhere to see next photo"
                >
                  {/* Layer 1: Ambient Blurred Backdrop (Ensures color harmony for any aspect ratio) */}
                  <img
                    src={journeyPhotos[index].src}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-30 scale-125 pointer-events-none transition-opacity duration-700"
                  />

                  {/* Layer 2: Foreground Image with object-contain (GUARANTEES NO CUTOFFS & FULL VISIBILITY) */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.04 }}
                      transition={{ duration: 0.45, ease: "easeInOut" }}
                      className="relative z-10 w-full h-full flex items-center justify-center p-3 sm:p-5"
                    >
                      <img
                        src={journeyPhotos[index].src}
                        alt={journeyPhotos[index].title}
                        className={`max-w-full max-h-full object-contain object-center rounded-xl sm:rounded-2xl drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] border border-white/10 transition-transform duration-300 ${
                          clickAnim ? 'scale-95' : 'hover:scale-[1.01]'
                        }`}
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Hover Prompt Floating Tag */}
                  <div className="absolute top-4 right-4 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-950/80 text-white border border-white/20 shadow-xl backdrop-blur-md">
                      Click image for next <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                    </span>
                  </div>

                  {/* Left / Right Chevron Controls */}
                  <button
                    onClick={(e) => { e.stopPropagation(); prev(); }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-950/80 hover:bg-amber-400 text-white hover:text-slate-950 border border-white/20 hover:border-slate-950 flex items-center justify-center shadow-xl transition-all duration-200 hover:scale-110 z-20 backdrop-blur-sm"
                    aria-label="Previous photo"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={(e) => { e.stopPropagation(); next(); }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-950/80 hover:bg-amber-400 text-white hover:text-slate-950 border border-white/20 hover:border-slate-950 flex items-center justify-center shadow-xl transition-all duration-200 hover:scale-110 z-20 backdrop-blur-sm"
                    aria-label="Next photo"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Bottom Story Caption & Quick Thumbnail Strip */}
                <div className="p-4 sm:p-5 bg-gradient-to-t from-slate-950 via-slate-950/95 to-slate-950/80 border-t border-white/10 relative z-20">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black tracking-wider uppercase border border-slate-950 ${journeyPhotos[index].tagColor}`}>
                          {journeyPhotos[index].tag}
                        </span>
                        <span className="text-xs font-semibold text-white/50">
                          {index === 0 ? "National Stage" : index === 1 ? "Grand Finale" : "Academic Roots"}
                        </span>
                      </div>
                      <h4 className="text-base sm:text-lg font-black text-white leading-tight">
                        {journeyPhotos[index].title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-400 leading-normal">
                        {journeyPhotos[index].subtitle}
                      </p>
                    </div>

                    {/* Miniature Interactive Thumbnail Switcher */}
                    <div className="flex items-center gap-2 flex-shrink-0 pt-1 sm:pt-0">
                      {journeyPhotos.map((photo, i) => (
                        <button
                          key={i}
                          onClick={(e) => { e.stopPropagation(); setIndex(i); }}
                          className={`relative w-12 h-12 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                            i === index 
                              ? 'border-amber-400 scale-105 shadow-[0_0_12px_rgba(251,191,36,0.5)]' 
                              : 'border-white/20 opacity-50 hover:opacity-100'
                          }`}
                          title={photo.title}
                          aria-label={`Switch to photo ${i + 1}`}
                        >
                          <img 
                            src={photo.src} 
                            alt="" 
                            className="w-full h-full object-cover" 
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Mindset & Core Tech Pills */}
          <motion.div variants={itemVariants} className="pt-6 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">
                Engineering Focus & Core Capabilities
              </span>
            </div>
            <div className="flex flex-wrap gap-2.5 sm:gap-3 justify-start">
              {tags.map((tag, idx) => (
                <motion.div
                  key={idx}
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 3.5 + (idx % 3) * 0.5,
                    delay: idx * 0.15,
                    ease: "easeInOut"
                  }}
                >
                  <Badge
                    variant="primary"
                    className="bg-white dark:bg-slate-900 border-2 border-slate-950 dark:border-slate-800 text-slate-800 dark:text-slate-200 font-bold px-3.5 py-1.5 shadow-[2px_2px_0px_rgba(15,23,42,1)] dark:shadow-[2px_2px_0px_rgba(0,0,0,0.6)] hover:border-amber-400 dark:hover:border-amber-400 hover:text-slate-950 dark:hover:text-white hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                  >
                    {tag}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}