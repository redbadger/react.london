import React, { PropTypes } from 'react';

const ScheduleDetail = ({ detail }) => (
  <li className="ScheduleDetail">
    <time className="ScheduleDetail__time">
      {detail.time}
    </time>
    <h4 className="ScheduleDetail__title">
      {detail.title}
    </h4>
    <p className="ScheduleDetail__description">
      {detail.description}
    </p>
    <a href={detail.speaker.url} className="ScheduleDetail__author">
      {detail.speaker.name}
    </a>
    <span className="ScheduleDetail__company">
      {detail.speaker.company}
    </span>
  </li>
);

ScheduleDetail.propTypes = {
  detail: PropTypes.shape({
    time: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    speaker: PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
      company: PropTypes.string,
    }),
  }),
};

export default ScheduleDetail;
