import React from 'react';

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

export default CommunityEvents;
