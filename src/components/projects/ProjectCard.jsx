// import React from 'react';
// import { Card } from '../ui/Card';
// import { Badge } from '../ui/Badge';
// import { Button } from '../ui/Button';
// import { ProjectChecklistItem } from './ProjectChecklistItem';
// import { BiGitBranch, BiLinkExternal } from 'react-icons/bi';

// export function ProjectCard({ project }) {
//   const isFullWidth = project.id === 'krishi-sakhi';
  
//   return (
//     <Card 
//       hoverGlow 
//       className={`p-6 md:p-8 flex flex-col justify-between border-2 border-slate-950 bg-white dark:bg-slate-900 shadow-[4px_4px_0px_rgba(15,23,42,1)]
//         ${isFullWidth ? 'col-span-1 md:col-span-2' : 'col-span-1'}
//       `}
//     >
//       <div>
//         <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
//           <div className="flex items-center gap-2">
//             {project.tag && (
//               <Badge 
//                 variant={project.tag === 'NATIONAL WINNER' ? 'accent' : 'blue'}
//               >
//                 {project.tag}
//               </Badge>
//             )}
//             <span className="text-xs font-black text-slate-500 dark:text-slate-400">{project.date}</span>
//           </div>
//         </div>
        
//         <h3 className="text-2xl font-black text-slate-950 dark:text-white tracking-tight mb-1 font-display">
//           {project.title}
//         </h3>
//         <p className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-5 uppercase tracking-wider">
//           {project.subtitle}
//         </p>

//         {/* Browser Mockup Box */}
//         <div className="w-full h-40 rounded-xl border-2 border-slate-950 bg-slate-100 dark:bg-slate-950 overflow-hidden mb-6 flex flex-col shadow-[2px_2px_0px_rgba(15,23,42,1)]">
//           {/* Mockup Header */}
//           <div className="h-8 border-b-2 border-slate-950 bg-white dark:bg-slate-900 flex items-center justify-between px-3">
//             <div className="flex items-center gap-1">
//               <div className="w-2.5 h-2.5 rounded-full bg-red-400 border border-slate-950" />
//               <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 border border-slate-950" />
//               <div className="w-2.5 h-2.5 rounded-full bg-green-400 border border-slate-950" />
//             </div>
//             <span className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 lowercase">{project.id}.local</span>
//             <div className="w-8" />
//           </div>
          
//           {/* Mockup Body Content */}
//           <div className="flex-grow bg-slate-50 dark:bg-slate-900 overflow-hidden">
//           {project.image ? (
//             <img
//               src={project.image}
//               alt={`${project.title} preview`}
//               loading="lazy"
//               className="w-full h-full object-cover object-top"
//             />
//           ) : (
//           <div className="w-full h-full p-3 flex items-center justify-center overflow-hidden">
//             {project.id === 'medixthon' && (
//               <div className="w-full flex gap-3 h-full">
//                 {/* Sidebar */}
//                 <div className="w-1/4 h-full border border-slate-950 bg-blue-100 dark:bg-blue-950/60 rounded-lg p-1 flex flex-col gap-1">
//                   <div className="h-3 w-full bg-blue-300 dark:bg-blue-900 rounded border border-slate-950" />
//                   <div className="h-1.5 w-4/5 bg-slate-200 dark:bg-slate-800 rounded" />
//                   <div className="h-1.5 w-3/5 bg-slate-200 dark:bg-slate-800 rounded" />
//                 </div>
//                 {/* Dashboard Content */}
//                 <div className="w-3/4 h-full border border-slate-950 bg-white dark:bg-slate-800 rounded-lg p-2 flex flex-col justify-between">
//                   <div className="flex justify-between items-center">
//                     <div className="w-10 h-3 bg-accent-yellow border border-slate-950 rounded" />
//                     <div className="w-3 h-3 rounded-full bg-blue-300 border border-slate-950" />
//                   </div>
//                   {/* Visual Chart */}
//                   <div className="h-12 w-full border border-slate-950 bg-slate-50 dark:bg-slate-900 rounded flex items-end p-1 gap-1">
//                     <div className="w-full h-2/5 bg-accent-blue border border-slate-950" />
//                     <div className="w-full h-4/5 bg-accent-yellow border border-slate-950" />
//                     <div className="w-full h-3/5 bg-accent-purple border border-slate-950" />
//                     <div className="w-full h-full bg-accent-teal border border-slate-950" />
//                   </div>
//                 </div>
//               </div>
//             )}
//             {project.id === 'ai-saas-chatbot' && (
//               <div className="w-full h-full border border-slate-950 bg-white dark:bg-slate-800 rounded-lg p-2 flex flex-col justify-between relative">
//                 {/* Header */}
//                 <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-1">
//                   <div className="flex items-center gap-1">
//                     <div className="w-2 h-2 rounded-full bg-accent-teal border border-slate-950" />
//                     <div className="h-1.5 w-12 bg-slate-200 dark:bg-slate-700 rounded" />
//                   </div>
//                   <div className="w-2 h-2 rounded bg-slate-200 dark:bg-slate-700" />
//                 </div>
//                 {/* Chat Widget */}
//                 <div className="absolute bottom-1 right-1 w-24 border border-slate-950 bg-sky-100 dark:bg-sky-950 rounded-lg p-1.5 shadow-[1px_1px_0px_rgba(15,23,42,1)] flex flex-col gap-1">
//                   <div className="h-1.5 w-4/5 bg-white dark:bg-slate-800 border border-slate-950 rounded" />
//                   <div className="h-2 w-3/5 bg-accent-blue border border-slate-950 rounded self-end" />
//                 </div>
//               </div>
//             )}
//             {project.id === 'krishi-sakhi' && (
//               <div className="w-full h-full border border-slate-950 bg-white dark:bg-slate-800 rounded-lg p-2 flex justify-between gap-3">
//                 <div className="w-1/2 flex flex-col justify-between">
//                   <div className="h-4 w-full bg-accent-yellow border border-slate-950 rounded flex items-center justify-center font-bold text-[9px] text-slate-950">
//                     SIH WINNER ⚡
//                   </div>
//                   <div className="flex items-center gap-1.5">
//                     <div className="w-6 h-6 rounded-full bg-emerald-100 border border-slate-950 flex items-center justify-center text-xs">🌾</div>
//                     <div className="flex flex-col gap-0.5">
//                       <div className="h-2 w-10 bg-slate-200 dark:bg-slate-700 rounded" />
//                       <div className="h-1.5 w-8 bg-slate-200 dark:bg-slate-700 rounded" />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="w-1/2 h-full border border-slate-950 bg-slate-50 dark:bg-slate-900 rounded p-1.5 flex flex-col justify-between">
//                   <div className="text-[8px] font-black text-accent-blue leading-none">Voice Synthesis</div>
//                   <div className="h-4 w-full bg-white dark:bg-slate-850 border border-slate-950 rounded flex items-center justify-around px-0.5">
//                     <div className="w-0.5 h-2 bg-accent-blue rounded-full" />
//                     <div className="w-0.5 h-3 bg-accent-blue rounded-full" />
//                     <div className="w-0.5 h-1 bg-accent-blue rounded-full" />
//                     <div className="w-0.5 h-2.5 bg-accent-blue rounded-full" />
//                   </div>
//                 </div>
//               </div>
//             )}
//             {project.id === 'talkie' && (
//               <div className="w-full h-full border border-slate-950 bg-white dark:bg-slate-800 rounded-lg flex overflow-hidden">
//                 {/* Contact list sidebar */}
//                 <div className="w-1/3 h-full border-r border-slate-950 bg-slate-50 dark:bg-slate-900 p-1.5 flex flex-col gap-1.5">
//                   <div className="h-2 w-4/5 bg-slate-200 dark:bg-slate-700 rounded mb-0.5" />
//                   {[0, 1, 2].map((i) => (
//                     <div key={i} className="flex items-center gap-1">
//                       <div className="relative w-4 h-4 rounded-full bg-blue-200 dark:bg-blue-900 border border-slate-950 shrink-0">
//                         {i !== 2 && (
//                           <span className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-green-400 border border-slate-950" />
//                         )}
//                       </div>
//                       <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-700 rounded" />
//                     </div>
//                   ))}
//                 </div>
//                 {/* Chat thread */}
//                 <div className="w-2/3 h-full p-1.5 flex flex-col justify-end gap-1">
//                   <div className="self-start max-w-[75%] h-3 bg-slate-200 dark:bg-slate-700 border border-slate-950 rounded-lg rounded-bl-none" />
//                   <div className="self-end max-w-[75%] w-2/3 h-3 bg-accent-blue border border-slate-950 rounded-lg rounded-br-none" />
//                   <div className="self-start max-w-[60%] w-1/2 h-3 bg-slate-200 dark:bg-slate-700 border border-slate-950 rounded-lg rounded-bl-none" />
//                   <div className="flex items-center gap-1 mt-0.5 border-t border-slate-200 dark:border-slate-700 pt-1">
//                     <div className="h-2.5 flex-grow bg-slate-50 dark:bg-slate-900 border border-slate-950 rounded-full" />
//                     <div className="w-3 h-3 rounded-full bg-accent-blue border border-slate-950 shrink-0" />
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//           )}
//           </div>
//         </div>
        
//         <p className="text-sm text-slate-650 dark:text-slate-300 leading-relaxed mb-6 font-semibold">
//           {project.description}
//         </p>
        
//         {/* Checklist */}
//         <ul className="space-y-3 mb-6">
//           {project.checklist.map((item, idx) => (
//             <ProjectChecklistItem key={idx}>
//               {item}
//             </ProjectChecklistItem>
//           ))}
//         </ul>
//       </div>
      
//       <div>
//         {/* Tech Stack */}
//         <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-slate-200 dark:border-slate-800">
//           {project.stack.map((tech, idx) => (
//             <Badge key={idx} variant="outline" className="border-slate-950 bg-white dark:bg-slate-950 text-slate-950 dark:text-slate-100 font-bold text-[11px] py-0.5 shadow-[1px_1px_0px_rgba(15,23,42,1)]">
//               {tech}
//             </Badge>
//           ))}
//         </div>
        
//         {/* Action Links */}
//         <div className="flex items-center gap-3">
//           <Button 
//             variant="secondary" 
//             href={project.links.github} 
//             className="py-2.5 px-4 text-xs flex items-center gap-2"
//           >
//             <BiGitBranch className="w-4 h-4" />
//             Code
//           </Button>
          
//           {/* Only show Live Demo for projects that support it */}
//           {project.id !== 'medixthon' && project.links.live !== '#' && (
//             <Button 
//               variant="accent" 
//               href={project.links.live} 
//               className="py-2.5 px-4 text-xs flex items-center gap-2 shadow-[3px_3px_0px_rgba(15,23,42,1)]"
//             >
//               <BiLinkExternal className="w-4 h-4" />
//               Live Demo
//             </Button>
//           )}
//         </div>
//       </div>
//     </Card>
//   );
// }
