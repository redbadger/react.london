import React from 'react';

const Instagram = ({ href, src, name }) => (
  <a
    className="ConferenceHighlights__instagram"
    href={href}
    target="_blank"
    title={`Instagram photo by ${name} (opens in a new window)`}
  >
    <img src={src} alt="instagram" />
  </a>
);

Instagram.propTypes = {
  href: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  src: React.PropTypes.string.isRequire,
};

export default Instagram;
