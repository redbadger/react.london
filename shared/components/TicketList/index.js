import React, { PropTypes } from 'react';
import { formatDate } from '../../utilities/date';
import classnames from 'classnames';

export const TicketPrice = (ticket) => <strong>{ticket.available ? `£${ticket.price}` : 'SOLD OUT'}</strong>

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
      <table className="content">
        <tbody>
          {tickets && tickets.map((ticket, i) => {
            return (
              <tr className={`TicketList__ticket ${!ticket.available ? "TicketList__ticket--notAvailable" : ''}`} key={i}>
                <td className="TicketList__ticket__title"><strong>{ticket.title}</strong></td>
                <td className="TicketList__ticket__date">{getTicketReleaseDate(ticket)}</td>
                <td className="TicketList__ticket__price"><TicketPrice {...ticket} /></td>
              </tr>
            )}
          )}
        </tbody>
      </table>
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
