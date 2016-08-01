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
    'TicketStatus__booking-btn': true,
    'TicketStatus__booking-btn--active': action && action.url,
    'TicketStatus__booking-btn--disabled': !action || !action.url,
  });

  return (
    <div className="TicketStatus__booking-btn__container">
      <a
        className={actionClasses}
        href={(action && action.url) || '#'}
      >
        {(action && action.title) || ''}
      </a>
    </div>
  );
};

const TicketStatus = ({
  ticketsAvailable,
  externalLinks,
  startDateTime,
  endDateTime,
}) => {
  return (
    <div className="TicketStatus__section TicketStatus__section__booking">
      <h3 className="TicketStatus__booking__heading">This event has </h3>
      <p className="TicketStatus__live-stream-text">
        Couldn’t make the event? <div>We’ve got your back.</div>
      </p>
      <StatusButton externalLinks={externalLinks} />
      <p className="TicketStatus__live-stream-text">
        To get reminders about tickets and future
        events <a className="TicketStatus__live-stream-text--link" href="#stay-tuned">
        subscribe here</a>
      </p>
    </div>
  );
};

const dateTimeType = PropTypes.shape({
  iso: PropTypes.string.isRequired,
});

TicketStatus.propTypes = {
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

export default TicketStatus;
