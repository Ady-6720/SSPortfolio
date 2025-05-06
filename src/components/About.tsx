import React, { useEffect, useRef } from 'react';
import { MapPin, Briefcase, Code } from 'lucide-react';
import './About.css';
import SkillsBentoGrid from './SkillsBentoGrid';

interface InfoCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBg: string;
  borderColor: string;
}

const infoCards: InfoCard[] = [
  {
    icon: <MapPin size={14} className="w-3.5 h-3.5 md:w-5 md:h-5" />,
    title: 'Location',
    description: 'Boston, MA',
    iconBg: 'bg-blue-100/10 hover:bg-blue-100/20',
    borderColor: 'border-blue-500/10'
  },
  {
    icon: <Briefcase size={14} className="w-3.5 h-3.5 md:w-5 md:h-5" />,
    title: 'Experience',
    description: '1.5+ years as Software Engineer',
    iconBg: 'bg-green-100/10 hover:bg-green-100/20',
    borderColor: 'border-green-500/10'
  },
  {
    icon: <Code size={14} className="w-3.5 h-3.5 md:w-5 md:h-5" />,
    title: 'Specialization',
    description: 'Full-Stack Web Development',
    iconBg: 'bg-purple-100/10 hover:bg-purple-100/20',
    borderColor: 'border-purple-500/10'
  }
];

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === titleRef.current) {
              entry.target.classList.add('title-visible');
            } else if (entry.target === textRef.current) {
              entry.target.classList.add('text-visible');
            } else if (entry.target === cardsRef.current) {
              entry.target.classList.add('cards-visible');
            } else if (entry.target === skillsRef.current) {
              entry.target.classList.add('skills-visible');
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (textRef.current) observer.observe(textRef.current);
    if (cardsRef.current) observer.observe(cardsRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="about">
      <div className="about-content">
        <div className="about-grid">
          <div className="about-left">
            <h2 ref={titleRef} className="section-title text-2xl md:text-4xl font-bold text-white mb-6 md:mb-12">About Me</h2>
            <div ref={textRef} className="about-text">
              <p className="text-sm md:text-lg text-white/90 mb-4 leading-relaxed">
                I'm Sejal Satav, a full-stack developer and MIS student at Northeastern University, currently working as a Software Engineer Intern in Boston. I bring over 1.5 years of experience building scalable backend systems and accessible frontends.
              </p>
              <p className="text-sm md:text-lg text-white/90 leading-relaxed">
                I have strong knowledge of database systems, distributed systems, algorithms and data structures, and system design. My work spans enterprise automation, educational tools, and career data platforms blending logic with user-focused design.
              </p>
            </div>
          </div>

          <div ref={cardsRef} className="about-cards">
            {/* Mobile-optimized cards with grid layout */}
            <div className="md:hidden grid grid-cols-1 gap-1.5">
              {infoCards.map((card, index) => (
                <div 
                  key={card.title}
                  className={`info-card bg-black/20 backdrop-blur-sm border ${card.borderColor} rounded-lg p-2
                    transition-all duration-300`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-2">
                    <div className={`card-icon rounded-md p-1.5 ${card.iconBg} transition-all duration-300`}>
                      {card.icon}
                    </div>
                    <div className="card-content">
                      <h3 className="card-title text-xs font-semibold text-white">{card.title}</h3>
                      <p className="card-description text-[10px] text-neutral-300">{card.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Original cards for desktop */}
            <div className="hidden md:flex md:flex-col md:space-y-3">
              {infoCards.map((card, index) => (
                <div 
                  key={card.title}
                  className={`info-card bg-black/30 backdrop-blur-sm border ${card.borderColor} rounded-2xl p-3 md:p-4 
                    shadow-[inset_0_0_4px_rgba(255,255,255,0.05)] 
                    transition-all duration-300 hover:scale-[1.02]`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3">
                    <div className={`card-icon rounded-lg p-2 ${card.iconBg} transition-all duration-300 hover:shadow-[0_0_8px]`}>
                      {card.icon}
                    </div>
                    <div className="card-content">
                      <h3 className="card-title text-sm font-semibold text-white">{card.title}</h3>
                      <p className="card-description text-xs text-neutral-300">{card.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What I'm Good At Bento Grid - For all views */}
        <div ref={skillsRef} className="skills-grid mt-4 mb-2">
          <SkillsBentoGrid />
        </div>
      </div>
    </section>
  );
};

export default About; 