import React from 'react';

const ProjectList = ({ projects }) => {
  return (
    <div>
      {projects.map((project) => (
        <div key={project.id}>
          <h3>{project.name}</h3>
          {/* Additional details like pipelines, releases, repos, users... */}
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
