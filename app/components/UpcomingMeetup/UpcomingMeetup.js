import React from 'react';

const UpcomingMeetup = ({ text }) => (
    <section className="UpcomingMeetup">
      <h2>{text.upcomingMeetupName}</h2>
      <div dangerouslySetInnerHTML={ { __html: text.upcomingMeetupDetails } } />
      <p>{text.upcomingMeetupWhen}</p>
      <p><a target="_blank" href={text.upcomingMeetupWhereLink}>{text.upcomingMeetupWhere}</a></p>
      <p><a target="_blank" href={text.upcomingMeetupCtaLink}>{text.upcomingMeetupCtaText}</a></p>
      <p><a target="_blank" href={text.upcomingMeetupStreamingLink}>{text.upcomingMeetupStreamingText}</a></p>
    </section>
  );

export default UpcomingMeetup;
