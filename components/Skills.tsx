
import React from 'react';
import { Skill } from '../types';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-terminalGreen font-mono">
    {children}
  </h2>
);

const skillsData: Skill[] = [
  { id: 'react', name: 'React', level: 90 },
  { id: 'typescript', name: 'TypeScript', level: 85 },
  { id: 'nodejs', name: 'Node.js', level: 80 },
  { id: 'python', name: 'Python', level: 75 },
  { id: 'tailwind', name: 'Tailwind CSS', level: 90 },
  { id: 'nextjs', name: 'Next.js', level: 70 },
  { id: 'docker', name: 'Docker', level: 65 },
  { id: 'aws', name: 'AWS', level: 60 },
  { id: 'figma', name: 'Figma', level: 70 },
  { id: 'git', name: 'Git & GitHub', level: 85 },
  { id: 'bootstrap', name: 'bootstrap', level: 90 },
];

const SkillItem: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div className="bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-terminalGreen/30 transition-shadow duration-300">
    <h3 className="text-lg font-semibold text-terminalGreen mb-2">{skill.name}</h3>
    {skill.level && (
      <div className="w-full bg-gray-600 rounded-full h-2.5">
        <div
          className="bg-terminalGreen h-2.5 rounded-full"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    )}
  </div>
);


const Skills: React.FC = () => {
  return (
    <section className="container mx-auto">
      <SectionTitle>// Tech Stack</SectionTitle>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skillsData.map((skill) => (
          <SkillItem key={skill.id} skill={skill} />
        ))}
      </div>
      <p className="text-center text-gray-400 mt-12 text-sm">
        ...and always learning more!
      </p>
    </section>
  );
};

export default Skills;
