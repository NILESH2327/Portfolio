import React, { useState, useEffect } from 'react';
import { BiArrowToTop } from 'react-icons/bi';

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-slate-900 border border-slate-800 text-accent-yellow shadow-lg shadow-black/50 hover:border-accent-yellow hover:bg-slate-800 hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none"
          title="Scroll to Top"
        >
          <BiArrowToTop className="w-5 h-5" />
        </button>
      )}
    </>
  );
}
