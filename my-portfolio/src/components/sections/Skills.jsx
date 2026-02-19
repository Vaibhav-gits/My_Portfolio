import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../../styles/Skills.css";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Programming Languages",
      bgGlow: "cyan",
      skills: [
        { name: "C", level: 5, color: "#06b6d4" },
        { name: "C++", level: 5, color: "#06b6d4" },
        { name: "Java", level: 4, color: "#f59e0b" },
        { name: "Python", level: 5, color: "#3776ab" },
      ],
    },
    {
      title: "Frontend",
      bgGlow: "purple",
      skills: [
        { name: "HTML/CSS", level: 5, color: "#e34f26" },
        { name: "JavaScript", level: 5, color: "#f7df1e" },
        { name: "BootStrap", level: 4, color: "#7952b3" },
        { name: "React", level: 5, color: "#61dafb" },
        { name: "React Native", level: 4, color: "#61dafb" },
      ],
    },
    {
      title: "Backend",
      bgGlow: "teal",
      skills: [
        { name: "Node.js", level: 4, color: "#3c873a" },
        { name: "Express.js", level: 4, color: "#000000" },
        { name: "JSP/Servlets", level: 4, color: "#6b7280" },
        { name: "Spring Boot", level: 5, color: "#6db33f" },
        { name: "Hibernate", level: 4, color: "#4b5563" },
      ],
    },
    {
      title: "Database",
      bgGlow: "orange",
      skills: [
        { name: "MongoDB", level: 4, color: "#47a248" },
        { name: "MySQL", level: 4, color: "#00758f" },
        { name: "SQL", level: 4, color: "#0f172a" },
      ],
    },
    {
      title: "Tools & Others",
      bgGlow: "gray",
      skills: [
        { name: "VS Code", level: 4, color: "#0078d7" },
        { name: "Netbeans", level: 3, color: "#2b2b2b" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const categoryVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const skillVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="skills" className="skills-section">
      {/* Background Elements */}
      <div className="skills-background">
        <div className="skills-bg-orb skills-bg-orb-cyan"></div>
        <div className="skills-bg-orb skills-bg-orb-purple"></div>
        <div className="skills-bg-grid"></div>
      </div>

      <div className="skills-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="skills-header"
        >
          <h2 className="skills-title">
            <span className="skills-title-gradient">Skills & Expertise</span>
          </h2>
          <p className="skills-description">
            A comprehensive overview of my technical skills and proficiency
            levels across various technologies
          </p>
          <div className="skills-title-underline"></div>
        </motion.div>

        {/* Skills Categories */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="skills-categories"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={categoryVariants}
              className="skills-category"
            >
              {/* Category Header */}
              <div className="skills-category-header">
                <div
                  className={`skills-category-accent skills-category-accent-${category.bgGlow}`}
                ></div>
                <h3 className="skills-category-title">{category.title}</h3>
                <div
                  className={`skills-category-line skills-category-line-${category.bgGlow}`}
                ></div>
              </div>

              {/* Skills Grid */}
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    variants={skillVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="skills-skill-item"
                  >
                    {/* Skill Card */}
                    <div className="skills-skill-card">
                      {/* Hover Glow Effect */}
                      <div
                        className={`skills-skill-glow skills-skill-glow-${category.bgGlow}`}
                      ></div>

                      {/* Content */}
                      <div className="skills-skill-content">
                        {/* Icon and Name */}
                        <div className="skills-skill-info">
                          <div
                            className="skills-skill-icon-container"
                            style={{
                              boxShadow: `0 0 20px ${skill.color}20`,
                            }}
                          >
                            {skill.icon ? (
                              <skill.icon
                                className="skills-skill-icon"
                                style={{ color: skill.color }}
                              />
                            ) : (
                              <div
                                className="skills-skill-icon"
                                style={{ color: skill.color }}
                              >
                                {skill.name.charAt(0)}
                              </div>
                            )}
                          </div>
                          <div className="skills-skill-details">
                            <h4 className="skills-skill-name">{skill.name}</h4>
                          </div>
                        </div>
                      </div>

                      {/* Corner Accent */}
                      <div
                        className={`skills-skill-accent skills-skill-accent-${category.bgGlow}`}
                      ></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
