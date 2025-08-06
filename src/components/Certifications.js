import React from 'react';
import './Certifications.css';
import { FaCertificate } from 'react-icons/fa';

const Certifications = () => {
  return (
    <section className="certifications-section">
      <h1>🎓 Certifications</h1>
      <p>Here are some of the certifications I've completed:</p>

      <ul className="cert-list">
        <li>
          <FaCertificate className="icon" />
          Full Stack Java Development – <strong>Swati Computer Institute, Nagpur</strong>
        </li>
        <li>
          <FaCertificate className="icon" />
          Internship – <strong>MAHA-Metro Rail Corporation Ltd, Nagpur</strong>
        </li>
      </ul>
    </section>
  );
};

export default Certifications;
