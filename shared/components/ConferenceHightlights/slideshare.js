import React from 'react';

export default ({ href, src, name, company, title }) => (
  <a
    className='ConferenceHighlights__slideshare'
    href={href}
    target='_blank'
    title={`Slides from talk ${title} by ${name} (opens in a new window)`}
  >
    <div
      className='ConferenceHighlights__slideshare__background-image'
      style={{ backgroundImage: `url(${src})` }} />

    <h4>{name}</h4>
    <p>{company}</p>
    <h5>{title}</h5>
  </a>
);
