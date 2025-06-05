
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
    description: 'A full-featured e-commerce website with product listings, cart functionality, user authentication, and an admin panel. Built with MERN stack.',
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    tags: ['HTML', 'Python', 'suberbase', 'bootstrap'],
    liveUrl: 'https://mywep.vercel.app/home',
    repoUrl: 'https://github.com/eslam120349/mywep',
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
