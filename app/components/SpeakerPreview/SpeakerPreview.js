import React, { PropTypes } from 'react';

const SpeakerPreview = ({ title, name, blurb, picture }) => (
  <section>
    <img alt={name} src={picture} />
    <h4>{title}</h4>
    <h5>{name}</h5>
    <div className="blurb" dangerouslySetInnerHTML={{ __html: blurb }} />
  </section>
);

SpeakerPreview.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  blurb: PropTypes.string,
  picture: PropTypes.string,
};

export default SpeakerPreview;
