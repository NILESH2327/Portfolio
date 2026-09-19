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
      border: 'border-slate-950 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100',
      iconBg: 'bg-amber-400 border-2 border-slate-950 text-slate-950 shadow-[1.5px_1.5px_0px_rgba(15,23,42,1)]',
      subColor: 'text-amber-600 dark:text-amber-400'
    },
    purple: {
      border: 'border-slate-950 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100',
      iconBg: 'bg-purple-400 border-2 border-slate-950 text-slate-950 shadow-[1.5px_1.5px_0px_rgba(15,23,42,1)]',
      subColor: 'text-purple-600 dark:text-purple-400'
    },
    blue: {
      border: 'border-slate-950 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100',
      iconBg: 'bg-blue-400 border-2 border-slate-950 text-slate-950 shadow-[1.5px_1.5px_0px_rgba(15,23,42,1)]',
      subColor: 'text-blue-600 dark:text-blue-400'
    },
    teal: {
      border: 'border-slate-950 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100',
      iconBg: 'bg-emerald-400 border-2 border-slate-950 text-slate-950 shadow-[1.5px_1.5px_0px_rgba(15,23,42,1)]',
      subColor: 'text-emerald-600 dark:text-emerald-400'
    }
  };

  return (
    <section id="achievements" className="py-20 md:py-28 relative border-b-2 border-slate-950 bg-white bg-grid-pattern dark:bg-navy/30 dark:border-slate-800 transition-colors duration-300 scroll-mt-10">
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
              description="National hackathon championship, competitive programming ratings, and academic performance from my resume."
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
                    className={`p-6 h-full border-2 ${style.border} shadow-[4px_4px_0px_rgba(15,23,42,1)] dark:shadow-[4px_4px_0px_rgba(0,0,0,0.6)] flex flex-col justify-between text-left`}
                  >
                    <div>
                      <div className={`w-11 h-11 rounded-xl ${style.iconBg} flex items-center justify-center mb-4`}>
                        {Icon && <Icon className="w-5 h-5" />}
                      </div>
                      <h3 className="text-lg font-black text-slate-950 dark:text-slate-100 mb-1 font-display">
                        {item.title}
                      </h3>
                      <h4 className={`text-xs font-black tracking-wide uppercase mb-3 ${style.subColor}`}>
                        {item.subtitle}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-semibold">
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
            <Card hoverGlow className="p-6 md:p-8 border-2 border-slate-950 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col md:flex-row items-center justify-between gap-6 text-left shadow-[4px_4px_0px_rgba(15,23,42,1)] dark:shadow-[4px_4px_0px_rgba(0,0,0,0.6)]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-400 border-2 border-slate-950 text-slate-950 flex items-center justify-center flex-shrink-0 shadow-[1.5px_1.5px_0px_rgba(15,23,42,1)]">
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
            <h4 className="text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3">
              Other Selections & Notable Events
            </h4>
            <div className="flex flex-wrap gap-3">
              {extraAchievements.map((item, idx) => (
                <div 
                  key={idx} 
                  className="px-4 py-2.5 rounded-xl bg-slate-100 border border-slate-300 text-xs font-bold text-slate-800 dark:text-slate-200 dark:bg-slate-900 dark:border-slate-800 hover:border-slate-950 dark:hover:border-slate-600 shadow-[2px_2px_0px_rgba(15,23,42,0.6)] dark:shadow-[2px_2px_0px_rgba(0,0,0,0.6)] transition-all duration-200"
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
