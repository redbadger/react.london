import React from 'react';
import { formatDate } from '../../utilities/date';
import classnames from 'classnames';

export function TicketPrice(ticket) {
  let ticketPrice;
  const ticketAvailable = ticket.available;
  if (!ticketAvailable) {
    ticketPrice = 'SOLD OUT';
  } else {
    ticketPrice = `£${ticket.price}`;
  }
  return (
    <span className={!ticketAvailable ? 'sold-out' : ''}><strong>{ticketPrice}</strong></span>
  );
}

export function BuyTickets({ tickets }) {
  let ticketsAvailable = tickets.some((ticket) => ticket.available);
  const actionClasses = classnames({
    'TicketList__booking-btn': true,
    'TicketList__booking-btn--active': ticketsAvailable,
    'TicketList__booking-btn--disabled': !ticketsAvailable,
  });
  return (
    <div className="TicketList__booking-btn__container">
      <a
        className={actionClasses}
      >
        {ticketsAvailable ? 'Buy Tickets' : 'Sold Out'}
      </a>
    </div>
  );
}

export function getTicketReleaseDate(ticket) {
  if (!ticket.available || !ticket.releaseDate) {
    return 'Available Soon';
  }
  return 'Available ' + formatDate(ticket.releaseDate, 'Do MMMM, YYYY');
}

const TicketList = ({ tickets }) => {
  return (
    <section className="block TicketList">
      <div className="content">
        {tickets.map((ticket) => (
          <div className="TicketList__ticket">
            <span><strong>{ticket.title}</strong></span>
            <span>{getTicketReleaseDate(ticket)}</span>
            <TicketPrice {...ticket} />
          </div>
        ))}
      </div>
      <BuyTickets tickets={tickets} />
      <div className="TicketList_TCs">
        for T&Cs about tickets, please see <strong>ti.to</strong>
      </div>
    </section>

  );
};

export default TicketList;
