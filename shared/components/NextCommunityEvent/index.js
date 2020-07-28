import React, { PropTypes } from 'react';
import Talks from '../Talks';
import TicketStatus from '../../components/TicketStatus';
import { googleMapsUrl } from '../../google-maps';
import locationType from '../../prop-types/location-type';
import { formatDate, isBefore, isAfter } from '../../utilities/date';
import { pathOr } from 'ramda';
import moment from 'moment';
import { getTicketStatusOptions } from '../../utilities/ticket-status';
import { ExternalLink } from '../ExternalLink';
export const placeholderText = 'To be confirmed.';

function eventLocation(location) {
  const address = pathOr(placeholderText, ['address'], location);
  if (address.toLowerCase() === 'remote') return 'This is a remote event';
  return address;
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

const ReadMoreButton = ({ onClick }) => (
  <a href="#" className="NextCommunityEvent__readmore" onClick={onClick}>
    Read more
  </a>
);

ReadMoreButton.propTypes = {
  onClick: PropTypes.func,
};

class NextCommunityEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      statusProps: getTicketStatusOptions(props),
    };

    this.expandInfo = this.expandInfo.bind(this);
  }

  expandInfo(e) {
    this.setState({ collapsed: false });
    e.preventDefault();
  }

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
    const { statusProps } = this.state;
    const featuredEvent = this.props;
    const {
      title,
      startDateTime,
      endDateTime,
      location,
      talks,
      calendarURL,
      featuredEventDescription,
    } = featuredEvent;

    return (
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
        <Talks talks={talks} collapsed={this.state.collapsed} />
        {this.state.collapsed && <ReadMoreButton onClick={this.expandInfo} />}
      </section>
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
};

export default NextCommunityEvent;
