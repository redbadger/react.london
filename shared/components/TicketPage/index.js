import React, { PropTypes } from 'react';
import TicketAbout from '../TicketAbout';
import TicketList, { ticketType } from '../TicketList';
import OpportunityTickets from '../OpportunityTickets';

const TicketPage = ({ tickets }) => {
  return (
    <div>
      <TicketAbout />
      <TicketList tickets={tickets} />
      <OpportunityTickets />
    </div>
  );
};

TicketPage.propTypes = {
  tickets: PropTypes.arrayOf(ticketType),
};

export default TicketPage;
