import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FiGithub,
  FiExternalLink,
  FiCode,
  FiLayers,
  FiZap,
} from "react-icons/fi";
import {
  SiReact,
  SiSpring,
  SiMysql,
  SiPython,
  SiFlask,
  SiJavascript,
  SiBootstrap,
  SiOpencv,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import "../../styles/Project.css";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      title: "AI-Driven Helmet & Seatbelt Detection System",
      description:
        "A full-stack AI system using YOLOv8 for detecting vehicles, persons, helmets, seatbelts, and license plates from images/videos. Features OCR for accurate license plate text extraction, JWT authentication, and a comprehensive violation dashboard.",

      category: "AI & Full Stack",
      image: "/assets/images/Helmet-Seatbelt.jpg",
      tags: [
        "Python",
        "Flask",
        "React",
        "YOLOv8",
        "OpenCV",
        "MySQL",
        "AI/ML",
        "Computer Vision",
      ],
      techStack: [
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "Flask", icon: SiFlask, color: "#000000" },
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "YOLOv8", icon: SiPython, color: "#3776AB" },
        { name: "OpenCV", icon: SiOpencv, color: "#5C3EE8" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      ],
      features: [
        "Real-time object detection using YOLOv8",
        "License plate recognition with OCR",
        "Live webcam integration",
        "JWT authentication & authorization",
        "Violation tracking dashboard",
        "Image/Video upload support",
      ],
      github:
        "https://github.com/Vaibhav-gits/AI-Driven-Helmet-and-seatbelt-detection-System",
      demo: "#",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "Student Management System",
      description:
        "A comprehensive full-stack web application to manage student records efficiently using CRUD operations. Features a user-friendly interface for adding, updating, deleting, and viewing student details with secure data handling.",

      category: "Full Stack Web",
      image: "/assets/images/student-managment-system.jpg",
      tags: [
        "Java",
        "Spring Boot",
        "MySQL",
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "REST API",
      ],
      techStack: [
        { name: "Java", icon: FaJava, color: "#007396" },
        { name: "Spring Boot", icon: SiSpring, color: "#6DB33F" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
        { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      ],
      features: [
        "Complete CRUD operations",
        "RESTful API architecture",
        "Form validation & error handling",
        "Responsive UI with Bootstrap",
        "Search and filter functionality",
        "Secure data management",
      ],
      github: "https://github.com/Vaibhav-gits/Student_Management_System",
      demo: "#",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const projectVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="projects-section">
      {/* Background Elements */}
      <div className="projects-background">
        <div className="projects-bg-orb projects-bg-orb-cyan"></div>
        <div className="projects-bg-orb projects-bg-orb-green"></div>
        <div className="projects-bg-grid"></div>
      </div>

      <div className="projects-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="projects-header"
        >
          <h2 className="projects-title">
            <span className="projects-title-gradient">Featured Projects</span>
          </h2>
          <p className="projects-description">
            A showcase of my recent work in full-stack development and AI
            integration
          </p>
          <div className="projects-title-underline"></div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="projects-grid"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              className={`projects-project-item ${index % 2 === 1 ? "projects-project-reverse" : ""}`}
            >
              {/* Project Image */}
              <motion.div
                className={`projects-project-image ${index % 2 === 1 ? "projects-project-image-reverse" : ""}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image Container */}
                <div className="projects-image-container">
                  {/* Gradient Overlay */}
                  <div
                    className={`projects-image-overlay projects-image-overlay-${project.id}`}
                  ></div>

                  {/* Project image (renders from public/assets/images) */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="projects-image"
                  />

                  {/* Hover Overlay */}
                  <div className="projects-hover-overlay">
                    <div className="projects-hover-buttons">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projects-btn-code"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiGithub />
                        Code
                      </motion.a>
                      {project.demo !== "#" && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="projects-btn-demo"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FiExternalLink />
                          Demo
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="projects-category-badge">
                    <span
                      className={`projects-category-text projects-category-text-${project.id}`}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Project Details */}
              <div
                className={`projects-project-details ${index % 2 === 1 ? "projects-project-details-reverse" : ""}`}
              >
                {/* Title */}
                <div className="projects-project-title-section">
                  <motion.h3
                    className="projects-project-title"
                    whileHover={{ x: 5 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="projects-project-description">
                    {project.description}
                  </p>
                  <p className="projects-project-long-description">
                    {project.longDescription}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="projects-tech-stack">
                  <h4 className="projects-tech-stack-title">
                    <FiLayers className="projects-tech-stack-icon" />
                    Tech Stack
                  </h4>
                  <div className="projects-tech-stack-list">
                    {project.techStack.map((tech) => (
                      <motion.div
                        key={tech.name}
                        className="projects-tech-item"
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        <tech.icon style={{ color: tech.color }} />
                        <span className="projects-tech-name">{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="projects-features">
                  <h4 className="projects-features-title">
                    <FiZap className="projects-features-icon" />
                    Key Features
                  </h4>
                  <ul className="projects-features-list">
                    {project.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        className="projects-feature-item"
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <span className="projects-feature-bullet">▹</span>
                        <span className="projects-feature-text">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="projects-action-buttons">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects-btn-view-code"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiGithub />
                    View Code
                  </motion.a>
                  {project.demo !== "#" && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`projects-btn-live-demo projects-btn-live-demo-${project.id}`}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiExternalLink />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="projects-view-more"
        >
          <p className="projects-view-more-text">
            Want to see more of my work?
          </p>
          <motion.a
            href="https://github.com/Vaibhav-gits"
            target="_blank"
            rel="noopener noreferrer"
            className="projects-btn-github"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiGithub size={20} />
            View More on GitHub
            <FiExternalLink size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
