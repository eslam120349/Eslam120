
import React from 'react';
import { Project } from '../types';
import ProjectCard from './ProjectCard';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-terminalGreen font-mono">
    {children}
  </h2>
);

const projectsData: Project[] = [
  {
    id: 'project1',
    title: 'My pff portofolio',
    description: 'its portofolio for graphic designer',
    imageUrl: 'https://res.cloudinary.com/dc9jmzfbk/image/upload/v1747406484/Screenshot_2025-05-16_092555_bshhaf.png',
    tags: ['HTML', 'Python', 'suberbase', 'bootstrap'],
    liveUrl: 'https://mywep.vercel.app/home',
  },

];

const Projects: React.FC = () => {
  return (
    <section className="container mx-auto">
      <SectionTitle>// Featured Projects</SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
