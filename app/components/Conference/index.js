import React from 'react';
import SiteFooter from '../SiteFooter';
import Hero from '../Hero';
import RedBadgerBanner from '../RedBadgerBanner';
import NavigationBar from '../NavigationBar';
import MailingList from '../MailingList';

const Conference = () => (
  <div>
    <div id="wrapper">
      <main id="conference">
        <Hero page="Conference" />
        <RedBadgerBanner />
        <NavigationBar />
        <section id="about" className="block">
          <div className="content">
            <h2>Let’s explore!</h2>
            <p>Red Badger is launching a new conference focused on React in London for
              2017 – we’re calling it <strong>React London 2017.</strong></p>
            <p>We’re bringing together some great speakers and events
            – get involved! More details to follow soon.</p>
          </div>
        </section>
        <MailingList
          mailingListTitle="Sign up here for conference updates"
          page="conference"
        />
        <SiteFooter />
      </main>
    </div>
  </div>
);

Conference.propTypes = {
};

export default Conference;
