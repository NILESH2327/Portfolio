/**
 * Utility to merge tailwind class names
 * @param  {...string} classes 
 * @returns {string}
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
