import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { TimelineItem } from '../ui/TimelineItem';
import { journey } from '../../data/journey';

export function Journey() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="journey" className="py-20 md:py-28 relative border-b-2 border-slate-950 bg-slate-50 bg-grid-pattern dark:bg-navy-dark transition-colors duration-300 scroll-mt-10">
      {/* Subtle backdrop glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/2 rounded-full blur-[120px] pointer-events-none" />
      
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
              label="MY TIMELINE"
              heading="Journey."
              description="A chronological map of my academic background, major hackathon milestones, and engineering projects."
              align="center"
            />
          </motion.div>

          {/* Timeline Wrapper */}
          <motion.div 
            variants={itemVariants} 
            className="relative mt-16 max-w-5xl mx-auto"
          >
            {/* Connecting Vertical Line */}
            <div className="absolute left-11 md:left-1/2 top-4 bottom-4 w-[3px] bg-slate-950 dark:bg-slate-800/80 -translate-x-1/2 pointer-events-none" />

            {/* Timeline Items */}
            <div className="space-y-4">
              {journey.map((item, idx) => (
                <TimelineItem 
                  key={item.id} 
                  item={item} 
                  index={idx}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
