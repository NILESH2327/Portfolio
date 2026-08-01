import React from 'react';
import { personalInfo } from '../../data/personalInfo';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Journey', href: '#journey' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="w-full bg-slate-50 border-t border-slate-200 dark:bg-navy-dark dark:border-navy/60 py-12 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-900">
          {/* Logo/Brand */}
          <div className="flex flex-col items-center md:items-start">
            <span className="text-xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight font-display">
              Nilesh <span className="text-accent-yellow">Kumar</span>
            </span>
            <span className="text-xs text-slate-500 mt-1 font-bold">Full-Stack Developer</span>
          </div>

          {/* Footer Nav */}
          <div className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-sm font-semibold text-slate-550 dark:text-slate-400 hover:text-accent-yellow dark:hover:text-accent-yellow transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 text-slate-600 hover:border-slate-350 hover:text-slate-900 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400 dark:hover:text-white flex items-center justify-center transition-all duration-300"
              title="GitHub"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 text-slate-600 hover:border-slate-350 hover:text-slate-900 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400 dark:hover:text-white flex items-center justify-center transition-all duration-300"
              title="LinkedIn"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.github === '#' ? '#' : `mailto:${personalInfo.email}`}
              className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 text-slate-600 hover:border-slate-350 hover:text-slate-900 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400 dark:hover:text-white flex items-center justify-center transition-all duration-300"
              title="Email"
            >
              <FaEnvelope className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.github === '#' ? '#' : `tel:${personalInfo.phone}`}
              className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 text-slate-600 hover:border-slate-350 hover:text-slate-900 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400 dark:hover:text-white flex items-center justify-center transition-all duration-300"
              title="Phone"
            >
              <FaPhoneAlt className="w-4 h-4" />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-xs text-slate-500 text-center font-semibold">
          <p>© {currentYear} Nilesh Kumar — A collection of projects, experiences, and continuous learning.</p>
          <p className="flex items-center gap-1">
            Built with React · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
