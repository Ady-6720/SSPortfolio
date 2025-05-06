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
      <main className="main-content snap-y snap-mandatory overflow-y-scroll h-screen">
        <div id="hero-container" className="snap-start h-screen"><Hero /></div>
        <div id="about-container" className="snap-start h-screen"><About /></div>
        <div id="education-container" className="snap-start h-screen"><Education /></div>
        <div id="experience-container" className="snap-start h-screen"><Experience /></div>
        <div id="skills-container" className="snap-start h-screen"><Skills /></div>
        <div id="projects-container" className="snap-start h-screen"><Projects /></div>
      </main>
      <Footer />
    </>
  );
}

export default App;
