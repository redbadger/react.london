import React, {Component} from 'react';
import style from './About.css';

const About = ({ text, summary }) => (
    <section className="About">
      <h1>{text.aboutTitle}</h1>
      <div dangerouslySetInnerHTML={ { __html: text.aboutSummary } } />
    </section>
  );

export default About;
