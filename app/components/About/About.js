import React, {Component} from 'react';
import {stateToHTML} from 'draft-js-export-html';
import style from './About.css';

const About = ({ text }) => (
    <section className="About">
      <h1>{text.aboutTitle}</h1>
    </section>
  );

export default About;
