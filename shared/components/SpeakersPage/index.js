import React, { PropTypes } from 'react';
import SpeakerListIntro from '../SpeakerListIntro';
import SpeakerList, { speakerType } from '../SpeakersList';

const SpeakersPage = ({ speakers }) => {
  return (
    <div className="SpeakersPage">
      <SpeakerListIntro />
      <SpeakerList speakers={speakers} />
    </div>
  );
};

SpeakersPage.propTypes = {
  speakers: PropTypes.arrayOf(speakerType),
};

export default SpeakersPage;
