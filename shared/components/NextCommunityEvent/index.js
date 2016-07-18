import React, { PropTypes } from 'react';
import Talks from '../Talks';
import dateFnsFormat from 'date-fns/format';

function formatDate(datetime, format) {
  if (datetime && datetime.iso) {
    return dateFnsFormat(datetime.iso, format);
  }
}

const calendarURL = 'https://calendar.google.com/calendar/event?action=TEMPLATE' +
  '&tmeid=NWY0cDE3Y3N0MzZhbWp2amxmdjhkdHBqbGsgbG5kaDVzdXRrbmtyZjZpbjEzYWgzYmUwbW9AZw' +
  '&tmsrc=lndh5sutknkrf6in13ah3be0mo%40group.calendar.google.com';

const locationURL = 'https://goo.gl/maps/Z8SU87i4Fy42';

const NextCommunityEvent = ({ title, datetime, timestampEnd, address, talks }) => (
  <section className="NextCommunityEvent block">
    <div className="content">
      <h2 className="NextCommunityEvent__header">Next Event</h2>
      <article className="NextCommunityEvent__section-container">
        <div className="NextCommunityEvent__section NextCommunityEvent__section__details">
          <h3 className="NextCommunityEvent__details__heading">{title}</h3>
          <ul className="NextCommunityEvent__details">
            <li>
              <a
                className="NextCommunityEvent__link--date"
                href={calendarURL}
                target="_blank"
              >
                {formatDate(datetime, 'dddd, Do MMMM YYYY')}
              </a>
            </li>
            <li>
              <a
                className="NextCommunityEvent__link--time"
                href={calendarURL}
                target="_blank"
              >
                {formatDate(datetime, 'HH:mm - ') + formatDate(timestampEnd, 'HH:mm')}
              </a>
            </li>
            <li>
              <a
                className="NextCommunityEvent__link--place"
                href={locationURL}
                target="_blank"
              >
                {address}
              </a>
            </li>
          </ul>
        </div>
        <div className="NextCommunityEvent__section NextCommunityEvent__section__booking">
          <h3 className="NextCommunityEvent__booking__heading">TICKETS NOW SOLD OUT</h3>
          <div className="NextCommunityEvent__booking-btn__container">
            <a
              className="NextCommunityEvent__booking-btn NextCommunityEvent__booking-btn--active"
              href="https://skillsmatter.com/meetups/8306-react-graphql-and-relay-in-practice-and-draft-js-in-the-real-world"
            >
              Join waiting list
            </a>
          </div>
          <p className="NextCommunityEvent__live-stream-text">
            To get reminders about tickets and future
            events <a className="NextCommunityEvent__live-stream-text--link" href="#stay-tuned">
            subscribe here</a>
          </p>
        </div>
      </article>
    </div>
    <Talks talks={talks} />
  </section>
);

const dateTimeType = PropTypes.shape({
  iso: React.PropTypes.string,
});

NextCommunityEvent.propTypes = {
  title: React.PropTypes.string,
  talks: PropTypes.arrayOf(PropTypes.shape(Talks.propTypes)),
  datetime: dateTimeType,
  timestampEnd: dateTimeType,
  address: React.PropTypes.string,
};

export default NextCommunityEvent;
