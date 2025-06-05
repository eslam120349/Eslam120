
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
        <div id="home">
          <Hero />
        </div>
        <div id="about" className="py-12 md:py-16">
          <About />
        </div>
        <div id="skills" className="py-12 md:py-16 bg-gray-800 rounded-lg my-8 px-6">
          <Skills />
        </div>
        <div id="projects" className="py-12 md:py-16">
          <Projects />
        </div>
        <div id="contact" className="py-12 md:py-16 bg-gray-800 rounded-lg my-8 px-6">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
