import { useState, useEffect, useRef } from 'react';

export function useInView(options = { threshold: 0.1, triggerOnce: true }) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (options.triggerOnce) {
          observer.unobserve(currentRef);
        }
      } else if (!options.triggerOnce) {
        setIsInView(false);
      }
    }, options);

    observer.observe(currentRef);

    return () => {
      if (currentRef && !options.triggerOnce) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return [ref, isInView];
}
