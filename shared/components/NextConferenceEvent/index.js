import React, { PropTypes } from 'react';
import { ExternalLink } from '../ExternalLink';
import { getTicketStatusOptions } from '../../utilities/ticket-status';

const statusTypes = {
  PRE_RELEASE: {
    title: 'Save the date',
    subtitle: '',
    buttonText: 'Add to calendar',
  },
  TICKETS_LIVE: {
    title: 'Get them before they are gone',
    subtitle: '',
    buttonText: 'Free Ticket',
    linkType: 'ticketLink',
  },
  WAITLIST: {
    title: 'All gone! Sorry, you’re too late.',
    subtitle: '',
    buttonText: 'Sold out',
    linkType: 'ticketLink',
  },
};

const locationURL = 'https://goo.gl/maps/GkqTFrJKaUR2';

const NextConferenceEvent = (featuredEvent) => {
  const { title, startDateTime, endDateTime, location, talks, calendarURL } = featuredEvent;
  const statusProps = getTicketStatusOptions(featuredEvent, statusTypes);

  return (
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
              {statusProps.title}
            </h3>
            <p>{statusProps.subtitle}</p>
            <ExternalLink
              className="NextConferenceEvent__btn"
              href={calendarURL}
            >
              {statusProps.buttonText}
            </ExternalLink>
          </div>
        </article>
      </div>
    </section>
  );
}

NextConferenceEvent.propTypes = {
  calendarURL: PropTypes.string,
};
export default NextConferenceEvent;
