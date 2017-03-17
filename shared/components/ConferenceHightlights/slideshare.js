import React from 'react';

const SlideShare = ({ href, src, name, company, title }) => (
  <a
    className="ConferenceHighlights__slideshare"
    href={href}
    target="_blank"
    title={`Slides from talk ${title} by ${name} (opens in a new window)`}
  >
    <div
      className="ConferenceHighlights__slideshare__background-image"
      style={{ backgroundImage: `url(${src})` }}
    />

    <h4>{name}</h4>
    <p>{company}</p>
    <h5>{title}</h5>
  </a>
);

SlideShare.propTypes = {
  href: React.PropTypes.string.isRequired,
  src: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  company: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
};

export default SlideShare;
