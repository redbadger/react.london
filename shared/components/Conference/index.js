import React from 'react';
import SiteFooter from '../SiteFooter';
import Hero from '../Hero';
import RedBadgerBanner from '../RedBadgerBanner';
import NavigationBar from '../NavigationBar';
import MailingList from '../MailingList';
import ConferenceAbout from '../ConferenceAbout';
import NextConferenceEvent from '../NextConferenceEvent';

const Conference = () => (
  <div className="conference">
    <div id="wrapper">
      <main>
        <Hero page="Conference" />
        <RedBadgerBanner />
        <NavigationBar page="Conference" />
        <ConferenceAbout />
        <NextConferenceEvent />
        <MailingList
          mailingListTitle="Sign up here for conference updates"
          page="conference"
        />
        <SiteFooter />
      </main>
    </div>
  </div>
);

export default Conference;
