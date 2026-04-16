import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";
import "./ScrollToTop.css";

const ScrollToTop = () => {
  const { scrollYProgress } = useScroll();

  // appearance: hidden at very top, visible once user scrolls a little
  const visibleOpacity = useTransform(scrollYProgress, [0, 0.02, 1], [0, 1, 1]);

  // circular progress ring values
  const R = 18;
  const C = 2 * Math.PI * R; // circumference
  const dashOffset = useTransform(scrollYProgress, [0, 1], [C, 0]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      className="scroll-indicator bottom-right"
      style={{ opacity: visibleOpacity }}
      aria-hidden={false}
    >
      <motion.button
        onClick={scrollToTop}
        className="scroll-to-top circular"
        aria-label="Scroll to top"
        style={{ opacity: visibleOpacity }}
      >
        <svg
          className="progress-ring"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          aria-hidden
        >
          <circle
            className="ring-bg"
            cx="24"
            cy="24"
            r={R}
            fill="transparent"
            stroke="rgba(0,0,0,0.06)"
            strokeWidth="4"
          />
          <motion.circle
            className="ring-progress"
            cx="24"
            cy="24"
            r={R}
            fill="transparent"
            stroke="var(--indicator-thumb, rgba(100,100,100,0.8))"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={C}
            style={{ strokeDashoffset: dashOffset }}
            transform="rotate(-90 24 24)"
          />
        </svg>

        <span className="arrow-icon">
          <FiArrowUp />
        </span>
      </motion.button>
    </motion.div>
  );
};

export default ScrollToTop;
