import React, { PropTypes } from 'react';

const GitHubLink = ({ handle }) => {
  const url = `https://github.com/${handle}`;
  return handle && (
    <a href={url}><img src="#TODO" alt="github" /></a>
  );
};

GitHubLink.propTypes = {
  handle: PropTypes.string,
};

const TwitterLink = ({ handle }) => {
  const url = `https://twitter.com/${handle}`;
  return handle && (
    <a href={url}><img src="#TODO" alt="twitter" /></a>
  );
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
  <article>
    <figure><img src="#TODO" alt={name} /></figure>
    <ul className="semantic-only">
      <li>
        <GitHubLink handle={githubHandle} />
      </li>
      <li>
        <TwitterLink handle={twitterHandle} />
      </li>
      <li>
        <a href={blogURL}><img src="#TODO" alt="blog" /></a>
      </li>
    </ul>
    <h5>{name} <span>{company}</span></h5>
    <h4>{talkTitle}</h4>
    <p>{talkSummary}</p>
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
