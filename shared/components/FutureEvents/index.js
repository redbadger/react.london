import React, { PropTypes } from 'react';
import FutureEvent from '../FutureEvent';

const FutureEvents = ({ events }) => {
  if (!events || events.length === 0) { return null; }
  return (
    <section className="FutureEvents block">
      <div className="content">
        <h2 className="FutureEvents__header">Upcoming events</h2>
      </div>
      <div className="FutureEvents__events-list content">
        <div className="FutureEvents__events-container">

          {events.slice(0, 3).map((props, index) => (
            <div className="FutureEvents__events-container-event">
              <FutureEvent {...props} key={index} />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

FutureEvents.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape(FutureEvent.propTypes)),
};

export default FutureEvents;
