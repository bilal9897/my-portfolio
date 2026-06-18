import React from 'react';
import useInteractions from './hooks/useInteractions';

import SideNav from './components/SideNav';
import MobileNav from './components/MobileNav';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';


export default function App() {
  // Initialize interactions (cursor, scroll spy, reveal, smooth scroll)
  useInteractions();



  return (
    <>
      <SideNav />
      <MobileNav />
      
      <main className="app">
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
        <Footer />

      </main>
    </>
  );
}
