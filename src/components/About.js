import React from 'react';
import './About.css'; // Optional if you're styling it

const About = () => {
  return (
    <section className="about">
      <h1>About Me</h1>
      <p>
        I'm Vaibhav Vaidya, a passionate Full Stack Java Developer from Nagpur.  
        Currently pursuing Computer Engineering and building real-world apps using React, Java, and SQL.
      </p>
      <a
  href="/Vaibhav_Vaidya_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="download-resume"
>
  📄 Download Resume
</a>

    </section>
    
  );
};

export default About;
