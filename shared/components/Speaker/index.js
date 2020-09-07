import React, { PropTypes } from 'react';

import SpeakerSocialLinks from '../SpeakerSocialLinks';

const listOfTalks = (talks) => {
  if (talks && Array.isArray(talks) && talks.length > 0) {
    return (
      <div>
        {talks.map((talk) => (
          <h5 className="Speaker__talk-title" key={talk.id}>
            {talk.title}
          </h5>
        ))}
      </div>
    );
  }
};

const Speaker = (props) => {
  const avatar =
    props.imageURL ||
    (props.conference
      ? '/img/PNG/SpeakerBlue.png'
      : '/img/PNG/SpeakerGreen.png');

  return (
    <article className="Speaker">
      <figure className="Speaker__photo">
        <img className="Speaker__photo--img" src={avatar} alt={props.name} />
      </figure>
      <h5 className="Speaker__name">
        <div className="Speaker__name--bold">{props.name} </div>
        {props.company}
      </h5>
      {listOfTalks(props.talks)}
      {!props.conference && <SpeakerSocialLinks {...props} />}
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
  conference: PropTypes.bool,
  talks: PropTypes.arrayOf({
    talks: PropTypes.arrayOf(
      PropTypes.shape({
        id: React.PropTypes.string,
        summary: React.PropTypes.string,
        title: React.PropTypes.string,
        speakers: PropTypes.arrayOf(PropTypes.shape(Speaker.propTypes)),
      })
    ),
  }),
};

export default Speaker;
