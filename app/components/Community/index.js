import React, { PropTypes } from 'react';
import SiteFooter from '../SiteFooter';
import Speaker from '../Speaker';
import ScheduleItem from '../ScheduleItem';
import Sponsor from '../Sponsor';
import Hero from '../Hero';
import RedBadgerBanner from '../RedBadgerBanner';

const Community = ({
  communitySummary,
  mailingListTitle,
  mailingListSummary,
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

        {/* NAVIGATION BAR */}
        <nav className="NavBar block">
          <ul className="NavBar__tabs">
            <li><a className="NavBar__tab--active" href="#">Meetups</a></li>
            <li><a href="/conference">Conference</a></li>
          </ul>
        </nav>

        {/* ABOUT REACT LONDON EVENTS  */}
        <section className="About block">
          <div className="content">
            <p className="About__text">{communitySummary}</p>
          </div>
        </section>

        {/* NEXT EVENT */}
        <section className="NextEvent block">
          <div className="content">
            <h2 className="NextEvent__header">Next Event</h2>
            <article className="NextEvent__section-container">
              <div className="NextEvent__section NextEvent__section__details">
                <h3 className="NextEvent__details__heading">July React Meetup</h3>
                <ul className="NextEvent__details">
                  <li>
                    <a className="NextEvent__link--date">{eventDate}</a>
                  </li>
                  <li>
                    <a className="NextEvent__link--place">{eventAddress}</a>
                  </li>
                  <li>
                    <a className="NextEvent__link--time">{eventStartTime} - {eventEndTime}</a>
                  </li>
                </ul>
              </div>
              <div className="NextEvent__section NextEvent__section__booking">
                <h3 className="NextEvent__booking__heading">TICKETS GO LIVE</h3>
                <p className="NextEvent__booking__text">Monday, 11 July 2016 at 13:00</p>
                <div className="NextEvent__booking-btn__container">
                  <a className="NextEvent__booking-btn NextEvent__booking-btn--disabled">free ticket</a>
                </div>
                <p className="NextEvent__live-stream-text">
                  To get reminders about tickets and future events <a className="NextEvent__live-stream-text--link" href="#stay-tuned">subscribe here</a>
                </p>

              </div>
            </article>
          </div>
        </section>

        {/* SPEAKERS */}
        <section id="speakers" className="block">
          <div className="content">
            <h2 className="content-title">Speakers</h2>
          </div>
          <div className="content space-between">

            {eventSpeakers && eventSpeakers.map((props, index) => (
              <Speaker key={index} {...props} />
            ))}
          </div>
        </section>

        {/* REGISTER */}

        <section id="stay-tuned" className="StayTuned block">
          <div className="content">
            <h3 className="StayTuned__heading">{mailingListTitle}</h3>
            <p className="StayTuned__summary">{mailingListSummary}</p>

            <div id="mc_embed_signup">
              <form className="StayTuned__form" action="//london.us13.list-manage.com/subscribe/post?u=f3de268a0820d472cbd31f761&amp;id=c723cfd260&LOCATION=community" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" noValidate>
                <div className="StayTuned__form__container">
                  <label className="StayTuned__form__label" htmlFor="mce-EMAIL">Email</label>
                  <input className="StayTuned__form__email" type="email" value="" autoComplete="off" name="EMAIL" id="mce-EMAIL" placeholder="name@address.com" required />
                  <input className="StayTuned__form__submit" type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" />
                </div>
              </form>
            </div>
          </div>
        </section>


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

      <SiteFooter />
    </div>
  </div>
);

Community.propTypes = {
  communitySummary: PropTypes.string,
  mailingListTitle: PropTypes.string,
  mailingListSummary: PropTypes.string,
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
