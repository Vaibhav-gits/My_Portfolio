import React from 'react';
import './Contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact-section">
      <h1>📞 Contact Me</h1>
      <p>Feel free to reach out via email, phone, or social media.</p>

      <div className="contact-info">
        <div className="info-item">
          <FaEnvelope className="icon" />
          <span>vaibhavvdy@gmail.com</span>
        </div>
        <div className="info-item">
          <FaPhone className="icon" />
          <span>+91 9356570214</span>
        </div>
        <div className="info-item">
          <FaMapMarkerAlt className="icon" />
          <span>Nagpur, Maharashtra, India</span>
        </div>
      </div>

      <div className="social-links">
        <a href="https://www.linkedin.com/in/vaibhav-vaidya-a2a466301" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Vaibhav-gits" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </section>
  );
};

export default Contact;
