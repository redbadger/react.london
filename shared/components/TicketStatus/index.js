import React, { PropTypes } from 'react';
import classnames from 'classnames';

export const StatusButton = ({ buttonText, buttonLink }) => {
  const actionClasses = classnames({
    'TicketStatus__booking-btn': true,
    'TicketStatus__booking-btn--active': buttonLink,
    'TicketStatus__booking-btn--disabled': !buttonLink,
  });
  return (
    <div className="TicketStatus__booking-btn__container">
      <a className={actionClasses} href={buttonLink}>
        {buttonText}
      </a>
    </div>
  );
};

const TicketStatus = (props) => {
  const { title } = props;
  return (
    <div className="TicketStatus__section TicketStatus__section__booking">
      <p className="TicketStatus__live-stream-text">{title}</p>
      {props.buttonLink && <StatusButton {...props} />}
    </div>
  );
};

TicketStatus.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

StatusButton.propTypes = {
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
};

export default TicketStatus;
