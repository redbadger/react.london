import React from 'react';
const Speaker = () => {
  const avatar = '/img/PNG/SpeakerWhite.png';
  return (
    <article className="Speaker">
      <figure className="Speaker__photo">
        <img className="Speaker__photo--img" src={avatar} alt={'Speaker placeholder'} />
      </figure>
      <h5 className="Speaker__name">
        <div className="Speaker__name--bold__placeholder">More speakers to be announced soon.</div>
      </h5>
    </article>
  );
};

export default Speaker;
