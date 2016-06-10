import React, { PropTypes } from 'react';

const SpeakerPreview = ({ title, name, blurb, picture }) => (
  <section>
    <img src={ picture } />
    <h4>{ title }</h4>
    <h5>{ name }</h5>
    <div className="blurb" dangerouslySetInnerHTML={ { __html: blurb } } />
  </section>
);

SpeakerPreview.PropTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  blurb: PropTypes.string,
  picture: PropTypes.string,
}

export default SpeakerPreview;
