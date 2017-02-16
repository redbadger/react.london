/* eslint-disable react/no-danger */

import React, { PropTypes } from 'react';
import SpeakerPageSpeaker from '../SpeakerPageSpeaker';
import speakerType from '../../prop-types/speaker-type';

const SpeakerPageList = ({ speakers }) => {
  if (speakers && Array.isArray(speakers) && speakers.length) {
    const speakerList = speakers.map((speaker, index) => {
      return (
        <li key={index}>
          <SpeakerPageSpeaker {...speaker} />
        </li>
      );
    });

    return (
      <section className="SpeakerPageList">
        <div className="SpeakerPageList__list">
          <ul>
            {speakerList}
          </ul>
        </div>
      </section>
    );
  }

  return null;
};

SpeakerPageList.propTypes = {
  speakers: PropTypes.arrayOf(speakerType),
};

export default SpeakerPageList;
