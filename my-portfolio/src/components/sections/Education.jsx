import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Timeline from "../ui/Timeline";
import { educationData } from "../../data/educationData";
import "../../styles/Education.css";
import "../../styles/Timeline.css";

const Education = () => {
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
    <section id="education" className="education-section">
      {/* Background Elements */}
      <div className="education-background">
        <div className="education-bg-orb education-bg-orb-purple"></div>
        <div className="education-bg-orb education-bg-orb-blue"></div>
        <div className="education-bg-grid"></div>
      </div>

      <div className="education-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="education-header"
        >
          <h2 className="education-title">
            <span className="education-title-gradient">Education</span>
          </h2>
          <p className="education-description">
            My academic background and qualifications
          </p>
          <div className="education-title-underline"></div>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Timeline items={educationData} />
        </motion.div>
      </div>
    </section>
  );
};

export default Education;