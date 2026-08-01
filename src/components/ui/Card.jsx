import React from 'react';

export function Card({ children, className = '', hoverGlow = false, dark = false }) {
  return (
    <div className={`
      rounded-2xl border-2 border-slate-950 transition-all duration-300
      ${dark 
        ? 'bg-slate-950 text-slate-100 border-slate-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' 
        : 'bg-white text-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] dark:bg-slate-900 dark:border-slate-800 dark:text-slate-100 dark:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
      }
      ${hoverGlow 
        ? 'hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]' 
        : ''
      }
      ${className}
    `}>
      {children}
    </div>
  );
}

