import React, { PropTypes } from 'react';
import Talks from '../Talks';
import TicketStatus from '../../containers/TicketStatus';
import { formatDate, isBefore, isAfter } from '../../utilities/date';
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
  if (!startDateTime || !endDateTime) {
    return 'Community Event';
  }
  const currentDateTime = moment();
  const isToday = moment(startDateTime.iso).isSame(currentDateTime, 'day');

  if (isToday && isBefore(currentDateTime, endDateTime.iso)) {
    return 'Today\'s Event';
  }

  if (isAfter(currentDateTime, endDateTime.iso)) {
    return 'Last Event';
  }

  if (!isToday && isBefore(currentDateTime, startDateTime.iso)) {
    return 'Next Event';
  }
}

const NextCommunityEvent = ({
  title,
  startDateTime,
  endDateTime,
  location,
  talks,
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
        <TicketStatus />
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
  talks: PropTypes.arrayOf(PropTypes.shape(Talks.propTypes)),
  startDateTime: dateTimeType,
  endDateTime: dateTimeType,
  location: PropTypes.shape({
    address: PropTypes.string,
    coordinates: PropTypes.shape({
      latitude: PropTypes.string,
      longitude: PropTypes.string,
    }),
  }),
};

export default NextCommunityEvent;
