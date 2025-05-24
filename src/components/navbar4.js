import React from 'react';
import PropTypes from 'prop-types';
import './navbar4.css';

const Navbar4 = (props) => {
  return (
    <header className="navbar4-container">
      <div className="navbar4-navbar-interactive">
        <img
          alt={props.logoAlt}
          src={props.logoSrc}
          className="navbar4-image1"
        />
        <div className="navbar4-desktop-menu">
          <nav className="navbar4-links1">
            <a href={props.link1Url} className="thq-link thq-body-small">
              {props.link1}
            </a>
            <a href={props.link2Url} className="thq-link thq-body-small">
              {props.link2}
            </a>
            <a href={props.link3Url} className="thq-link thq-body-small">
              {props.link3}
            </a>
            <a href={props.link4Url} className="thq-link thq-body-small">
              {props.link4}
            </a>
          </nav>
          <a href={props.link5Url} className="thq-link thq-body-small navbar4-contact-link">
            {props.link5}
          </a>
        </div>
      </div>
    </header>
  );
};

Navbar4.defaultProps = {
  logoSrc: '/logo.png',
  logoAlt: 'Company Logo',
  link1: <span>Home</span>,
  link2: <span>Services</span>,
  link3: <span>Career</span>,
  link4: <span>About</span>,
  link5: <span>Contact</span>,
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
