import React from 'react';

import ScheduleItem from '../ScheduleItem';
import CommunityEvents from '../CommunityEvents';

const mainEventData = {
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
          description: 'Stu is a founder with a delivery focus. He ensures that everything we create is both great for the client, and challenging for us.', // eslint-disable-line max-len
          speaker: {
            name: 'Christopher Chedau',
            url: 'http://example.com',
            company: 'Facebook',
          },
        },
        {
          time: '9:40 - 10:20 am',
          title: 'Computer Hardware Desktops And Notebooks And Handhelds Oh My',
          description: 'Stu is a founder with a delivery focus. He ensures that everything we create is both great for the client, and challenging for us.', // eslint-disable-line max-len
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

const Schedule = () => {
  return (
    <div className="Schedule block">
      <div className="content">
        <h2 className="Schedule__name">
          {mainEventData.name}
        </h2>
        <h2 className="Schedule__date">{mainEventData.date}</h2>
        <div className="Schedule__list">
          {mainEventData.schedule.map((scheduleItem, index) => (
            <ScheduleItem key={index} item={scheduleItem} />
          ))}
        </div>
        <p className="Schedule__info">Schedule subject to change.</p>
        <CommunityEvents />
      </div>
    </div>
  );
};

export default Schedule;
