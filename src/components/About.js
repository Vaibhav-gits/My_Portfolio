import React from 'react';
import './About.css';
import { FaCode, FaGraduationCap, FaRocket, FaHeart } from 'react-icons/fa';

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <div className="about-text">
          <h1>About Me</h1>
          <p>
            I'm <strong>Vaibhav Vaidya</strong>, a passionate Full Stack Java Developer from Nagpur, 
            currently pursuing Computer Engineering. I specialize in building modern, scalable 
            web applications using cutting-edge technologies like React, Java, and SQL.
          </p>
          <p>
            With a strong foundation in both frontend and backend development, I create 
            comprehensive solutions that deliver exceptional user experiences. I'm constantly 
            learning and exploring new technologies to stay at the forefront of web development.
          </p>
          
          <div className="about-highlights">
            <div className="highlight-item">
              <FaCode className="highlight-icon" />
              <h3>Full Stack</h3>
              <p>End-to-end web development expertise</p>
            </div>
            <div className="highlight-item">
              <FaGraduationCap className="highlight-icon" />
              <h3>Computer Engineering</h3>
              <p>Currently pursuing my degree</p>
            </div>
            <div className="highlight-item">
              <FaRocket className="highlight-icon" />
              <h3>Modern Tech</h3>
              <p>React, Java, Spring Boot, SQL</p>
            </div>
            <div className="highlight-item">
              <FaHeart className="highlight-icon" />
              <h3>Passionate</h3>
              <p>Love for clean code and innovation</p>
            </div>
          </div>
        </div>
        
        <div className="about-image">
          <img 
            src="/images.jpg" 
            alt="Vaibhav Vaidya - Full Stack Developer" 
          />
        </div>
      </div>
    </section>
  );
};

export default About;
