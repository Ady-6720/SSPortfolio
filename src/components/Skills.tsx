import React, { useRef, useState } from 'react';
import { 
  Code, Database, Terminal, Layout, Cpu, 
  Shield, Layers, Plus, X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Skills.css';

interface SkillPill {
  name: string;
}

interface SkillItem {
  icon: React.ReactNode;
  title: string;
  pills: SkillPill[];
  colorClass: string;
  shadowColor: string;
  hoverShadow: string;
  rgbValues: string;
}

// Animation wrapper for staggered reveal
const RevealWrapper = ({ children, index, delay = 0 }: { 
  children: React.ReactNode; 
  index: number; 
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: delay + index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {children}
    </motion.div>
  );
};

const skillItems: SkillItem[] = [
  {
    icon: <Code size={28} />,
    title: "Programming Languages",
    pills: [
      { name: "Java" },
      { name: "Python" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "SQL" },
      { name: "HTML" },
      { name: "CSS" }
    ],
    colorClass: "text-blue-400",
    shadowColor: "shadow-[0_0_5px_rgba(59,130,246,0.2)]",
    hoverShadow: "hover:shadow-[0_0_12px_rgba(59,130,246,0.4)]",
    rgbValues: "59, 130, 246"
  },
  {
    icon: <Database size={28} />,
    title: "Backend Development",
    pills: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "Spring Boot" },
      { name: "Flask" },
      { name: "REST APIs" },
      { name: "JWT" },
      { name: "RBAC" }
    ],
    colorClass: "text-green-400",
    shadowColor: "shadow-[0_0_5px_rgba(34,197,94,0.2)]",
    hoverShadow: "hover:shadow-[0_0_12px_rgba(34,197,94,0.4)]",
    rgbValues: "34, 197, 94"
  },
  {
    icon: <Database size={28} />,
    title: "Databases",
    pills: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Redis" },
      { name: "Airtable" },
      { name: "S3" }
    ],
    colorClass: "text-indigo-400",
    shadowColor: "shadow-[0_0_5px_rgba(99,102,241,0.2)]",
    hoverShadow: "hover:shadow-[0_0_12px_rgba(99,102,241,0.4)]",
    rgbValues: "99, 102, 241"
  },
  {
    icon: <Terminal size={28} />,
    title: "Cloud & DevOps",
    pills: [
      { name: "AWS EC2" },
      { name: "AWS Lambda" },
      { name: "S3" },
      { name: "GitHub Actions" },
      { name: "CI/CD" },
      { name: "Docker" },
      { name: "Vercel" }
    ],
    colorClass: "text-amber-400",
    shadowColor: "shadow-[0_0_5px_rgba(251,191,36,0.2)]",
    hoverShadow: "hover:shadow-[0_0_12px_rgba(251,191,36,0.4)]",
    rgbValues: "251, 191, 36"
  },
  {
    icon: <Layers size={28} />,
    title: "Microservices",
    pills: [
      { name: "gRPC" },
      { name: "Kafka" },
      { name: "Load Balancer" },
      { name: "Service Discovery" },
      { name: "API Gateway" }
    ],
    colorClass: "text-pink-400",
    shadowColor: "shadow-[0_0_5px_rgba(244,114,182,0.2)]",
    hoverShadow: "hover:shadow-[0_0_12px_rgba(244,114,182,0.4)]",
    rgbValues: "244, 114, 182"
  },
  {
    icon: <Layout size={28} />,
    title: "UI/UX",
    pills: [
      { name: "Figma" },
      { name: "Material UI" },
      { name: "Tailwind CSS" },
      { name: "Responsive Design" },
      { name: "WCAG" },
      { name: "Accessibility" }
    ],
    colorClass: "text-cyan-400",
    shadowColor: "shadow-[0_0_5px_rgba(34,211,238,0.2)]",
    hoverShadow: "hover:shadow-[0_0_12px_rgba(34,211,238,0.4)]",
    rgbValues: "34, 211, 238"
  },
  {
    icon: <Cpu size={22} />,
    title: "System Design",
    pills: [
      { name: "Scalability" },
      { name: "Caching" },
      { name: "Message Queues" },
      { name: "Design Patterns" },
      { name: "High Availability" },
      { name: "DB Sharding" }
    ],
    colorClass: "text-red-400",
    shadowColor: "shadow-[0_0_5px_rgba(248,113,113,0.2)]",
    hoverShadow: "hover:shadow-[0_0_12px_rgba(248,113,113,0.4)]",
    rgbValues: "248, 113, 113"
  },
  {
    icon: <Shield size={22} />,
    title: "Security",
    pills: [
      { name: "OAuth2" },
      { name: "Cognito" },
      { name: "HTTPS" },
      { name: "Input Sanitization" },
      { name: "Encryption" },
      { name: "Access Control" }
    ],
    colorClass: "text-yellow-400",
    shadowColor: "shadow-[0_0_5px_rgba(250,204,21,0.2)]",
    hoverShadow: "hover:shadow-[0_0_12px_rgba(250,204,21,0.4)]",
    rgbValues: "250, 204, 21"
  }
];

const SkillPills = ({ pills, colorClass, rgbValues, isDesktop }: { 
  pills: SkillPill[];
  colorClass: string;
  rgbValues: string;
  isDesktop: boolean;
}) => {
  // For mobile, show horizontal scrollable container
  if (!isDesktop) {
    return (
      <div className="overflow-x-auto pb-2 mt-2">
        <div className="flex gap-2" style={{ minWidth: 'max-content' }}>
          {pills.map((pill, i) => (
            <motion.span 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: 0.05 + i * 0.05,
                duration: 0.3
              }}
              whileTap={{ 
                scale: 0.95,
                boxShadow: `0 0 8px rgba(${rgbValues}, 0.6)`,
              }}
              className={`${colorClass} inline-block text-base px-3 py-1.5 
                rounded-full font-medium border-2 border-white/30 bg-black/30
                transition-all duration-300 whitespace-nowrap`}
              style={{
                textShadow: `0 0 3px rgba(${rgbValues}, 0.3)`
              }}
            >
              {pill.name}
            </motion.span>
          ))}
        </div>
      </div>
    );
  }
  
  // For desktop, show grid layout
  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {pills.map((pill, i) => (
        <motion.span 
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            delay: 0.2 + i * 0.05,
            duration: 0.4
          }}
          whileHover={{ 
            scale: 1.08, 
            y: -2,
            boxShadow: `0 0 10px rgba(${rgbValues}, 0.4)`,
            transition: { 
              type: "spring", 
              stiffness: 400, 
              damping: 10 
            }
          }}
          className={`${colorClass} inline-block text-base px-3 py-1.5 
            rounded-full font-medium border border-white/20 bg-black/20
            hover:bg-black/40 hover:text-white transition-all duration-300`}
          style={{
            textShadow: `0 0 3px rgba(${rgbValues}, 0.3)`
          }}
        >
          {pill.name}
        </motion.span>
      ))}
    </div>
  );
};

// Mobile Accordion Card Component
const MobileAccordionCard = ({ 
  skill, 
  index, 
  isOpen, 
  toggleOpen,
}: { 
  skill: SkillItem; 
  index: number;
  isOpen: boolean;
  toggleOpen: () => void;
}) => {
  return (
    <RevealWrapper index={index}>
      <div 
        className={`mb-3.5 rounded-xl overflow-hidden border-2 
          ${isOpen ? `border-${skill.colorClass.split('-')[1]}-400/40` : 'border-white/20'} 
          ${skill.shadowColor} ${isOpen ? skill.hoverShadow.replace('hover:', '') : ''} 
          transition-all duration-300 bg-black/20 backdrop-blur-sm`}
      >
        <motion.button
          className="w-full flex items-center justify-between p-3.5 text-left"
          onClick={toggleOpen}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center">
            <span className={`${skill.colorClass} mr-2.5`}>
              {skill.icon}
            </span>
            <h3 className={`${skill.colorClass} text-lg font-semibold`}>
              {skill.title}
            </h3>
          </div>
          <motion.span 
            className={`${skill.colorClass} h-6 w-6 flex items-center justify-center rounded-full 
              ${isOpen ? `bg-${skill.colorClass.split('-')[1]}-500/20` : ''}`}
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? <X size={16} /> : <Plus size={16} />}
          </motion.span>
        </motion.button>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ 
                height: "auto", 
                opacity: 1,
                transition: {
                  height: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
                  opacity: { duration: 0.2, delay: 0.1 }
                }
              }}
              exit={{ 
                height: 0, 
                opacity: 0,
                transition: {
                  height: { duration: 0.2 },
                  opacity: { duration: 0.1 }
                }
              }}
              className="overflow-hidden border-t-2 border-white/20"
            >
              <div className="p-4 pt-3">
                <SkillPills
                  pills={skill.pills}
                  colorClass={skill.colorClass}
                  rgbValues={skill.rgbValues}
                  isDesktop={false}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </RevealWrapper>
  );
};

// Desktop Card Component
const DesktopCard = ({ skill, index }: { skill: SkillItem; index: number }) => {
  return (
    <RevealWrapper key={index} index={index}>
      <motion.div 
        className={`group relative bg-black/20 backdrop-blur-sm border border-white/20 rounded-xl p-4
          transition-all duration-300 hover:border-white/30 hover:bg-black/30 
          ${skill.shadowColor} ${skill.hoverShadow}`}
        whileHover={{ 
          y: -8, 
          transition: { 
            type: "spring", 
            stiffness: 200, 
            damping: 15 
          }
        }}
      >
        <div className={`${skill.colorClass} p-2 rounded-md mb-3 group-hover:text-white transition-colors duration-300`}>
          {skill.icon}
        </div>
        <h3 className={`${skill.colorClass} text-xl font-semibold mb-2 group-hover:text-white transition-colors duration-300`}>
          {skill.title}
        </h3>
        <SkillPills
          pills={skill.pills}
          colorClass={skill.colorClass}
          rgbValues={skill.rgbValues}
          isDesktop={true}
        />
      </motion.div>
    </RevealWrapper>
  );
};

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenAccordion(prevOpen => prevOpen === index ? null : index);
  };
  
  return (
    <section 
      ref={sectionRef} 
      id="skills" 
      className="py-12 md:py-20 px-4 md:px-8 bg-gradient-to-b from-black to-black/95 relative"
    >
      {/* Subtle animated background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(25,25,25,0.2)_0,rgba(0,0,0,0)_70%)] opacity-70"></div>
      
      <div className="max-w-7xl w-full mx-auto relative z-10">
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          What I'm Good At
        </motion.h2>
        
        {/* Mobile view - Accordion layout */}
        <div className="md:hidden space-y-2">
          {skillItems.map((skill, index) => (
            <MobileAccordionCard 
              key={index} 
              skill={skill} 
              index={index}
              isOpen={openAccordion === index}
              toggleOpen={() => handleToggle(index)}
            />
          ))}
        </div>
        
        {/* Desktop view - Grid layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillItems.map((skill, index) => (
            <DesktopCard
              key={index}
              skill={skill}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 