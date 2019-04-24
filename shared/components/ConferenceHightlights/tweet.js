import React from 'react';

const Tweet = ({ username, name, content, href }) => (
  <a
    className="ConferenceHighlights__tweet"
    href={href}
    target="_blank"
    rel="noopener"
    title={`Tweet by ${name} (opens in a new window)`}
  >
    <div className="ConferenceHighlights__tweet__name">{name}</div>
    <div className="ConferenceHighlights__tweet__username">@{username}</div>
    <p>{content}</p>
  </a>
);

Tweet.propTypes = {
  username: React.PropTypes.string.isRequired,
  href: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  content: React.PropTypes.string.isRequired,
};

export default Tweet;
