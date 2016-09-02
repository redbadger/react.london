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

const SpeakersList = ({ speakers }) => {
  const speakerList = speakers.map((speaker) => (
    <li key={speaker.id}>{speaker.name}</li>
  ));

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
