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

function App() {
  return (
    <>
      <ParallaxBackground />
      <Navbar />
      <main className="main-content overflow-y-scroll h-screen scroll-smooth">
        <div id="hero-container"><Hero /></div>
        <div id="about-container"><About /></div>
        <div id="education-container"><Education /></div>
        <div id="experience-container"><Experience /></div>
        <div id="skills-container"><Skills /></div>
        <div id="projects-container"><Projects /></div>
      </main>
      <Footer />
    </>
  );
}

export default App;
