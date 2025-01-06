import React from 'react';
import { Github, Linkedin, Mail, User } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1 className="contact-title">Contact Us</h1>
        
        <div className="contact-content">
          <div className="contact-item">
            <div className="icon-wrapper">
              <User className="contact-icon" />
            </div>
            <div className="contact-info">
              <h2>Name</h2>
              <p>Antrita Christopher</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="icon-wrapper">
              <Mail className="contact-icon" />
            </div>
            <div className="contact-info">
              <h2>Email</h2>
              <a href="mailto:antritachristopher26@gmail.com" >antritachristopher26@gmail.com</a>
            </div>
          </div>

          <div className="contact-links">
            <a 
              href="https://github.com/Antrita"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <Github className="social-icon" />
              <span>GitHub</span>
            </a>

            <a 
              href="https://www.linkedin.com/in/antrita/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <Linkedin className="social-icon" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;