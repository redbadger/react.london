import React, { PropTypes } from 'react';
import SiteFooter from '../SiteFooter';
import Hero from '../Hero';
import RedBadgerBanner from '../RedBadgerBanner';
import NavigationBar from '../NavigationBar';
import CommunityAbout from '../CommunityAbout';
import EventDetails from '../EventDetails';
import EventSchedule from '../EventSchedule';
import EventSponsors from '../EventSponsors';
import NextCommunityEvent from '../../containers/NextCommunityEvent';
import MailingList from '../MailingList';
import JoinSlack from '../JoinSlack';

const Community = ({
  summary,
  mailingListTitle,
  mailingListSummary,
  eventSchedule,
  eventSponsors,
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
        eventSchedule={eventSchedule}
        eventSponsors={eventSponsors}
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
  eventSchedule: PropTypes.arrayOf(PropTypes.shape(EventSchedule.propTypes)),
  eventSponsors: PropTypes.arrayOf(PropTypes.shape(EventSponsors.propTypes)),
};

export default Community;
