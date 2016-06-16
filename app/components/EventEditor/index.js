import React, { PropTypes } from 'react';

const EventEditor = ({ params: { eventID } }) => (
  <div className="event-editor">
    <h1>
      EventEditor for event {eventID}!
    </h1>
  </div>
);

EventEditor.propTypes = {
  params: PropTypes.shape({
    eventID: PropTypes.string,
  }),
};

export default EventEditor;
