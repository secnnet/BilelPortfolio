import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header>
        <nav className="bg-white shadow-sm py-4 fixed w-full z-10">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <a href="#" className="text-xl font-bold text-primary">Bilel Graine</a>
            <div className="hidden md:flex space-x-6">
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#expertise" className="hover:text-primary transition-colors">Expertise</a>
              <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
              <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
              <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
              <a href="#certifications" className="hover:text-primary transition-colors">Certifications</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </div>
            <button className="md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>
      
      <main>
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
