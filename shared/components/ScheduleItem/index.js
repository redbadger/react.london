import React, { PropTypes } from 'react';
import { formatDate } from '../../utilities/dateUtils';

const ScheduleItem = ({
  datetime,
  text,
}) => (
  <li className="ScheduleItem" data-time={formatDate(datetime, 'HH:mm')}>
    <p className="ScheduleItem__text">
      {text}
    </p>
  </li>
);

ScheduleItem.propTypes = {
  datetime: PropTypes.string,
  text: PropTypes.string,
};

export default ScheduleItem;
