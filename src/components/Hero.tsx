import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, ChevronDown } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
  const letterVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.05,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }),
    hover: {
      y: -5, 
      color: "#00ffff", 
      textShadow: "0 0 20px rgba(0, 255, 255, 0.7)",
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  const firstNameLetters = "SEJAL".split("");
  const lastNameLetters = "SATAV".split("");

  // Add smooth scrolling function for navigation buttons
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    // Get the container ID for the section
    const sectionId = targetId.substring(1); // Remove # from targetId
    const containerId = `${sectionId}-container`;
    const target = document.getElementById(containerId);
    
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero px-4 sm:px-6 py-8 sm:py-12">
      <div className="hero-content max-w-[95%] sm:max-w-[90%] mx-auto">
        <motion.h1 
          className="hero-title text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] font-bold flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div className="name-first flex">
            {firstNameLetters.map((letter, i) => (
              <motion.span
                key={`first-${i}`}
                custom={i}
                variants={letterVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
          <motion.div className="name-last flex">
            {lastNameLetters.map((letter, i) => (
              <motion.span
                key={`last-${i}`}
                custom={i}
                variants={letterVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </motion.h1>
        
        <motion.p 
          className="hero-subtitle text-sm sm:text-base md:text-lg max-w-[90%] mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            delay: 0.6,
            ease: [0.22, 1, 0.36, 1]
          }}
          whileHover={{
            y: -3,
            opacity: 1,
            textShadow: "0 0 8px rgba(0, 255, 255, 0.4)"
          }}
        >
          Software Developer | Front End | Backend
        </motion.p>

        <motion.div 
          className="social-links flex justify-center gap-3 sm:gap-4 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            delay: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <motion.a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link w-5 h-5 sm:w-6 sm:h-6"
            aria-label="GitHub Profile"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github className="w-full h-full" />
          </motion.a>
          <motion.a 
            href="https://linkedin.com/in/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link w-5 h-5 sm:w-6 sm:h-6"
            aria-label="LinkedIn Profile"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin className="w-full h-full" />
          </motion.a>
          <motion.a 
            href="https://twitter.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link w-5 h-5 sm:w-6 sm:h-6"
            aria-label="Twitter Profile"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Twitter className="w-full h-full" />
          </motion.a>
        </motion.div>

        <motion.div 
          className="nav-buttons flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center mt-4 sm:mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            delay: 1.0,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <motion.a 
            href="#projects" 
            className="nav-button w-40 sm:w-36 py-2 text-sm sm:text-base flex items-center justify-center"
            whileHover={{ 
              y: -5, 
              boxShadow: "0 0 15px rgba(0, 255, 255, 0.7)"
            }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => handleNavClick(e, '#projects')}
          >
            Projects
          </motion.a>
          <motion.a 
            href="#skills" 
            className="nav-button w-40 sm:w-36 py-2 text-sm sm:text-base flex items-center justify-center"
            whileHover={{ 
              y: -5, 
              boxShadow: "0 0 15px rgba(0, 255, 255, 0.7)"
            }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => handleNavClick(e, '#skills')}
          >
            Skills
          </motion.a>
          <motion.a 
            href="#experience" 
            className="nav-button w-40 sm:w-36 py-2 text-sm sm:text-base flex items-center justify-center"
            whileHover={{ 
              y: -5, 
              boxShadow: "0 0 15px rgba(0, 255, 255, 0.7)"
            }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => handleNavClick(e, '#experience')}
          >
            Experience
          </motion.a>
        </motion.div>
      </div>
      
      <motion.div 
        className="scroll-cue absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          duration: 0.8,
          delay: 1.2,
          ease: [0.22, 1, 0.36, 1]
        }}
        whileHover={{ 
          scale: 1.2,
          filter: "drop-shadow(0 0 8px rgba(0, 255, 255, 0.7))"
        }}
        onClick={() => {
          const target = document.getElementById('about-container');
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        style={{ cursor: 'pointer' }}
      >
        <p className="text-xs text-cyan-400 mb-2 opacity-80">Scroll Down</p>
        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero; 