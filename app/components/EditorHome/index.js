import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const events = [ // TODO: Take from props
  1, 2, 3, 4,
];

const EventLink = ({ id }) => {
  const slug = `/event/${id}`;
  return <Link to={slug}>Edit Event {id}</Link>;
};

EventLink.propTypes = {
  id: PropTypes.number,
};

const EditorHome = () => (
  <div className="home">
    <h1>
      Home!
    </h1>
    <img src="/img/PNG/ReactLondon_SaveTheDate_Icons-01.png" alt="" />
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
      {events.map((eventID, index) => (
        <li key={index}>
          <EventLink id={eventID} />
        </li>
      ))}
    </ul>
  </div>
);

EditorHome.propTypes = {
};

export default EditorHome;
