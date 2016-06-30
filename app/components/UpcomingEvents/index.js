import React, { PropTypes } from 'react';
import UpcomingEvent from '../UpcomingEvent';

const UpcomingEvents = ({ upcomingEvents }) => (
  <section className="UpcomingEvents block">
    <div className="content">
      <h2>Upcoming Events</h2>
    </div>
    <div className="content space-between UpcomingEvents__events">
      {upcomingEvents && upcomingEvents.map((event, key) => (
        event ? <UpcomingEvent {...event} {...key} /> : null
      ))}
    </div>
  </section>
);

UpcomingEvents.propTypes = {
  upcomingEvents: PropTypes.arrayOf(React.PropTypes.shape({
    venue: PropTypes.string,
    time: PropTypes.string,
    date: PropTypes.string,
    title: PropTypes.string,
  })),
};

export default UpcomingEvents;
