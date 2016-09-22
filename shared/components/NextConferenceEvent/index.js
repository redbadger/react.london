import React, { PropTypes } from 'react';
import { ExternalLink } from '../ExternalLink';

const getTicketStatusDetails = (status) => {
  switch (status) {
    case 'PRE_RELEASE':
      return {
        title: 'Save the date',
        subtitle: '',
        buttonText: 'Add to calendar',
        linkType: 'calendarLink',
      };
    case 'TICKETS_LIVE':
      return {
        title: 'Get them before they are gone',
        subtitle: 'Available until Tuesday, 20 December 2016',
        buttonText: 'FREE TICKET',
        linkType: 'ticketLink',
      };
    case 'WAITLIST':
      return {
        title: 'All gone! Sorry, you’re too late.',
        subtitle: '',
        buttonText: 'Sold out',
        linkType: 'ticketLink',
      };
    default:
      return {
        title: 'Tickets currently unavailable',
        subtitle: 'Please check back later for further details',
        buttonText: 'Tickets Unavailable',
      };
  }
};

const locationURL = 'https://goo.gl/maps/GkqTFrJKaUR2';

const NextConferenceEvent = ({ status, calendarURL }) => {
  const statusProps = getTicketStatusDetails(status);

  return (
    <section className="NextConferenceEvent block">
      <div className="content">
        <h2>
          React London 2017
        </h2>
        <article className="NextConferenceEvent__section-container">
          <div className="NextConferenceEvent__details">
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

          <div className="NextConferenceEvent__tickets">
            <h3>
              {statusProps.title}
            </h3>
            <ExternalLink
              className={`
                NextConferenceEvent__btn
                NextConferenceEvent__btn--${statusProps.linkType}
              `}
              href={calendarURL}
            >
              {statusProps.buttonText}
            </ExternalLink>
            <p>{statusProps.subtitle}</p>
          </div>
        </article>
      </div>
    </section>
  );
};

NextConferenceEvent.propTypes = {
  status: PropTypes.string,
  calendarURL: PropTypes.string,
};
export default NextConferenceEvent;
