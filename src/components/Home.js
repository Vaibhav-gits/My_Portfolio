import React from "react";
import { FaGithub, FaLinkedin, FaReact, FaJava, FaDownload } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <img 
          src="/images.jpg" 
          alt="Vaibhav Vaidya" 
          className="profile-pic fade-in"
        />

        <h1>
          Hello, I'm <span className="highlight">Vaibhav Vaidya</span>
        </h1>

        <h2 className="subtitle">
          <Typewriter
            options={{
              strings: [
                "Full Stack Java Developer 🚀",
                "ReactJS Enthusiast 💻",
                "Java Backend Developer ⚡",
                "Problem Solver 💡"
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 40,
              delay: 60,
              cursor: "▌"
            }}
          />
        </h2>

        <p className="intro-text">
          Passionate about solving real-world problems using cutting-edge technologies. 
          Specialized in <strong>Java</strong>, <strong>ReactJS</strong>, and{" "}
          <strong>SQL</strong>. Dedicated to continuous learning and building 
          meaningful software solutions that make a difference.
        </p>

        <div className="icons">
          <a 
            href="https://github.com/vaibhavvaidya" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a 
            href="https://linkedin.com/in/vaibhavvaidya" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <FaReact className="react-icon" aria-label="React" />
          <FaJava className="java-icon" aria-label="Java" />
        </div>

        <a 
          href="/cv.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="resume-btn"
        >
          <FaDownload /> Download Resume
        </a>
      </div>
    </div>
  );
};

export default Home;
