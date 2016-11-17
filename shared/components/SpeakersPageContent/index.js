import React, { PropTypes } from 'react';
import SpeakerList from '../SpeakerList';
import speakerType from '../../prop-types/speaker-type';

const SpeakersPageContent = ({ speakers }) => (
  <section className="SpeakersPageContent block">
    <div className="content">
      <div className="speakers-panel-description">
        <p>
          We are thrilled to have members of the Facebook team joining
          us on the day for a panel discussion.
        </p>
      </div>
      <SpeakerList speakers={speakers} />
      <div className="no-cfp-announcement">
        <p>
          In order to ensure the day is packed with the freshest,
          newest content our call for papers will not open until November.
          We will announce the full speaker line up in February.
        </p>
      </div>
    </div>
  </section>
);

SpeakersPageContent.propTypes = {
  speakers: PropTypes.arrayOf(speakerType),
};

export default SpeakersPageContent;
