import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { projects } from '../../data/projects';
import { BiGitBranch, BiLinkExternal, BiInfoCircle, BiTrendingUp } from 'react-icons/bi';

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 relative scroll-mt-10 bg-slate-50 bg-grid-pattern dark:bg-[#0F1226] border-b-2 border-slate-950 dark:border-slate-800 transition-colors duration-300">
      {/* Divider lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />

      {/* Background glow overlay */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

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
              label="MY WORK"
              heading="Projects."
              description="A curated showcase of full-stack systems and tools, specializing in Gemini AI features, secure authentication, and payment flows."
            />
          </motion.div>

          {/* Grid of Projects */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          >
            {projects.map((project) => {
              const visibleTags = project.stack.slice(0, 3);
              const extraTagCount = project.stack.length - visibleTags.length;
              const hasLiveLink = project.links.live && project.links.live !== '#';

              return (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-[#151a2e] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative w-full aspect-video overflow-hidden bg-slate-100 dark:bg-slate-900">
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6">
                    <h3 className="text-xl font-bold text-slate-950 dark:text-white mb-3">
                      {project.title}
                    </h3>

                    <div className="space-y-2 mb-4">
                      <p className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <BiInfoCircle className="w-4 h-4 mt-0.5 shrink-0 text-slate-400 dark:text-slate-500" />
                        <span>
                          <span className="font-semibold text-slate-800 dark:text-slate-200">Problem: </span>
                          {project.problem}
                        </span>
                      </p>
                      <p className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <BiTrendingUp className="w-4 h-4 mt-0.5 shrink-0 text-slate-400 dark:text-slate-500" />
                        <span>
                          <span className="font-semibold text-slate-800 dark:text-slate-200">Impact: </span>
                          {project.impact}
                        </span>
                      </p>
                    </div>

                    {/* Tech tags */}
                    <div className="flex flex-wrap items-center gap-2 mb-6">
                      {visibleTags.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {extraTagCount > 0 && (
                        <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                          +{extraTagCount}
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="mt-auto flex items-center gap-3">
                      <a
                        href={hasLiveLink ? project.links.live : project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-blue-500 shadow-sm"
                      >
                        <BiLinkExternal className="w-4 h-4" />
                        Live Demo
                      </a>
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-300 dark:border-slate-700 px-4 py-2.5 text-sm font-bold text-slate-800 dark:text-slate-200 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
                      >
                        <BiGitBranch className="w-4 h-4" />
                        Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
