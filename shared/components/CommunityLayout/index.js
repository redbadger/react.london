import React, { PropTypes } from 'react';
import Hero from '../Hero';
import RedBadgerBanner from '../RedBadgerBanner';
import SiteFooter from '../SiteFooter';

const usefulLinks = [
  // {
  //   text: 'Our Code of Conduct',
  //   url: '#',
  // },
];

const seriousLinks = [
];

const CommunityLayout = ({ children }) => (
  <div className="CommunityLayout">
    <Hero page="Community" />
    <RedBadgerBanner />
    {children}
    <SiteFooter
      page="Community"
      usefulLinks={usefulLinks}
      seriousLinks={seriousLinks}
    />
  </div>
);

CommunityLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CommunityLayout;
