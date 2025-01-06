import React from 'react';
import { Github } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="custom-footer">
      <div className="footer-container">
        <h2 className="brand-text">The News App</h2>
        
        <a 
          href="https://github.com/Antrita/News_App"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          <Github size={20} />
          <span>View on GitHub</span>
        </a>
        
        <p className="copyright-text">
          © {currentYear} The News App. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;