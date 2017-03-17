import React from 'react';

const Flickr = ({ href, src }) => (
  <a
    className="ConferenceHighlights__flickr"
    href={href}
    target="_blank"
    rel="noopener"
    title="Flick photo from React London 2017 (opens in a new window)"
  >
    <div
      className="ConferenceHighlights__flickr__background-image"
      style={{ backgroundImage: `url(${src})` }}
    />
  </a>
);

Flickr.propTypes = {
  href: React.PropTypes.string.isRequired,
  src: React.PropTypes.string.isRequired,
};

export default Flickr;
