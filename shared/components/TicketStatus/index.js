import React, { PropTypes } from 'react';
import classnames from 'classnames';

export const StatusButton = ({ buttonText, link }) => {
  const actionClasses = classnames({
    'TicketStatus__booking-btn': true,
    'TicketStatus__booking-btn--active': link,
    'TicketStatus__booking-btn--disabled': !link,
  });

  return (
    <div className="TicketStatus__booking-btn__container">
      <a
        className={actionClasses}
        href={link || '#'}
      >
        {buttonText}
      </a>
    </div>
  );
};

const TicketStatus = (props) => {
  const { statusHeader, statusSubHeader } = props;
  return (
    <div className="TicketStatus__section TicketStatus__section__booking">
      <h3 className="TicketStatus__booking__heading">
        {statusHeader}
      </h3>
      <p className="TicketStatus__live-stream-text">
        {statusSubHeader}
      </p>
      <StatusButton {...props} />
      <p className="TicketStatus__live-stream-text">
        To get reminders about tickets and future
        events <a className="TicketStatus__live-stream-text--link" href="#stay-tuned">
        subscribe here</a>
      </p>
    </div>
  );
};

TicketStatus.propTypes = {
  ticketsAvailable: PropTypes.bool,
  externalLinks: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
    type: PropTypes.string,
  })),
  statusHeader: PropTypes.string,
  statusSubHeader: PropTypes.string,
};

StatusButton.propTypes = {
  buttonText: PropTypes.string,
  linkType: PropTypes.string,
  link: PropTypes.string,
  externalLinks: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
    type: PropTypes.string,
  })),
};

export default TicketStatus;