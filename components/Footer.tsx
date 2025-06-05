
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const yourName = "Eslam120"; // Replace with your actual name or nickname
  return (
    <footer className="bg-gray-800 text-gray-400 py-8 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-mono">
          &copy; {currentYear} {yourName}. All rights reserved.
        </p>
        <p className="text-xs mt-2 font-mono">
          Built with <span className="text-terminalGreen">React</span> & <span className="text-terminalGreen">Tailwind CSS</span>.
          Inspired by the command line.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
