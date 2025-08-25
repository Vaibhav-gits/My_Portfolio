import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="logo">Vaibhav Vaidya</div>

      {/* Hamburger Menu */}
      <div 
        className={`hamburger ${menuOpen ? 'active' : ''}`} 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <a href="#home" className="nav-link" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#skills" className="nav-link" onClick={() => setMenuOpen(false)}>Skills</a>
        <a href="#projects" className="nav-link" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#certifications" className="nav-link" onClick={() => setMenuOpen(false)}>Certifications</a>
        <a href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;
