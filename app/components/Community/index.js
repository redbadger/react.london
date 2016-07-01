import React, { PropTypes } from 'react';
import SiteFooter from '../SiteFooter';
import Speakers from '../Speakers';
import EventSchedule from '../EventSchedule';
import EventSponsors from '../EventSponsors';
import Hero from '../Hero';
import RedBadgerBanner from '../RedBadgerBanner';
import NavigationBar from '../NavigationBar';
import CommunityAbout from '../CommunityAbout';
import NextEvent from '../NextEvent';
import MailingList from '../MailingList';
import UpcomingEvents from '../UpcomingEvents';
import JoinSlack from '../JoinSlack';

const Community = ({
  communitySummary,
  mailingListTitle,
  mailingListSummary,
  eventTitle,
  eventDate,
  eventAddress,
  eventStartTime,
  eventEndTime,
  eventSpeakers,
  eventSchedule,
  eventSponsors,
  upcomingEvents,
}) => (
  <div className="community">
    <div id="wrapper">
      <main>
        <Hero page="Community" />
        <RedBadgerBanner />
        <NavigationBar />
        <CommunityAbout communitySummary={communitySummary} />
        <NextEvent
          {...eventTitle}
          {...eventDate}
          {...eventAddress}
          {...eventStartTime}
          {...eventEndTime}
        />

        <Speakers eventSpeakers={eventSpeakers} />

        <MailingList
          {...mailingListTitle}
          {...mailingListSummary}
        />

        <section className="block">
          <div className="content space-between">
            <EventSchedule eventSchedule={eventSchedule} />
            <EventSponsors eventSponsors={eventSponsors} />
          </div>
        </section>
      </main>

      <UpcomingEvents upcomingEvents={upcomingEvents} />

      <JoinSlack />

      <SiteFooter />
    </div>
  </div>
);

Community.propTypes = {
  communitySummary: PropTypes.string,
  mailingListTitle: PropTypes.string,
  mailingListSummary: PropTypes.string,
  eventTitle: PropTypes.string,
  eventAddress: PropTypes.string,
  eventDate: PropTypes.string,
  eventStartTime: PropTypes.string,
  eventEndTime: PropTypes.string,
  eventSpeakers: PropTypes.arrayOf(PropTypes.shape(Speakers.propTypes)),
  eventSchedule: PropTypes.arrayOf(PropTypes.shape(EventSchedule.propTypes)),
  eventSponsors: PropTypes.arrayOf(PropTypes.shape(EventSponsors.propTypes)),
  upcomingEvents: PropTypes.arrayOf(PropTypes.shape(UpcomingEvents.propTypes)),
};

export default Community;
