import React from 'react';

export function SectionHeading({ label, heading, description, className = '', align = 'left' }) {
  const isCenter = align === 'center';
  
  return (
    <div className={`mb-10 ${isCenter ? 'text-center' : 'text-left'} ${className}`}>
      {label && (
        <span className="text-xs font-bold tracking-widest text-accent-blue dark:text-accent-blue uppercase inline-block mb-3">
          — {label}
        </span>
      )}
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-905 dark:text-white tracking-tight leading-none font-display">
        {heading}
      </h2>
      {description && (
        <p className={`mt-4 text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl ${isCenter ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  );
}
