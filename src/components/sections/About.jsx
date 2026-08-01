import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { BiCheck, BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { FaGraduationCap, FaTrophy, FaCode } from 'react-icons/fa';

// TODO: replace with your actual uploaded images from src/assets/images/journey/
import collegePic1 from '../../assets/images/journey/college1.jpeg';
import collegePic2 from '../../assets/images/journey/college2.jpg';
import sihWin from '../../assets/images/journey/sih-trophy.jpeg';
// import hackathonMoment from '../../assets/images/journey/hackathon.jpg';
// import teamMoment from '../../assets/images/journey/team.jpg';
// import codingMoment from '../../assets/images/journey/coding.jpg';

const journeyPhotos = [
  { src: sihWin, caption: "SIH 2025 — National Winner 🏆" },
  { src: collegePic1, caption: "It's Me" },
  // { src: hackathonMoment, caption: "Building Krishi Sakhi — Hackathon Night" },
  // { src: teamMoment, caption: "With the Team" },
  { src: collegePic2, caption: "Winning Moment" },
  // { src: codingMoment, caption: "Deep Work Mode" },
];

const tags = ["Full-stack systems", "MERN + Next.js", "Generative AI", "REST APIs", "Clean UI", "Problem solving"];

const AUTOPLAY_INTERVAL = 3500; // ms

export function About() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % journeyPhotos.length);
  }, []);

  const prev = () => setIndex((prev) => (prev - 1 + journeyPhotos.length) % journeyPhotos.length);

  // Auto-scroll effect
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="about" className="py-8 md:py-15 relative border-b-2 border-slate-950 bg-white bg-grid-pattern dark:bg-navy/30 transition-colors duration-300 scroll-mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants}>
            <SectionHeading
              label="PERSONAL STORY"
              heading="About."
              description="From a small-town engineering campus to a national hackathon stage — here's how I build."
            />
          </motion.div>

          {/* Main Split: Bio (Left) + Journey Carousel (Right) */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch mb-14 mt-10">

            {/* LEFT — Narrative Bio */}
            <div className="flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 w-9 h-9 rounded-xl bg-accent-yellow border-2 border-slate-950 flex items-center justify-center">
                    <FaGraduationCap className="w-4 h-4 text-slate-950" />
                  </span>
                  <p className="text-slate-800 dark:text-slate-300 text-base leading-relaxed">
                    I'm an <span className="font-bold text-slate-950 dark:text-white">Information Technology undergrad</span> at BIET Jhansi, spending most of my time in the space between clean backend architecture and generative AI — REST APIs, database design, and now, AI-integrated product features that actually solve someone's problem.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 w-9 h-9 rounded-xl bg-accent-blue/20 border-2 border-slate-950 flex items-center justify-center">
                    <FaCode className="w-4 h-4 text-accent-blue" />
                  </span>
                  <p className="text-slate-800 dark:text-slate-300 text-base leading-relaxed">
                    Whether it's a role-based hospital management system, a multi-tenant AI chatbot SaaS, or a voice-enabled farming assistant for non-literate users — I care about shipping software that's <span className="font-bold text-slate-950 dark:text-white">usable end-to-end</span>, not just technically impressive.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 w-9 h-9 rounded-xl bg-accent-teal/20 border-2 border-slate-950 flex items-center justify-center">
                    <FaTrophy className="w-4 h-4 text-accent-teal" />
                  </span>
                  <p className="text-slate-800 dark:text-slate-300 text-base leading-relaxed">
                    That mindset paid off at <span className="font-bold text-slate-950 dark:text-white">Smart India Hackathon 2025</span>, where our team won nationally among 10,000+ teams — a moment that pushed me to keep building things people actually need.
                  </p>
                </div>
              </div>

              {/* Pull quote strip */}
              <div className="mt-8 p-6 rounded-2xl bg-blue-300 dark:bg-slate-900 text-white border-2 border-slate-950 shadow-[4px_4px_0px_rgba(15,23,42,1)]">
                <p className="font-bold text-lg leading-snug">
                  "I build software from idea to working product — with a focus on AI integration, clean APIs, and real-world usability."
                </p>
              </div>
            </div>

            {/* RIGHT — Journey Photo Carousel (auto-scrolling) */}
            <Card
              className="relative overflow-hidden border-2 border-slate-950 shadow-[4px_4px_0px_rgba(15,23,42,1)] p-0 bg-slate-100 dark:bg-slate-900 flex flex-col"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Fixed aspect-ratio frame so images never look oversized/cropped weirdly */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-slate-200 dark:bg-slate-800">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <img
                      src={journeyPhotos[index].src}
                      alt={journeyPhotos[index].caption}
                      className="w-full h-full object-cover object-center"
                    />
                    {/* Light blue gradient overlay instead of black */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 " />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className="text-white font-bold text-sm sm:text-base drop-shadow-md">
                        {journeyPhotos[index].caption}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Prev/Next Arrows */}
                <button
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-slate-950 flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 z-10"
                  aria-label="Previous photo"
                >
                  <BiChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-slate-950 flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 z-10"
                  aria-label="Next photo"
                >
                  <BiChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Dot Indicators + progress-style active dot */}
              <div className="flex items-center justify-center gap-2 py-4 bg-white dark:bg-slate-900">
                {journeyPhotos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === index ? 'w-6 bg-sky-400' : 'w-2 bg-slate-300 dark:bg-slate-700'
                    }`}
                    aria-label={`Go to photo ${i + 1}`}
                  />
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Tags — floating pills, positioned at the bottom */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 justify-start pt-4 border-t border-slate-200 dark:border-slate-800">
            {tags.map((tag, idx) => (
              <motion.div
                key={idx}
                animate={{ y: [0, -6, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3 + (idx % 3) * 0.5,
                  delay: idx * 0.2,
                  ease: "easeInOut"
                }}
              >
                <Badge
                  variant="primary"
                  className="bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-semibold px-4 py-2 hover:border-slate-400 dark:hover:border-slate-600 hover:text-slate-900 dark:hover:text-slate-100 hover:-translate-y-1 transition-all duration-300"
                >
                  {tag}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}