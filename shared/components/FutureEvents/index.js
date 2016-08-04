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
    date: 'Tuesday, 21st August 2016',
    location: 'TBD',
  },
  {
    title: 'React London Meetup September 2016',
    date: 'Tuesday, 21st September 2016',
    location: 'TBD',
  },
  {
    title: 'React London 2017',
    date: 'Tuesday, 28 March 2017',
    location: 'QEII Center, London SW1P 3EE',
  },
  {
    date: 'Tuesday8 March 2017',
    location: 'QEII Center, London SW1P 3EE',
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
