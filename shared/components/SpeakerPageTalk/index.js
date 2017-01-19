import React, { PropTypes } from 'react';
import SpeakerSocialLinks from '../SpeakerSocialLinks';


const SpeakerPageTalk = (talk) => {
  const firstSpeaker = talk.speakers[0];
  const avatar = firstSpeaker.imageURL || '/img/PNG/SpeakerGreen.png';

  return (
    <article className="SpeakerPageTalk">
      <figure className="SpeakerPageTalk__photo">
        <img className="SpeakerPageTalk__photo--img" src={avatar} alt={firstSpeaker.name} />
      </figure>
      <h5 className="SpeakerPageTalk__details">
        <div className="SpeakerPageTalk__details__speaker">
          <span className="SpeakerPageTalk__details__name--bold">{firstSpeaker.name}</span>
          <span className="SpeakerPageTalk__details__company">{firstSpeaker.company}</span>
        </div>
        <SpeakerSocialLinks {...talk.speakers[0]} />
        <div className="SpeakerPageTalk__details__title--bold">{talk.title} </div>
        <div className="SpeakerPageTalk__details__summary">{talk.summary}</div>
      </h5>
    </article>
  );
};


SpeakerPageTalk.propTypes = {
  id: PropTypes.string,
  summary: PropTypes.string,
  title: PropTypes.string,
  speakers: [{
    name: PropTypes.string,
    company: PropTypes.string,
    title: PropTypes.string,
    twitterHandle: PropTypes.string,
    githubHandle: PropTypes.string,
    blogURL: PropTypes.string,
    imageURL: PropTypes.string,
    summary: PropTypes.string,
  }],
};

export default SpeakerPageTalk;
