import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Timeline from "../ui/Timeline";
import { experienceData } from "../../data/experienceData";
import "../../styles/Experiences.css";

const Experience = () => {
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

  return (
    <section id="experience" className="experience-section">
      {/* Background Elements */}
      <div className="experience-background">
        <div className="experience-bg-orb experience-bg-orb-purple"></div>
        <div className="experience-bg-orb experience-bg-orb-blue"></div>
        <div className="experience-bg-grid"></div>
      </div>

      <div className="experience-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="experience-header"
        >
          <h2 className="experience-title">
            <span className="experience-title-gradient">Experience</span>
          </h2>
          <p className="experience-description">
            My professional journey and key milestones
          </p>
          <div className="experience-title-underline"></div>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Timeline items={experienceData} />
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
