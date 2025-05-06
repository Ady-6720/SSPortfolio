import React, { useEffect, useRef } from 'react';
import './ParallaxBackground.css';

const ParallaxBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const scrollPosition = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = {
        x: e.clientX,
        y: e.clientY
      };
    };

    const handleScroll = () => {
      scrollPosition.current = window.scrollY;
    };

    const animate = () => {
      if (dotsRef.current) {
        const { x, y } = mousePosition.current;
        const scroll = scrollPosition.current;
        
        // Calculate movement based on mouse position and scroll
        const moveX = (x - window.innerWidth / 2) * 0.01;
        const moveY = (y - window.innerHeight / 2) * 0.01 + scroll * 0.1;
        
        dotsRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
      
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    const animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div ref={containerRef} className="parallax-container">
      <div ref={dotsRef} className="parallax-dots">
        <div className="dots-bg" />
      </div>
    </div>
  );
};

export default ParallaxBackground; 