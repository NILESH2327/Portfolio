import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { skills } from "../../data/skills";

export function Skills() {
  const [activeSkill, setActiveSkill] = useState("");

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: "easeOut",
      },
    },
  };

  // Color is now only used as an ACCENT (icon gradient + top bar + hover),
  // never as a full-card background tint — that's what was causing the
  // washed-out / near-invisible look in dark mode.
  const themes = {
    "01": { gradient: "from-amber-400 to-orange-500", hover: "hover:bg-amber-500 hover:border-amber-500" },
    "02": { gradient: "from-sky-400 to-blue-500", hover: "hover:bg-sky-500 hover:border-sky-500" },
    "03": { gradient: "from-emerald-400 to-green-500", hover: "hover:bg-emerald-500 hover:border-emerald-500" },
    "04": { gradient: "from-purple-500 to-fuchsia-500", hover: "hover:bg-purple-500 hover:border-purple-500" },
    "05": { gradient: "from-violet-500 to-indigo-500", hover: "hover:bg-violet-500 hover:border-violet-500" },
    "06": { gradient: "from-orange-400 to-red-500", hover: "hover:bg-orange-500 hover:border-orange-500" },
    "07": { gradient: "from-cyan-500 to-blue-500", hover: "hover:bg-cyan-500 hover:border-cyan-500" },
    "08": { gradient: "from-rose-500 to-pink-500", hover: "hover:bg-rose-500 hover:border-rose-500" },
    "09": { gradient: "from-teal-500 to-cyan-500", hover: "hover:bg-teal-500 hover:border-teal-500" },
  };

  return (
    <section
      id="skills"
      className="py-7 md:py-15 border-b-2 border-slate-950 dark:border-slate-800 bg-grid-pattern bg-white dark:bg-navy/30 scroll-mt-10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <SectionHeading
              label="TECHNICAL SKILLS"
              heading="Skills."
              description="Technologies, frameworks and tools that I use to build scalable and modern web applications."
            />
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-12"
          >
            {skills.map((skill) => {
              const Icon = skill.icon;
              const theme = themes[skill.id];

              return (
                <motion.div
                  key={skill.id}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 250 }}
                >
                  <Card
                    className="relative min-h-[240px] overflow-hidden rounded-2xl border-2 border-slate-900 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-[5px_5px_0px_#0f172a] dark:shadow-[5px_5px_0px_rgba(0,0,0,0.5)] transition-all duration-300"
                  >
                    {/* Top accent bar — this is where color now lives, not the whole card */}
                    <div className={`absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r ${theme.gradient}`} />

                    {/* Number */}
                    <div className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-950 text-xs font-black text-slate-900 dark:text-slate-100 shadow-[2px_2px_0px_#0f172a] dark:shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">
                      {skill.id}
                    </div>

                    {/* Category Icon */}
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.08 }}
                      className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl border-2 border-slate-900 dark:border-slate-800 bg-gradient-to-br ${theme.gradient} text-white shadow-[3px_3px_0px_#0f172a] dark:shadow-[3px_3px_0px_rgba(0,0,0,0.5)]`}
                    >
                      <Icon size={22} />
                    </motion.div>

                    {/* Title */}
                    <h3 className="mb-4 text-xl font-black text-slate-900 dark:text-white">
                      {skill.category}
                    </h3>

                    {/* Skill Pills */}
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => {
                        const SkillIcon = item.icon;
                        const selected = activeSkill === item.name;

                        return (
                          <motion.button
                            key={item.name}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveSkill(item.name)}
                            className={`
                              flex items-center gap-2
                              rounded-full
                              border-2 border-slate-900 dark:border-slate-700
                              px-3 py-1.5
                              text-[11px] font-bold
                              shadow-[2px_2px_0px_#0f172a] dark:shadow-[2px_2px_0px_rgba(0,0,0,0.5)]
                              transition-all duration-300
                              ${
                                selected
                                  ? `bg-gradient-to-r ${theme.gradient} text-white border-transparent`
                                  : `bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 ${theme.hover} hover:text-white`
                              }
                            `}
                          >
                            <SkillIcon className="text-base flex-shrink-0" />
                            <span>{item.name}</span>
                          </motion.button>
                        );
                      })}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
