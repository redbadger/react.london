import React from 'react';
import { ExternalLink } from '../ExternalLink';
const Speaker = () => {
  const avatar = '/img/PNG/SpeakerWhite.png';
  return (
    <article className="Speaker">
      <figure className="Speaker__photo">
        <img className="Speaker__photo--img" src={avatar} alt={'Speaker placeholder'} />
      </figure>
      <h5 className="Speaker__name">
        <div className="Speaker__name--bold">Could this be you?</div>
      </h5>
      <ExternalLink
        href="https://www.papercall.io/reactlondon2017"
        className="Speaker__button"
      >
        Become a speaker
      </ExternalLink>
    </article>
  );
};

export default Speaker;
