import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { personalInfo } from '../../data/personalInfo';
import { FaEnvelope, FaPhoneAlt, FaFilePdf, FaGithub, FaLinkedin } from 'react-icons/fa';

export function Contact() {
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
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-slate-50 bg-grid-pattern dark:bg-navy-dark transition-colors duration-300 scroll-mt-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/2 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants}>
            <SectionHeading 
              label="GET IN TOUCH"
              heading="Let's build something useful."
              description="If you'd like to discuss opportunities, projects, or collaborations, feel free to reach out."
              align="center"
            />
          </motion.div>

          {/* CTA Card (Large Blue accent card) */}
          <motion.div variants={itemVariants} className="mt-12">
            <Card className="p-8 md:p-12 border-2 border-slate-950 bg-gradient-to-br from-blue-600 to-indigo-950 text-white shadow-[6px_6px_0px_rgba(15,23,42,1)] text-center relative overflow-hidden">
              {/* Background glow decoration */}
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-white/5 rounded-full blur-2xl pointer-events-none" />
              
              <p className="text-lg md:text-2xl font-black max-w-3xl mx-auto leading-relaxed mb-8 relative z-10 font-display">
                "B.Tech IT student building full-stack applications with a strong focus on generative AI integration, REST APIs, and real-world problem solving."
              </p>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap justify-center gap-4 relative z-10">
                <Button 
                  href={personalInfo.github === '#' ? '#' : `mailto:${personalInfo.email}`} 
                  variant="accent" 
                  className="bg-accent-yellow border-2 border-slate-950 hover:bg-yellow-500 text-slate-950 px-6 py-3 font-black flex items-center gap-2 shadow-[3px_3px_0px_rgba(15,23,42,1)]"
                >
                  <FaEnvelope className="w-4 h-4" />
                  Send an email
                </Button>
                <Button 
                  href={personalInfo.github === '#' ? '#' : `tel:${personalInfo.phone}`} 
                  variant="outline" 
                  className="bg-white border-2 border-slate-950 text-slate-950 px-6 py-3 font-black flex items-center gap-2 shadow-[3px_3px_0px_rgba(15,23,42,1)]"
                >
                  <FaPhoneAlt className="w-3.5 h-3.5" />
                  Call me
                </Button>
                <Button 
                  href={personalInfo.resumeFile} 
                  variant="outline" 
                  className="bg-white border-2 border-slate-950 text-slate-950 px-6 py-3 font-black flex items-center gap-2 shadow-[3px_3px_0px_rgba(15,23,42,1)]"
                >
                  <FaFilePdf className="w-3.5 h-3.5" />
                  View Resume
                </Button>
              </div>

              {/* Contact Information & Socials */}
              <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10 text-slate-200">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm">
                  <div className="flex items-center gap-2 font-bold">
                    <FaEnvelope className="text-accent-yellow" />
                    <span>{personalInfo.email}</span>
                  </div>
                  <div className="flex items-center gap-2 font-bold">
                    <FaPhoneAlt className="text-accent-yellow" />
                    <span>{personalInfo.phone}</span>
                  </div>
                </div>

                {/* Social icons */}
                <div className="flex items-center gap-4">
                  <a 
                    href={personalInfo.github} 
                    className="w-10 h-10 rounded-xl bg-white border-2 border-slate-950 text-slate-950 flex items-center justify-center hover:-translate-x-0.5 hover:-translate-y-0.5 shadow-[2px_2px_0px_rgba(15,23,42,1)] transition-all duration-150"
                    title="GitHub"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a 
                    href={personalInfo.linkedin} 
                    className="w-10 h-10 rounded-xl bg-white border-2 border-slate-950 text-slate-950 flex items-center justify-center hover:-translate-x-0.5 hover:-translate-y-0.5 shadow-[2px_2px_0px_rgba(15,23,42,1)] transition-all duration-150"
                    title="LinkedIn"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
