import React, { PropTypes } from 'react';

import Layout from '../Layout';
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

function NavBar({ navbar }) {
  return navbar ? <NavigationBar /> : null;
}

NavBar.propTypes = {
  navbar: PropTypes.bool,
};

const ConferenceLayout = ({ route, children }) => (
  <Layout>
    <div className="conference">
      <div id="wrapper">
        <main>
          <Hero page="Conference" />
          <RedBadgerBanner />
          <NavBar {...route} />

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
  route: PropTypes.shape({ navbar: PropTypes.bool }),
};

export default ConferenceLayout;
