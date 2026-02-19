import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiMapPin,
  FiDownload,
  FiArrowRight,
} from "react-icons/fi";

import "../../styles/Hero.css";

const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const typingSpeed = 80;
  const [hovered, setHovered] = useState(false);

  const roles = ["Full Stack Developer", "Mobile Application Developer"];

  useEffect(() => {
    const current = loopNum % roles.length;
    const fullText = roles[current];

    const timer = setTimeout(() => {
      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        if (text.length === 1) {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      } else {
        setText(fullText.substring(0, text.length + 1));
        if (text.length === fullText.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, roles]);

  const socialLinks = [
    { name: "GitHub", icon: FiGithub, url: "https://github.com/Vaibhav-gits" },
    {
      name: "LinkedIn",
      icon: FiLinkedin,
      url: "https://linkedin.com/in/vaibhav-vaidya-a2a466301",
    },
    { name: "Email", icon: FiMail, url: "mailto:vaibhavvdy@gmail.com" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const photoVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section id="home" className="hero-section">
      {/* Background Orbs */}
      <div className="hero-gradient-orb hero-orb-blue hero-z-0"></div>
      <div className="hero-gradient-orb hero-orb-cyan hero-z-0"></div>

      {/* Main Content */}
      <div className="hero-container-spacing hero-z-10">
        <div className="hero-grid-layout">
          {/* LEFT – IMAGE */}
          <motion.div
            variants={photoVariants}
            initial="hidden"
            animate="visible"
            className="hero-photo-container"
          >
            <div
              className="hero-photo-wrapper"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <div className="hero-photo-ring"></div>
              <div className="hero-photo-glow"></div>
              <img
                src="/assets/images/passphoto.png"
                alt="Vaibhav Vaidya"
                className="hero-photo-image"
              />

              {hovered && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="hero-photo-overlay"
                >
                  <span className="hero-photo-text">
                    {text}
                    <span className="hero-typing-cursor">|</span>
                  </span>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* RIGHT – CONTENT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hero-content-section"
          >
            <div className="hero-content-header">
              <motion.h1 variants={itemVariants} className="hero-title">
                <span className="hero-title-text">I'm </span>
                <span className="hero-title-gradient">Vaibhav Vaidya</span>
              </motion.h1>

              <motion.h2 variants={itemVariants} className="hero-subtitle">
                {text}
                <span className="hero-typing-cursor">|</span>
              </motion.h2>
            </div>

            <motion.p variants={itemVariants} className="hero-description">
              Aspiring Full Stack Developer with hands-on experience in web and
              mobile application development. Seeking an entry-level software
              development role to apply problem-solving skills and contribute to
              real-world projects.
            </motion.p>

            {/* CTA BUTTONS */}
            <motion.div variants={itemVariants} className="hero-button-group">
              <a href="#projects" className="hero-btn-primary">
                View My Work <FiArrowRight />
              </a>

              <a href="#contact" className="hero-btn-secondary">
                Get In Touch
              </a>

              <a
                href="/assets/resume/Vaibhav_Vaidya_Resume.pdf"
                download
                className="hero-btn-tertiary"
              >
                <FiDownload /> Download CV
              </a>
            </motion.div>

            {/* SOCIAL + CONTACT */}
            <div className="hero-social-contact">
              <motion.div variants={itemVariants} className="hero-social-links">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-social-icon"
                    aria-label={social.name}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </motion.div>

              <motion.div variants={itemVariants} className="hero-contact-info">
                <span className="hero-contact-item">
                  <FiPhone className="hero-contact-icon" /> +91-9356570214
                </span>
                <span className="hero-contact-item">
                  <FiMail className="hero-contact-icon" /> vaibhavvdy@gmail.com
                </span>
                <span className="hero-contact-item">
                  <FiMapPin className="hero-contact-icon" /> Nagpur, Maharashtra
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;