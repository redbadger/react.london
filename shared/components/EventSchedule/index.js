import React, { PropTypes } from 'react';
import ScheduleItem from '../ScheduleItem';

const EventSchedule = ({ eventSchedule }) => (
  <div className="EventSchedule">
    <h3>Schedule</h3>
    <div className="EventSchedule__schedule">
      {eventSchedule && eventSchedule.map((props, index) => (
        <ScheduleItem key={index} {...props} />
      ))}
    </div>
  </div>
);

EventSchedule.propTypes = {
  eventSchedule: PropTypes.arrayOf(PropTypes.shape(ScheduleItem.propTypes)),
};

export default EventSchedule;
