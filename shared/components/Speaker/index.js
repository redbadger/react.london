import React, { PropTypes } from 'react';
import SpeakerSocialLinks from '../SpeakerSocialLinks';


const Speaker = (props) => {
  const avatar = props.imageURL || '/img/PNG/SpeakerGreen.png';
  return (
    <article className="Speaker">
      <figure className="Speaker__photo">
        <img className="Speaker__photo--img" src={avatar} alt={props.name} />
      </figure>
      <h5 className="Speaker__name">
        <div className="Speaker__name--bold">{props.name} </div>
        {props.company}
      </h5>
      <SpeakerSocialLinks
        {...props}
      />

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
