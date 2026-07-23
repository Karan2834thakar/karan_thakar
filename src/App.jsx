import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contect from './components/Contect';

const App = () => {
  return (
    <div className="relative bg-background text-foreground">
      {/* Film-grain overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contect />
      </main>
    </div>
  );
};

export default App;
