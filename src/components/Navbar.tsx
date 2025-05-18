import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const sectionMap = [
  { id: 'about-container', label: 'About' },
  { id: 'experience-container', label: 'Experience' },
  { id: 'skills-container', label: 'Skills' },
  { id: 'projects-container', label: 'Projects' },
  { id: 'contact-container', label: 'Contact' }
];

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState('About');
  const observerRef = useRef<IntersectionObserver | null>(null);

  // IntersectionObserver for section highlighting
  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      let maxRatio = 0;
      let currentSection = 'About';
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          const found = sectionMap.find(s => s.id === entry.target.id);
          if (found) currentSection = found.label;
        }
      });
      setActive(currentSection);
    };
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: [0.3, 0.5, 0.7, 1.0]
    };
    observerRef.current = new window.IntersectionObserver(handleIntersect, options);
    sectionMap.forEach(section => {
      const el = document.getElementById(section.id);
      if (el) observerRef.current?.observe(el);
    });
    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string, label: string) => {
    e.preventDefault();
    setActive(label);
    const sectionId = targetId.substring(1);
    const containerId = `${sectionId}`;
    const target = document.getElementById(containerId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = sectionMap;

  return (
    <motion.nav 
      className={`navbar glass-navbar`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <a 
          href="#about-container" 
          className="nav-logo-accent"
          onClick={(e) => handleNavClick(e, '#about-container', 'About')}
        >
          SejalSatav
        </a>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav-link-minimal${active === link.label ? ' nav-link-active' : ''}`}
              onClick={(e) => handleNavClick(e, `#${link.id}`, link.label)}
            >
              {link.label}
            </a>
          ))}
        </div>
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`mobile-nav-link${active === link.label ? ' nav-link-active' : ''}`}
                onClick={(e) => handleNavClick(e, `#${link.id}`, link.label)}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar; 