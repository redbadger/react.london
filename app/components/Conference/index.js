import React from 'react';
import SiteFooter from '../SiteFooter';
import Hero from '../Hero';
import RedBadgerBanner from '../RedBadgerBanner';
import NavigationBar from '../NavigationBar';

const signupActionURL = '//london.us13.list-manage.com/subscribe/' +
  'post?u=f3de268a0820d472cbd31f761&id=c723cfd260&LOCATION=conference';

const Conference = () => (
  <div className="conference">
    <div id="wrapper">
      <main>
        <Hero page="Conference" />
        <RedBadgerBanner />
        <NavigationBar />
        <SiteFooter />
      </main>
    </div>
  </div>
);

Conference.propTypes = {
};

export default Conference;
