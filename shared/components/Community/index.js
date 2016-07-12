import React, { PropTypes } from 'react';
import SiteFooter from '../SiteFooter';
// import Speakers from '../Speakers';
// import EventSchedule from '../EventSchedule';
// import EventSponsors from '../EventSponsors';
import Hero from '../Hero';
import RedBadgerBanner from '../RedBadgerBanner';
import NavigationBar from '../NavigationBar';
import CommunityAbout from '../CommunityAbout';
import NextCommunityEvent from '../NextCommunityEvent';
import MailingList from '../MailingList';
// import UpcomingEvents from '../UpcomingEvents';
import JoinSlack from '../JoinSlack';

const Community = ({ summary, events, mailingListTitle, mailingListSummary }) => (
  <div className="community">
    <div id="wrapper">
      <main>
        <Hero page="Community" />
        <RedBadgerBanner />
        <NavigationBar page="Community" />
        <CommunityAbout summary={summary} />
        <NextCommunityEvent {...events[0]} />
        <MailingList
          mailingListTitle={mailingListTitle}
          mailingListSummary={mailingListSummary}
          page="community"
        />
        {/* TODO
          <section className="block">
          <div className="content space-between">
            <EventSchedule eventSchedule={eventSchedule} />
            <EventSponsors eventSponsors={eventSponsors} />
          </div>
        </section>
        */}
      </main>
      {/* TODO
      <UpcomingEvents upcomingEvents={upcomingEvents} />
      */}
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
};

export default Community;
