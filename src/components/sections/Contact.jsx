import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { personalInfo } from '../../data/personalInfo';
import { 
  Mail, 
  Phone, 
  Copy, 
  Check, 
  ExternalLink, 
  FileText, 
  Send, 
  MapPin, 
  Clock, 
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    const subjectText = encodeURIComponent(formData.subject || `Portfolio Contact from ${formData.name}`);
    const bodyText = encodeURIComponent(
      `Hello Nilesh,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );

    setSubmitted(true);
    setTimeout(() => {
      window.location.href = `mailto:${personalInfo.email}?subject=${subjectText}&body=${bodyText}`;
    }, 400);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  const setPresetSubject = (preset) => {
    setFormData((prev) => ({ ...prev, subject: preset }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
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

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-slate-50 bg-grid-pattern dark:bg-navy-dark transition-colors duration-300 scroll-mt-10">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-amber-400/5 dark:bg-amber-400/2 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/2 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants}>
            <SectionHeading 
              label="GET IN TOUCH"
              heading="Let's build something useful."
              description="Have an opportunity, a project to collaborate on, or want to discuss full-stack architecture & GenAI? I'm always open to connect."
              align="center"
            />
          </motion.div>

          {/* Main 2-Column Workable Contact Deck */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-12">
            
            {/* LEFT COLUMN: Direct Communication Channels & Actions (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-4">
              
              {/* Channel 1: Email Card */}
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-950 dark:border-slate-800 shadow-[4px_4px_0px_rgba(15,23,42,1)] dark:shadow-[4px_4px_0px_rgba(0,0,0,0.6)] hover:-translate-y-0.5 transition-all duration-200">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2.5">
                    <span className="w-9 h-9 rounded-xl bg-amber-400 border-2 border-slate-950 text-slate-950 flex items-center justify-center shadow-[1.5px_1.5px_0px_rgba(15,23,42,1)]">
                      <Mail className="w-4 h-4" />
                    </span>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Direct Email</span>
                      <h4 className="text-sm font-extrabold text-slate-950 dark:text-white break-all">{personalInfo.email}</h4>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-3 pt-3 border-t border-slate-200 dark:border-slate-800">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex-1 py-2 px-3 rounded-xl bg-slate-950 text-white dark:bg-white dark:text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-amber-400 hover:text-slate-950 dark:hover:bg-amber-400 dark:hover:text-slate-950 transition-colors shadow-[2px_2px_0px_rgba(15,23,42,1)]"
                  >
                    <Send className="w-3 h-3" />
                    Send Email
                  </a>
                  <button
                    onClick={() => handleCopy(personalInfo.email, 'email')}
                    className="py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs flex items-center gap-1 hover:border-slate-950 dark:hover:border-white transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Channel 2: Phone / WhatsApp Card */}
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-950 dark:border-slate-800 shadow-[4px_4px_0px_rgba(15,23,42,1)] dark:shadow-[4px_4px_0px_rgba(0,0,0,0.6)] hover:-translate-y-0.5 transition-all duration-200">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2.5">
                    <span className="w-9 h-9 rounded-xl bg-emerald-400 border-2 border-slate-950 text-slate-950 flex items-center justify-center shadow-[1.5px_1.5px_0px_rgba(15,23,42,1)]">
                      <Phone className="w-4 h-4" />
                    </span>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Phone & WhatsApp</span>
                      <h4 className="text-sm font-extrabold text-slate-950 dark:text-white">{personalInfo.phone}</h4>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-3 pt-3 border-t border-slate-200 dark:border-slate-800">
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="flex-1 py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs flex items-center justify-center gap-1.5 hover:border-slate-950 dark:hover:border-white transition-colors"
                  >
                    <Phone className="w-3 h-3" />
                    Call
                  </a>
                  <a
                    href={`https://wa.me/${personalInfo.phone.replace(/[^0-9]/g, '')}?text=Hi%20Nilesh,%20saw%20your%20portfolio!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-xl bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-emerald-600 transition-colors shadow-[2px_2px_0px_rgba(15,23,42,1)]"
                  >
                    <FaWhatsapp className="w-3.5 h-3.5" />
                    WhatsApp
                  </a>
                  <button
                    onClick={() => handleCopy(personalInfo.phone, 'phone')}
                    className="py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs flex items-center gap-1 hover:border-slate-950 dark:hover:border-white transition-colors"
                    title="Copy Phone"
                  >
                    {copiedPhone ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Channel 3: Location & Status Beacon */}
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-950 dark:border-slate-800 shadow-[4px_4px_0px_rgba(15,23,42,1)] dark:shadow-[4px_4px_0px_rgba(0,0,0,0.6)] flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300">
                  <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>{personalInfo.location}</span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-black bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Available to hire
                </span>
              </div>

              {/* Channel 4: Action Links (Resume, GitHub, LinkedIn) */}
              <div className="grid grid-cols-3 gap-3">
                <a
                  href={personalInfo.resumeFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-accent-yellow border-2 border-slate-950 text-slate-950 font-black text-xs flex flex-col items-center justify-center gap-1 shadow-[3px_3px_0px_rgba(15,23,42,1)] hover:-translate-y-0.5 transition-all"
                >
                  <FileText className="w-4 h-4" />
                  <span>Resume</span>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-950 dark:border-slate-800 text-slate-900 dark:text-white font-black text-xs flex flex-col items-center justify-center gap-1 shadow-[3px_3px_0px_rgba(15,23,42,1)] dark:shadow-[3px_3px_0px_rgba(0,0,0,0.6)] hover:-translate-y-0.5 transition-all"
                >
                  <FaGithub className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-950 dark:border-slate-800 text-slate-900 dark:text-white font-black text-xs flex flex-col items-center justify-center gap-1 shadow-[3px_3px_0px_rgba(15,23,42,1)] dark:shadow-[3px_3px_0px_rgba(0,0,0,0.6)] hover:-translate-y-0.5 transition-all"
                >
                  <FaLinkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN: Interactive Workable Direct Message Composer (7 Cols) */}
            <div className="lg:col-span-7">
              <Card className="p-6 sm:p-8 rounded-3xl border-2 border-slate-950 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-[6px_6px_0px_rgba(15,23,42,1)] dark:shadow-[6px_6px_0px_rgba(0,0,0,0.6)] text-left flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="p-2 rounded-xl bg-amber-400 border-2 border-slate-950 text-slate-950 shadow-[1px_1px_0px_rgba(15,23,42,1)]">
                        <MessageSquare className="w-4 h-4" />
                      </span>
                      <div>
                        <h3 className="text-lg sm:text-xl font-black text-slate-950 dark:text-white leading-tight">
                          Quick Message Composer
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                          Pre-fills a ready-to-send draft directly in your default email app
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Preset Subject Pills */}
                  <div className="mb-4">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block mb-2">
                      Quick Topics:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Full-Stack Role", 
                        "Internship Opportunity", 
                        "GenAI Project Collab", 
                        "Quick Query"
                      ].map((preset, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setPresetSubject(preset)}
                          className={`text-xs font-bold px-3 py-1 rounded-full border transition-all ${
                            formData.subject === preset 
                              ? 'bg-amber-400 text-slate-950 border-slate-950 shadow-[1px_1px_0px_rgba(15,23,42,1)]' 
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:border-slate-950'
                          }`}
                        >
                          {preset}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* The Form */}
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Rahul Sharma / Tech Recruiter"
                          className="w-full px-4 py-2.5 rounded-xl border-2 border-slate-950 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm font-semibold focus:outline-none focus:border-amber-400 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                          Your Email
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your.email@company.com"
                          className="w-full px-4 py-2.5 rounded-xl border-2 border-slate-950 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm font-semibold focus:outline-none focus:border-amber-400 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                        Subject / Focus
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. Exploring Internship Opportunity"
                        className="w-full px-4 py-2.5 rounded-xl border-2 border-slate-950 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm font-semibold focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Share a brief overview of your team, project, or what you'd like to build together..."
                        className="w-full px-4 py-2.5 rounded-xl border-2 border-slate-950 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm font-semibold focus:outline-none focus:border-amber-400 transition-colors resize-none"
                      />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <button
                        type="submit"
                        className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-400 hover:bg-yellow-400 border-2 border-slate-950 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-[3px_3px_0px_rgba(15,23,42,1)] hover:-translate-y-0.5 active:translate-y-0 transition-all"
                      >
                        <Send className="w-4 h-4" />
                        <span>Send Message Draft ↗</span>
                      </button>

                      {submitted && (
                        <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 animate-fadeIn">
                          <Check className="w-4 h-4" />
                          <span>Opening your email client...</span>
                        </div>
                      )}
                    </div>
                  </form>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-amber-500" />
                  <span>I usually review messages and respond within 12–24 hours.</span>
                </div>
              </Card>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
