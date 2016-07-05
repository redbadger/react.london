import React, { PropTypes } from 'react';

const IconLink = ({ present, url, type }) => {
  if (!present) { return null; }
  return (
    <a
      className={'Speaker__detail Speaker__detail--' + type.toLowerCase()}
      target="_blank"
      href={url}
    >
      {type}
    </a>
  );
};

IconLink.propTypes = {
  present: PropTypes.string,
  url: PropTypes.string,
  type: PropTypes.string,
};


const Speaker = ({
  name,
  company,
  talkTitle,
  talkSummary,
  twitterHandle,
  githubHandle,
  blogURL,
}) => (
  <article className="Speaker">
    <figure className="Speaker__photo">
      <img className="Speaker__photo--img" src="#TODO" alt={name} />
    </figure>
    <ul className="Speaker__details">
      <li>
        <IconLink present={githubHandle} type="GitHub" url={'https://github.com/' + githubHandle} />
      </li>
      <li>
        <IconLink present={twitterHandle} type="Twitter" url={'https://twitter.com/' + twitterHandle} />
      </li>
      <li>
        <IconLink present={blogURL} type="Blog" url={blogURL} />
      </li>
    </ul>
    <h5 className="Speaker__name"><span className="Speaker__name--bold">{name} </span>{company}</h5>
    <h4 className="Speaker__title">{talkTitle}</h4>
    <p className="Speaker__summary">{talkSummary}</p>
  </article>
);

Speaker.propTypes = {
  name: PropTypes.string,
  company: PropTypes.string,
  talkTitle: PropTypes.string,
  talkSummary: PropTypes.string,
  twitterHandle: PropTypes.string,
  githubHandle: PropTypes.string,
  blogURL: PropTypes.string,
};

export default Speaker;
