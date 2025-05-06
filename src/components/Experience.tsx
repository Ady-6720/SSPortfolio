import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface ExperienceItem {
  role: string;
  employer: string;
  location: string;
  duration: string;
  summary: string;
  bullets: string[];
  skills: string[];
  funFact: string;
  isPresent?: boolean;
  id: number; // Add an id for tracking expanded state
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: 'Software Developer Intern',
    employer: 'Refugee Protection International',
    location: 'Belmont, MA (Hybrid)',
    duration: 'Jan 2025 – Present',
    summary: 'Built a secure, scalable donation tracking platform integrated with AWS services.',
    bullets: [
      'Built a React + Node.js donation system replacing Google Sheets and Airtable; reduced entry time by 70%',
      'Developed ingestion pipelines via Node.js + AWS Lambda to auto-process 20K+ donation entries',
      'Integrated PostgreSQL with RBAC, pgcrypto, and Cognito for multi-team access (50+ users)',
      'Deployed entire stack to AWS EC2 with daily S3 backups for improved reliability'
    ],
    skills: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Lambda', 'EC2', 'S3', 'Cognito', 'RBAC', 'TypeScript', 'UI/UX'],
    funFact: '"I once debugged a Lambda timeout that ended up being a missing S3 permission."',
    isPresent: true
  },
  {
    id: 2,
    role: 'Software Developer',
    employer: 'Mahindra and Mahindra',
    location: 'India',
    duration: 'Aug 2022 – Nov 2022',
    summary: 'Engineered secure backend services with Java EE for internal authentication tools.',
    bullets: [
      'Designed Java/J2EE login system processing 600+ logins/hr with concurrency + input sanitization',
      'Refactored monolith using Singleton & Factory patterns; improved scalability by 30%',
      'Built secure JSP web apps with role-based authorization for enterprise use',
      'Used JConsole and Eclipse Debugger to resolve bottlenecks, boosting uptime'
    ],
    skills: ['Java', 'JSP', 'J2EE', 'Eclipse', 'Singleton Pattern', 'Factory Pattern'],
    funFact: '"Optimizing legacy JSPs taught me the importance of front-to-back flow tracking."'
  },
  {
    id: 3,
    role: 'Front-End Developer Intern',
    employer: 'Axonic Health Private Limited',
    location: 'India',
    duration: 'Feb 2022 – Aug 2022',
    summary: 'Modernized legacy UI with React + Next.js to support growing user base (10K+ users).',
    bullets: [
      'Redesigned frontend in React + TypeScript with Material UI for accessibility & speed',
      'Created 10+ REST APIs with encryption for patient data and secure auth',
      'Implemented server-side rendering using Next.js; improved load time by 35%',
      'Partnered with business analysts to map product features to market-fit goals'
    ],
    skills: ['React', 'TypeScript', 'Next.js', 'Material UI', 'REST API', 'SSR', 'UX Strategy'],
    funFact: '"Material UI was my first dive into design systems — and I never looked back."'
  }
];

const CardContent = ({ 
  experience, 
  isExpanded, 
  toggleExpand 
}: { 
  experience: ExperienceItem; 
  isExpanded: boolean; 
  toggleExpand: (id: number) => void;
}) => {
  return (
    <>
      {/* Top row - title and date */}
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-cyan-300 font-semibold text-xl">{experience.role}</h3>
        <p className="text-right text-neutral-400 italic text-base">{experience.duration}</p>
      </div>
      
      {/* Second row - company and location */}
      <div className="mb-3">
        <span className="text-white font-medium text-lg bg-gradient-to-r from-purple-500/20 to-cyan-500/20 px-3 py-1 rounded">{experience.employer}</span>
        {experience.location && (
          <span className="text-neutral-400 text-base ml-1.5"> · {experience.location}</span>
        )}
      </div>

      {/* Summary with label */}
      <div className="mb-3">
        <span className="text-neutral-500 uppercase text-sm tracking-wider mr-1.5">Overview:</span>
        <span className="text-neutral-300 text-base">{experience.summary}</span>
      </div>
      
      {/* Skills - with label */}
      <div className="mb-2">
        <span className="text-neutral-500 uppercase text-sm tracking-wider mb-1.5 block">Skills:</span>
        <div className="flex flex-wrap gap-1.5">
          {experience.skills.map(skill => (
            <span 
              key={skill} 
              className="text-sm px-2.5 py-1.5 rounded-full font-medium transition duration-300 hover:scale-105 border border-white/5 bg-purple-500/10 text-purple-300 hover:shadow-[0_0_8px_rgba(168,85,247,0.3)]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Read More button - directly under skills when not expanded */}
      {!isExpanded && (
        <button 
          onClick={() => toggleExpand(experience.id)}
          className="text-cyan-300 text-lg font-bold mt-3 inline-flex items-center self-center"
        >
          Read More
        </button>
      )}

      {/* Conditionally render bullet points and fun fact based on expanded state */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 10 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            {/* Achievements with label */}
            <div className="mb-4">
              <span className="text-neutral-500 uppercase text-sm tracking-wider mb-1.5 block">Achievements:</span>
              <div className="space-y-2">
                {experience.bullets.map((bullet, i) => (
                  <li key={i} className="text-neutral-200 pl-5 relative list-none text-base">
                    <span className="absolute left-0 text-lg">▸</span>
                    {bullet}
                  </li>
                ))}
              </div>
            </div>
            
            {/* Fun Fact with more distinct styling */}
            <div className="text-neutral-400 italic text-base pt-3 flex items-start gap-2 bg-purple-500/5 p-3 rounded">
              <span className="text-yellow-400 text-xl mt-0.5">💡</span>
              <div>
                <span className="text-neutral-500 uppercase text-sm tracking-wider block">Fun Fact:</span>
                {experience.funFact}
              </div>
            </div>
            
            {/* Show Less button */}
            <button 
              onClick={() => toggleExpand(experience.id)}
              className="text-cyan-300 text-lg font-bold flex items-center gap-1.5 mt-3 justify-center"
            >
              Show Less <ChevronUp size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const ExperienceCard = ({ 
  experience, 
  expandedId, 
  setExpandedId 
}: { 
  experience: ExperienceItem;
  expandedId: number | null;
  setExpandedId: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
  // Check if this card is expanded
  const isExpanded = expandedId === experience.id;
  
  // Toggle expand/collapse function
  const toggleExpand = (id: number) => {
    if (expandedId === id) {
      setExpandedId(null); // Collapse this card
    } else {
      setExpandedId(id); // Expand this card (and collapse others)
    }
  };

  // Create wrapper div with animation if this is the current job
  if (experience.isPresent) {
    return (
      <div className="relative">
        {/* Outer-most glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-2xl blur-md opacity-70 group-hover:opacity-100 transition duration-1000 animate-[pulse_5s_ease-in-out_infinite]" />
        
        {/* Outer pulse - slower, larger */}
        <div className="absolute inset-0 bg-black/30 rounded-2xl border border-cyan-500/50 shadow-[0_0_15px_rgba(8,145,178,0.2)] animate-[pulse_4s_ease-in-out_infinite]" />
        
        {/* Inner pulse - faster, stronger */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-600/10 rounded-2xl border-2 border-cyan-400/60 animate-[pulse_2.5s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
        
        {/* Stable content layer */}
        <div className="bg-black/50 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4 shadow-[0_0_10px_rgba(0,255,255,0.05)] flex flex-col h-auto relative z-10 overflow-hidden">
          {/* Card content */}
          <CardContent 
            experience={experience} 
            isExpanded={isExpanded} 
            toggleExpand={toggleExpand} 
          />
        </div>
      </div>
    );
  }

  // Regular non-pulsating card
  return (
    <div className="relative group transition-all duration-300 hover:-translate-y-1">
      {/* Subtle hover glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/0 to-purple-500/0 rounded-2xl blur-sm opacity-0 group-hover:opacity-40 group-hover:from-cyan-500/20 group-hover:to-purple-500/20 transition-all duration-500" />
      
      <div className="bg-black/50 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4 shadow-[0_0_10px_rgba(0,0,0,0.1)] flex flex-col h-auto overflow-hidden relative">
        {/* Card content */}
        <CardContent 
          experience={experience} 
          isExpanded={isExpanded} 
          toggleExpand={toggleExpand} 
        />
      </div>
    </div>
  );
};

const Experience = () => {
  // Track which card is expanded (only one at a time)
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="experience" className="px-5 md:px-8 py-20 md:py-24 min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="section-heading">
          Experience
        </h2>
        
        <div className="flex flex-col gap-10">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id} 
              className="w-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {exp.isPresent && (
                <div className="absolute -left-4 top-3 w-4 h-4 rounded-full bg-cyan-400 animate-ping" />
              )}
              <ExperienceCard 
                experience={exp} 
                expandedId={expandedId}
                setExpandedId={setExpandedId}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 