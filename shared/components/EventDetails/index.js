import React, { PropTypes } from 'react';

import EventSchedule from '../EventSchedule';
import EventSponsors from '../EventSponsors';
import { eventSchedule, eventSponsors } from './mock-data';

// TODO: schedule & sponsors passed in as props as soon as data is
// in badger-brain.
const EventDetails = () => (
  <section className="EventDetails block">
    <div className="content">
      <div className="EventDetails__section-container">
        <article className="EventDetails__section-schedule">
          <EventSchedule eventSchedule={eventSchedule} />
        </article>
        <article className="EventDetails__section-sponsors">
          <EventSponsors eventSponsors={eventSponsors} />
        </article>
      </div>
    </div>
  </section>
);

EventDetails.propTypes = {
  eventSponsors: PropTypes.arrayOf(PropTypes.shape(EventSponsors.propTypes)),
  eventSchedule: PropTypes.arrayOf(PropTypes.shape(EventSchedule.propTypes)),
};

export default EventDetails;
