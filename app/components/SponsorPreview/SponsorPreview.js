import React, { PropTypes } from 'react';

const SpeakerPreview = ({ name, url, picture }) => (
  <section>
    <img src={picture} />
    <h4>{name}</h4>
    <p>{url}</p>
  </section>
);

SpeakerPreview.PropTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  picture: PropTypes.string,
};

export default SpeakerPreview;
