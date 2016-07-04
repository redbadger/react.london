import React, { PropTypes } from 'react';

const NextEvent = ({ eventTitle, eventDate, eventAddress, eventStartTime, eventEndTime }) => (
  <section className="NextEvent block">
    <div className="content">
      <h2 className="NextEvent__header">Next Event</h2>
      <article className="NextEvent__section-container">
        <div className="NextEvent__section NextEvent__section__details">
          <h3 className="NextEvent__details__heading">{eventTitle}</h3>
          <ul className="NextEvent__details">
            <li>
              <a className="NextEvent__link--date">{eventDate}</a>
            </li>
            <li>
              <a className="NextEvent__link--place">{eventAddress}</a>
            </li>
            <li>
              <a className="NextEvent__link--time">{eventStartTime} - {eventEndTime}</a>
            </li>
          </ul>
        </div>
        <div className="NextEvent__section NextEvent__section__booking">
          <h3 className="NextEvent__booking__heading">TICKETS GO LIVE</h3>
          <p className="NextEvent__booking__text">Monday, 11 July 2016 at 13:00</p>
          <div className="NextEvent__booking-btn__container">
            <a className="NextEvent__booking-btn NextEvent__booking-btn--disabled">free ticket</a>
          </div>
          <p className="NextEvent__live-stream-text">
            To get reminders about tickets and future
            events <a className="NextEvent__live-stream-text--link" href="#stay-tuned">
            subscribe here</a>
          </p>

        </div>
      </article>
    </div>
  </section>
);

NextEvent.propTypes = {
  eventTitle: PropTypes.string,
  eventDate: PropTypes.string,
  eventAddress: PropTypes.string,
  eventStartTime: PropTypes.string,
  eventEndTime: PropTypes.string,
};


export default NextEvent;
