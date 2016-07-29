import React, { PropTypes } from 'react';
import classnames from 'classnames';

export const getActionLink = (externalLinks, type) => {
  if (!externalLinks) return undefined;

  const foundLink = externalLinks.find((link) => {
    return link.type === type;
  });

  return (foundLink && foundLink.url)
    ? foundLink.url
    : undefined;
};

export const StatusButton = ({ externalLinks }) => {
  let actionLink = getActionLink(externalLinks, 'EVENT');
  let actionLinkClasses = classnames({
    'EventStatus__booking-btn': true,
    'EventStatus__booking-btn--active': actionLink,
    'EventStatus__booking-btn--disabled': !actionLink,
  });

  return (
    <div className="EventStatus__booking-btn__container">
      <a
        className={actionLinkClasses}
        href={actionLink}
      >
        Watch Video
      </a>
    </div>
  );
};

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
      <StatusButton externalLinks={externalLinks} />
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
