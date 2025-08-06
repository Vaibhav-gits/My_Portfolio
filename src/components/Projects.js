import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Helmet & Seatbelt Detection System',
    description: 'AI-powered detection system for traffic safety using YOLO & ReactJS',
    link: '#', // Replace with deployed URL or GitHub repo
  },
  {
    title: 'Weather App',
    description: 'Fetches weather data using OpenWeatherMap API with ReactJS',
    link: '#',
  },
  {
    title: 'ToDo App',
    description: 'Simple CRUD ToDo app using React Hooks and useState',
    link: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio built using ReactJS showcasing skills & projects',
    link: '#',
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h1>💻 My Projects</h1>
      <p>Here are some of the notable projects I've worked on:</p>

      <div className="project-cards">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              🔗 View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
