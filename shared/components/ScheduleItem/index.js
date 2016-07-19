import React, { PropTypes } from 'react';

const ScheduleItem = ({
  time,
  text,
}) => (
  <div className="ScheduleItem">
    <div className="ScheduleItem__time">
      {time}
    </div>
    <div className="ScheduleItem__line"></div>
    <div className="ScheduleItem__text">
      {text}
    </div>
  </div>
);

ScheduleItem.propTypes = {
  time: PropTypes.string,
  text: PropTypes.string,
};

export default ScheduleItem;
