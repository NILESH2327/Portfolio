import React from 'react';

export function Button({ 
  children, 
  className = '', 
  variant = 'primary', 
  href, 
  onClick, 
  type = 'button',
  target,
  rel,
  ...props 
}) {
  const baseStyle = "inline-flex items-center justify-center font-bold rounded-xl border-2 border-slate-950 transition-all duration-150 focus:outline-none disabled:opacity-50 disabled:pointer-events-none hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5";
  
  const variants = {
    primary: "bg-accent-blue text-white shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] hover:shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] active:shadow-[1px_1px_0px_0px_rgba(15,23,42,1)] px-6 py-3 text-sm",
    secondary: "bg-slate-150 text-slate-950 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] hover:shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] active:shadow-[1px_1px_0px_0px_rgba(15,23,42,1)] dark:bg-slate-800 dark:text-white px-6 py-3 text-sm",
    accent: "bg-accent-yellow text-slate-950 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] hover:shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] active:shadow-[1px_1px_0px_0px_rgba(15,23,42,1)] px-6 py-3 text-sm",
    outline: "bg-white text-slate-900 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] hover:shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] active:shadow-[1px_1px_0px_0px_rgba(15,23,42,1)] px-6 py-3 text-sm dark:bg-slate-900 dark:text-slate-100",
    text: "border-transparent text-slate-500 hover:text-slate-850 dark:text-slate-400 dark:hover:text-slate-100 hover:translate-x-0 hover:translate-y-0 active:translate-x-0 active:translate-y-0 px-3 py-2 text-sm"
  };

  const classNameString = `${baseStyle} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        onClick={onClick} 
        className={classNameString}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={classNameString}
      {...props}
    >
      {children}
    </button>
  );
}
