/* eslint-disable max-len */

import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';

import TicketAbout from '../TicketAbout';
import TicketList from '../TicketList';
import { ticketType } from '../../prop-types/ticket-type';
import OpportunityTickets from '../OpportunityTickets';

const TicketPage = ({ tickets }) => {
  const description = 'Prices have been kept as low as possible. Any profit will be reinvested back into the React London community.';
  const metaImage = 'https://react.london/img/JPG/OG_React_Ticket.jpg';
  const title = 'Tickets for React London 2017';
  return (
    <div>
      <Helmet
        meta={[
           { name: 'twitter:card', content: 'summary_large_image' },
           { name: 'twitter:site', content: '@ReactLondon_' },
           { name: 'twitter:title', content: title },
           { name: 'twitter:description', content: description },
           { name: 'twitter:image', content: metaImage },
           { property: 'og:type', content: 'article' },
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
