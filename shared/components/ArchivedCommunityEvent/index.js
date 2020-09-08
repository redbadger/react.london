import React, { PropTypes } from 'react';

import { ExternalLink } from '../ExternalLink';
import { Link } from 'react-router';
import Talks from '../Talks';
import { formatDate } from '../../utilities/date';
import locationType from '../../prop-types/location-type';

export const placeholderText = 'To be confirmed.';

function eventDateAndTime(startDateTime, endDateTime) {
  if (startDateTime && startDateTime.iso && endDateTime && endDateTime.iso) {
    return (
      formatDate(startDateTime, 'dddd, Do MMMM YYYY, HH:mm – ') +
      formatDate(endDateTime, 'HH:mm')
    );
  }
  return placeholderText;
}

class ArchivedCommunityEvent extends React.Component {
  renderVideoButton() {
    const { streamingLink, eventId } = this.props;

    return streamingLink ? (
      <div className="ArchivedEvent__video">
        <ExternalLink href={streamingLink} className="ArchivedEvent__video-btn">
          Watch Video
        </ExternalLink>
      </div>
    ) : (
      <div className="ArchivedEvent__video">
        <Link to={`/event/${eventId}`} className="ArchivedEvent__video-btn">
          Read More
        </Link>
      </div>
    );
  }

  render() {
    const { title, startDateTime, endDateTime, talks, eventId } = this.props;

    return (
      <section className="ArchivedEvent">
        <div className="talk">
          <h2 className="">
            <Link to={`/event/${eventId}`}>{title}</Link>
          </h2>
          <p>{eventDateAndTime(startDateTime, endDateTime)}</p>
          <ul>
            {talks.map((talk) => (
              <li key={talk.title}>{talk.title}</li>
            ))}
          </ul>
        </div>
        {this.renderVideoButton()}
      </section>
    );
  }
}

const dateTimeType = PropTypes.shape({
  iso: React.PropTypes.string,
});

ArchivedCommunityEvent.propTypes = {
  title: PropTypes.string,
  talks: PropTypes.arrayOf(PropTypes.shape(Talks.propTypes)),
  startDateTime: dateTimeType,
  endDateTime: dateTimeType,
  location: locationType,
  featuredEventDescription: PropTypes.string,
  eventId: PropTypes.string,
  streamingLink: PropTypes.string,
};

export default ArchivedCommunityEvent;
