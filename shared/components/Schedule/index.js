import React, { PropTypes } from 'react';

const data = {
  name: 'React London 2017',
  date: 'Tuesday, 28th March 2017',
  schedule: [
    {
      time: '9:40 - 11:00 am',
      title: 'Registration',
      description: 'Registration and breakfast',
      details: [],
    },
    {
      time: '9:40 - 11:00 am',
      title: 'Welcome',
      description: 'Opening talk',
      details: [],
    },
    {
      time: '9:40 - 11:00 am',
      title: 'Morning Talks',
      description: 'Blurb about morning talks',
      details: [
        {
          time: '9:40 - 10:20 am',
          title: 'Computer Hardware Desktops And Notebooks And Handhelds Oh My',
          description: 'Lorem ipsum',
          speaker: {
            name: 'Christopher Chedau',
            url: 'http://example.com',
            company: 'Facebook',
          },
        },
        {
          time: '9:40 - 10:20 am',
          title: 'Computer Hardware Desktops And Notebooks And Handhelds Oh My',
          description: 'Lorem ipsum',
          speaker: {
            name: 'Christopher Chedau',
            url: 'http://example.com',
            company: 'Facebook',
          },
        },
      ],
    },
  ],
};

const ScheduleDetail = ({ detail }) => (
  <div className="ScheduleDetail">
    <div className="ScheduleDetail__time">
      {detail.time}
    </div>
    <div className="ScheduleDetail__title">
      {detail.title}
    </div>
    <div className="ScheduleDetail__description">
      {detail.description}
    </div>
    <a href={detail.speaker.url} className="ScheduleDetail__author">
      {detail.speaker.name}
    </a>
    <span className="ScheduleDetail__author--company">
      {detail.speaker.company}
    </span>
  </div>
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

const ScheduleItem = ({ item }) => (
  <div className="ScheduleItem">
    <div className="ScheduleItem__header">
      <div className="ScheduleItem__header__time">
        {item.time}
      </div>
      <h3 className="ScheduleItem__header__title">
        {item.title}
      </h3>
    </div>
    <div className="ScheduleItem__details">
      <p className="ScheduleItem__details__description">
        {item.description}
      </p>
      {item.details.map((detail, index) => <ScheduleDetail key={index} detail={detail} />)}
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


const Schedule = () => {
  return (
    <div className="Schedule block">
      <div className="content">
        <h2 className="Schedule__name">
          {data.name}
        </h2>
        <h2 className="Schedule__date">{data.date}</h2>
        <div className="Schedule__list">
          {data.schedule.map((scheduleItem, index) => (
            <ScheduleItem key={index} item={scheduleItem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
