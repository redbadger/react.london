import React, { PropTypes } from 'react';
import SiteFooter from '../SiteFooter';
import Hero from '../Hero';
import RedBadgerBanner from '../RedBadgerBanner';
import CommunityAbout from '../CommunityAbout';
import EventDetails from '../EventDetails';
import NextCommunityEvent from '../../components/NextCommunityEvent';
import MailingList from '../MailingList';
import JoinSlack from '../JoinSlack';
import FutureEvents from '../FutureEvents';

const usefulLinks = [
  // {
  //   text: 'Our Code of Conduct',
  //   url: '#',
  // },
];

const seriousLinks = [
];

const Community = ({
  summary,
  mailingListTitle,
  mailingListSummary,
  featuredEvent,
  futureEvents,
}) => (
  <div className="community">
    <div id="wrapper">
      <Hero page="Community" />
      <RedBadgerBanner />
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
      <FutureEvents events={futureEvents} />
      <SiteFooter page="Community" usefulLinks={usefulLinks} seriousLinks={seriousLinks} />
    </div>
  </div>
);

Community.propTypes = {
  summary: PropTypes.string,
  mailingListTitle: PropTypes.string,
  mailingListSummary: PropTypes.string,
  events: PropTypes.arrayOf(PropTypes.shape(NextCommunityEvent.propTypes)),
  featuredEvent: PropTypes.shape(EventDetails.propTypes),
  futureEvents: FutureEvents.propTypes.events,
};

export default Community;
