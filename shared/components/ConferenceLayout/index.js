import React, { PropTypes } from 'react';

import Layout from '../Layout';
import Hero from '../Hero';
import RedBadgerBanner from '../RedBadgerBanner';
import SiteFooter from '../SiteFooter';
// import NavigationBar from '../NavigationBar';

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
  <Layout>
    <div className="conference">
      <div id="wrapper">
        <main>
          <Hero page="Conference" />
          <RedBadgerBanner />
          {/* TODO
            * This component is functionally ready, but the content on the
            * pages it links to is not ready.
            * When they are ready we can add this NavigationBar back.
            <NavigationBar />
          */}

          {children}

          <SiteFooter
            page="Conference"
            usefulLinks={usefulLinks}
            seriousLinks={seriousLinks}
          />
        </main>
      </div>
    </div>
  </Layout>
);

ConferenceLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ConferenceLayout;
