import React, {Component} from 'react';
import Radium, { Style } from 'radium';
import About from '../About/About';
import UpcomingMeetup from '../UpcomingMeetup/UpcomingMeetup';

const Preview = Radium(({ text }) => (
  <main className="preview">
    {previewStyles}
    {appStyles}
    <About text={text} />
    <UpcomingMeetup text={text} />
  </main>
));


const appStyles = (<Style rules={{
  'body, html': {
    width: '100%',
    margin: 0,
    fontFamily: 'sans-serif',
    backgroundColor: '#E2E2E2',
  },
}} />);

const previewStyles = (<Style
  scopeSelector=".preview"
  rules={{
    section: {
      padding: '20px 30px',
      margin: '30px auto',
      width: '70%',
      backgroundColor: '#FFFFFF',
      boxShadow: '3px 3px 5px 0px rgba(204,204,204,1)',
      color: '#434343',
    },
    h1: {
      fontSize: '2.2em',
    },
    h2: {
      fontSize: '1.6em',
    },
    'h1, h2': {
      margin: 0,
    },
    a: {
      color: '#434343',
    },
  }} />);

export default Preview;
