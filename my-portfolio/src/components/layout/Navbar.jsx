import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { FiMenu, FiX, FiDownload, FiSun, FiMoon } from "react-icons/fi";
import "../../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem("darkMode");
      if (saved !== null) return saved === "true";
      if (typeof window !== "undefined" && window.matchMedia) {
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
      }
    } catch (e) {
    }
    return false;
  });

  const { scrollY } = useScroll();

  useEffect(() => {
    try {
      if (darkMode) {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
        localStorage.setItem("darkMode", "true");
      } else {
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
        localStorage.setItem("darkMode", "false");
      }
    } catch (e) {
    }
  }, [darkMode]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  // Hide/show navbar on scroll
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    // Add backdrop blur when scrolled
    setScrolled(latest > 50);
  });

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);

    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`navbar-fixed navbar-transition ${
          scrolled ? "navbar-scrolled" : "navbar-transparent"
        }`}
      >
        <div className="navbar-container">
          <div className="navbar-content">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="navbar-logo-wrapper"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="navbar-logo-gradient">Vaibhav</span>
              <span className="navbar-logo-sub">Vaidya</span>
              <motion.div
                className="navbar-logo-underline"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            {/* Desktop Navigation */}
            <div className="navbar-desktop-menu">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="navbar-desktop-link"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                  <motion.span
                    className="navbar-link-underline"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}

              {/* Resume Download Button */}
              <motion.a
                href="/assets/resume/Vaibhav_Vaidya_Resume.pdf"
                download
                className="navbar-resume-btn"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <FiDownload className="navbar-resume-icon" />
                Resume
              </motion.a>

              {/* Dark Mode Toggle Button */}
              <motion.button
                onClick={toggleDarkMode}
                className="navbar-theme-toggle"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle dark mode"
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: darkMode ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {darkMode ? (
                    <FiMoon className="navbar-theme-icon" />
                  ) : (
                    <FiSun className="navbar-theme-icon" />
                  )}
                </motion.div>
              </motion.button>
            </div>

            {/* Mobile Menu Button & Dark Mode Toggle */}
            <div className="navbar-mobile-controls">
              {/* Mobile Dark Mode Toggle */}
              <motion.button
                onClick={toggleDarkMode}
                className="navbar-mobile-theme"
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <FiMoon className="navbar-theme-icon" />
                ) : (
                  <FiSun className="navbar-theme-icon" />
                )}
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                className="navbar-mobile-toggle"
                onClick={() => setIsOpen(!isOpen)}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <FiX className="navbar-mobile-icon" />
                ) : (
                  <FiMenu className="navbar-mobile-icon" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="navbar-mobile-menu"
        >
          <div className="navbar-mobile-content">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="navbar-mobile-link"
                initial={{ x: -50, opacity: 0 }}
                animate={isOpen ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                transition={{ delay: index * 0.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}

            {/* Mobile Resume Button */}
            <motion.a
              href="/assets/resume/Vaibhav_Vaidya_Resume.pdf"
              download
              className="navbar-mobile-resume"
              initial={{ y: 20, opacity: 0 }}
              animate={isOpen ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ delay: 0.6 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload className="navbar-resume-icon" />
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="navbar-overlay"
        />
      )}
    </>
  );
};

export default Navbar;
