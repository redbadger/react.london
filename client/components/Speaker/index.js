import React, { PropTypes } from 'react';

const GitHubLink = ({ handle }) => {
  const url = `https://github.com/${handle}`;
  if (handle) {
    return <a href={url}><img src="#TODO" alt="github" /></a>;
  }
  return null;
};

GitHubLink.propTypes = {
  handle: PropTypes.string,
};

const TwitterLink = ({ handle }) => {
  const url = `https://twitter.com/${handle}`;
  if (handle) {
    return <a href={url}><img src="#TODO" alt="twitter" /></a>;
  }
  return null;
};

TwitterLink.propTypes = {
  handle: PropTypes.string,
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
        <a
          className="Speaker__detail Speaker__detail--github"
          target="_blank"
          href={'https://github.com/' + githubHandle}
        >Github</a></li>
      <li>
        <a
          className="Speaker__detail Speaker__detail--twitter"
          target="_blank"
          href={'https://twitter.com/' + twitterHandle}
        >Twitter</a></li>
      <li>
        <a
          className="Speaker__detail Speaker__detail--blog"
          target="_blank"
          href={blogURL}
        >Blog</a></li>
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
