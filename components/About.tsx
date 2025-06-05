
import React from 'react';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-terminalGreen font-mono">
    {children}
  </h2>
);

const About: React.FC = () => {
  return (
    <section className="container mx-auto">
      <SectionTitle>// About Me</SectionTitle>
      <div className="max-w-3xl mx-auto text-center text-gray-300 space-y-6 text-lg">
        <p>
          Hi there! I'm a dedicated and results-oriented Full-Stack Developer with a knack for building
          innovative and user-friendly web applications. My journey in tech started with a fascination
          for how software can solve real-world problems, and that curiosity continues to drive me today.
        </p>
        <p>
          I thrive in collaborative environments and enjoy tackling complex challenges,
          transforming ideas into robust and scalable software. When I'm not coding, you might find me
          exploring new technologies, contributing to open-source projects, or enjoying a good book.
        </p>
        <img 
          src="https://res.cloudinary.com/dc9jmzfbk/image/upload/v1747405557/dz5dwoqsyiqyjvfboidd.png" 
          alt="A portrait of the developer" 
          className="w-48 h-48 rounded-full mx-auto my-8 border-4 border-terminalGreen shadow-lg transition-all duration-300 hover:shadow-terminalGreen/40 hover:scale-105"
        />
      </div>
    </section>
  );
};

export default About;
