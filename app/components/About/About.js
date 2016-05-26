import React from 'react';

const About = ({ text }) => (
    <section className="About">
      <h1>{text.about.title}</h1>
      <div dangerouslySetInnerHTML={ { __html: text.about.summary } } />
    </section>
  );

export default About;
