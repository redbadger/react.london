/* eslint-disable react/no-danger */

import React, { PropTypes } from 'react';
import marked from 'marked';

export const speakerType = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
  company: PropTypes.string,
  twitterHandle: PropTypes.string,
  githubHandle: PropTypes.string,
  blogURL: PropTypes.string,
  imageURL: PropTypes.string,
  bio: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    value: PropTypes.string,
  })),
});

export const speakerBio = (bio) => {
  const fullBio = [];
  if (bio
    && Array.isArray(bio)
    && bio.length) {
    bio.forEach((paragraph) => {
      if (paragraph.text) {
        fullBio.push(paragraph.text);
      }
    });
  }
  return fullBio.join('\r\n\r\n');
};

export const speakerSocialLinks = (speaker) => {
  const githubLink = speaker.githubHandle ?
    (<a href={speaker.githubHandle}><span className="icon-github" /></a>)
    : null;
  return (
    <div>
      {githubLink}
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
          <div>
            <span>{speaker.name}</span>
            <span>{speaker.company}</span>
          </div>
          {speakerSocialLinks(speaker)}
          <div dangerouslySetInnerHTML={{ __html: marked(speakerBio(speaker.bio)) }} />
        </div>
      </li>
    );
  });

  return (
    <section>
      <ul>
        {speakerList}
      </ul>
    </section>
  );
};

SpeakersList.propTypes = {
  speakers: PropTypes.arrayOf(speakerType),
};

export default SpeakersList;
