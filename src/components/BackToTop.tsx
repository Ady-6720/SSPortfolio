import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full bg-black/80 border border-blue-400 text-blue-200 shadow-lg transition-all duration-200 hover:bg-blue-500 hover:text-white hover:scale-110 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      aria-label="Back to Top"
      style={{ backdropFilter: 'blur(6px)' }}
    >
      <ArrowUp size={22} />
    </button>
  );
};

export default BackToTop; 