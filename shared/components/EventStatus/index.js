import React, { PropTypes } from 'react';
import classnames from 'classnames';

export const getActionLink = (externalLinks, type) => {
  if (!externalLinks) return undefined;

  return externalLinks.find((link) => {
    return link.type === type;
  });
};

export const StatusButton = ({ externalLinks }) => {
  const action = getActionLink(externalLinks, 'EVENT');
  const actionClasses = classnames({
    'EventStatus__booking-btn': true,
    'EventStatus__booking-btn--active': action && action.url,
    'EventStatus__booking-btn--disabled': !action || !action.url,
  });

  return (
    <div className="EventStatus__booking-btn__container">
      <a
        className={actionClasses}
        href={(action && action.url) || '#'}
      >
        {(action && action.title) || ''}
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

StatusButton.propTypes = {
  externalLinks: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
    type: PropTypes.string,
  })),
};

export default EventStatus;
