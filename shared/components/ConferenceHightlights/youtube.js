import React from 'react';

const Youtube = ({ href, src, name, company, title }) => (
  <a
    className="ConferenceHighlights__youtube"
    href={href}
    target="_blank"
    title={`Youtube video ${title} by ${name} (opens in a new window)`}
  >
    <div
      className="ConferenceHighlights__youtube__background-image"
      style={{ backgroundImage: `url(${src})` }}
    >
      <div className="ConferenceHighlights__youtube__background-image__play" />
    </div>

    <h4>{name}</h4>
    <p>{company}</p>
    <h5>{title}</h5>
  </a>
);

Youtube.propTypes = {
  href: React.PropTypes.string.isRequired,
  src: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  company: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
};

export default Youtube;
