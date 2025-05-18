import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface Project {
  title: string;
  summary: string;
  description: string;
  technologies: {
    blue: string[];
    green: string[];
    purple: string[];
    yellow: string[];
    rose: string[];
    slate: string[];
  };
  links: {
    github?: string;
    demo?: string;
  };
  period?: string;
  category: string[];
  image?: string;
}

const projects: Project[] = [
  {
    title: 'StudyBuddy app',
    summary: 'Designed an intuitive and engaging user interface/user experience (UI/UX) for an e-learning platform.',
    description: 'Designed an intuitive and engaging user interface/user experience (UI/UX) for an e-learning platform that helps students connect with peers and tutors for collaborative learning.',
    period: 'Feb 2014 - Apr 2024',
    category: ['UI/UX Projects'],
    technologies: {
      blue: [],
      green: [],
      purple: [],
      yellow: [],
      rose: [],
      slate: ['Figma', 'User Persona', 'Empathy Maps', 'HubSCW Approach', 'Use Cases']
    },
    links: {
      github: 'https://github.com/yourusername/studybuddy',
      demo: 'https://www.figma.com/file/studybuddy'
    }
  },
  {
    title: 'Child Adoption Application',
    summary: 'Created and designed a child adoption website for all the future parents or are already parents for adoption process.',
    description: 'Created and designed a child adoption website that streamlines the adoption process with user-friendly interfaces for prospective parents, featuring detailed profiles, application status tracking, and resource sections.',
    period: 'Feb 2023 - May 2024',
    category: ['UI/UX Projects'],
    technologies: {
      blue: [],
      green: [],
      purple: [],
      yellow: [],
      rose: [],
      slate: ['Figma', 'User Persona', 'Use Cases']
    },
    links: {
      github: 'https://github.com/yourusername/child-adoption',
      demo: 'https://www.figma.com/file/childadoption'
    }
  },
  {
    title: 'Banking Website',
    summary: 'Created a banking application where user can login, signup. After login, user can see his loan account details and upload required documents.',
    description: 'A comprehensive banking application featuring secure authentication, account management, loan application processing, and document upload capabilities with intuitive user flows and responsive design.',
    period: 'Jan 2024',
    category: ['UI/UX Projects'],
    technologies: {
      blue: [],
      green: [],
      purple: [],
      yellow: [],
      rose: [],
      slate: ['Balsamiq', 'Use Cases']
    },
    links: {
      github: 'https://github.com/yourusername/banking-website',
      demo: 'https://balsamiq.cloud/banking-app'
    }
  },
  {
    title: 'Portfolio using Figma',
    summary: 'Designed and created a personal portfolio using Figma.',
    description: 'A meticulously designed personal portfolio showcasing projects, skills, and experience with modern UI elements, smooth transitions, and thoughtful content organization.',
    period: 'March 2024',
    category: ['UI/UX Projects'],
    technologies: {
      blue: [],
      green: [],
      purple: [],
      yellow: [],
      rose: [],
      slate: ['Figma']
    },
    links: {
      github: 'https://github.com/yourusername/portfolio-figma',
      demo: 'https://www.figma.com/file/portfolio'
    }
  },
  {
    title: 'UrbanClap',
    summary: 'Designed a service network application to assist residents by providing a platform to enroll in community services.',
    description: 'A community service platform connecting residents with local service providers, featuring real-time booking, service tracking, and rating systems.',
    period: 'Oct 2021 - Dec 2022',
    category: ['WEB APPS'],
    technologies: {
      blue: ['Java/J2EE', 'JCharts'],
      green: ['MySQL'],
      purple: [],
      yellow: [],
      rose: [],
      slate: ['MapsQuest Developer API']
    },
    links: {
      github: 'https://github.com/yourusername/urbanclap'
    }
  },
  {
    title: 'NestKnowledge',
    summary: 'Programmed an advanced Full Stack application revolutionizing Online Education.',
    description: 'MERN platform for course delivery with auth, REST APIs, and optimized Mongo queries; deployed on EC2.',
    period: 'Oct 2022 - Nov 2023',
    category: ['WEB APPS'],
    technologies: {
      blue: ['HTML', 'CSS'],
      green: ['MongoDB'],
      purple: ['JavaScript'],
      yellow: ['AWS EC2', 'AWS S3 bucket'],
      rose: [],
      slate: ['React.JS']
    },
    links: {
      github: 'https://github.com/yourusername/nestknowledge',
      demo: 'https://nestknowledge.com'
    }
  },
  {
    title: 'Jobportal Application',
    summary: 'Full-stack portal with secure employer/candidate dashboards and real-time application tracking.',
    description: 'This project was a job searching portal, where I got hands-on experience in developing a full-featured job board with applicant tracking.',
    period: 'Jan 2022 - Apr 2023',
    category: ['WEB APPS'],
    technologies: {
      blue: ['HTML', 'CSS'],
      green: ['MySQL'],
      purple: ['JavaScript'],
      yellow: [],
      rose: [],
      slate: ['JSP', 'jQuery']
    },
    links: {
      github: 'https://github.com/yourusername/job-portal'
    }
  },
  {
    title: 'University Application',
    summary: 'This University handling platform is created with Java following the MVC pattern for handling different academic processes.',
    description: 'A comprehensive university management system handling admissions, course registration, grading, and academic records with secure authentication.',
    period: 'Sep 2021 - Nov 2022',
    category: ['WEB APPS'],
    technologies: {
      blue: ['Java/J2EE'],
      green: ['MySQL'],
      purple: [],
      yellow: [],
      rose: [],
      slate: ['ReactMaps', 'iCalendar']
    },
    links: {
      github: 'https://github.com/yourusername/university-app'
    }
  },
  {
    title: 'London Diaries',
    summary: 'Using HTML, CSS, Bootstrap, SCSS I have made a travel website called London Diaries.',
    description: 'A visually appealing travel blog showcasing London attractions, featuring responsive design, interactive maps, and photo galleries.',
    period: 'Oct 2023',
    category: ['UI/UX Projects'],
    technologies: {
      blue: ['HTML', 'CSS'],
      green: [],
      purple: [],
      yellow: [],
      rose: ['SCSS'],
      slate: ['Bootstrap']
    },
    links: {
      github: 'https://github.com/yourusername/london-diaries',
      demo: 'https://london-diaries.netlify.app'
    }
  },
  {
    title: 'VaultGuard',
    summary: 'Built a fault-tolerant password manager with AES-256 encryption and consistent-hash ring for auto-rebalancing.',
    description: 'Built a fault-tolerant password manager that replicates encrypted credentials across Linux nodes. AES-256 encryption, PBKDF2 keys, consistent-hash ring for auto-rebalancing, deployed on AWS EC2.',
    category: ['WEB APPS'],
    technologies: {
      blue: ['Java', 'TCP'],
      green: ['Linux'],
      purple: [],
      yellow: ['AWS', 'EC2'],
      rose: ['AES-256'],
      slate: ['PBKDF2']
    },
    links: {
      github: 'https://github.com/yourusername/vaultguard'
    }
  },
  {
    title: 'CaseCobra',
    summary: 'Responsive e-commerce app with in-browser case design, Stripe payments, and role-based dashboards.',
    description: 'Responsive e-commerce app where users design cases in-browser, pay with Stripe, and manage orders via role-based dashboards.',
    category: ['WEB APPS', 'UI/UX Projects'],
    technologies: {
      blue: ['React'],
      green: ['PostgreSQL'],
      purple: ['TypeScript', 'Next.js'],
      yellow: [],
      rose: ['Stripe'],
      slate: ['Tailwind CSS']
    },
    links: {
      github: 'https://github.com/yourusername/casecobra',
      demo: 'https://casecobra.com'
    }
  },
  {
    title: 'Hibernate',
    summary: 'Springboot application with Hibernate ORM for efficient database operations and entity management.',
    description: 'A Spring Boot application utilizing Hibernate ORM for efficient database operations and entity management with RESTful API endpoints.',
    category: ['WEB APPS'],
    technologies: {
      blue: ['Java'],
      green: ['MySQL'],
      purple: ['jQuery'],
      yellow: [],
      rose: [],
      slate: ['SpringBoot', 'Hibernate']
    },
    links: {
      github: 'https://github.com/yourusername/hibernate-app'
    }
  }
];

const colorMap = {
  blue: 'bg-blue-500/10 text-blue-300 border-blue-500/20 shadow-[0_0_5px_rgba(59,130,246,0.2)] hover:bg-blue-500/25 hover:shadow-[0_0_12px_rgba(59,130,246,0.6),0_0_4px_rgba(59,130,246,0.8)] hover:border-blue-500/50 hover:text-white',
  green: 'bg-green-500/10 text-green-300 border-green-500/20 shadow-[0_0_5px_rgba(34,197,94,0.2)] hover:bg-green-500/25 hover:shadow-[0_0_12px_rgba(34,197,94,0.6),0_0_4px_rgba(34,197,94,0.8)] hover:border-green-500/50 hover:text-white',
  purple: 'bg-purple-500/10 text-purple-300 border-purple-500/20 shadow-[0_0_5px_rgba(168,85,247,0.2)] hover:bg-purple-500/25 hover:shadow-[0_0_12px_rgba(168,85,247,0.6),0_0_4px_rgba(168,85,247,0.8)] hover:border-purple-500/50 hover:text-white',
  yellow: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/20 shadow-[0_0_5px_rgba(234,179,8,0.2)] hover:bg-yellow-500/25 hover:shadow-[0_0_12px_rgba(234,179,8,0.6),0_0_4px_rgba(234,179,8,0.8)] hover:border-yellow-500/50 hover:text-white',
  rose: 'bg-rose-500/10 text-rose-300 border-rose-500/20 shadow-[0_0_5px_rgba(244,63,94,0.2)] hover:bg-rose-500/25 hover:shadow-[0_0_12px_rgba(244,63,94,0.6),0_0_4px_rgba(244,63,94,0.8)] hover:border-rose-500/50 hover:text-white',
  slate: 'bg-slate-500/10 text-slate-300 border-slate-500/20 shadow-[0_0_5px_rgba(100,116,139,0.2)] hover:bg-slate-500/25 hover:shadow-[0_0_12px_rgba(100,116,139,0.6),0_0_4px_rgba(100,116,139,0.8)] hover:border-slate-500/50 hover:text-white'
};

const RevealWrapper = ({ children, index }: { children: React.ReactNode; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {children}
    </motion.div>
  );
};

const TechPill = ({ tech, color }: { tech: string; color: string }) => {
  return (
    <motion.span 
      className={`text-xs px-2.5 py-1 rounded-full font-semibold tracking-wide ${colorMap[color as keyof typeof colorMap]}`}
      style={{
        textShadow: `0 0 3px rgba(var(--${color}-rgb), 0.3)`
      }}
      whileHover={{ 
        scale: 1.08, 
        y: -2,
        transition: { type: "spring", stiffness: 400, damping: 10 }
      }}
    >
                      {tech}
    </motion.span>
  );
};

const ProjectCard = ({ project, index, isExpanded, onToggle, isDesktop }: { 
  project: Project; 
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
  isDesktop: boolean;
}) => {
  // For desktop: expand on hover, collapse on mouse leave
  const hoverProps = isDesktop
    ? {
        onMouseEnter: onToggle,
        onMouseLeave: () => onToggle()
      }
    : {};

  return (
    <RevealWrapper index={index}>
      <motion.div
        className={`group relative bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl 
          transition-all duration-300 hover:border-white/20 hover:bg-black/30 
          hover:shadow-[0_10px_20px_rgba(0,0,0,0.3),0_0_15px_rgba(255,255,255,0.1)] 
          ${isExpanded ? 'lg:col-span-2' : ''}`}
        whileHover={{ 
          y: -4, // less distance
          transition: { 
            type: "spring", 
            stiffness: 200, 
            damping: 20 
          }
        }}
        {...hoverProps}
      >
        <div className="p-4 md:p-5">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-base md:text-lg font-bold text-white group-hover:text-blue-300 transition-colors duration-300 line-clamp-1">
              {project.title}
            </h3>
            <div className="flex items-center gap-1 ml-2 flex-shrink-0">
              {project.links.github && (
                <motion.a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors p-1 rounded-full hover:bg-blue-500/20"
                  whileHover={{ 
                    scale: 1.2, 
                    boxShadow: "0 0 10px rgba(59,130,246,0.4)" 
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-4 h-4" />
                </motion.a>
              )}
              {project.links.demo && (
                <motion.a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors p-1 rounded-full hover:bg-blue-500/20"
                  whileHover={{ 
                    scale: 1.2, 
                    boxShadow: "0 0 10px rgba(59,130,246,0.4)" 
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              )}
                </div>
              </div>

          {project.period && (
            <div className="text-xs text-white/60 mb-2">
              {project.period}
            </div>
          )}

          <p className="text-sm text-white/90 mb-4 line-clamp-2 group-hover:text-white/100 transition-colors duration-300">
            {project.summary}
          </p>

          <div className="flex flex-wrap gap-1.5 mt-3">
            {Object.entries(project.technologies).map(([color, techs]) =>
              techs.map((tech, techIndex) => (
                <motion.div
                  key={`${project.title}-${tech}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.2 + index * 0.05 + techIndex * 0.05,
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                >
                  <TechPill tech={tech} color={color} />
                </motion.div>
              ))
            )}
          </div>

          <motion.button
            onClick={onToggle}
            className="flex items-center gap-1 text-xs font-medium text-blue-400 mt-4 px-2.5 py-1 rounded-full"
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: "rgba(59, 130, 246, 0.2)",
              textShadow: "0 0 3px rgba(59, 130, 246, 0.4)",
              boxShadow: "0 0 10px rgba(59, 130, 246, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.15, type: "spring", stiffness: 400 }}
          >
            {isExpanded ? (
              <>
                <span>Show Less</span>
                <ChevronUp className="w-3.5 h-3.5" />
              </>
            ) : (
              <>
                <span>Show More</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </>
            )}
          </motion.button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0, y: 8 }}
                animate={{ height: "auto", opacity: 1, y: 0, transition: { height: { duration: 0.25 }, opacity: { duration: 0.18 } } }}
                exit={{ height: 0, opacity: 0, y: 8, transition: { height: { duration: 0.18 }, opacity: { duration: 0.12 } } }}
                className="overflow-hidden"
              >
                <div className="mt-4 pt-4 border-t border-white/10 group-hover:border-white/20 transition-colors duration-300">
                  <p className="text-sm text-white/90 leading-relaxed group-hover:text-white/100 transition-colors duration-300">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </RevealWrapper>
  );
};

const Projects = () => {
  const [activeFilters, setActiveFilters] = useState<string[]>(['ALL']);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const filteredProjects = projects.filter(project => 
    activeFilters.includes('ALL') || project.category.some(c => activeFilters.includes(c))
  );

  const handleFilterChange = (filter: string) => {
    setExpandedIndex(null);
    setTimeout(() => {
      if (filter === 'ALL') {
        setActiveFilters(['ALL']);
      } else {
        setActiveFilters(prev => [...prev.filter(f => f !== 'ALL'), filter]);
      }
    }, 100);
  };

  return (
    <section id="projects" className="py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-2xl md:text-3xl font-semibold text-white mb-8 md:mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Projects
        </motion.h2>
        
        <motion.div 
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex rounded-md border border-indigo-600/30 p-1 bg-black/30 backdrop-blur-sm">
            {['ALL', 'WEB APPS', 'UI/UX Projects'].map((filter, idx) => (
              <motion.button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={`px-4 py-2 text-sm rounded-md transition-all duration-300 ${
                  activeFilters.includes(filter) 
                    ? 'bg-indigo-600 text-white' 
                    : 'text-white/70 hover:text-white hover:bg-indigo-600/20'
                }`}
                whileHover={{ scale: activeFilters.includes(filter) ? 1.05 : 1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.2 + idx * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </motion.div>
        
        <div 
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isExpanded={expandedIndex === index}
              onToggle={() => handleToggle(index)}
              isDesktop={isDesktop}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 