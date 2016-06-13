import React, { PropTypes } from 'react';

const SpeakerPreview = ({ name, url, picture }) => (
  <section>
    <img alt={name} src={picture} />
    <h4>{name}</h4>
    <p>{url}</p>
  </section>
);

SpeakerPreview.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  picture: PropTypes.string,
};

export default SpeakerPreview;
