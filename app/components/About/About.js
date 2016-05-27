import React from 'react';

const About = ({ text }) => (
    <section className="About">
      <h1>{text.about ? text.about.title : null}</h1>
      <div dangerouslySetInnerHTML={ text.about ? { __html: text.about.summary } : null } />
    </section>
  );

export default About;
