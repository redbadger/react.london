import React from 'react';

function html(content) {
  return content ? { __html: content } : null
}

const About = ({ title, summary }) => (
  <section className="About">
    <h1>{title || null}</h1>
    <div dangerouslySetInnerHTML={html(summary)} />
  </section>
);

export default About;
