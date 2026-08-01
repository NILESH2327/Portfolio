import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { ScrollToTopButton } from './components/layout/ScrollToTopButton';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Journey } from './components/sections/Journey';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Achievements } from './components/sections/Achievements';
import { Stats } from './components/sections/Stats';
import { WhySection } from './components/sections/WhySection';
import { Contact } from './components/sections/Contact';

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  );

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-navy-dark dark:text-slate-100 flex flex-col selection:bg-accent-yellow selection:text-slate-950 transition-colors duration-300">
      {/* Navigation */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Journey Section */}
        {/* <Journey /> */}

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Achievements Section */}
        <Achievements />

        {/* Stats Section */}
        <Stats />

        {/* Why Nilesh Section */}
        <WhySection />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Scroll-to-Top Button */}
      <ScrollToTopButton />
    </div>
  );
}

export default App;
