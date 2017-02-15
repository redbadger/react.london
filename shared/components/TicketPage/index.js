/* eslint-disable max-len */

import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';

import TicketAbout from '../TicketAbout';
import TicketList, { ticketType } from '../TicketList';
import OpportunityTickets from '../OpportunityTickets';

const TicketPage = ({ tickets }) => {
  const description = 'Prices have been kept as low as possible. Any profit will be reinvested back into the React London community.';
  const metaImage = 'https://react.london/img/JPG/OG_React_Ticket.jpg';
  const title = 'Tickets for React London 2017';
  return (
    <div>
      <Helmet
        meta={[
           { property: 'twitter:card', content: 'summary_large_image' },
           { property: 'twitter:site', content: '@ReactLondon_' },
           { property: 'twitter:title', content: title },
           { property: 'twitter:description', content: description },
           { property: 'twitter:image', content: metaImage },
           { property: 'og:url', content: 'https://react.london/tickets' },
           { property: 'og:title', content: title },
           { property: 'og:image', content: metaImage },
           { property: 'og:description', content: description },
        ]}
      />
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
