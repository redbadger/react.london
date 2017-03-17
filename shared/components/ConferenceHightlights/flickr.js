import React from 'react';

export default ({ href, src }) => (
  <a
    className='ConferenceHighlights__flickr'
    href={href}
    target='_blank'
    title={`Flick photo from React London 2017 (opens in a new window)`}
  >
    <div
      className='ConferenceHighlights__flickr__background-image'
      style={{ backgroundImage: `url(${src})` }} />
  </a>
);
