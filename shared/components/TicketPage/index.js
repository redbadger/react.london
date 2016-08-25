import React, { PropTypes } from 'react';
import TicketAbout from '../TicketAbout';
import TicketList, { ticketType } from '../TicketList';
import DiversityTickets from '../DiversityTickets';

const TicketPage = ({ tickets }) => {
  return (
    <div>
      <TicketAbout />
      <TicketList tickets={tickets} />
      <DiversityTickets />
    </div>
  );
};

TicketPage.propTypes = {
  tickets: PropTypes.arrayOf(ticketType),
};

export default TicketPage;
