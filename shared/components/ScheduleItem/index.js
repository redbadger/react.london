import React, { PropTypes } from 'react';

const ScheduleItem = ({
  time,
  text,
}) => (
  <li className="ScheduleItem" data-time={time}>
    <p className="ScheduleItem__text">
      {text}
    </p>
  </li>
);

ScheduleItem.propTypes = {
  time: PropTypes.string,
  text: PropTypes.string,
};

export default ScheduleItem;
