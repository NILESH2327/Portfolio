import React from 'react';
import { BiCheck } from 'react-icons/bi';

export function ProjectChecklistItem({ children }) {
  return (
    <li className="flex items-start gap-3 text-sm text-slate-800 dark:text-slate-300 font-semibold">
      <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-accent-teal border border-slate-950 text-white flex items-center justify-center shadow-[1px_1px_0px_rgba(0,0,0,1)]">
        <BiCheck className="w-3.5 h-3.5 stroke-[2px]" />
      </span>
      <span className="leading-tight">{children}</span>
    </li>
  );
}
