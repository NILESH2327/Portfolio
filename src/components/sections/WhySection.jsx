import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import {
  CheckCircle2,
  Award,
  ExternalLink,
  UserCheck,
  BookMarked,
  CalendarCheck2,
  Code2,
  Briefcase,
  MapPin,
} from 'lucide-react';

// A cursor-reactive tilt card with a spotlight that follows the mouse —
// the "signature" hover moment for this section.
function TiltCertCard({ cert, index }) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-40, 40], [10, -10]), { stiffness: 250, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-60, 60], [-10, 10]), { stiffness: 250, damping: 20 });

  const spotX = useTransform(x, (v) => v + 60);
  const spotY = useTransform(y, (v) => v + 40);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={cert.link}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      whileHover={{ scale: 1.04, y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative overflow-hidden p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border-2 border-slate-950 dark:border-slate-800 flex flex-col justify-between h-full min-h-[120px] shadow-[2.5px_2.5px_0px_rgba(15,23,42,1)] dark:shadow-[2.5px_2.5px_0px_rgba(0,0,0,0.5)] group-hover:shadow-[4px_4px_0px_rgba(15,23,42,1)]"
    >
      {/* Cursor spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        style={{
          background: useTransform(
            [spotX, spotY],
            ([sx, sy]) =>
              `radial-gradient(120px circle at ${sx}px ${sy}px, rgba(250,204,21,0.18), transparent 70%)`
          ),
        }}
      />

      <div className="relative">
        <motion.span
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 2.4 + index * 0.3, repeat: Infinity, ease: 'easeInOut' }}
          className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-slate-950 dark:bg-white text-white dark:text-slate-950 text-[11px] font-black mb-2"
        >
          {cert.provider.charAt(0)}
        </motion.span>
        <h5 className="text-xs font-black text-slate-950 dark:text-white line-clamp-2 leading-snug">
          {cert.title}
        </h5>
        <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold mt-1">
          {cert.provider}
        </p>
      </div>
      <span className="relative mt-3 inline-flex items-center gap-1 text-[10px] font-black text-blue-600 dark:text-accent-blue group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-200">
        View Certificate
        <ExternalLink className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </motion.a>
  );
}

export function WhySection() {
  const fastFacts = [
    { label: 'Current Status', value: 'B.Tech IT Student', icon: UserCheck },
    { label: 'Degree', value: 'B.Tech — Information Technology', icon: BookMarked },
    { label: 'Graduation', value: '2027', icon: CalendarCheck2 },
    { label: 'Core Stack', value: 'React, Node.js, MongoDB, Next.js, Gemini AI', icon: Code2 },
    { label: 'Open To', value: 'Internships, Full-Stack Roles, AI/ML-Integrated Roles', icon: Briefcase },
    { label: 'Location', value: 'Jhansi, Uttar Pradesh, India', icon: MapPin },
  ];

  const highlights = [
    'Strong MERN + Next.js full-stack foundation with generative AI integration experience.',
    'Built production AI features using Gemini API across 4 different applications.',
    'National Hackathon winner (SIH 2025) among 10000+ students.',
    '827+ DSA problems solved, LeetCode Knight rank, top 7% globally.',
  ];

  const certifications = [
    { title: 'Claude 101', provider: 'Anthropic', link: '#' },
    { title: 'Introduction to GenAI', provider: 'Google Cloud', link: '#' },
    { title: 'Python Certification', provider: 'HackerRank', link: '#' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="why-nilesh"
      className="py-20 md:py-28 relative border-b-2 border-slate-950 bg-white bg-grid-pattern dark:bg-navy/30 dark:border-slate-800 transition-colors duration-300 scroll-mt-10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-120px' }}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants}>
            <SectionHeading
              label="WHY CHOOSE ME"
              heading="Why Nilesh."
              description="A quick breakdown of my credentials, capabilities, and professional focus."
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-12">
            {/* Column 1: Fast Facts Card */}
            <motion.div variants={itemVariants} className="lg:col-span-5 h-full">
              <Card className="bg-accent-yellow border-2 border-slate-950 text-slate-950 p-8 h-full flex flex-col shadow-[4px_4px_0px_rgba(15,23,42,1)]">
                <div className="flex items-center gap-2 mb-6">
                  <motion.span
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
                    className="p-2.5 rounded-xl bg-white border-2 border-slate-950 text-slate-950 flex items-center justify-center shadow-[1px_1px_0px_rgba(0,0,0,1)]"
                  >
                    <Award className="w-5 h-5" />
                  </motion.span>
                  <h3 className="text-xl font-black tracking-tight">Fast Facts</h3>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {fastFacts.map((fact, idx) => {
                    const Icon = fact.icon;
                    return (
                      <motion.div
                        key={idx}
                        whileHover={{ x: 4, y: -3 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                        className="flex items-start gap-3 rounded-xl bg-white/60 border border-slate-950/15 p-3.5 hover:bg-white hover:border-slate-950/40 transition-colors duration-200"
                      >
                        <motion.span
                          animate={{ y: [0, -4, 0] }}
                          transition={{
                            duration: 2.2 + idx * 0.25,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: idx * 0.15,
                          }}
                          className="mt-0.5 flex-shrink-0 rounded-lg bg-slate-950 text-accent-yellow p-1.5"
                        >
                          <Icon className="w-4 h-4" />
                        </motion.span>
                        <div className="min-w-0">
                          <dt className="text-[11px] font-black uppercase tracking-wider text-slate-800/80">
                            {fact.label}
                          </dt>
                          <dd className="text-sm font-extrabold text-slate-950 leading-snug break-words">
                            {fact.value}
                          </dd>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </Card>
            </motion.div>

            {/* Column 2: Highlights & Certifications Card */}
            <motion.div variants={itemVariants} className="lg:col-span-7 h-full">
              <Card className="p-8 h-full border-2 border-slate-950 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col justify-between text-left space-y-8 shadow-[4px_4px_0px_rgba(15,23,42,1)] dark:shadow-[4px_4px_0px_rgba(0,0,0,0.4)]">
                {/* Highlights List */}
                <div>
                  <h3 className="text-lg font-black text-slate-950 dark:text-white mb-5 font-display">
                    Key Highlights
                  </h3>
                  <ul className="space-y-4">
                    {highlights.map((highlight, idx) => (
                      <motion.li
                        key={idx}
                        whileHover={{ x: 6 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        className="flex items-start gap-3"
                      >
                        <motion.span
                          whileHover={{ rotate: 12, scale: 1.15 }}
                          className="mt-0.5 flex-shrink-0 rounded-full bg-accent-yellow/20 text-slate-950 dark:text-accent-yellow p-1 border border-slate-950/10 dark:border-accent-yellow/30"
                        >
                          <CheckCircle2 className="w-4 h-4" />
                        </motion.span>
                        <span className="text-sm text-slate-700 dark:text-slate-300 leading-normal font-bold">
                          {highlight}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Certifications sub-card */}
                <div className="pt-6 border-t-2 border-slate-200 dark:border-slate-800">
                  <h4 className="text-sm font-black text-slate-500 dark:text-slate-400 mb-4 uppercase tracking-wider">
                    Certifications
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {certifications.map((cert, idx) => (
                      <TiltCertCard key={idx} cert={cert} index={idx} />
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
