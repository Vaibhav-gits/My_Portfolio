import React from 'react';
import './Certifications.css';
import { FaCertificate } from 'react-icons/fa';

// Import your certificate images or PDFs
import fullStackCert from '../assets/Course_Certificate.jpg'; // or .pdf
import internshipCert from '../assets/metro_intern.jpg'; // or .pdf

const Certifications = () => {
  const certifications = [
    {
      title: "Full Stack Java Development",
      issuer: "Swati Computer Institute, Nagpur",
      link: fullStackCert,
      date: "Issued: 2023",
      icon: <FaCertificate className="cert-icon" />
    },
    {
      title: "Internship Certificate",
      issuer: "MAHA-Metro Rail Corporation Ltd, Nagpur",
      link: internshipCert,
      date: "Issued: 2023",
      icon: <FaCertificate className="cert-icon" />
    }
  ];

  return (
    <section className="certifications-section">
      <h1>🎓 Certifications</h1>
      <div className="click-instruction">
        <p>Click on any certificate below to view it in full size</p>
        <div className="click-me-badge">
          <span className="pulse-animation">✨ Click me to see certificate ✨</span>
        </div>
      </div>

      <div className="cert-grid">
        {certifications.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-card"
          >
            {cert.icon}
            <h3>{cert.title}</h3>
            <p className="cert-issuer">{cert.issuer}</p>
            <p className="cert-date">{cert.date}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
