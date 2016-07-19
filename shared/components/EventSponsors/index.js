import React, { PropTypes } from 'react';
import Sponsor from '../Sponsor';

const EventSponsors = ({ eventSponsors }) => (
  <div className="EventSponsors">
    <h3>Sponsors</h3>
    <ul>
      {eventSponsors && eventSponsors.map((props, index) => (
        <Sponsor key={index} {...props} />
      ))}
    </ul>
  </div>
);

EventSponsors.propTypes = {
  eventSponsors: PropTypes.arrayOf(PropTypes.shape(Sponsor.propTypes)),
};

export default EventSponsors;
