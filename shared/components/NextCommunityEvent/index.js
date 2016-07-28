import React, { PropTypes } from 'react';
import Talks from '../Talks';
import EventStatus from '../EventStatus';
import { formatDate } from '../../utilities/format-date';
import pathOr from 'ramda/src/pathOr';
import moment from 'moment';

const calendarURL = 'https://calendar.google.com/calendar/event?action=TEMPLATE' +
  '&tmeid=NWY0cDE3Y3N0MzZhbWp2amxmdjhkdHBqbGsgbG5kaDVzdXRrbmtyZjZpbjEzYWgzYmUwbW9AZw' +
  '&tmsrc=lndh5sutknkrf6in13ah3be0mo%40group.calendar.google.com';

function googleMapsUrl(location) {
  const { latitude, longitude } = pathOr({}, ['coordinates'], location);
  if (!latitude || !longitude) { return null; }
  return `http://www.google.com/maps/place/${latitude},${longitude}`;
}

export function getHeaderText(startDateTime, endDateTime) {
  // Today's Event
  const isToday = moment(startDateTime).isSame(moment(), 'day');
  if (isToday && moment().isBefore(endDateTime)) {
    return 'Today\'s Event';
  }
  return moment().isBefore(startDateTime)
    ? 'Next Event'
    : 'Last Event';
}

const NextCommunityEvent = ({
  title,
  ticketsAvailable,
  startDateTime,
  endDateTime,
  ticketReleaseDate,
  location,
  talks,
  externalLinks,
}) => (
  <section className="NextCommunityEvent block">
    <div className="content">
      <h2 className="NextCommunityEvent__header">
        {getHeaderText(startDateTime, endDateTime)}
      </h2>
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
                {formatDate(startDateTime, 'dddd, Do MMMM YYYY')}
              </a>
            </li>
            <li>
              <a
                className="NextCommunityEvent__link--time"
                href={calendarURL}
                target="_blank"
              >
                {formatDate(startDateTime, 'HH:mm - ') + formatDate(endDateTime, 'HH:mm')}
              </a>
            </li>
            <li>
              <a
                className="NextCommunityEvent__link--place"
                href={googleMapsUrl(location)}
                target="_blank"
              >
                {pathOr(null, ['address'], location)}
              </a>
            </li>
          </ul>
        </div>
        <EventStatus
          ticketsAvailable={ticketsAvailable}
          ticketReleaseDate={ticketReleaseDate}
          externalLinks={externalLinks}
          startDateTime={startDateTime}
        />
      </article>
    </div>
    <Talks talks={talks} />
  </section>
);

const dateTimeType = PropTypes.shape({
  iso: React.PropTypes.string.isRequired,
});

NextCommunityEvent.propTypes = {
  title: PropTypes.string,
  ticketsAvailable: PropTypes.bool,
  talks: PropTypes.arrayOf(PropTypes.shape(Talks.propTypes)),
  startDateTime: dateTimeType,
  endDateTime: dateTimeType,
  ticketReleaseDate: dateTimeType,
  externalLinks: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
    type: PropTypes.string,
  })),
  location: PropTypes.shape({
    address: PropTypes.string,
    coordinates: PropTypes.shape({
      latitude: PropTypes.string,
      longitude: PropTypes.string,
    }),
  }),
};

export default NextCommunityEvent;
