import React, { PropTypes } from 'react';
import { ExternalLink } from '../ExternalLink';

const locationURL = 'https://goo.gl/maps/GkqTFrJKaUR2';

const NextConferenceEvent = ({ calendarURL }) => (
  <section className="NextConferenceEvent block">
    <div className="content">
      <article className="NextConferenceEvent__section-container">
        <div className="NextConferenceEvent__details">
          <h3>
            React London 2017
          </h3>
          <ul>
            <li>
              <ExternalLink
                className="NextConferenceEvent__link--date"
                href={calendarURL}
              >
                Tuesday, 28 March 2017
              </ExternalLink>
            </li>
            <li>
              <ExternalLink
                className="NextConferenceEvent__link--place"
                href={locationURL}
              >
                QEII Centre, Westminster
              </ExternalLink>
            </li>
          </ul>
        </div>

        {/* middle */}

        <div className="NextConferenceEvent__save-the-date">
          <h3>
            Save the date
          </h3>
          <ExternalLink
            className="NextConferenceEvent__btn"
            href={calendarURL}
          >
            Add to calendar
          </ExternalLink>
        </div>
      </article>
      <div className="NextConferenceEvent__accomodation">
        <h2>Plan your visit</h2>
        <p>
          We have negotiated a limited number of rooms at
          the <ExternalLink
            href={calendarURL}
            className="NextConferenceEvent__link"
          >
            Park Plaza Westminster Bridge
          </ExternalLink> at
          a preferential rate of £169 per night single occupancy and £179
          per night double occupancy if booked before 10th February.
        </p>
        <p>
          Please call<strong> 0844 415 6784</strong> to book and quote reference number
          <strong> 270317REDD</strong>
        </p>
      </div>
    </div>
  </section>
);

NextConferenceEvent.propTypes = {
  calendarURL: PropTypes.string,
};
export default NextConferenceEvent;
