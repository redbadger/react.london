import React from 'react';
import { ExternalLink } from '../ExternalLink';
const Speaker = () => {
  const avatar = '/img/PNG/SpeakerWhite.png';
  return (
    <article className="SpeakerPagePlaceholder">
      <figure className="SpeakerPagePlaceholder__photo">
        <img
          className="SpeakerPagePlaceholder__photo--img"
          src={avatar}
          alt={'Speaker placeholder'}
        />
      </figure>
      <div className="SpeakerPagePlaceholder__info">
        <h5 className="SpeakerPagePlaceholder__text">Could this be you?</h5>
        <ExternalLink
          href="https://www.papercall.io/reactlondon2017"
          className="SpeakerPagePlaceholder__button"
        >
          Become a speaker
        </ExternalLink>
      </div>
    </article>
  );
};

export default Speaker;
