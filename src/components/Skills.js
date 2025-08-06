import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills-section">
      <h1>🚀 My Skills</h1>
      <p className="intro">These are the technologies and tools I'm proficient in:</p>

      <div className="skills-container">
        <div className="skill-card">
          <h2>Frontend</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>BootStrap</li>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>ReactJS</li>
            <li>AngularJS</li>
          </ul>
        </div>

        <div className="skill-card">
          <h2>Backend</h2>
          <ul>
            <li>Java</li>
            <li>JSP</li>
           <li>Servlet</li>
           <li>Spring Boot</li>
            <li>Hibernate</li>
          </ul>
        </div>

         <div className="skill-card">
           <h2>DataBase</h2>
            <ul>
               <li>MySql</li>
               <li>Sql</li>
               <li>MongoDB</li>
            </ul>
        </div>

        <div className="skill-card">
          <h2>Tools</h2>
          <ul>
            <li>NetBeans</li>
            <li>GitHub</li>
            <li>VS Code</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
