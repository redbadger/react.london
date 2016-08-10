import React, { PropTypes } from 'react';
import Speaker from '../Speaker';
import pathOr from 'ramda/src/pathOr';

const Talks = ({ talks }) => {
  if (!Array.isArray(talks)) { return null; }
  return (
    <section className="Speakers block">
      <div className="content">
        <h2 className="Speakers__header">Speakers</h2>
      </div>
      <div className="Speakers__container content">
        {talks && talks.map((talk, index) => {
          const speakerProps = pathOr({}, ['speakers', 0], talk);
          return (
            <div className="Talk" key={index}>
              <Speaker {...speakerProps} />
              <h4 className="Speaker__title">{talk.title}</h4>
              <p className="Speaker__summary">{talk.summary}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

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
