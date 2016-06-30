import React, { PropTypes } from 'react';
import SiteFooter from '../SiteFooter';
import Speakers from '../Speakers';
import Speaker from '../Speaker';
import ScheduleItem from '../ScheduleItem';
import Sponsor from '../Sponsor';
import Hero from '../Hero';
import RedBadgerBanner from '../RedBadgerBanner';
import NavigationBar from '../NavigationBar';
import CommunityAbout from '../CommunityAbout';
import NextEvent from '../NextEvent';
import MailingList from '../MailingList';
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
        <Hero />
        <RedBadgerBanner />
        <NavigationBar />
        <CommunityAbout communitySummary={communitySummary} />
        <NextEvent
          eventTitle={eventTitle}
          eventDate={eventDate}
          eventAddress={eventAddress}
          eventStartTime={eventStartTime}
          eventEndTime={eventEndTime}
        />

        {eventSpeakers && <Speakers eventSpeakers={eventSpeakers} />}

        {/* REGISTER */}
        <MailingList
          mailingListTitle={mailingListTitle}
          mailingListSummary={mailingListSummary}
        />


        <section id="event-details" className="block">
          <div className="content space-between">

            {/* SCHEDULE */}
            <article id="schedule">
              <h3>Schedule</h3>
              <dl className="schedule-timeline">
                {eventSchedule && eventSchedule.map((props, index) => (
                  <ScheduleItem key={index} {...props} />
                ))}
              </dl>
            </article>

            {/* SPONSORS */}
            <article id="sponsors">
              <h3>Sponsors</h3>
              <ul className="semantic-only">
                {eventSponsors && eventSponsors.map((props, index) => (
                  <Sponsor key={index} {...props} />
                ))}
              </ul>
            </article>

          </div>
        </section>

      </main>


      {/* UPCOMING EVENTS */}
      <section id="upcoming-events" className="block">
        <div className="content">
          <h2>Upcoming Events</h2>
        </div>
        <div className="content space-between events">
          {upcomingEvents && upcomingEvents.map((event, index) => (
            event ? <article key={index}>
              <h3>{event.title}</h3>
              <ul className="event-details semantic-only">
                <li className="date">
                  <a>{event.date}</a>
                </li>
                <li className="location">
                  <a>{event.venue}</a>
                </li>
                <li className="time">
                  <a>from {event.startTime} to {event.endTime}</a>
                </li>
              </ul>
            </article> : null
          ))}
        </div>
      </section>

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
  eventSpeakers: PropTypes.array,
  eventSchedule: PropTypes.array,
  eventSponsors: PropTypes.array,
  upcomingEvents: PropTypes.array,
};

export default Community;
