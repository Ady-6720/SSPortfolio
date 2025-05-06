import { MapPin } from 'lucide-react';
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Education.css';

interface Course {
  name: string;
  color: string;
}

interface EducationItem {
  university: string;
  degree: string;
  location: string;
  period: string;
  gpa: string;
  courses: Course[];
  isPresent?: boolean;
}

const educationItems: EducationItem[] = [
  {
    university: "Northeastern University",
    degree: "Masters of Science in Information Systems",
    location: "Boston, USA",
    period: "Expected Dec 2025",
    gpa: "Grade: 3.62 / 4",
    isPresent: true,
    courses: [
      { name: "Data Structures & Algorithms", color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" },
      { name: "Web Design and Development", color: "bg-pink-500/20 text-pink-400 border-pink-500/30" },
      { name: "Object-Oriented Programming", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
      { name: "Web Development", color: "bg-rose-500/20 text-rose-400 border-rose-500/30" },
      { name: "Database Management", color: "bg-purple-500/20 text-purple-400 border-purple-500/30" }
    ]
  },
  {
    university: "Savitribai Phule Pune University",
    degree: "Bachelors of Engineering in Mechanical Engineering",
    location: "Pune, India",
    period: "Aug 2018 - May 2022",
    gpa: "Grade: 8.43 / 10",
    courses: [
      { name: "Computer Science", color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30" },
      { name: "Algorithm Building", color: "bg-amber-500/20 text-amber-400 border-amber-500/30" },
      { name: "Microcontroller Programming", color: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
      { name: "Design & Development", color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" }
    ]
  }
];

const Education: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === titleRef.current) {
              entry.target.classList.add('title-visible');
            } else if (entry.target === quoteRef.current) {
              entry.target.classList.add('quote-visible');
            } else {
              entry.target.classList.add('card-visible');
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
    if (quoteRef.current) observer.observe(quoteRef.current);
    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="education" className="education-section py-16 md:py-20 px-4 md:px-6 min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto w-full">
        <h2 
          ref={titleRef} 
          className="section-title text-xl md:text-2xl font-semibold text-white mb-6 md:mb-8 text-center"
        >
          Education
        </h2>
        
        <div className="grid grid-cols-1 gap-4 md:gap-5">
          {educationItems.map((item, index) => (
            <div 
              key={index}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="education-card rounded-xl overflow-hidden"
            >
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg text-cyan-400">
                    {item.university}
                  </h3>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-white/80">{item.period}</span>
                    {item.isPresent && (
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                      </span>
                    )}
                  </div>
                </div>
                
                <p className="text-white font-medium mb-1">{item.degree}</p>
                
                <div className="flex items-center gap-1 text-white/70 text-sm mb-3">
                  <MapPin size={14} />
                  <span>{item.location}</span>
                </div>
                
                <div className="mb-2">
                  <p className="font-medium text-white/90">{item.gpa}</p>
                </div>
                
                <div>
                  <p className="text-white/80 font-medium mb-2">Relevant Courses:</p>
                  <div className="flex flex-wrap gap-2">
                    {item.courses.map((course, i) => (
                      <motion.span 
                        key={i} 
                        whileHover={{ 
                          scale: 1.05,
                          y: -2,
                          transition: { 
                            type: "spring", 
                            stiffness: 400, 
                            damping: 10 
                          }
                        }}
                        className={`inline-block text-xs px-3 py-1 rounded-full 
                          font-medium border ${course.color}`}
                      >
                        {course.name}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div 
          ref={quoteRef}
          className="education-quote text-center max-w-3xl mx-auto mt-8 text-white/80 italic px-4"
        >
          <p className="flex items-center justify-center gap-2 text-sm">
            <span className="text-amber-400 text-lg">💡</span>
            <span>I am currently pursuing Masters of Science in Information Systems at Northeastern University, Boston. I have completed 2 semesters and have a CGPA of 3.62.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education; 