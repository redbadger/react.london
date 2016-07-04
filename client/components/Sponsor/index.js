import React, { PropTypes } from 'react';

const Sponsor = ({
  websiteURL,
  imageURL,
}) => (
  <li>
    <a href={websiteURL} target="_blank">
      <img src={imageURL} alt="logo" />
    </a>
  </li>
);

Sponsor.propTypes = {
  websiteURL: PropTypes.string,
  imageURL: PropTypes.string,
};

export default Sponsor;
