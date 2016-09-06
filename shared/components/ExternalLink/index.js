import React, { PropTypes } from 'react';

export const ExternalLink = (props) => {
  const linkProps = Object.assign({}, props); // This is done as the props are not mutable
  if (!linkProps.href) {
    delete linkProps.href;
  }
  if (linkProps.href && linkProps.href.substring(0, 4) !== 'http') {
    linkProps.href = 'http://' + linkProps.href;
  }
  return (
    <a {...linkProps} target="_blank" rel="noopener">{props.children}</a>
  );
};

ExternalLink.propTypes = {
  children: PropTypes.string.isRequired,
};
