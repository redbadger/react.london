import React, { Component } from 'react';
import Radium, { Style } from 'radium';
import About from '../About/About';
import Meetup from '../Meetup/Meetup';
import SpeakerPreview from '../SpeakerPreview/SpeakerPreview';
import SponsorPreview from '../SponsorPreview/SponsorPreview';

const Preview = Radium(({ text }) => (
  <main className="preview">
    {previewStyles}
    {appStyles}
    <div className="row"><About text={text} /></div>
    <div className="row"><Meetup text={text} /></div>
    <div className="row speakers">
      {text.upcomingMeetupSpeakers.map((speaker, index) =>
        <SpeakerPreview
          key={index}
          name={speaker.name}
          title={speaker.title}
          blurb={speaker.blurb}
          picture={speaker.picture}
          />
      )}
    </div>
    <div className="row speakers">
      {text.sponsors.map((sponsor, index) =>
        <SponsorPreview
          key={index}
          name={sponsor.name}
          url={sponsor.url}
          picture={sponsor.picture}
          />
      )}
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
    '.speakers section:nth-child(2)': {
      margin: '0px 20px',
    },
    '.speakers section img': {
      margin: '0px auto',
      display: 'block',
    },
  }} />);

export default Preview;
