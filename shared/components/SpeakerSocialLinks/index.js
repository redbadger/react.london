import React, { PropTypes } from 'react';

const IconLink = ({ present, url, type, title }) => {
  if (!present) { return null; }
  return (
    <a
      className={'Speaker__detail Speaker__detail--' + type.toLowerCase()}
      target="_blank"
      rel="noopener"
      href={url}
      title={title}
    />
  );
};

IconLink.propTypes = {
  present: PropTypes.string,
  url: PropTypes.string,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const SpeakerSocialLinks = ({
  githubHandle,
  twitterHandle,
  blogURL,
  name,
}) => {
  return (
    <ul className="Speaker__details">
      <li>
        <IconLink
          present={githubHandle}
          type="GitHub"
          url={'https://github.com/' + githubHandle}
          title={name + "'s GitHub profile"}
        />
      </li>
      <li>
        <IconLink
          present={twitterHandle}
          type="Twitter"
          url={'https://twitter.com/' + twitterHandle}
          title={name + "'s Twitter profile"}
        />
      </li>
      <li>
        <IconLink
          present={blogURL}
          type="Blog"
          url={blogURL}
          title={name + "'s website"}
        />
      </li>
    </ul>
  );
};

SpeakerSocialLinks.propTypes = {
  name: PropTypes.string,
  twitterHandle: PropTypes.string,
  githubHandle: PropTypes.string,
  blogURL: PropTypes.string,
};

export default SpeakerSocialLinks;

