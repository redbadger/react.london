import React from 'react';

const SpeakerPreview = ({ title, name, blurb, picture }) => (
    <section>
      <img src={picture} />
      <h4>{title}</h4>
      <h5>{name}</h5>
      <div dangerouslySetInnerHTML={ blurb ? { __html: blurb } : null } />
    </section>
  );

export default SpeakerPreview;
