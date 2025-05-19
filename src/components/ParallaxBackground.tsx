import React, { useEffect, useRef } from 'react';

const ParallaxBackground: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    let rafId: number;
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let scrollY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = grid.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    const animate = () => {
      // Smooth interpolation for grid movement
      currentX += (mouseX - currentX) * 0.05;
      currentY += (mouseY - currentY) * 0.05;

      // Move the grid background based on cursor position and scroll
      // Reduced movement speed and removed rotation
      grid.style.transform = `translate3d(${currentX * 0.02}px, ${scrollY * 0.02}px, 0)`;
      grid.style.backgroundPosition = `
        ${currentX * 0.02}px 
        ${currentY * 0.02 + scrollY * 0.05}px
      `;

      rafId = requestAnimationFrame(animate);
    };

    // Only add mouse tracking on desktop
    if (window.matchMedia('(min-width: 768px)').matches) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('scroll', handleScroll);
      animate();
    }

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none">
      <div
        ref={gridRef}
        className="absolute inset-0 w-[200vw] h-[200vh] top-[-50vh] left-[-50vw] origin-center transition-transform duration-1000 ease-out will-change-transform"
        style={{
          backgroundColor: '#000000',
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, 0.03) 25%, rgba(255, 255, 255, 0.03) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.03) 75%, rgba(255, 255, 255, 0.03) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, 0.03) 25%, rgba(255, 255, 255, 0.03) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.03) 75%, rgba(255, 255, 255, 0.03) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '50px 50px',
          willChange: 'transform, background-position',
          maskImage: 'radial-gradient(circle at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'radial-gradient(circle at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0) 100%)',
        }}
      />
    </div>
  );
};

export default ParallaxBackground; 