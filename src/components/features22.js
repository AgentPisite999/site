import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './features22.css';

const Features22 = (props) => {
  const solutions = [
    'Predictive Analytics',
    'Prescriptive Analytics',
    'Machine Learning Model Development',
    'Computer Vision Solutions',
    'Natural Language Processing (NLP)',
    'Intelligent Process Automation',
    'IoT Data Analytics',
    'Real-time Monitoring & Alerting Systems',
    'Digital Twin Development',
    'Edge AI & Embedded Intelligence',
    'AI-Driven Quality Control',
    'Smart Manufacturing Solutions',
    'Industry 4.0 Solutions',
  ];

  return (
    <div id={props.features22Id} className="features22-layout349">
      <div className="features22-max-width">
        <div className="features22-container1">
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="features22-text-title">Our Solutions</span>
              </Fragment>
            )}
          </h2>
          <span className="features22-text11 thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span>
                  We build intelligent systems for the industries of tomorrow.
                  Our solutions are tailored to help your organization thrive in the age of AI.
                </span>
              </Fragment>
            )}
          </span>
        </div>

        <div className="features22-grid">
          {solutions.map((solution, index) => (
            <div key={index} className="features22-card thq-card">
              <span className="features22-solution-text">{solution}</span>
            </div>
          ))}
        </div>
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
  heading1: PropTypes.element,
  content1: PropTypes.element,
};

export default Features22;
