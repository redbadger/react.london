import React from 'react';

export default ({ username, name, content, href }) => (
  <a
    className='ConferenceHighlights__tweet'
    href={href}
    target='_blank'
    title={`Tweet by ${name} (opens in a new window)`}>
    <div className='ConferenceHighlights__tweet__name'>{name}</div>
    <div className='ConferenceHighlights__tweet__username'>@{username}</div>
    <p>{content}</p>
  </a>
);
