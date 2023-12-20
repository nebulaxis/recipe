// Footer.jsx
import React, { useEffect, useState } from 'react';
import { FaPhone, FaEnvelope, FaFacebook, FaPinterest, FaInstagram } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const isApproachingBottom = scrollPosition + windowHeight >= documentHeight - 100; // Adjust the threshold as needed

      setIsFooterVisible(isApproachingBottom);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className={`main-footer ${isFooterVisible ? 'visible' : 'hidden'}`}>
      <div className="footer-content">
        <div className="contact-info">
          <p><FaPhone /> (123) 456-7890</p>
          <p><FaEnvelope /> info@example.com</p>
        </div>
        <div className="social-links">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook style={{ padding: '0 5px', color: '#3b5998' }} />
          </a>
          <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
            <FaPinterest style={{ padding: '0 5px', color: '#bd081c' }} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram style={{ padding: '0 5px', color: '#e4405f' }} />
          </a>
        </div>
        <div className="legal-links">
          <a href="/community-guidelines">Community Guidelines</a>
          <a href="/subscribe">Subscribe</a>
          <a href="/terms-of-use">Terms of Use</a>
          <a href="/cookie-choices">Cookie Choices</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
