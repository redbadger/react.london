import React, { PropTypes } from 'react';
import { ExternalLink } from '../ExternalLink';
import { isAfter } from '../../utilities/date';

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
        subtitle: '',
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

export const getCurrentTicket = tickets => {
/*
  order by release date
  discard tickets which have release dates after today
  -> none left = Tickets currently unavailable
  -> remainder (release dates are in the past)
    - which is the most recent release date?
    - the most recent release date is the current ticket
*/

  const currentDateTime = new Date().toISOString();

  const ticketTimes = tickets.map(ticket => ticket.releaseDate.iso);

  const pastReleaseDates = ticketTimes.filter(time => isAfter(currentDateTime, time));

  const mostRecentPastReleaseTimes = pastReleaseDates.sort((timeA, timeB) => isAfter(timeA, timeB));


  return mostRecentPastReleaseTimes.pop();

  // return tickets.reduce((previousTicket, currentTicket) => {
  //   previousTicketDate = previousTicket.releaseDate.iso;
  //   currentTicketDate = currentTicket.releaseDate.iso;

  //   isBefore(currentTicketDate, currentDateTime) //ticket
  //   if(isBefore(, )){
  //     return previousTicket
  //   }
  // })
};

const locationURL = 'https://goo.gl/maps/GkqTFrJKaUR2';

const NextConferenceEvent = ({ status, calendarURL, tickets }) => {
  const statusProps = getTicketStatusDetails(status);
  const currentTicket = getCurrentTicket(tickets);

  console.log('currentTicket', currentTicket);

  const ticketsAvailable = tickets.some((ticket) => (ticket.available));
  const ticketsAvailableClassSuffix = ticketsAvailable ? 'available' : 'disabled';

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
                NextConferenceEvent__btn--${ticketsAvailableClassSuffix}
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
