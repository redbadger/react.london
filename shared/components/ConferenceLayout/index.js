import React, { PropTypes } from 'react';

import Hero from '../Hero';
import RedBadgerBanner from '../RedBadgerBanner';
import SiteFooter from '../SiteFooter';
import NavigationBar from '../NavigationBar';

const usefulLinks = [
  {
    text: 'Our Code of Conduct',
    url: '/code-of-conduct',
  },
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


const ConferenceLayout = ({ children }) => (
  <div className="conference">
    <div id="wrapper">
      <main>
        <Hero page="Conference" />
        <RedBadgerBanner />
        <NavigationBar />
        {children}
        <SiteFooter
          page="Conference"
          usefulLinks={usefulLinks}
          seriousLinks={seriousLinks}
        />
      </main>
    </div>
  </div>
);

ConferenceLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ConferenceLayout;
