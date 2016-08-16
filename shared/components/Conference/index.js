import React from 'react';
import SiteFooter from '../SiteFooter';
import Hero from '../Hero';
import RedBadgerBanner from '../RedBadgerBanner';
import MailingList from '../MailingList';
import ConferenceAbout from '../ConferenceAbout';
import NextConferenceEvent from '../NextConferenceEvent';
import ShareYourIdeas from '../ShareYourIdeas';

const first = {
  flip: 'Gur orfg jnl gb',
  open: ' yrnea vf ol qbvat',
  xoyo: ' vg jebat. - Qna Noenzbi',
};
const second = {
  alias: 'Yvfc vf trra gnny ,',
  noop: ' urg vf rra obhjzngrevnny.',
  tail: ' - Nyna Xnl',
};
const third = {
  category: 'Ižql xóq , nxb xrol gra ',
  ouch: ', xgb fxbačí hqežnť iáš xóq ohqr aáfvyaý cflpubcng ,',
  watch: ' xgbeý ivr, xqr žvwrgr . - Evpx Bfobear',
};

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
  console.log('Hey, there is something to find here=urer! Email us the decrypted message to win a free ticket!'); // eslint-disable-line max-len, no-console
  return (
    <div className="conference">
      <div id="wrapper">
        <main>
          <Hero page="Conference" sssh={first} />
          <RedBadgerBanner />
          <ConferenceAbout />
          <NextConferenceEvent sssh={second} />
          <MailingList
            mailingListTitle="Stay tuned"
            mailingListSummary="Get ticket reminders and event information about the conference."
            page="conference"
          />
          <ShareYourIdeas />
          <SiteFooter
            page="Conference"
            usefulLinks={usefulLinks}
            seriousLinks={seriousLinks}
            sssh={third}
          />
        </main>
      </div>
    </div>
  );
};

export default Conference;
