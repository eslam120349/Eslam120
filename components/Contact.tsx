
import React from 'react';
import { GitHubIcon } from './icons/GitHubIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { EmailIcon } from './icons/EmailIcon';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-terminalGreen font-mono">
    {children}
  </h2>
);

const Contact: React.FC = () => {
  return (
    <section className="container mx-auto">
      <SectionTitle>// Get In Touch</SectionTitle>
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-lg text-gray-300 mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing.
          Feel free to reach out!
        </p>
        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=e.farars12@gmail.com&su=Hello&body=I%20want%20to%20connect%20with%20you"
            className="text-gray-400 hover:text-terminalGreen transition-colors duration-150"
            aria-label="Email me"
          >
            <EmailIcon className="w-10 h-10" />
          </a>
          <a
            href="https://www.linkedin.com/in/eslam-saeid-9a8458295"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-terminalGreen transition-colors duration-150"
            aria-label="My LinkedIn profile"
          >
            <LinkedInIcon className="w-10 h-10" />
          </a>
        </div>
        <p className="text-sm text-gray-500 font-mono">
          &gt; Let's build something cool together.
        </p>
      </div>
    </section>
  );
};

export default Contact;
