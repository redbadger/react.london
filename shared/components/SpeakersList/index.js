/* eslint-disable react/no-danger */

import React, { PropTypes } from 'react';
import speakerType from '../../prop-types/speaker-type';

export const getSpeakerSocialLinks = (speaker) => {
  const githubLink = speaker.githubHandle ?
    (<a href={`https://github.com/${speaker.githubHandle}`}><span className="icon-github" /></a>)
    : null;
  const twitterLink = speaker.blogURL ?
    (<a href={speaker.blogURL}><span className="icon-link" /></a>)
    : null;
  const blogLink = speaker.twitterHandle ?
    (<a href={`https://twitter.com/${speaker.twitterHandle}`}><span className="icon-twitter" /></a>)
    : null;

  return (
    <div className="speaker-description-social-links">
      {githubLink}
      {twitterLink}
      {blogLink}
    </div>
  );
};

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
            <div className="speaker-description-name">{speaker.name}</div>
            <div className="speaker-description-company">{speaker.company}</div>
            {getSpeakerSocialLinks(speaker)}
          </div>
        </li>
      );
    });

    return (
      <section className="speakers-list-container">
        <ul className="speakers-list">
          {speakerList}
        </ul>
        <div className="more-speakers-announcement">
          More speakers will be announced soon
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
