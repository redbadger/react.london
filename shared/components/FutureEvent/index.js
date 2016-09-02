import React, { PropTypes } from 'react';
import { formatDate } from '../../utilities/date';
import { googleMapsUrl } from '../../google-maps';
import locationType from '../../prop-types/location-type';

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

function classes(eventType) {
  if (eventType) {
    const type = eventType.replace(/[^a-z]/gi, '-');
    return `FutureEvent FutureEvent--${type}`;
  }
  return 'FutureEvent';
}

const FutureEvent = ({ title, eventType, startDateTime, location }) => {
  if (!title) { return null; }
  return (
    <div className={classes(eventType)}>
      <h3 className="FutureEvent__title">
        {title}
      </h3>
      <ul className="FutureEvent__details">
        <li className="FutureEvent__datetime">
          {dateText(startDateTime)}
        </li>
        <li className="FutureEvent__location">
          <a href={googleMapsUrl(location)} target="_blank" rel="noopener">
            {address(location)}
          </a>
        </li>
      </ul>
    </div>
  );
};

FutureEvent.propTypes = {
  title: PropTypes.string,
  eventType: PropTypes.string,
  startDateTime: PropTypes.shape({ iso: PropTypes.string }),
  location: locationType,
};

export default FutureEvent;
