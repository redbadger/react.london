import React from 'react';
import SiteFooter from '../SiteFooter';
import Hero from '../Hero';
import RedBadgerBanner from '../RedBadgerBanner';
import MailingList from '../MailingList';
import ConferenceAbout from '../ConferenceAbout';
import NavigationBar from '../NavigationBar';
import NextConferenceEvent from '../NextConferenceEvent';
import ShareYourIdeas from '../ShareYourIdeas';

const Conference = () => (
  <div className="conference">
    <div id="wrapper">
      <main>
        <Hero page="Conference" />
        <RedBadgerBanner />
        <NavigationBar />
        <ConferenceAbout />
        <NextConferenceEvent />
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
