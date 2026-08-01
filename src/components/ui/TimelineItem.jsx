import React from 'react';
import { Card } from './Card';
import { Badge } from './Badge';

export function TimelineItem({ item, index }) {
  const Icon = item.icon;
  const isLeft = index % 2 === 0;

  return (
    <div className={`relative flex flex-col md:flex-row items-stretch w-full mb-12 last:mb-0`}>
      {/* Icon Node in the Center for desktop, Left for mobile */}
      <div className="absolute top-2 md:top-6 left-6 md:left-1/2 md:-translate-x-1/2 z-10 flex items-center justify-center">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-slate-950 text-slate-950 shadow-[2px_2px_0px_rgba(15,23,42,1)] dark:bg-slate-900 dark:text-accent-yellow transition-all duration-300 hover:scale-115">
          {Icon && <Icon className="w-5 h-5" />}
        </div>
      </div>

      {/* Left side card block */}
      <div className={`w-full md:w-1/2 flex ${isLeft ? 'justify-start md:justify-end md:pr-12' : 'justify-start md:pl-12 md:order-last'} pl-16 md:pl-0`}>
        <Card hoverGlow className="p-6 w-full max-w-lg border-2 border-slate-950 bg-white dark:bg-slate-900">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-black text-accent-blue uppercase tracking-wider">{item.date}</span>
            <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border border-slate-950 capitalize shadow-[1px_1px_0px_rgba(15,23,42,1)]
              ${item.type === 'education' ? 'bg-accent-blue text-white' : ''}
              ${item.type === 'project' ? 'bg-accent-yellow text-slate-950' : ''}
              ${item.type === 'achievement' ? 'bg-accent-purple text-white' : ''}
              ${item.type !== 'education' && item.type !== 'project' && item.type !== 'achievement' ? 'bg-white text-slate-900' : ''}
            `}>
              {item.type}
            </span>
          </div>
          <h3 className="text-lg md:text-xl font-black text-slate-950 dark:text-slate-100 mb-1 font-display">
            {item.title}
          </h3>
          <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-wider">
            {item.subtitle}
          </h4>
          <p className="text-sm text-slate-650 dark:text-slate-300 leading-relaxed mb-4 font-semibold">
            {item.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {item.tags.map((tag, idx) => (
              <Badge key={idx} variant="outline" className="border-slate-950 bg-white dark:bg-slate-950 text-slate-950 dark:text-slate-100 font-bold text-[11px] py-0.5 shadow-[1px_1px_0px_rgba(15,23,42,1)]">
                {tag}
              </Badge>
            ))}
          </div>
        </Card>
      </div>

      {/* Spacer for the opposite side */}
      <div className="hidden md:block w-1/2" />
    </div>
  );
}
