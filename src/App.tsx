import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ParallaxBackground from './components/ParallaxBackground';
import Education from './components/Education';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';
import { useState, useEffect, useRef } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const mainContentRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="spinner-overlay">
        <div className="spinner">
          <div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <ParallaxBackground />
      <Navbar />
      <main ref={mainContentRef} className="main-content overflow-y-scroll h-screen scroll-smooth">
        <div id="hero-container" className="h-screen"><Hero /></div>
        <div id="about-container" className="h-screen"><About /></div>
        <div id="education-container" className="h-screen"><Education /></div>
        <div id="experience-container" className="h-screen"><Experience /></div>
        <div id="skills-container" className="h-screen"><Skills /></div>
        <div id="projects-container" className="h-screen"><Projects /></div>
        <div id="contact-container" className="h-screen"><Contact /></div>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
