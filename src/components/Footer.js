import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Vaibhav Vaidya</h3>
            <p>Full Stack Java Developer passionate about creating innovative solutions and bringing ideas to life.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect With Me</h4>
            <div className="social-links">
              <a 
                href="https://github.com/Vaibhav-gits" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/vaibhav-vaidya-a2a466301" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href="mailto:vaibhavvdy@gmail.com"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>
            Made with <FaHeart className="heart-icon" /> by Vaibhav Vaidya &copy; {currentYear}
          </p>
          <p className="footer-note">
            Built with React.js and lots of ☕
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
