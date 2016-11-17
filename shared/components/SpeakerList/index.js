/* eslint-disable react/no-danger */

import React, { PropTypes } from 'react';
import Speaker from '../Speaker';
import speakerType from '../../prop-types/speaker-type';
import { ExternalLink } from '../ExternalLink';

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
          </ul>
          <div className="speakers-list__btn-container">
            <ExternalLink
              href="https://www.papercall.io/reactlondon2017"
              className="speakers-list__btn"
            >
              Interested in speaking?
            </ExternalLink>
          </div>
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
