import React from 'react';

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '1rem', background: '#eee' }}>
      <p>&copy; {new Date().getFullYear()} Vaibhav Vaidya. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
