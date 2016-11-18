/* eslint-disable react/no-danger */

import React, { PropTypes } from 'react';
import Speaker from '../Speaker';
import SpeakerPlaceholder from '../SpeakerPlaceholder';
import speakerType from '../../prop-types/speaker-type';

const SpeakersList = ({ speakers }) => {
  if (speakers && Array.isArray(speakers) && speakers.length) {
    const speakerList = speakers.map((speaker) => {
      return (
        <li key={speaker.id}>
          <Speaker {...speaker} />
        </li>
      );
    });

    return (
      <section className="speakers-list-container">
        <div className="speakers-list">
          <ul>
            {speakerList}
            <li>
              <SpeakerPlaceholder />
            </li>
          </ul>
        </div>
      </section>
    );
  }

  return null;
};

SpeakersList.propTypes = {
  speakers: PropTypes.arrayOf(speakerType),
};

export default SpeakersList;
