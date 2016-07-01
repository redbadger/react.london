import React, { PropTypes } from 'react';
import Speaker from '../Speaker';

const Speakers = ({ eventSpeakers }) => (
  <section className="Speakers block">
    <div className="content">
      <h2 className="Speakers__header">Speakers</h2>
    </div>
    <div className="Speakers__container content">

      {eventSpeakers && eventSpeakers.map((props, index) => (
        <Speaker key={index} {...props} />
      ))}

    </div>
  </section>

);

Speakers.propTypes = {
  eventSpeakers: PropTypes.arrayOf(Speaker.propTypes),
};


export default Speakers;