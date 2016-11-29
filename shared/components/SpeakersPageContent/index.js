import React, { PropTypes } from 'react';
import SpeakerList from '../SpeakerList';
import speakerType from '../../prop-types/speaker-type';

const SpeakersPageContent = ({ speakers }) => (
  <section className="SpeakersPageContent block">
    <div className="content">
      <h2 className="SpeakersPageContent__header">On stage</h2>
      <p>
        We are thrilled to have members of the Facebook team joining
        us on the day for a panel discussion.
      </p>
      <SpeakerList speakers={speakers} />
    </div>
  </section>
);

SpeakersPageContent.propTypes = {
  speakers: PropTypes.arrayOf(speakerType),
};

export default SpeakersPageContent;
