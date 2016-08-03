import React, { PropTypes } from 'react';

const IconLink = ({ present, url, type, title }) => {
  if (!present) { return null; }
  return (
    <a
      className={'Speaker__detail Speaker__detail--' + type.toLowerCase()}
      target="_blank"
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

const Speaker = ({
  name,
  company,
  imageURL,
  githubHandle,
  twitterHandle,
  blogURL,
}) => {
  const avatar = imageURL || '/img/PNG/Speaker_Anon.png';
  return (
    <article className="Speaker">
      <figure className="Speaker__photo">
        <img className="Speaker__photo--img" src={avatar} alt={name} />
      </figure>
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
      <h5 className="Speaker__name">
        <span className="Speaker__name--bold">{name} </span>
        {company}
      </h5>
    </article>
  );
};

Speaker.propTypes = {
  name: PropTypes.string,
  company: PropTypes.string,
  title: PropTypes.string,
  twitterHandle: PropTypes.string,
  githubHandle: PropTypes.string,
  blogURL: PropTypes.string,
  imageURL: PropTypes.string,
};

export default Speaker;
