import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './navbar4.css';

const Navbar4 = (props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="navbar4-container">
      <div className="navbar4-navbar-interactive">
        <div className="navbar4-logo-brand">
          <img
            alt={props.logoAlt}
            src={props.logoSrc}
            className="navbar4-image1"
          />
          <span className="navbar4-brandname-mobile">AgentPi</span>
        </div>

        <nav className="navbar4-desktop-menu">
          <div className="navbar4-links1">
            <a href={props.link1Url} className="navbar-link">
              {props.link1}
            </a>
            <a href={props.link2Url} className="navbar-link">
              {props.link2}
            </a>
            <a href={props.link3Url} className="navbar-link">
              {props.link3}
            </a>
            <a href={props.link4Url} className="navbar-link">
              {props.link4}
            </a>
          </div>
          <a href={props.link5Url} className="navbar4-contact-link">
            {props.link5}
          </a>
        </nav>

        <div className="navbar4-hamburger" onClick={toggleMobileMenu}>
          ☰
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav className="navbar4-mobile-menu">
          <a href={props.link1Url} onClick={toggleMobileMenu}>
            {props.link1}
          </a>
          <a href={props.link2Url} onClick={toggleMobileMenu}>
            {props.link2}
          </a>
          <a href={props.link3Url} onClick={toggleMobileMenu}>
            {props.link3}
          </a>
          <a href={props.link4Url} onClick={toggleMobileMenu}>
            {props.link4}
          </a>
          <a href={props.link5Url} onClick={toggleMobileMenu}>
            {props.link5}
          </a>
        </nav>
      )}
    </header>
  );
};

Navbar4.defaultProps = {
  logoSrc: '/logo.png',
  logoAlt: 'Company Logo',
  link1: 'Home',
  link2: 'Services',
  link3: 'Career',
  link4: 'About',
  link5: 'Contact',
  link1Url: '#Hero9',
  link2Url: '#Features22',
  link3Url: '#Gallery7',
  link4Url: '#Team14',
  link5Url: '#Contact3',
};

Navbar4.propTypes = {
  logoSrc: PropTypes.string,
  logoAlt: PropTypes.string,
  link1: PropTypes.node,
  link2: PropTypes.node,
  link3: PropTypes.node,
  link4: PropTypes.node,
  link5: PropTypes.node,
  link1Url: PropTypes.string,
  link2Url: PropTypes.string,
  link3Url: PropTypes.string,
  link4Url: PropTypes.string,
  link5Url: PropTypes.string,
};

export default Navbar4;
