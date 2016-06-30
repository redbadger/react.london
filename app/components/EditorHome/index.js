import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const EventLink = ({ id }) => {
  const slug = `/event/${id}`;
  return <Link to={slug}>Edit Event {id}</Link>;
};

EventLink.propTypes = {
  id: PropTypes.string.isRequired,
};

const EditorHome = ({ eventIDs }) => (
  <div className="home">
    <h1>
      Home!
    </h1>
    <ul>
      <li>
        <Link to="/community">Edit Community</Link>
      </li>
      <li>
        <Link to="/conference">Edit Conference</Link>
      </li>
    </ul>
    <h2>Events</h2>
    <ul>
      {eventIDs.map((eventID, index) => (
        <li key={index}>
          <EventLink id={eventID} />
        </li>
      ))}
    </ul>
  </div>
);

EditorHome.propTypes = {
  eventIDs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default EditorHome;
