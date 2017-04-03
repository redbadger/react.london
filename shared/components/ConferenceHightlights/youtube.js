import React from 'react';

const Youtube = ({ href, src, name, company, title }) => (
  <a
    className="ConferenceHighlights__youtube"
    href={href}
    target="_blank"
    title={`Youtube video ${title} by ${name} (opens in a new window)`}
  >
    <article
      className="ConferenceHighlights__youtube__background-image"
      style={{ backgroundImage: `url(${src})` }}
    >
      <div className="ConferenceHighlights__youtube__background-image__play" />
    </article>

    <h5><div className="ConferenceHighlights__youtube--bold">{name}</div></h5>
    <h5>{company}</h5>
    <h5>
      <div className="ConferenceHighlights__youtube--bold">
        <small>{title}</small>
      </div>
    </h5>
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
