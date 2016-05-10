import React from 'react';

const About = ({ text }) => (

    <section className="About">
      <h1>{text.aboutTitle}</h1>
      <div dangerouslySetInnerHTML={ { __html: text.aboutSummary } } />
    </section>
  );

export default About;
