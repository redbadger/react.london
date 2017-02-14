import React from 'react';

import ScheduleItem from '../ScheduleItem';

const mainEventData = {
  name: 'React London 2017',
  date: 'Tuesday, 28th March 2017',
  schedule: [
    {
      time: '8:30 - 9:30',
      title: '',
      description: 'Breakfast and registration',
      details: [],
    },
    {
      time: '9:30 - 9:40',
      title: '',
      description: 'Conference welcome',
      details: [],
    },
    {
      time: '9:40 - 10:20',
      title: '',
      description: 'Christopher',
      details: [],
    },
    {
      time: '10:25 - 11:10',
      title: '',
      description: 'Andrey',
      details: [],
    },
    {
      time: '11:10 - 11:30',
      title: '',
      description: 'Refreshment break',
      details: [],
    },
    {
      time: '11:30 - 12:15',
      title: '',
      description: 'Cheng',
      details: [],
    },
    {
      time: '12:15 - 13:20',
      title: '',
      description: 'Lightning talks - Anna, Oliver, Jani, Jasdeep',
      details: [],
    },
    {
      time: '13:20 - 14:20',
      title: '',
      description: 'Lunch',
      details: [],
    },
    {
      time: '14:20 - 15:05',
      title: '',
      description: 'Max',
      details: [],
    },
    {
      time: '15:05 - 15:50',
      title: '',
      description: 'Dustan',
      details: [],
    },
    {
      time: '15:50 - 16:10',
      title: '',
      description: 'Refreshment break',
      details: [],
    },
    {
      time: '16:10 - 17:10',
      title: '',
      description: 'Panel discussion - Christopher, Dan, Lee, Ben',
      details: [],
    },
    {
      time: '17:10 - 17:50',
      title: '',
      description: 'Ken Wheeler',
      details: [],
    },
    {
      time: '17:50 - 18:00',
      title: '',
      description: 'Closing remarks',
      details: [],
    },
    {
      time: '18:00',
      title: '',
      description: 'Stick around for some drinks, more fantastic food from Leith\'s and great conversation with the community', // eslint-disable-line
      details: [],
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
        <ol className="Schedule__list">
          {mainEventData.schedule.map((scheduleItem, index) => (
            <li>
              <ScheduleItem key={index} item={scheduleItem} />
            </li>
          ))}
        </ol>
        <p className="Schedule__info">Schedule subject to change.</p>
      </div>
    </div>
  );
};

export default Schedule;
