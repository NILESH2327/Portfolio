import React from 'react';

export function Badge({ children, className = '', variant = 'primary' }) {
  const baseStyle = "inline-flex items-center px-3.5 py-1 text-xs font-bold rounded-full tracking-wide uppercase border border-slate-950 transition-all duration-300";
  
  const variants = {
    primary: "bg-white text-slate-800 shadow-[1px_1px_0px_rgba(15,23,42,1)] dark:bg-slate-800 dark:text-slate-100",
    accent: "bg-accent-yellow text-slate-950 shadow-[1.5px_1.5px_0px_rgba(15,23,42,1)]",
    blue: "bg-accent-blue text-white shadow-[1.5px_1.5px_0px_rgba(15,23,42,1)]",
    outline: "bg-transparent text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900",
    dark: "bg-slate-950 text-slate-300 dark:border-slate-800"
  };

  return (
    <span className={`${baseStyle} ${variants[variant] || variants.primary} ${className}`}>
      {children}
    </span>
  );
}
