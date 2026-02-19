import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiGithub,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
import "../../styles/Contact.css";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch("http://localhost:5000/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.success) {
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      alert("Failed to send message.");
    }
  } catch (error) {
    console.error(error);
    alert("Server error.");
  }

  setIsSubmitting(false);
};

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

  const contactMethods = [
    {
      type: "Email",
      value: "vaibhavvdy@gmail.com",
      icon: FiMail,
      link: "mailto:vaibhavvdy@gmail.com",
      action: "Send Email",
    },
    {
      type: "Phone",
      value: "+91-9356570214",
      icon: FiPhone,
      link: "tel:+919356570214",
      action: "Call Now",
    },
    {
      type: "Location",
      value: "Nagpur, Maharashtra",
      icon: FiMapPin,
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: FiGithub,
      url: "https://github.com/Vaibhav-gits",
    },
    {
      name: "LinkedIn",
      icon: FiLinkedin,
      url: "https://linkedin.com/in/vaibhav-vaidya-a2a466301",
    },
  ];

  return (
    <section id="contact" className="contact-section">
      {/* Background Elements */}
      <div className="contact-background">
        <div className="contact-bg-orb contact-bg-orb-cyan"></div>
        <div className="contact-bg-orb contact-bg-orb-purple"></div>
        <div className="contact-bg-grid"></div>
      </div>

      <div className="contact-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="contact-header"
        >
          <h2 className="contact-title">
            <span className="contact-title-gradient">Get In Touch</span>
          </h2>
          <div className="contact-title-underline"></div>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="contact-content-grid"
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="contact-info-section">
            <div className="contact-intro">
              <h3 className="contact-intro-title">Let's Connect</h3>
              <p className="contact-intro-text">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions. Feel free to reach out
                through any of the methods below or send me a message using the
                form.
              </p>
            </div>
          {/* Contact Methods */}
            <div className="contact-methods">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.type}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  className="contact-method-card"
                >
                  <div className="contact-method-icon">
                    <method.icon className="contact-method-icon-svg" />
                  </div>
                  <div className="contact-method-content">
                    <h4 className="contact-method-title">{method.type}</h4>
                    <p className="contact-method-value">{method.value}</p>
                    {method.link && (
                      <a
                        href={method.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-method-link"
                      >
                        {method.action}
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="contact-social-section">
              <h4 className="contact-social-title">Follow Me</h4>
              <div className="contact-social-links">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-link"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="contact-form-section">
            <div className="contact-form-container">
              <h3 className="contact-form-title">Send a Message</h3>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="contact-form-row">
                  <div className="contact-form-group">
                    <label htmlFor="name" className="contact-form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="contact-form-input"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="contact-form-group">
                    <label htmlFor="email" className="contact-form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="contact-form-input"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="contact-form-group">
                  <label htmlFor="subject" className="contact-form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="contact-form-input"
                    placeholder="What's this about?"
                  />
                </div>

                <div className="contact-form-group">
                  <label htmlFor="message" className="contact-form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="contact-form-textarea"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="contact-form-submit"
                >
                  {isSubmitting ? (
                    <>
                      <div className="contact-form-spinner" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="contact-form-submit-icon" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
