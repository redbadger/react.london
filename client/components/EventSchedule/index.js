import React, { PropTypes } from 'react';
import ScheduleItem from '../ScheduleItem';

const EventSchedule = ({ eventSchedule }) => (

  <article className="EventSchedule">
    <h3>Schedule</h3>
    <dl>
      {eventSchedule && eventSchedule.map((props, index) => (
        <ScheduleItem key={index} {...props} />
      ))}
    </dl>
  </article>

);

EventSchedule.propTypes = {
  eventSchedule: PropTypes.arrayOf(PropTypes.shape(ScheduleItem.propTypes)),
};

export default EventSchedule;
