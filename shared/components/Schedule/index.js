import React from 'react';

const scheduleData = [
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
];

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
      {item.details.map(detail => <ScheduleDetail detail={detail} />)}
    </div>
  </div>
);


const Schedule = () => {
  return (
    <div className="Schedule block">
      <div className="content">
        <div className="Schedule__list">
          {scheduleData.map(scheduleItem => <ScheduleItem item={scheduleItem} />)}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
