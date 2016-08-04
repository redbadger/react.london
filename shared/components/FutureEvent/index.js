import React, { PropTypes } from 'react';

export const placeholderText = 'To be confirmed';

const FutureEvent = ({ title, date, location }) => {
  if (!title) { return null; }
  return (
    <div className="FutureEvent">
      <h3 className="FutureEvent__title">
        {title}
      </h3>
      <ul className="FutureEvent__details">
        <li className="FutureEvent__datetime">
          {date || placeholderText}
        </li>
        <li className="FutureEvent__location">
          {location || placeholderText}
        </li>
      </ul>
    </div>
  );
};

FutureEvent.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  location: PropTypes.string,
};

export default FutureEvent;
