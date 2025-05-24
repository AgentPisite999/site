import React from 'react';
import './gallery7.css';

const Gallery7 = ({ gallery7Id = 'Career' }) => {
  return (
    <div id={gallery7Id} className="gallery7-gallery3">
      <div className="career-card-wrapper"> {/* Card wrapper added here */}
        <div className="gallery7-max-width">
          <h2 className="gallery7-title">Career</h2>
          <p className="gallery7-description">
            At AgentPi, we are redefining the future of technology with intelligent, adaptive,
            and forward-thinking IT solutions. Our mission is to engineer advanced digital
            infrastructures that anticipate growth. From AI to automation, AgentPi builds smart
            ecosystems that shape the future.
          </p>

          <div className="career-row">
            <div className="career-box">
              <img src="/icons/fresh.png" alt="Freshers" className="career-image" />
              <button className="gallery7-button">For Freshers</button>
            </div>
            <div className="career-box">
              <img src="/icons/pro.png" alt="Experienced" className="career-image" />
              <button className="gallery7-button">For Experienced Professionals</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery7;
