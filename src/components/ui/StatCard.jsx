import React from 'react';
import { Card } from './Card';

export function StatCard({ value, label, color = 'from-blue-500 to-indigo-500', className = '' }) {
  return (
    <Card hoverGlow className={`p-6 text-center border-2 border-slate-950 shadow-[3px_3px_0px_rgba(15,23,42,1)] bg-white dark:bg-slate-900 ${className}`}>
      <div className={`text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r ${color} bg-clip-text text-transparent mb-2 font-display`}>
        {value}
      </div>
      <div className="text-xs font-black text-slate-950 dark:text-slate-400 tracking-wider uppercase">
        {label}
      </div>
    </Card>
  );
}
