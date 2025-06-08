import React, { Fragment, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import Navbar4 from '../components/navbar4';
import Hero9 from '../components/hero9';
import Features22 from '../components/features22';
import Gallery7 from '../components/gallery7';
import Team14 from '../components/team14';
import Contact3 from '../components/contact3';
import './home.css';

const Home = (props) => {
  // Force update tab title in case Helmet is overridden
  useEffect(() => {
    document.title = 'AgentPi-Technology';
  }, []);

  return (
    <div className="home-container">
      <Helmet>
        <title>AgentPi-Technology</title>
        <meta property="og:title" content="AgentPi-Technology" />
      </Helmet>

      <Navbar4
        link1={
          <Fragment>
            <span className="home-text10">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text11">Services</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text12">Career</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text13">About</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text15">Contact</span>
          </Fragment>
        }
        textUrl="#Contact3"
        link1Url="#Hero9"
        link2Url="#Features22"
        link3Url="#Gallery7"
        link4Url="#Team14"
        link41={
          <Fragment>
            <span className="home-text15">Contact</span>
          </Fragment>
        }
        link4Url1="#Contact3"
        link5Url="#Contact3"
      />

      <Hero9 hero9Id="Hero9" />
      <Features22 features22Id="Features22" />
      <Gallery7 gallery7Id="Gallery7" />
      <Team14 team14Id="Team14" />
      <Contact3 contact3Id="Contact3" />
    </div>
  );
};

export default Home;
