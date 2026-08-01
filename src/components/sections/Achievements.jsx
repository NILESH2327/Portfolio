import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { achievements, education, extraAchievements } from '../../data/achievements';
import { FaGraduationCap } from 'react-icons/fa';

export function Achievements() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const accentStyles = {
    yellow: {
      border: 'border-slate-950 bg-amber-100 dark:bg-amber-950/20 text-slate-900 dark:text-slate-100',
      iconBg: 'bg-white border-2 border-slate-950 text-slate-950 shadow-[1px_1px_0px_rgba(0,0,0,1)]'
    },
    purple: {
      border: 'border-slate-950 bg-purple-100 dark:bg-purple-950/20 text-slate-900 dark:text-slate-100',
      iconBg: 'bg-white border-2 border-slate-950 text-slate-950 shadow-[1px_1px_0px_rgba(0,0,0,1)]'
    },
    blue: {
      border: 'border-slate-950 bg-blue-100 dark:bg-blue-950/20 text-slate-900 dark:text-slate-100',
      iconBg: 'bg-white border-2 border-slate-950 text-slate-950 shadow-[1px_1px_0px_rgba(0,0,0,1)]'
    },
    teal: {
      border: 'border-slate-950 bg-teal-100 dark:bg-teal-950/20 text-slate-900 dark:text-slate-100',
      iconBg: 'bg-white border-2 border-slate-950 text-slate-950 shadow-[1px_1px_0px_rgba(0,0,0,1)]'
    }
  };

  return (
    <section id="achievements" className="py-20 md:py-28 relative border-b-2 border-slate-950 bg-white bg-grid-pattern dark:bg-navy/30 transition-colors duration-300 scroll-mt-10">
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
              label="RECOGNITION"
              heading="Achievements."
              description="Hackathons, competitive programming milestones, academic performance, and event selections."
            />
          </motion.div>

          {/* Badge Cards Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          >
            {achievements.map((item) => {
              const Icon = item.icon;
              const style = accentStyles[item.accent] || accentStyles.blue;
              return (
                <motion.div key={item.id} variants={itemVariants}>
                  <Card 
                    hoverGlow 
                    className={`p-6 h-full border-2 ${style.border} shadow-[4px_4px_0px_rgba(15,23,42,1)] flex flex-col justify-between text-left`}
                  >
                    <div>
                      <div className={`w-10 h-10 rounded-xl ${style.iconBg} flex items-center justify-center mb-4`}>
                        {Icon && <Icon className="w-5 h-5" />}
                      </div>
                      <h3 className="text-lg font-black text-slate-950 dark:text-slate-100 mb-1 font-display">
                        {item.title}
                      </h3>
                      <h4 className="text-xs font-bold text-accent-blue tracking-wide uppercase mb-3">
                        {item.subtitle}
                      </h4>
                      <p className="text-xs text-slate-650 dark:text-slate-350 leading-relaxed font-semibold">
                        {item.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Highlighted Education Banner Card */}
          <motion.div variants={itemVariants} className="mt-8">
            <Card hoverGlow className="p-6 md:p-8 border-2 border-slate-950 bg-white dark:bg-slate-900 flex flex-col md:flex-row items-center justify-between gap-6 text-left shadow-[4px_4px_0px_rgba(15,23,42,1)]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white border-2 border-slate-950 text-slate-950 flex items-center justify-center flex-shrink-0 shadow-[1.5px_1.5px_0px_rgba(15,23,42,1)]">
                  <FaGraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-black text-slate-950 dark:text-slate-100 font-display">
                    {education.degree}
                  </h3>
                  <p className="text-sm text-slate-650 dark:text-slate-400 mt-0.5 font-bold">
                    {education.institution} · {education.duration}
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 px-6 py-2 bg-accent-yellow border-2 border-slate-950 rounded-xl text-sm font-black text-slate-950 tracking-wider shadow-[2px_2px_0px_rgba(15,23,42,1)]">
                {education.performance}
              </div>
            </Card>
          </motion.div>

          {/* Also Mention Cards/Banners */}
          <motion.div variants={itemVariants} className="mt-8 text-left">
            <h4 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">
              Other Selections & Events
            </h4>
            <div className="flex flex-wrap gap-3">
              {extraAchievements.map((item, idx) => (
                <div 
                  key={idx} 
                  className="px-4 py-2.5 rounded-xl bg-slate-100/60 border border-slate-200 text-xs font-semibold text-slate-600 dark:text-slate-300 dark:bg-slate-900/60 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 transition-colors duration-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
