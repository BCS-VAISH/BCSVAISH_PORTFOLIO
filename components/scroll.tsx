'use client';

import { useEffect, useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

export default function ScrollButtons() {
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollUp(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollToBottom = () => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });

  return (
    <div className="fixed right-5 bottom-5 z-50 flex flex-col space-y-3">
      <button
        onClick={scrollToBottom}
        className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg transition duration-300"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-5 h-5" />
      </button>

      {showScrollUp && (
        <button
          onClick={scrollToTop}
          className="p-2 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg transition duration-300"
          aria-label="Scroll up"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
