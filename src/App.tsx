import React from 'react';
import ParticleBackground from './components/ParticleBackground';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Internships from './components/Internships';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-900 via-purple-900 to-blue-900 text-white overflow-x-hidden">
      <ParticleBackground />
      
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Internships />
        <Certifications />
        <Contact />
        
        <footer className="py-8 text-center border-t border-violet-500/20 bg-black/20 backdrop-blur-sm">
          <p className="text-gray-400">
            © 2025 Kanthesh L Gollarahalli. Crafted with ❤️ and lots of ☕
          </p>
          <p className="text-sm text-violet-300 mt-2">
            Building the future, one line of code at a time
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;