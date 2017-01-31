import React, { PropTypes } from 'react';

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

const communityEventsData = {
  date: 'Monday, 27th March 2017',
  events: [
    {
      title: 'What React Means to me',
      url: 'http://example.com',
      venue: 'Ticketmaster, Somewhere',
      time: '6:00pm - 9:00pm',
    },
    {
      title: 'Networking',
      url: 'http://example.com',
      venue: 'Trainline',
    },
  ],
};

const CommunityEvents = () => (
  <div className="CommunityEvents">
    <h2 className="Schedule__name">
      Community Events
    </h2>
    <h2 className="Schedule__date">Monday, 27th March 2017</h2>
    <p>
      Our awesome partners are organising some great events the evening of 27th March. Take a look
      and sign yourself up. Tickets are limited to one event per conference ticket holder, just use
      the password provided with your ticket.
    </p>
    <ul className="CommunityEvents__list">
      {communityEventsData.events.map((event, index) => (
        <li key={index} className="CommunityEvents__event">
          <a href={event.url}>{event.title}</a>,
          <span className="CommunityEvents__venue">
            {event.time ? [event.venue, event.time].join(', ') : event.venue}
          </span>
        </li>
      ))}
    </ul>
  </div>
);


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
