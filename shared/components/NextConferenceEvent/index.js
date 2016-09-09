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
    </div>
  </section>
);

NextConferenceEvent.propTypes = {
  calendarURL: PropTypes.string,
};
export default NextConferenceEvent;
