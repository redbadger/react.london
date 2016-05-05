import React, {Component} from 'react';

import style from './About.css';

const About = ({ text }) => (
    <section className="About">
      <h1>{text.aboutTitle}</h1>
      <p>{text.aboutSummary}</p>
    </section>
  );

export default About;
