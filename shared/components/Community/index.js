import React, { PropTypes } from 'react';
import CommunityAbout from '../CommunityAbout';
import EventDetails from '../EventDetails';
import NextCommunityEvent from '../../components/NextCommunityEvent';
import MailingList from '../MailingList';
import JoinSlack from '../JoinSlack';
import InterestedSpeaker from '../InterestedSpeaker';
import FutureEvents from '../FutureEvents';

const Community = ({
  summary,
  mailingListTitle,
  mailingListSummary,
  featuredEvent,
  futureEvents,
}) => (
  <div className="community">
    <div id="wrapper">
      <CommunityAbout summary={summary} />
      <NextCommunityEvent {...featuredEvent} />
      <InterestedSpeaker />
      <EventDetails
        eventSchedule={featuredEvent.schedule}
        eventSponsors={featuredEvent.sponsors}
      />
      <JoinSlack />
      <FutureEvents events={futureEvents} />
      <MailingList
        mailingListTitle={mailingListTitle}
        mailingListSummary={mailingListSummary}
        page="community"
      />
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
