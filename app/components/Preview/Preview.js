import React, { PropTypes } from 'react';
import About from '../About/About';
import Meetup from '../Meetup/Meetup';
import SpeakerPreview from '../SpeakerPreview/SpeakerPreview';
import SponsorPreview from '../SponsorPreview/SponsorPreview';

function getIn(object, key) {
  return object && object[key] || [];
}

const Preview = ({ about, meetup }) => (
  <main className="preview">
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

export default Preview;
