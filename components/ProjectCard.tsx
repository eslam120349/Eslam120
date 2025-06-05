
import React from 'react';
import { Project } from '../types';
import { GitHubIcon } from './icons/GitHubIcon';

const ExternalLinkIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-1">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);


const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-terminalGreen/40 hover:scale-105">
      <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold text-terminalGreen mb-3">{project.title}</h3>
        <p className="text-gray-300 text-sm mb-4 flex-grow">{project.description}</p>
        <div className="mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-gray-700 text-terminalGreen text-xs font-mono px-2 py-1 rounded-full mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex space-x-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-300 hover:text-terminalGreen font-medium transition-colors duration-150 group"
            >
              Live Demo <ExternalLinkIcon />
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-300 hover:text-terminalGreen font-medium transition-colors duration-150 group"
            >
              <GitHubIcon className="w-5 h-5 mr-1" /> Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
