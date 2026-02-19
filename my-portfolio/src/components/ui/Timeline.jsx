import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import "../../styles/Timeline.css";

const Timeline = ({ items }) => {
  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="timeline-container">
      {items.map((item, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="timeline-item-wrapper"
        >
          <div className="timeline-item">
            {/* Icon */}
            <div className="timeline-icon">
              {item.type === "education" ? (
                <GraduationCap />
              ) : (
                <Briefcase />
              )}
            </div>

            {/* Content */}
            <div className="timeline-content">
              <h3 className="timeline-title">{item.title}</h3>
              
              {item.company && (
                <p className="timeline-company">{item.company}</p>
              )}
              
              <p className="timeline-date">{item.date}</p>
              
              {item.description && (
                <p className="timeline-description">{item.description}</p>
              )}

              {item.achievements && item.achievements.length > 0 && (
                <div className="timeline-achievements">
                  <h4>Key Achievements:</h4>
                  <ul>
                    {item.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Timeline Line */}
          {index < items.length - 1 && (
            <div className="timeline-line"></div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;