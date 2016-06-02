import React from 'react';

const SpeakerPreview = ({ name, url, picture }) => (
    <section>
      <img src={picture} />
      <h4>{name}</h4>
      <p>{url}</p>
    </section>
  );

export default SpeakerPreview;