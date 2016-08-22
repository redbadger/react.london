import React from 'react';
import TicketPage from '../TicketPage';
const usefulLinks = [
  // {
  //   text: 'Our Code of Conduct',
  //   url: '#',
  // },
  // {
  //   text: 'T & Cs',
  //   url: '#',
  // },
  // {
  //   text: 'Accessibility',
  //   url: '#',
  // },
];

const seriousLinks = [
  // {
  //   text: 'Visiting London',
  //   url: '#',
  // },
  // {
  //   text: 'Accommodation',
  //   url: '#',
  // },
];


const Conference = () => {
  console.log('Hey, there is something to find here=urer! Email us the decrypted message to win a free ticket to a REACT conference!'); // eslint-disable-line max-len, no-console
  return (
    <div className="conference">
      <div id="wrapper">
        <main>
          <TicketPage />
        </main>
      </div>
    </div>
  );
};

export default Conference;
