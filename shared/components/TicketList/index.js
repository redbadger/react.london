import React, { PropTypes } from 'react';
import { formatDate } from '../../utilities/date';
// import classnames from 'classnames';

export const ticketType = PropTypes.shape({
  title: PropTypes.string,
  releaseDate: PropTypes.shape({
    iso: PropTypes.string,
  }),
  available: PropTypes.bool,
  price: PropTypes.string,
});

const TicketPrice = ({ ticket }) => {
  return (
    <strong>{ticket.available ? `£${ticket.price}` : 'SOLD OUT'}</strong>
  );
};

TicketPrice.propTypes = {
  ticket: ticketType,
};

export function BuyTickets() {
  return (
    <div className="TicketList__booking-btn__container">
      <a
        className="TicketList__booking-btn TicketList__booking-btn--disabled"
      >
        Tickets not yet available
      </a>
    </div>
  );
}

BuyTickets
.propTypes = {
  tickets: PropTypes.arrayOf(ticketType).isRequired,
};

export function getTicketReleaseDate(ticket) {
  if (!ticket.available || !ticket.releaseDate || !ticket.releaseDate.iso) {
    return '';
  }
  return 'Available ' + formatDate(ticket.releaseDate.iso, 'Do MMMM, YYYY');
}

function getTicketClass(ticket) {
  if (!ticket.available) {
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
      <BuyTickets tickets={tickets} />
      {/* <div className="TicketList_TCs">
        for T&Cs about tickets, please see <strong>ti.to</strong>
      </div>*/}
    </section>
  );
};

TicketList.propTypes = {
  tickets: PropTypes.arrayOf(ticketType),
};

export default TicketList;
