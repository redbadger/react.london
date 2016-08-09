import React, { PropTypes } from 'react';
import SiteFooter from '../SiteFooter';
import Hero from '../Hero';
import RedBadgerBanner from '../RedBadgerBanner';
import NavigationBar from '../NavigationBar';
import CommunityAbout from '../CommunityAbout';
import EventDetails from '../EventDetails';
import NextCommunityEvent from '../../components/NextCommunityEvent';
import MailingList from '../MailingList';
import JoinSlack from '../JoinSlack';
import FutureEvents from '../FutureEvents';

const events = [
  {
    title: 'September Meetup 2016',
    date: 'Wed, 21st September 2016',
    location: 'Skillsmatter',
  },
  {
    title: 'October Meetup 2016',
    date: 'Tues, 18th October 2016',
    location: 'Facebook',
  },
  {
    title: 'React London 2017',
    date: 'Tues, 28th March 2017',
    location: 'QEII Center, London SW1P 3EE',
  },
  {
    title: 'React London Meetup November 2016',
    date: 'Tuesday, 7th November 2016',
    location: 'Bloomberg',
  },
];

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
      <NextCommunityEvent {...featuredEvent} />
      <MailingList
        mailingListTitle={mailingListTitle}
        mailingListSummary={mailingListSummary}
        page="community"
      />
      <EventDetails
        eventSchedule={featuredEvent.schedule}
        eventSponsors={featuredEvent.sponsors}
      />
      <JoinSlack />
      <FutureEvents events={events} />
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
