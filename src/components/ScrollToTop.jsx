import React, { useEffect, useState } from 'react';
import { ArrowUp } from '@phosphor-icons/react';

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 h-12 w-12 bg-navy-800 text-ivory-50 flex items-center justify-center shadow-portal hover:bg-sun-500 transition-colors duration-300"
      style={{ borderRadius: '2px' }}
    >
      <ArrowUp size={20} weight="bold" />
    </button>
  );
}
