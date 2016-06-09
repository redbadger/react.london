import React, { PropTypes } from 'react';

function html(content) {
  return { __html: content };
}

const About = ({ title, summary }) => (
  <section className="About">
    <h1>{ title }</h1>
    <div dangerouslySetInnerHTML={html(summary)} />
  </section>
);

About.PropTypes = {
  title: PropTypes.string,
  summary: PropTypes.string,
};

export default About;
