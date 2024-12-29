import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container, Form } from 'react-bootstrap';
import './Navigation.css';

const Navigation = () => {
  const location = useLocation();

  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Latest News', path: '/latest-news' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container fluid>
       
        <div className="d-flex align-items-center">
          <Navbar.Toggle 
            aria-controls="basic-navbar-nav" 
            className="custom-toggler"
          />
          <Navbar.Brand as={Link} to="/" className="ms-3 brand-text">
            Latest News
          </Navbar.Brand>
        </div>

        {/* Navigation Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {navItems.map((item) => (
              <Nav.Link
                key={item.name}
                as={Link}
                to={item.path}
                className={`nav-link ${
                  location.pathname === item.path ? 'active' : ''
                }`}
              >
                {item.name}
              </Nav.Link>
            ))}
            
           
            <Form.Check
              type="switch"
              id="theme-switch"
              className="ms-3 theme-switch"
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;