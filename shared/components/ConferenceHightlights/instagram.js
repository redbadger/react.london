import React from 'react';

export default ({ href, src, name }) => (
  <a
    className='ConferenceHighlights__instagram'
    href={href}
    target='_blank'
    title={`Instagram photo by ${name} (opens in a new window)`}
  >
    <img src={src} alt='instagram photo' />
  </a>
);
