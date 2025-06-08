import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Typewriter from 'typewriter-effect/dist/core';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import './hero9.css';

const Hero9 = (props) => {
  const welcomeRef = useRef(null);
  const quoteRef = useRef(null);

  const [showWelcome, setShowWelcome] = useState(false);
  const [showQuote, setShowQuote] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowWelcome(true), 1000);
  }, []);

  useEffect(() => {
    if (showWelcome && welcomeRef.current) {
      const typewriter = new Typewriter(welcomeRef.current, {
        delay: 60,
      });

      typewriter
        .typeString('Welcome to our AgentPi')
        .pauseFor(500)
        .callFunction(() => {
          setShowQuote(true);
        })
        .start();
    }
  }, [showWelcome]);

  useEffect(() => {
    if (showQuote && quoteRef.current) {
      const typewriter = new Typewriter(quoteRef.current, {
        delay: 50,
      });

      typewriter
        .typeString('Where Technology Meets With Innovation')
        .start();
    }
  }, [showQuote]);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div
      id={props.hero9Id}
      className={`hero9-header30 thq-section-padding ${props.rootClassName}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#2f3d4c',
        color: '#ffffff',
        minHeight: '100vh',
      }}
    >
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: false,
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: 'grab' },
              resize: true,
            },
            modes: {
              grab: {
                distance: 160,
                line_linked: {
                  opacity: 1,
                },
              },
            },
          },
          particles: {
            color: { value: '#00bfff' },
            links: {
              color: '#00bfff',
              distance: 130,
              enable: true,
              opacity: 0.8,
              width: 1.2,
            },
            move: {
              enable: true,
              speed: 1,
              outModes: { default: 'bounce' },
            },
            number: {
              value: 55,
              density: { enable: true, area: 800 },
            },
            opacity: { value: 0.8 },
            shape: { type: 'circle' },
            size: { value: { min: 2, max: 5 } },
          },
          detectRetina: true,
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Background Gradient Overlay */}
      <div className="hero9-container" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
        opacity: 0.85,
      }} />

      {/* AgentPi Branding */}
      <div className="hero9-fixed-brand">AgentPi</div>

      {/* Hero Content */}
      <div className="hero9-max-width thq-section-max-width" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero9-flex-layout">
          <div className="hero9-logo-wrapper">
            <img src="/logo.png" alt="AgentPi Logo" className="hero9-logo" />
          </div>
          <div className="hero9-content">
            <div className="hero9-typewriter" ref={welcomeRef}></div>
            <div className="hero9-typewriter-quote" ref={quoteRef}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

Hero9.defaultProps = {
  hero9Id: '',
  rootClassName: '',
};

Hero9.propTypes = {
  hero9Id: PropTypes.string,
  rootClassName: PropTypes.string,
};

export default Hero9;
