import React, {Component} from 'react';

import style from './About.css';

const About = ({ aboutTitle, aboutSummary }) => (
    <div className="About">
      <h1>{aboutTitle}</h1>
      <p>{aboutSummary}</p>
    </div>
  );

export default About;
