import React, { PropTypes } from 'react';

const UpcomingEvent = ({ event, index }) => (
  <article className="UpcomingEvent" key={index}>
    <h3>{event.title}</h3>
    <ul className="UpcomingEvent__details semantic-only">
      <li className="UpcomingEvent__details--date">
        <a>{event.date}</a>
      </li>
      <li className="UpcomingEvent__details--location">
        <a>{event.venue}</a>
      </li>
      <li className="UpcomingEvent__details--time">
        <a>from {event.startTime} to {event.endTime}</a>
      </li>
    </ul>
  </article>
);

UpcomingEvent.propTypes = {
  event: PropTypes.shape({
    venue: PropTypes.string,
    time: PropTypes.string,
    date: PropTypes.string,
    title: PropTypes.string,
  }),
  index: PropTypes.number,
};


export default UpcomingEvent;
