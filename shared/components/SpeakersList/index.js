/* eslint-disable react/no-danger */

import React, { PropTypes } from 'react';

export const speakerType = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
  company: PropTypes.string,
  twitterHandle: PropTypes.string,
  githubHandle: PropTypes.string,
  blogURL: PropTypes.string,
  imageURL: PropTypes.string,
});

export const speakerSocialLinks = (speaker) => {
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

export const speakerAvatarImage = (imageURL, speakerName) => {
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
  const speakerList = speakers.map((speaker) => {
    return (
      <li key={speaker.id}>
        <div className="speaker-avatar">
          {speakerAvatarImage(speaker.imageURL, speaker.name)}
        </div>
        <div className="speaker-description">
          <div className="speaker-description-name">{speaker.name}</div>
          <div className="speaker-description-company">{speaker.company}</div>
          {speakerSocialLinks(speaker)}
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
};

SpeakersList.propTypes = {
  speakers: PropTypes.arrayOf(speakerType),
};

export default SpeakersList;
