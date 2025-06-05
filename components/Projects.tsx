
import React from 'react';
import { Project } from '../types';
import ProjectCard from './ProjectCard';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-terminalGreen font-mono">
    {children}
  </h2>
);

const projectsData: Project[] = [
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
