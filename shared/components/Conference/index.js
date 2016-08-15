import React from 'react';
import SiteFooter from '../SiteFooter';
import Hero from '../Hero';
import RedBadgerBanner from '../RedBadgerBanner';
import MailingList from '../MailingList';
import ConferenceAbout from '../ConferenceAbout';
import NextConferenceEvent from '../NextConferenceEvent';
import ShareYourIdeas from '../ShareYourIdeas';

const sssh = {
  whatdoesthe___say: {
    flip: 'Gur orfg jnl gb',
    open: ' yrnea vf ol qbvat',
    xoyo: ' vg jebat. - Qna Noenzbi',
  },
  bite: {
    alias: 'Yvfc vfa\'g n ynathntr,',
    noop: ' vg\'f n ohvyqvat zngrevny.',
    tail: ' - Nyna Xnl',
  },
  other: {
    moo: {
      category: 'Ižql xóq , nxb xrol gra ',
      ouch: ', xgb fxbačí hqežnť iáš xóq ohqr aáfvyaý cflpubcng ,',
      watch: ' xgbeý ivr, xqr žvwrgr . - Evpx Bfobear',
    },
  },
};

const Conference = () => (
  <div className="conference">
    <div id="wrapper">
      <main>
        <Hero page="Conference" />
        <RedBadgerBanner />
        <ConferenceAbout />
        <NextConferenceEvent sssh={sssh} />
        <MailingList
          mailingListTitle="Stay tuned"
          mailingListSummary="Get ticket reminders and event information about the conference."
          page="conference"
        />
        <ShareYourIdeas />
        <SiteFooter />
      </main>
    </div>
  </div>
);

export default Conference;
