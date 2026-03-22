import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectGrid = ({ projects, showFeaturedBadge = false }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} showFeaturedBadge={showFeaturedBadge} />
      ))}
    </div>
  );
};

export default ProjectGrid;
