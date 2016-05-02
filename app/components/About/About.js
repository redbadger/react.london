import React, {Component} from 'react';

import style from './About.css';

const About = ({ aboutTitle, aboutSummary }) => (
    <section className="About">
      <h1>{aboutTitle}</h1>
      <p>{aboutSummary}</p>
    </section>
  );

export default About;
