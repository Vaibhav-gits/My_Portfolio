import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="navbar">
      <div className="logo">Vaibhav Vaidya</div>
      <nav className="nav-links">
        <NavLink to="/" end activeClassName="active">Home</NavLink>
        <NavLink to="/about" activeClassName="active">About</NavLink>
        <NavLink to="/skills" activeClassName="active">Skills</NavLink>
        <NavLink to="/projects" activeClassName="active">Projects</NavLink>
        <NavLink to="/certifications" activeClassName="active">Certifications</NavLink>
        <NavLink to="/contact" activeClassName="active">Contact</NavLink>
      </nav>

      <li>
  <a href="/Vaibhav_Vaidya_Resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">
    Resume
  </a>
</li>

    </header>

    
  );
};

export default Header;
