import React, { PropTypes } from 'react';
import TicketAbout from '../TicketAbout';
import TicketList, { ticketType } from '../TicketList';

const TicketPage = ({ tickets }) => {
  return (
    <div>
      <TicketAbout />
      <TicketList tickets={tickets} />
    </div>
  );
};

TicketPage.propTypes = {
  tickets: PropTypes.arrayOf(ticketType),
};

export default TicketPage;
