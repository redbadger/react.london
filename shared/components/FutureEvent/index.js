import React, { PropTypes } from 'react';
import { formatDate } from '../../utilities/date';

export const placeholderText = 'To be confirmed';

function address(location) {
  return location && location.address || placeholderText;
}

function dateText(date) {
  if (date) {
    return formatDate(date, 'dddd, Do MMMM YYYY');
  }
  return placeholderText;
}

const FutureEvent = ({ title, startDateTime, location }) => {
  if (!title) { return null; }
  return (
    <div className="FutureEvent">
      <h3 className="FutureEvent__title">
        {title}
      </h3>
      <ul className="FutureEvent__details">
        <li className="FutureEvent__datetime">
          {dateText(startDateTime)}
        </li>
        <li className="FutureEvent__location">
          {address(location)}
        </li>
      </ul>
    </div>
  );
};

FutureEvent.propTypes = {
  title: PropTypes.string,
  startDateTime: PropTypes.shape({ iso: PropTypes.string }),
  location: PropTypes.shape({ address: PropTypes.string }),
};

export default FutureEvent;
