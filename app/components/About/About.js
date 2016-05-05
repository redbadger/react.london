import React, {Component} from 'react';

import style from './About.css';

const About = ({ text, aboutSummary }) => (
    <section className="About">
      <h1>{text.aboutTitle}</h1>
      <div dangerouslySetInnerHTML={ { __html: aboutSummary } } />
    </section>
  );

export default About;
