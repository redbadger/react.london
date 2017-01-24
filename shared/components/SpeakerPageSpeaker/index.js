import React, { PropTypes } from 'react';
import SpeakerSocialLinks from '../SpeakerSocialLinks';


const SpeakerPageSpeaker = (speaker) => {
  const avatar = speaker.imageURL || '/img/PNG/SpeakerGreen.png';
  return (
    <article className="SpeakerPageSpeaker">
      <figure className="SpeakerPageSpeaker__photo">
        <img className="SpeakerPageSpeaker__photo--img" src={avatar} alt={speaker.name} />
      </figure>
      <h5 className="SpeakerPageSpeaker__details">
        <div className="SpeakerPageSpeaker__details__speaker">
          <span className="SpeakerPageSpeaker__details__name--bold">{speaker.name}</span>
          <span className="SpeakerPageSpeaker__details__company">{speaker.company}</span>
        </div>
        <SpeakerSocialLinks {...speaker} />
        {
          speaker.talks.map(talk => (
            <div key={talk.title} >
              <div className="SpeakerPageSpeaker__details__title--bold">{talk.title} </div>
              <div className="SpeakerPageSpeaker__details__summary">{talk.summary}</div>
            </div>
          ))
        }
      </h5>
    </article>
  );
};


SpeakerPageSpeaker.propTypes = {
  speaker: PropTypes.shape({
    name: PropTypes.string,
    company: PropTypes.string,
    title: PropTypes.string,
    twitterHandle: PropTypes.string,
    githubHandle: PropTypes.string,
    blogURL: PropTypes.string,
    imageURL: PropTypes.string,
    talks: [{
      id: PropTypes.string,
      summary: PropTypes.string,
      title: PropTypes.string,
    }],
  }),
};

export default SpeakerPageSpeaker;
