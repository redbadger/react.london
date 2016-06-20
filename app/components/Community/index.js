import React, { PropTypes } from 'react';
import SiteFooter from '../SiteFooter';
import Speaker from '../Speaker';
import ScheduleItem from '../ScheduleItem';

const Community = ({
  communityTitle,
  communitySummary,
  mailingListTitle,
  mailingListSummary,
  mailingListConferenceText,
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

        {/* HERO (main banner) */}
        <header id="hero" className="block">
          <div className="content">
            <h1>
              React London
              <span>Community</span>
            </h1>
          </div>
        </header>

        {/* POWERED BY RED BADGER BANNER */}
        <section id="red-badger-banner" className="block">
          <div className="content space-between">
            <span>Powered by Red Badger</span>

            <object data="assets/img/SVG/ReactLondon_SaveTheDate_Icons-01.svg" type="image/svg+xml">
              <img
                srcSet="assets/img/PNG/ReactLondon_SaveTheDate_Icons_x2-01.png"
                src="assets/img/PNG/ReactLondon_SaveTheDate_Icons-01.png"
                alt="Red Badger logo"
              />
            </object>
          </div>
        </section>

        {/* NAVIGATION BAR */}
        <nav id="main-nav" className="block">
          <ul className="content space-between semantic-only">
            <li><a className="events active" href="#">Upcoming Events</a></li>
            <li><a className="conference" href="#">Conference</a></li>
          </ul>
        </nav>

        {/* ABOUT REACT LONDON EVENTS  */}
        <section id="about" className="block">
          <div className="content">
            <h2>{communityTitle}</h2>
            <p>{communitySummary}</p>
          </div>
        </section>

        {/* NEXT EVENT */}
        <section id="next-event" className="block">
          <div className="content">
            <h2 className="content-title">Next Event</h2>
          </div>
          <div className="content space-between">
            <article>
              <h3>{eventTitle}</h3>
              <ul className="event-details semantic-only">
                <li className="date">
                  <a href="#">{eventDate}</a>
                </li>
                <li className="location">
                  <a href="#">{eventAddress}</a>
                </li>
                <li className="time">
                  <a href="#">from {eventStartTime} to {eventEndTime}</a>
                </li>
              </ul>
            </article>
            <article>
              <button>Get your free ticket</button>
              <h3>The tickets will go live on 8 June 2016</h3>
              <p>We will post the Live Stream here</p>
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
        <section id="register" className="block">
          <div className="content">

            <h3>{mailingListTitle}</h3>
            <p>{mailingListSummary}</p>

            {/* ACTION REMOVED Begin MailChimp Signup Form */}
            <div id="mc_embed_signup">
              <form
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_blank"
                noValidate
              >
                <div id="mc_embed_signup_scroll">
                  <label htmlFor="mce-EMAIL">Email:</label>
                  <input
                    type="email"
                    value=""
                    autoComplete="off"
                    name="EMAIL"
                    className="email"
                    id="mce-EMAIL"
                    placeholder="name@address.com"
                    required
                  />
                  {/* real people should not fill this in and expect good
                      things - do not remove this or risk form bot signup */}
                  <div id="mc_embed_signup_input" aria-hidden="true">
                    <input
                      type="text"
                      name="b_f3de268a0820d472cbd31f761_c723cfd260"
                      tabIndex="-1"
                      value=""
                    />
                  </div>
                  <div className="clear">
                    <input
                      type="submit"
                      value="Subscribe"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      className="button"
                    />
                  </div>
                </div>
              </form>
            </div>
            <p>{mailingListConferenceText}</p>
            {/* End mc_embed_signup */}
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
                {eventSponsors && eventSponsors.map((sponsor, index) => (
                  sponsor ? <li key={index}>
                    <a href={sponsor.websiteURL} target="_blank">
                      <img src={sponsor.imageURL} alt="Red Badger logo" />
                    </a>
                  </li> : null
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
  communityTitle: PropTypes.string,
  communitySummary: PropTypes.string,
  mailingListTitle: PropTypes.string,
  mailingListSummary: PropTypes.string,
  mailingListConferenceText: PropTypes.string,
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
