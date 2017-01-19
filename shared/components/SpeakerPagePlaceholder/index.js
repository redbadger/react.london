import React from 'react';
import { ExternalLink } from '../ExternalLink';
const Speaker = () => {
  const avatar = '/img/PNG/SpeakerWhite.png';
  return (
    <article className="SpeakerPageTalk">
      <figure className="SpeakerPageTalk__photo">
        <img className="SpeakerPageTalk_photo--img" src={avatar} alt={'Speaker placeholder'} />
      </figure>
      <h5 className="SpeakerPageTalk__deatils">
        <div className="SpeakerPageTalk_name--bold">Could this be you?</div>
      </h5>
      <ExternalLink
        href="https://www.papercall.io/reactlondon2017"
        className="SpeakerPageTalk_button"
      >
        Become a speaker
      </ExternalLink>
    </article>
  );
};

export default Speaker;
