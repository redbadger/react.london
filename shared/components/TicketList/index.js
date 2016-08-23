import React from 'react';
import { formatDate } from '../../utilities/date';

export function getTicketReleaseDate(ticket) {
  if (!ticket.available || !ticket.releaseDate) {
    return 'Available Soon';
  }
  return 'Available ' + formatDate(ticket.releaseDate, 'Do MMMM, YYYY');
}

export function getTicketPrice(ticket) {
  if (!ticket.available || !ticket.price) {
    return 'SOLD OUT';
  }
  return `£${ticket.price}`;
}

const TicketList = ({ tickets }) => {
  return (
    <section className="block TicketList">
      <div className="content">
        {tickets.map((ticket) => (
          <div className="TicketList__ticket">
            <span><strong>{ticket.title}</strong></span>
            <span>{getTicketReleaseDate(ticket)}</span>
            <span><strong>{getTicketPrice(ticket)}</strong></span>
          </div>
        ))}
      </div>
      <div className="TicketList__booking-btn__container">
        <a
          className="TicketList__booking-btn TicketStatus__booking-btn--active"
        >
          Buy Tickets
        </a>
      </div>
      <div className="TicketList_TCs">
        for T&Cs about tickets, please see <strong>ti.to</strong>
      </div>
    </section>

  );
};

export default TicketList;
