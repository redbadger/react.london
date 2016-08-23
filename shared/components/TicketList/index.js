import React, { PropTypes } from 'react';
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
  const ticketsAvailable = tickets.some((ticket) => ticket.available);
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
  if (!ticket.available || !ticket.releaseDate || !ticket.releaseDate.iso) {
    return '';
  }
  return 'Available ' + formatDate(ticket.releaseDate.iso, 'Do MMMM, YYYY');
}

const TicketList = ({ tickets }) => {
  return (
    <section className="block TicketList">
      <div className="content">
        {tickets && tickets.map((ticket, i) => (
          <div className="TicketList__ticket" key={i}>
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

const ticketType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.shape({
    iso: PropTypes.string.isRequired,
  }),
  available: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
});

TicketList.propTypes = {
  tickets: PropTypes.arrayOf(ticketType),
};

BuyTickets
.propTypes = {
  tickets: PropTypes.arrayOf(ticketType),
};

export default TicketList;
