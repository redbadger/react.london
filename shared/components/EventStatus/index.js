import React, { PropTypes } from 'react';

const EventStatus = ({
  ticketsAvailable,
  externalLinks,
  startDateTime,
  endDateTime,
}) => {
  return (
    <div className="EventStatus__section EventStatus__section__booking">
      <h3 className="EventStatus__booking__heading">This event has </h3>
      <p className="EventStatus__live-stream-text">
        Couldn’t make the event? <div>We’ve got your back.</div>
      </p>
      <div className="EventStatus__booking-btn__container">
        <a
          className="EventStatus__booking-btn EventStatus__booking-btn--active"
          href="https://www.youtube.com/watch?v=HrECWxWVcEI"
        >
          Watch Video
        </a>
      </div>
      <p className="EventStatus__live-stream-text">
        To get reminders about tickets and future
        events <a className="EventStatus__live-stream-text--link" href="#stay-tuned">
        subscribe here</a>
      </p>
    </div>
  );
};

const dateTimeType = PropTypes.shape({
  iso: PropTypes.string.isRequired,
});

EventStatus.propTypes = {
  ticketsAvailable: PropTypes.bool,
  externalLinks: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
    type: PropTypes.string,
  })),
  ticketReleaseDate: dateTimeType,
  startDateTime: dateTimeType,
  endDateTime: dateTimeType,
};

export default EventStatus;
