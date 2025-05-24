import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import './gallery7.css'

const Gallery7 = (props) => {
  return (
    <div
      id={props.gallery7Id} // This is where the scroll will land
      className="gallery7-gallery3 thq-section-padding"
    >
      <div className="gallery7-max-width">
        <div className="gallery7-section-title">
          <h2 className="gallery7-text1 thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="gallery7-text6">About AgentPi</span>
              </Fragment>
            )}
          </h2>
          <span className="gallery7-text2 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span>
                  At AgentPi, we are redefining the future of technology with
                  intelligent, adaptive, and forward-thinking IT solutions. Our
                  mission is to engineer advanced digital infrastructures that
                  anticipate growth. From AI to automation, AgentPi builds smart
                  ecosystems that shape the future.
                </span>
              </Fragment>
            )}
          </span>
        </div>

        {/* Optional buttons */}
        <div className="gallery7-button-group">
          <button className="gallery7-button thq-button-filled">For Freshers</button>
          <button className="gallery7-button thq-button-filled">For Experienced Professionals</button>
        </div>
      </div>
    </div>
  )
}

Gallery7.defaultProps = {
  gallery7Id: 'Career', // 💡 This MUST match the navbar link like href="#Career"
  content1: undefined,
  heading1: undefined,
}

Gallery7.propTypes = {
  gallery7Id: PropTypes.string,
  content1: PropTypes.element,
  heading1: PropTypes.element,
}

export default Gallery7
