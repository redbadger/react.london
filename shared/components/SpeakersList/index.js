/* eslint-disable react/no-danger */

import React, { PropTypes } from 'react';
import marked from 'marked';
import { DEFAULT_SPEAKER_AVATAR } from '../../../server/constants';

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

const SpeakersList = ({ speakers }) => {
  const speakerList = speakers.map((speaker) => {
    return (
      <li key={speaker.id}>
        <img
          alt={`Speaker ${speaker.name}`}
          src={speaker.imageURL ? speaker.imageURL : DEFAULT_SPEAKER_AVATAR}
        />
        <div>
          <span>{speaker.name}</span>
          <span>{speaker.company}</span>
        </div>
        <div>
          <a href={speaker.githubHandle}><span>Github</span></a>
          <a href={speaker.twitterHandle}><span>Twitter</span></a>
          <a href={speaker.blogURL}><span>Blog</span></a>
        </div>
        <div dangerouslySetInnerHTML={{ __html: marked(speakerBio(speaker.bio)) }} />
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
