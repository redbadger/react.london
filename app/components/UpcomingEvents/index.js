import React, { PropTypes } from 'react';
import UpcomingEvent from '../UpcomingEvent';

const UpcomingEvents = ({ upcomingEvents }) => (
  <section className="UpcomingEvents block">
    <div className="content">
      <h2>Upcoming Events</h2>
    </div>
    <div className="content space-between UpcomingEvents__events">
      {upcomingEvents && upcomingEvents.map((event) => (
        <UpcomingEvent {...event} />
      ))}
    </div>
  </section>
);

UpcomingEvents.propTypes = {
  upcomingEvents: PropTypes.arrayOf(UpcomingEvent.propTypes),
};

export default UpcomingEvents;
