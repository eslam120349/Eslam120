
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
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce website with product listings, cart functionality, user authentication, and an admin panel. Built with MERN stack.',
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 'project2',
    title: 'Task Management App',
    description: 'A collaborative task management tool allowing users to create, assign, and track tasks. Features real-time updates with Socket.io.',
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    tags: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 'project3',
    title: 'Portfolio Generator API',
    description: 'A RESTful API service that allows users to generate portfolio websites by providing their data in JSON format. Leverages serverless functions.',
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    tags: ['Python', 'Flask', 'Docker', 'AWS Lambda', 'API Design'],
    repoUrl: '#',
  },
   {
    id: 'project4',
    title: 'Interactive Data Dashboard',
    description: 'A web application for visualizing complex datasets with interactive charts and filters. Used D3.js for custom visualizations.',
    imageUrl: 'https://picsum.photos/seed/project4/600/400',
    tags: ['React', 'D3.js', 'Redux', 'GraphQL'],
    liveUrl: '#',
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
