import React, { PropTypes } from 'react';
import Speaker from '../Speaker';
import { pathOr } from 'ramda';

const Talks = ({ talks }) => (
  <section className="Speakers block">
    <div className="content">
      <h2 className="Speakers__header">Speakers</h2>
    </div>
    <div className="Speakers__container content">
      {talks && talks.map((talk, index) => (
        <div className="Talk" key={index}>
          <Speaker {...pathOr('', ['speakers', 0], talk)} />
          <h4 className="Speaker__title">{talk.title}</h4>
          <p className="Speaker__summary">{talk.summary}</p>
        </div>
      ))}
    </div>
  </section>
);

Talks.propTypes = {
  talks: PropTypes.arrayOf(
    PropTypes.shape({
      id: React.PropTypes.string,
      summary: React.PropTypes.string,
      title: React.PropTypes.string,
      speakers: PropTypes.arrayOf(PropTypes.shape(Speaker.propTypes)),
    })
  ),
};

export default Talks;
