import React, { PropTypes } from 'react';
import CommunityAbout from '../CommunityAbout';
import NextCommunityEvent from '../../components/NextCommunityEvent';
import MailingList from '../MailingList';
import ExternalPlatforms from '../ExternalPlatforms';
import InterestedSpeaker from '../InterestedSpeaker';
import FutureEvents from '../FutureEvents';

const Community = ({
  summary,
  mailingListTitle,
  mailingListSummary,
  featuredEvents,
  futureEvents,
}) => (
  <div className="community">
    <div id="wrapper">
      <CommunityAbout summary={summary} />
      {featuredEvents.map((featuredEvent, index) =>
        <NextCommunityEvent key={index} {...featuredEvent} />)}
      <InterestedSpeaker />
      <ExternalPlatforms />
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
  featuredEvents: PropTypes.arrayOf(PropTypes.shape(NextCommunityEvent.propTypes)),
  futureEvents: FutureEvents.propTypes.events,
};

export default Community;
