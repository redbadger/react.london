import React, { PropTypes } from 'react';

import ScheduleDetail from '../ScheduleDetail';

const ScheduleItem = ({ item }) => (
  <div className="ScheduleItem">
    <div className="ScheduleItem__header">
      <time className="ScheduleItem__header__time">
        {item.time}
      </time>
    </div>
    <div className="ScheduleItem__details">
      <h3 className="ScheduleItem__header__title">
        {item.title}
      </h3>
      <p className="ScheduleItem__details__description">
        {item.description}
      </p>
      <ol className="ScheduleItem__details__list">
        {item.details.map((detail, index) => (
          <li key={index}>
            <ScheduleDetail detail={detail} />
          </li>
        ))}
      </ol>
    </div>
  </div>
);

ScheduleItem.propTypes = {
  item: PropTypes.shape({
    time: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.description,
    details: PropTypes.arrayOf(PropTypes.shape(ScheduleDetail.propTypes)),
  }),
};

export default ScheduleItem;
