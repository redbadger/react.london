import React, {Component} from 'react';

const About = ({ text, summary }) => (
  <section>
    <h1>{text.aboutTitle}</h1>
    <div dangerouslySetInnerHTML={ { __html: summary } } />
  </section>
);

export default About;
