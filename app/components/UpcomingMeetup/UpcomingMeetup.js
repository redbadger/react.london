import React, {Component} from 'react';

import style from './UpcomingMeetup.css';

const UpcomingMeetup = ({ upcomingMeetupName, upcomingMeetupDetails, upcomingMeetupWhen, upcomingMeetupWhere, upcomingMeetupWhereLink, upcomingMeetupCtaText, upcomingMeetupCtaLink, upcomingMeetupStreamingText, upcomingMeetupStreamingLink }) => (
    <section className="UpcomingMeetup">
      <h2>{upcomingMeetupName}</h2>
      <p>{upcomingMeetupDetails}</p>
      <p>{upcomingMeetupWhen}</p>
      <p><a target="_blank" href={upcomingMeetupWhereLink}>{upcomingMeetupWhere}</a></p>
      <p><a target="_blank" href={upcomingMeetupCtaLink}>{upcomingMeetupCtaText}</a></p>
      <p><a target="_blank" href={upcomingMeetupStreamingLink}>{upcomingMeetupStreamingText}</a></p>
    </section>
  );

export default UpcomingMeetup;
