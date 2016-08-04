import React, { PropTypes } from 'react';

const FutureEvent = ({ title, date, location }) => (
  <div className="FutureEvent">
    <h3 className="FutureEvent__title">
      {title}
    </h3>
    <ul className="FutureEvent__details">
      <li className="FutureEvent__datetime">
        {date}
      </li>
      <li className="FutureEvent__location">
        {location}
      </li>
    </ul>
  </div>
);


FutureEvent.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  location: PropTypes.string,
};

const events = [
  {
    title: 'React London Meetup August 2016',
    date: 'Tuesday, 24th August 2016',
    location: 'Facebook',
  },
  {
    title: 'React London Meetup September 2016',
    date: 'Tuesday, 21st September 2016',
    location: 'Skillsmatter',
  },
  {
    title: 'React London 2017',
    date: 'Tuesday, 28th March 2017',
    location: 'QEII Center, London SW1P 3EE',
  },
  { // Not displayed yet
    title: 'React London Meetup October 2016',
    date: 'Tuesday, 18th October 2016',
    location: 'Facebook',
  },
  { // Not displayed yet
    title: 'React London Meetup November 2016',
    date: 'Tuesday, 7th November 2016',
    location: 'Bloomberg',
  },
];

const FutureEvents = () => (
  <section className="FutureEvents block">
    <div className="content">
      <h2 className="FutureEvents__header">Upcoming Events</h2>
    </div>
    <div className="FutureEvents__events-list content">
      <div className="FutureEvents__events-container">

        {events.slice(0, 3).map((props, index) => (
          <FutureEvent {...props} key={index} />
        ))}

      </div>
    </div>
  </section>
);

export default FutureEvents;
