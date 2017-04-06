import React from 'react';

const SlideShare = ({ href, src, name, company, title }) => (
  <a
    className="ConferenceHighlights__slideshare"
    href={href}
    target="_blank"
    rel="noopener"
    title={`Slides from talk ${title} by ${name} (opens in a new window)`}
  >
    <article
      className="ConferenceHighlights__slideshare__background-image"
      style={{ backgroundImage: `url(${src})` }}
    >
    </article>

    <h5><div className="ConferenceHighlights__slideshare--bold">{name}</div></h5>
    <h5>{company}</h5>
    <h5>
      <div className="ConferenceHighlights__slideshare--bold">
        <small>{title}</small>
      </div>
    </h5>
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
