import React from 'react';
import PropTypes from 'prop-types';
import './features22.css';

const categories = [
  { title: 'Analytics (AI/ML and BI)', icon: '/icons/analytics.png' },
  { title: 'AI Development', icon: '/icons/ai-dev.png' },
  { title: 'Automation', icon: '/icons/automation.png' },
  { title: 'Industry 4.0', icon: '/icons/industry.png' },
  { title: 'App Development', icon: '/icons/app.png' },
  { title: 'IT Consulting', icon: '/icons/consulting.png' },
];

const Features22 = ({ features22Id, heading1, content1 }) => {
  return (
    <div id={features22Id} className="features22-layout349">
      <div className="features22-container1">
        <h2 className="features22-text-title">
          {heading1 ?? 'Our Solutions'}
        </h2>
        <p className="features22-text11">
          {content1 ?? 'We build intelligent systems for the industries of tomorrow. Our solutions are tailored to help your organization thrive in the age of AI.'}
        </p>
      </div>

      <div className="features22-grid">
        {categories.map((category, index) => (
          <div key={index} className="features22-wrapper">
            <img
              src={category.icon}
              alt={category.title}
              className="features22-icon-above"
            />
            <div className="features22-card">
              <span className="features22-solution-text">{category.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Features22.defaultProps = {
  features22Id: 'Features22',
  heading1: undefined,
  content1: undefined,
};

Features22.propTypes = {
  features22Id: PropTypes.string,
  heading1: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  content1: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default Features22;
