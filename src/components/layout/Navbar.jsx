import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { Button } from '../ui/Button';
import { Menu, X, Sun, Moon } from 'lucide-react';

export function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const sectionIds = ['about', 'journey', 'skills', 'projects', 'contact'];
  const activeId = useScrollSpy(sectionIds, 150);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    // { label: 'Journey', href: '#journey', id: 'journey' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav className="sticky top-0 z-55 w-full border-b border-slate-200 bg-white/80 dark:border-slate-900/60 dark:bg-slate-950/80 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Badge */}
          <div className="flex-shrink-0">
            <motion.a
              href="#hero"
              whileHover={{ rotate: -6, scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: 'spring', stiffness: 350, damping: 15 }}
              className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent-yellow border-2 border-slate-950 font-black text-slate-950 shadow-[2px_2px_0px_rgba(15,23,42,1)] hover:shadow-[3px_3px_0px_rgba(15,23,42,1)] transition-shadow duration-150"
            >
              NK
            </motion.a>
          </div>

          {/* Center Links (Desktop) */}
          <div className="hidden md:flex items-center gap-1 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/60 p-1">
            {navLinks.map((link) => {
              const isActive = activeId === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-semibold tracking-wide rounded-full transition-colors duration-300 ${
                    isActive
                      ? 'text-slate-950 dark:text-slate-950'
                      : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      className="absolute inset-0 rounded-full bg-accent-yellow border border-slate-950/10 -z-10"
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </a>
              );
            })}
          </div>

          {/* Right Action (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme Toggle Button */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.08, rotate: -8 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 350, damping: 15 }}
              className="relative overflow-hidden p-2.5 rounded-xl bg-slate-100 border border-slate-200 dark:bg-slate-900 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-accent-yellow dark:hover:border-accent-yellow hover:text-accent-yellow transition-colors duration-300 cursor-pointer"
              aria-label="Toggle Theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="flex"
                >
                  {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </motion.span>
              </AnimatePresence>
            </motion.button>

            <motion.div whileHover={{ y: -2 }} transition={{ type: 'spring', stiffness: 350, damping: 15 }}>
              <Button
                variant="outline"
                href="https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-4 text-xs font-bold hover:border-accent-yellow hover:text-accent-yellow"
              >
                View Resume
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu & Theme Button */}
          <div className="flex md:hidden items-center gap-2">
            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.9 }}
              className="relative overflow-hidden p-2.5 rounded-xl bg-slate-100 border border-slate-200 dark:bg-slate-900 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-accent-yellow transition-colors duration-300"
              aria-label="Toggle Theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="flex"
                >
                  {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </motion.span>
              </AnimatePresence>
            </motion.button>

            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
              className="inline-flex items-center justify-center rounded-xl p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-900 dark:text-slate-400 dark:hover:text-slate-100 focus:outline-none"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isOpen ? 'close' : 'open'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex"
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-white/95 dark:bg-slate-950/95 border-b border-slate-200 dark:border-slate-900 backdrop-blur-lg"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link, idx) => {
                const isActive = activeId === link.id;
                return (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05, duration: 0.25 }}
                    className={`block px-4 py-2.5 rounded-xl text-base font-semibold transition-colors duration-300 ${
                      isActive
                        ? 'bg-accent-yellow/90 border border-slate-950/10 text-slate-950'
                        : 'text-slate-650 hover:bg-slate-50 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-slate-900/50 dark:hover:text-slate-100'
                    }`}
                  >
                    {link.label}
                  </motion.a>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.25 }}
                className="pt-4 border-t border-slate-200 dark:border-slate-900"
              >
                <Button
                  variant="outline"
                  href="https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 text-sm font-bold hover:border-accent-yellow hover:text-accent-yellow"
                >
                  View Resume
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
