import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "ReactJS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "Bootstrap", level: 80 },
        { name: "AngularJS", level: 75 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Java", level: 88 },
        { name: "Spring Boot", level: 85 },
        { name: "JSP/Servlet", level: 80 },
        { name: "Hibernate", level: 78 },
        { name: "REST APIs", level: 90 },
        { name: "Microservices", level: 75 }
      ]
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 70 },
        { name: "SQL", level: 90 },
        { name: "Git/GitHub", level: 88 },
        { name: "VS Code", level: 95 },
        { name: "NetBeans", level: 80 }
      ]
    }
  ];

  return (
    <section className="skills-section">
      <h1>💻 Technical Skills</h1>
      <p className="intro">
        Here's a comprehensive overview of my technical expertise across different domains
      </p>

      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div className="skill-card" key={index}>
            <h2>{category.title}</h2>
            <ul className="skill-list">
              {category.skills.map((skill, skillIndex) => (
                <li className="skill-item" key={skillIndex}>
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-level">
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
