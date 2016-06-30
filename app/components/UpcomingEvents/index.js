import React, { PropTypes } from 'react';
import UpcomingEvent from '../UpcomingEvent';

const UpcomingEvents = ({ upcomingEvents }) => (
  <section className="UpcomingEvents block">
    <div className="content">
      <h2>Upcoming Events</h2>
    </div>
    <div className="content space-between UpcomingEvents__events">
      {upcomingEvents && upcomingEvents.map((event, index) => (
        event ? <UpcomingEvent event={event} index={index} /> : null
      ))}
    </div>
  </section>
);

UpcomingEvents.propTypes = {
  upcomingEvents: PropTypes.arrayOf(React.PropTypes.shape({
    name: PropTypes.string,
    company: PropTypes.string,
    talkTitle: PropTypes.string,
    talkSummary: PropTypes.string,
    twitterHandle: PropTypes.string,
    githubHandle: PropTypes.string,
    blogURL: PropTypes.string,
  })),
};

export default UpcomingEvents;
