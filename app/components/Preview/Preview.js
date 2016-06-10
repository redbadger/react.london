import React, { PropTypes } from 'react';
import radium, { Style } from 'radium';
import About from '../About/About';
import Meetup from '../Meetup/Meetup';
import SpeakerPreview from '../SpeakerPreview/SpeakerPreview';
import SponsorPreview from '../SponsorPreview/SponsorPreview';

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
  }}
/>
);

const appStyles = (<Style
  rules={{
    'body, html': {
      width: '100%',
      margin: 0,
      fontFamily: 'sans-serif',
      backgroundColor: '#E2E2E2',
    },
  }}
/>);

function getIn(object, key) {
  return object && object[key] || [];
}

const Preview = ({ about, meetup }) => (
  <main className="preview">
    {previewStyles}
    {appStyles}
    <div className="row"><About {...about} /></div>
    <div className="row"><Meetup {...meetup} /></div>

    <div className="row speakers">
      {getIn(meetup, 'speakers').map((speaker, index) =>
        <SpeakerPreview key={index} {...speaker} />
      )}
    </div>

    <div className="row sponsors">
      {getIn(meetup, 'sponsors').map((sponsor, index) =>
        <SponsorPreview key={index} {...sponsor} />
      )}
    </div>
  </main>
);
Preview.propTypes = {
  about: PropTypes.object,
  meetup: PropTypes.object,
};

export default radium(Preview);
