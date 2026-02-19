import { motion } from "framer-motion";
import {
  FiDownload,
  FiAward,
  FiCode,
  FiCoffee,
  FiCalendar,
  FiMapPin,
  FiMail,
  FiPhone,
} from "react-icons/fi";
import { useInView } from "react-intersection-observer";
import "../../styles/About.css";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const personalInfo = [
    { icon: FiCalendar, label: "Age", value: "23 Years" },
    { icon: FiMapPin, label: "Location", value: "Nagpur, Maharashtra" },
    { icon: FiMail, label: "Email", value: "vaibhavvdy@gmail.com" },
    { icon: FiPhone, label: "Phone", value: "+91-9356570214" },
  ];

  const highlights = [
    {
      title: "Full Stack Development",
      description:
        "Proficient in building responsive and performant end-to-end web applications.",
    },
    {
      title: "Mobile App Development",
      description:
        "Hands-on experience building responsive and performant mobile applications.",
    },
    {
      title: "Continuous Learning",
      description:
        "Quick to adapt and constantly learning new technologies to stay industry-ready.",
    },

    {
      title: "Problem Solving",
      description:
        "Strong analytical skills with a passion for solving complex technical challenges.",
    },
  ];

  return (
    <section id="about" className="about-section">
      {/* Background Elements */}
      <div className="about-background">
        <div className="about-bg-orb about-bg-orb-blue"></div>
        <div className="about-bg-orb about-bg-orb-cyan"></div>
      </div>

      <div className="about-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="about-header"
        >
          <h2 className="about-title">
            <span className="about-title-gradient">About Me</span>
          </h2>
          <div className="about-title-underline"></div>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="about-content-grid"
        >
          {/* Left Side - Story & Details */}
          <motion.div variants={itemVariants} className="about-story-section">
            {/* Introduction */}
            <div className="about-introduction">
              I’m an aspiring <strong>Full Stack Developer</strong> currently
              pursuing a B.Tech in Computer Engineering, with hands-on
              experience building modern web and mobile applications. I enjoy
              turning ideas into scalable, real-world solutions and working
              across both frontend and backend systems.
             
              <br />
              My technical experience includes{" "}
              <strong>
                React, React Native, Spring Boot, Node.js, and Express
              </strong>
              , along with databases like <strong>MySQL and MongoDB</strong>.
              I’ve worked on projects such as an
              <strong>
                {" "}
                AI-driven helmet and seatbelt detection system
              </strong>{" "}
              using YOLOv8 and a{" "}
              <strong>full-stack student management system</strong> implementing
              complete CRUD functionality.
            
              <br />
              Through internships at{" "}
              <strong>Nagpur Metro Rail Corporation</strong> and as a
              <strong> React & Node.js Developer Intern</strong>, I gained
              exposure to enterprise-level systems, backend API development, and
              mobile application features. I’m passionate about clean code,
              continuous learning, and building impactful software, and I’m
              actively seeking an
              <strong> entry-level software development role</strong>.
            </div>

            {/* What I Do */}
            <div className="about-highlights">
              <h4 className="about-highlights-title"></h4>
              <div className="about-highlights-grid">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.title}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    className="about-highlight-item"
                  >
                    <div className="about-highlight-bullet"></div>
                    <div className="about-highlight-content">
                      <h5 className="about-highlight-title">
                        {highlight.title}
                      </h5>
                      <p className="about-highlight-description">
                        {highlight.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Photo */}
          <motion.div variants={itemVariants} className="about-photo-section">
            {/* Photo Container */}
            <div className="about-photo-wrapper">
              {/* Decorative Elements */}
              <div className="about-photo-decoration"></div>

              {/* Photo Frame */}
              <div className="about-photo-frame">
                <div className="about-photo-container">
                  <div className="about-photo-glow"></div>
                  <img
                    src="/assets/images/passphoto.png"
                    alt="Vaibhav Vaidya"
                    className="about-photo-image"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
