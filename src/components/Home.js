import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section className="home">
      <h1>Hello, I'm <span className="highlight">Vaibhav Vaidya</span></h1>
      <h2 className="typing">Full Stack Java Developer 🚀</h2>
      <p className="fade-in">
        Passionate about solving real-world problems using Java, ReactJS, and SQL. Dedicated to continuous learning and building meaningful software solutions.
      </p>
      <a href="/Vaibhav_Resume.pdf" download className="btn">Download Resume</a>
    </section>
  );
};

export default Home;
