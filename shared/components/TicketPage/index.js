import React from 'react';
import TicketAbout from '../TicketAbout';
import TicketList from '../TicketList';
const tickets = [
  {
    title: 'Early Bird',
    releaseDate: {
      iso: '2016-07-29T23:00:00+0000',
    },
    available: true,
    price: 250,
  },
  {
    title: 'General Admission',
    releaseDate: {
      iso: '2016-07-29T23:00:00+0000',
    },
    available: false,
    price: 250,
  },
];
const TicketPage = () => {
  return (
    <div>
      <TicketAbout />
      <TicketList tickets={tickets} />
    </div>
  );
};

export default TicketPage;
