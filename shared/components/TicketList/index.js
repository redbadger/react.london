import React, { PropTypes } from 'react';
import moment from 'moment';
import { formatDate, isAfter } from '../../utilities/date';
import { ticketType } from '../../prop-types/speaker-type';
import { ExternalLink } from '../ExternalLink';

export function isSoldOut(ticket) {
  const currentDateTime = moment();
  return !ticket.available && isAfter(currentDateTime, ticket.releaseDate);
}

const TicketPrice = ({ ticket }) => {
  const isTicketSoldOut = isSoldOut(ticket);
  return (
    <strong>{!isTicketSoldOut ? `£${ticket.price}` : 'SOLD OUT'}</strong>
  );
};

TicketPrice.propTypes = {
  ticket: PropTypes.shape(ticketType),
};

export function BuyTickets({ tickets }) {
  const ticketsAvailable = tickets && tickets.some((ticket) => ticket.available);
  if (ticketsAvailable) {
    return (
      <ExternalLink
        className="TicketList__booking-btn TicketList__booking-btn--active"
        href="https://ti.to/red-badger/react-london-2017/"
      >
        GET ME A TICKET
      </ExternalLink>
    );
  }
  return (
    <ExternalLink
      className="TicketList__booking-btn TicketList__booking-btn--disabled"
    >
      Tickets not yet available
    </ExternalLink>
  );
}

BuyTickets.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.shape(ticketType)),
};

export function getTicketReleaseDate(ticket) {
  const isTicketSoldOut = isSoldOut(ticket);
  if (isTicketSoldOut) {
    return '';
  }
  if (!ticket.releaseDate || !ticket.releaseDate.iso) {
    return 'Available Soon';
  }
  return 'Available ' + formatDate(ticket.releaseDate.iso, 'Do MMMM, YYYY');
}

function getTicketClass(ticket) {
  const isTicketSoldOut = isSoldOut(ticket);
  if (isTicketSoldOut) {
    return ' TicketList__ticket--notAvailable';
  }
  return '';
}

const TicketList = ({ tickets }) => {
  return (
    <section className="block TicketList">
      <table className="content">
        <tbody>
          {tickets && tickets.map((ticket, i) => (
            <tr
              className={'TicketList__ticket' + getTicketClass(ticket)} key={i}
            >
              <td className="TicketList__ticket__title"><strong>{ticket.title}</strong></td>
              <td className="TicketList__ticket__date">{getTicketReleaseDate(ticket)}</td>
              <td className="TicketList__ticket__price"><TicketPrice ticket={ticket} /></td>
            </tr>
          )
          )}
        </tbody>
      </table>
      <div className="TicketList__booking-btn__container">
        <BuyTickets tickets={tickets} />
      </div>
    </section>
  );
};

TicketList.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.shape(ticketType)),
};

export default TicketList;
