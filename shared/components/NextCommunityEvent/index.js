import React, { PropTypes } from 'react';
import { formatDate, isAfter, isBefore } from '../../utilities/date';

import { ExternalLink } from '../ExternalLink';
import ReactPlayer from 'react-player';
import Talks from '../Talks';
import TicketStatus from '../../components/TicketStatus';
import { browserHistory } from 'react-router';
import { getTicketStatusOptions } from '../../utilities/ticket-status';
import { googleMapsUrl } from '../../google-maps';
import { isRemoteEvent } from '../../utilities/location';
import locationType from '../../prop-types/location-type';
import moment from 'moment';
import { pathOr } from 'ramda';

export const placeholderText = 'To be confirmed.';

function eventLocation(location) {
  if (isRemoteEvent(location)) return 'This is a remote event';
  return pathOr(placeholderText, ['address'], location);
}

function eventDateAndTime(startDateTime, endDateTime) {
  if (startDateTime && startDateTime.iso && endDateTime && endDateTime.iso) {
    return (
      formatDate(startDateTime, 'dddd, Do MMMM YYYY, HH:mm – ') +
      formatDate(endDateTime, 'HH:mm')
    );
  }
  return placeholderText;
}

export function getHeaderText(startDateTime, endDateTime) {
  if (!startDateTime || !endDateTime) {
    return 'Community Meetup';
  }
  const currentDateTime = moment();
  const isToday = moment(startDateTime.iso).isSame(currentDateTime, 'day');

  if (isToday && isBefore(currentDateTime, endDateTime.iso)) {
    return "Today's Meetup";
  }

  if (isAfter(currentDateTime, endDateTime.iso)) {
    return 'Last Meetup';
  }

  if (!isToday && isBefore(currentDateTime, startDateTime.iso)) {
    return 'Next Meetup';
  }
}

const ResponsivePlayer = ({ eventId, statusProps }) => {
  const { buttonLink, linkType } = statusProps;

  if (!eventId || !buttonLink || linkType !== 'streamingLink') return null;

  return (
    <div className="player-constraint">
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url={buttonLink}
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

class NextCommunityEvent extends React.Component {
  renderLocationLink(location) {
    return (
      <ExternalLink
        className="NextCommunityEvent__link--place"
        href={googleMapsUrl(location)}
        target="_blank"
        rel="noopener"
      >
        {eventLocation(location)}
      </ExternalLink>
    );
  }

  render() {
    const {
      title,
      startDateTime,
      endDateTime,
      location,
      talks,
      calendarURL,
      featuredEventDescription,
      eventId,
    } = this.props;

    if (eventId && !title) {
      browserHistory.push('/404');
    }

    const statusProps = getTicketStatusOptions(this.props);

    return (
      <div>
        <section className="NextCommunityEvent block">
          <div className="content">
            <h2 className="NextCommunityEvent__header">{title}</h2>
            <article className="NextCommunityEvent__section-container">
              <div className="NextCommunityEvent__section NextCommunityEvent__section__details">
                <ul className="NextCommunityEvent__details">
                  <li>
                    <ExternalLink
                      href={calendarURL}
                      className="NextCommunityEvent__link--date"
                    >
                      {eventDateAndTime(startDateTime, endDateTime)}
                    </ExternalLink>
                  </li>
                  <li>{this.renderLocationLink(location)}</li>
                  {featuredEventDescription && (
                    <li>
                      <p className="NextCommunityEvent__featured-description">
                        {featuredEventDescription}
                      </p>
                    </li>
                  )}
                </ul>
              </div>
              <TicketStatus {...statusProps} />
            </article>
          </div>
          <Talks talks={talks} />
          <ResponsivePlayer statusProps={statusProps} eventId={eventId} />
        </section>
      </div>
    );
  }
}

const dateTimeType = PropTypes.shape({
  iso: React.PropTypes.string,
});

NextCommunityEvent.propTypes = {
  title: PropTypes.string,
  talks: PropTypes.arrayOf(PropTypes.shape(Talks.propTypes)),
  startDateTime: dateTimeType,
  endDateTime: dateTimeType,
  location: locationType,
  featuredEventDescription: PropTypes.string,
  eventId: PropTypes.number,
  calendarURL: PropTypes.string,
};

export default NextCommunityEvent;
