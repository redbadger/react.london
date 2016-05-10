import React, {Component} from 'react';
import Radium, { Style } from 'radium';
import About from '../About/About';
import UpcomingMeetup from '../UpcomingMeetup/UpcomingMeetup';
import UpcomingMeetupSpeaker from '../UpcomingMeetupSpeaker/UpcomingMeetupSpeaker';

const Preview = Radium(({ text }) => (
  <main className="preview">
    {previewStyles}
    {appStyles}
    <div className="row"><About text={text} /></div>
    <div className="row"><UpcomingMeetup text={text} /></div>
    <div className="row speakers">
      <UpcomingMeetupSpeaker
        name={text.upcomingMeetupSpeaker1Name}
        title={text.upcomingMeetupSpeaker1Title}
        blurb={text.upcomingMeetupSpeaker1Blurb}
        picture={text.upcomingMeetupSpeaker1Picture} />
      <UpcomingMeetupSpeaker
        name={text.upcomingMeetupSpeaker2Name}
        title={text.upcomingMeetupSpeaker2Title}
        blurb={text.upcomingMeetupSpeaker2Blurb}
        picture={text.upcomingMeetupSpeaker2Picture} />
      <UpcomingMeetupSpeaker
        name={text.upcomingMeetupSpeaker3Name}
        title={text.upcomingMeetupSpeaker3Title}
        blurb={text.upcomingMeetupSpeaker3Blurb}
        picture={text.upcomingMeetupSpeaker3Picture} />
    </div>
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
      backgroundColor: '#FFFFFF',
      boxShadow: '3px 3px 5px 0px rgba(204,204,204,1)',
      color: '#434343',
    },
    '.row': {
      margin: '30px auto',
      width: '70%',
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
    '.speakers': {
      display: 'flex',
      justifyContent: 'space-between',
    },
    '.speakers section': {
      width: '200px',
    },
  }} />);

export default Preview;
