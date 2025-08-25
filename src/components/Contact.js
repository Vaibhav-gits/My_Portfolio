import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // EmailJS configuration (you need to set up EmailJS account)
    const emailData = {
      service_id: 'YOUR_SERVICE_ID',
      template_id: 'YOUR_TEMPLATE_ID',
      user_id: 'YOUR_USER_ID',
      template_params: {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'vaibhavvdy@gmail.com'
      }
    };

    // Send email using EmailJS
    fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    })
    .then(response => {
      if (response.ok) {
        alert('Thank you for your message! I\'ll get back to you soon.');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        alert('There was an error sending your message. Please try again later.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('There was an error sending your message. Please try again later.');
    })
    .finally(() => {
      setIsLoading(false);
    });
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h1>📞 Get In Touch</h1>
          <p>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="contact-methods">
            <div className="contact-card">
              <FaEnvelope className="contact-icon" />
              <div className="contact-details">
                <h3>Email</h3>
                <p>vaibhavvdy@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-card">
              <FaPhone className="contact-icon" />
              <div className="contact-details">
                <h3>Phone</h3>
                <p>+91 9356570214</p>
              </div>
            </div>
            
            <div className="contact-card">
              <FaMapMarkerAlt className="contact-icon" />
              <div className="contact-details">
                <h3>Location</h3>
                <p>Nagpur, Maharashtra, India</p>
              </div>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">
                <FaLinkedin />
              </div>
              <div className="contact-details">
                <h3>LinkedIn</h3>
                <p>linkedin.com/in/vaibhav-vaidya-a2a466301</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send me a message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
            
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project or inquiry..."
              />
            </div>
            
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="loading-spinner"></span>
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane /> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
