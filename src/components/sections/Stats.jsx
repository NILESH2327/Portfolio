import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { StatCard } from '../ui/StatCard';
import { allStats } from '../../data/stats';

export function Stats() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="stats" className="py-20 md:py-28 relative border-b-2 border-slate-950 bg-slate-50 bg-grid-pattern dark:bg-slate-950 transition-colors duration-300 scroll-mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            <SectionHeading 
              label="STATS"
              heading="By the Numbers."
              description="A quantifiable summary of my development output, competitive programming problems solved, and hackathon wins."
            />
          </motion.div>

          {/* Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mt-12"
          >
            {allStats.map((stat, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <StatCard 
                  value={stat.value}
                  label={stat.label}
                  color={stat.color}
                  className="h-full py-8 flex flex-col justify-center"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
