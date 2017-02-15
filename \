import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const ScheduleDetail = ({ detail }) => (
  <div className="ScheduleDetail">
    <h4 className="ScheduleDetail__title">
      <time className={!detail.listElement ? 'ScheduleDetail__time' : ''}>
        {detail.time}
      </time>
      {detail.title}
    </h4>
    <p className="ScheduleDetail__description">
      {detail.description}
    </p>
    <Link to={`/speakers#${detail.speaker.id}`} className="ScheduleDetail__author">
      {detail.speaker.name}
    </Link>
    <span className="ScheduleDetail__company">
      {detail.speaker.company}
    </span>
  </div>
);

ScheduleDetail.propTypes = {
  detail: PropTypes.shape({
    time: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    listElement: PropTypes.boolean,
    speaker: PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      company: PropTypes.string,
    }),
  }),
};

export default ScheduleDetail;
