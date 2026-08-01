import { useState, useEffect } from 'react';

export function useScrollSpy(ids, offset = 120) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      let currentActiveId = '';

      for (const id of ids) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentActiveId = id;
          }
        }
      }

      // If at the very top of the page
      if (window.scrollY < 50 && ids.length > 0) {
        currentActiveId = ids[0];
      }

      // If at the very bottom of the page
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50 && ids.length > 0) {
        currentActiveId = ids[ids.length - 1];
      }

      if (currentActiveId && currentActiveId !== activeId) {
        setActiveId(currentActiveId);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [ids, offset, activeId]);

  return activeId;
}
