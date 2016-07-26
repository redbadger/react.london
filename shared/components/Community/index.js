import React, { PropTypes } from 'react';
import SiteFooter from '../SiteFooter';
import Hero from '../Hero';
import RedBadgerBanner from '../RedBadgerBanner';
import NavigationBar from '../NavigationBar';
import CommunityAbout from '../CommunityAbout';
import EventDetails from '../EventDetails';
import NextCommunityEvent from '../../containers/NextCommunityEvent';
import MailingList from '../MailingList';
import JoinSlack from '../JoinSlack';

const Community = ({
  summary,
  mailingListTitle,
  mailingListSummary,
  featuredEvent,
}) => (
  <div className="community">
    <div id="wrapper">
      <Hero page="Community" />
      <RedBadgerBanner />
      <NavigationBar page="Community" />
      <CommunityAbout summary={summary} />
      <NextCommunityEvent />
      <MailingList
        mailingListTitle={mailingListTitle}
        mailingListSummary={mailingListSummary}
        page="community"
      />
      <EventDetails
        schedule={featuredEvent.schedule}
        sponsors={featuredEvent.sponsors}
      />
      <JoinSlack />
      <SiteFooter />
    </div>
  </div>
);

Community.propTypes = {
  summary: PropTypes.string,
  mailingListTitle: PropTypes.string,
  mailingListSummary: PropTypes.string,
  events: PropTypes.arrayOf(PropTypes.shape(NextCommunityEvent.propTypes)),
  featuredEvent: PropTypes.shape(EventDetails.propTypes),
};

export default Community;
