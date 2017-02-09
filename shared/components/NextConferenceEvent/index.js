import React, { PropTypes } from 'react';

import { ExternalLink } from '../ExternalLink';
import { ticketType } from '../../prop-types/ticket-type';
import SpeakerList from '../SpeakerList';
import speakerType from '../../prop-types/speaker-type';

const locationURL = 'https://goo.gl/maps/GkqTFrJKaUR2';
const conferenceTicketURL = 'https://ti.to/red-badger/react-london-2017/';

const TicketStatus = (props) => {
  const tickets = props.tickets || [];
  const ticketsAvailable = tickets.some((ticket) => ticket.available);
  if (ticketsAvailable) {
    return (
      <div className="NextConferenceEvent__save-the-date">
        <h3>
          Grab your ticket before they go
        </h3>
        <ExternalLink
          className="NextConferenceEvent__ticket"
          href={conferenceTicketURL}
        >
          GET ME A TICKET
        </ExternalLink>
      </div>
    );
  }
  return (
    <div className="NextConferenceEvent__save-the-date">
      <h3>
        Save the date
      </h3>
      <ExternalLink
        className="NextConferenceEvent__calendar"
        href={conferenceTicketURL}
      >
        Add to calendar
      </ExternalLink>
    </div>
  );
};

TicketStatus.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.shape(ticketType)),
};

const NextConferenceEvent = ({ calendarURL, featuredSpeakers, tickets }) => (
  <section className="NextConferenceEvent block">
    <div className="content">
      <h2 className="NextConferenceEvent__header">
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
        <TicketStatus tickets={tickets} />

        {/* middle */}
      </article>
      <div className="NextConferenceEvent__accomodation">
        <h2>On stage</h2>
        <SpeakerList speakers={featuredSpeakers} conference />
      </div>
      <div className="NextConferenceEvent__accomodation">
        <h2>Plan your visit</h2>
        <p>
          We have negotiated a limited number of rooms at
          the <ExternalLink
            href="https://www.parkplaza.co.uk/london-hotel-gb-se1-7ut/gbwestmi"
            className="NextConferenceEvent__link"
          >
            Park Plaza Westminster Bridge
          </ExternalLink> at
          a preferential rate of £169 per night single occupancy and £179
          per night double occupancy if booked before 10th February.
        </p>
        <p>
          Please call<strong> 0844 415 6784</strong> to book and quote reference number
          <strong> 270317REDD</strong>
        </p>
        <h3>Visiting London for the first time?</h3>
        <p className="NextConferenceEvent__city-guide">
          <span>
            {'We\'ve put together some great tips in '}
            <strong>
              <ExternalLink href="https://red-badger.com/blog/2017/2/2/a-badgers-guide-to-london">
                {'A Badger\'s guide to London'}
              </ExternalLink>
            </strong>
          </span>
        </p>
      </div>
    </div>
  </section>
);

NextConferenceEvent.propTypes = {
  calendarURL: PropTypes.string,
  featuredSpeakers: PropTypes.arrayOf(speakerType),
};
export default NextConferenceEvent;
