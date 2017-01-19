/* eslint-disable react/no-danger */

import React, { PropTypes } from 'react';
import SpeakerPageTalk from '../SpeakerPageTalk';
import SpeakerPagePlaceholder from '../SpeakerPagePlaceholder';
import speakerType from '../../prop-types/speaker-type';

const SpeakerPageTalkList = ({ talks }) => {
  if (talks && Array.isArray(talks) && talks.length) {
    const speakerList = talks.map((talk, index) => {
      return (
        <li key={index}>
          <SpeakerPageTalk {...talk} />
        </li>
      );
    });

    return (
      <section className="speaker-page-talk-list-container">
        <div className="speaker-page-talk-list">
          <ul>
            {speakerList}
            <li>
              <SpeakerPagePlaceholder />
            </li>
          </ul>
        </div>
      </section>
    );
  }

  return null;
};

SpeakerPageTalkList.propTypes = {
  speakers: PropTypes.arrayOf(speakerType),
};

export default SpeakerPageTalkList;
