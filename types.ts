import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface Skill {
  id: string;
  name: string;
  level?: number; // Optional: 0-100 for progress bar
  icon?: React.ReactNode; // Optional: SVG icon component
}