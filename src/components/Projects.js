import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    title: 'Helmet & Seatbelt Detection System',
    description: 'AI-powered computer vision system using YOLO algorithm for real-time traffic safety monitoring. Built with ReactJS frontend and Python backend for intelligent object detection.',
    technologies: ['ReactJS', 'Python', 'YOLO', 'OpenCV', 'TensorFlow'],
    githubLink: '',
    demoLink: '',
    status: 'In Development'
  },
  {
    title: 'Weather App',
    description: 'Responsive weather application that fetches real-time data from OpenWeatherMap API. Features location-based weather, 5-day forecast, and beautiful UI animations.',
    technologies: ['ReactJS', 'CSS3', 'OpenWeatherMap API', 'Geolocation'],
    githubLink: 'https://github.com/Vaibhav-gits/Weather',
    demoLink: '',
    status: 'Completed'
  },
  {
    title: 'ToDo Application',
    description: 'Modern task management app with CRUD operations, local storage persistence, and drag-and-drop functionality. Clean, intuitive interface with dark/light mode support.',
    technologies: ['React Hooks', 'LocalStorage', 'CSS3', 'JavaScript'],
    githubLink: 'https://github.com/Vaibhav-gits/ToDo_App',
    demoLink: '',
    status: 'Completed'
  },
  {
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution with product catalog, shopping cart, user authentication, and payment integration. Built with modern React patterns and responsive design.',
    technologies: ['ReactJS', 'Node.js', 'MongoDB', 'JWT', 'Stripe'],
    githubLink: 'https://github.com/Vaibhav-gits/E-commerse',
    demoLink: '',
    status: 'Completed'
  }
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h1>🚀 Projects</h1>
      <p>Here are some of my recent projects that showcase my skills and passion for development</p>

      <div className="project-cards">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-status">
              <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                {project.status}
              </span>
            </div>
            
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            
            <div className="technologies">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="project-links">
              {project.githubLink && (
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link github"
                >
                  <FaGithub /> Code
                </a>
              )}
              {project.demoLink && (
                <a 
                  href={project.demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link demo"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
              {!project.githubLink && !project.demoLink && (
                <span className="coming-soon">Coming Soon</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
