import React, { PropTypes } from 'react';

const ScheduleItem = ({
  time,
  text,
}) => (
  <div className="ScheduleItem">
    <dt>{time}</dt>
    <dd>{text}</dd>
  </div>
);

ScheduleItem.propTypes = {
  time: PropTypes.string,
  text: PropTypes.string,
};

export default ScheduleItem;
