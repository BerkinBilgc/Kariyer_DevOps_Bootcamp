import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectList from './ProjectList';

const Dashboard = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await axios.get('/api/projects');
      setProjects(response.data.value);
    };
    fetchProjects();
  }, []);

  return (
    <div>
      <h1>DevOps Dashboard</h1>
      <div>
        <h2>Projects: {projects.length}</h2>
        <ProjectList projects={projects} />
      </div>
    </div>
  );
};

export default Dashboard;
