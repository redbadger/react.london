import React, { PropTypes } from 'react';

import ArchivedCommunityEvent from '../ArchivedCommunityEvent';
import CommunityAbout from '../CommunityAbout';
import ExternalPlatforms from '../ExternalPlatforms';
import FutureEvents from '../FutureEvents';
import MailingList from '../MailingList';
import NextCommunityEvent from '../../components/NextCommunityEvent';

const Community = ({
  summary,
  mailingListTitle,
  featuredEvents,
  futureEvents,
  eventId = 0,
}) => {
  const featuredEvent = featuredEvents[eventId];
  const archivedEvents = featuredEvents.slice(1);
  return (
    <div className="community">
      <div id="wrapper">
        <CommunityAbout summary={summary} />
        <NextCommunityEvent {...featuredEvent} eventId={eventId} />
        <MailingList mailingListTitle={mailingListTitle} page="community" />
        {!eventId && (
          <section className="NextCommunityEvent block">
            <div className="content">
              <h2 className="NextCommunityEvent__header">Past Events</h2>
              {archivedEvents.map((archivedEvent, i) => (
                <ArchivedCommunityEvent
                  key={i}
                  {...archivedEvent}
                  eventId={i + 1}
                />
              ))}
            </div>
          </section>
        )}
        <ExternalPlatforms />
        <FutureEvents events={futureEvents} />
      </div>
    </div>
  );
};

Community.propTypes = {
  summary: PropTypes.string,
  mailingListTitle: PropTypes.string,
  mailingListSummary: PropTypes.string,
  events: PropTypes.arrayOf(PropTypes.shape(NextCommunityEvent.propTypes)),
  featuredEvents: PropTypes.arrayOf(
    PropTypes.shape(NextCommunityEvent.propTypes)
  ),
  futureEvents: FutureEvents.propTypes.events,
  eventId: PropTypes.string,
};

export default Community;
