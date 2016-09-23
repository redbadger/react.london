/* eslint-disable react/no-danger */

import React, { PropTypes } from 'react';
import speakerType from '../../prop-types/speaker-type';
import SpeakerSocialLinks from '../SpeakerSocialLinks';

export const getSpeakerAvatarImage = (imageURL, speakerName) => {
  if (imageURL) {
    return (<img
      alt={`Speaker ${speakerName}`}
      src={imageURL}
    />);
  }
  return (
    <div className="icon-default-speaker-conference-avatar" />
  );
};

const SpeakersList = ({ speakers }) => {
  if (speakers && Array.isArray(speakers) && speakers.length) {
    const speakerList = speakers.map((speaker) => {
      return (
        <li key={speaker.id}>
          <div className="speaker-avatar">
            {getSpeakerAvatarImage(speaker.imageURL, speaker.name)}
          </div>
          <div className="speaker-description">
            <h3>
              <p className="speaker-description-name">{speaker.name}</p>
              <p className="speaker-description-company">{speaker.company}</p>
            </h3>
            <SpeakerSocialLinks {...speaker} />
          </div>
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
            <a
              rel="noopener"
              target="_blank"
              href="https://www.papercall.io/reactlondon2017"
              className="speakers-list__btn"
            >
              Interested in speaking?
            </a>
          </div>
        </div>
      </section>
    );
  }

  return null;
};

SpeakersList.propTypes = {
  speakers: PropTypes.arrayOf(speakerType).isRequired,
};

export default SpeakersList;
