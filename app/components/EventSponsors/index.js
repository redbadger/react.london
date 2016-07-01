import React, { PropTypes } from 'react';
import Sponsor from '../Sponsor';

const EventSponsors = ({ eventSponsors }) => (
  <article className="EventSponsors">
    <h3>Sponsors</h3>
    <ul>
      {eventSponsors && eventSponsors.map((props, index) => (
        <Sponsor key={index} {...props} />
      ))}
    </ul>
  </article>
);

EventSponsors.propTypes = {
  eventSponsors: PropTypes.arrayOf(Sponsor.propTypes),
};


export default EventSponsors;
