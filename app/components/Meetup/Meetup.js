import React from 'react';

const Meetup = ({ text }) => (
    <section className="UpcomingMeetup">
      <h2>{text.meetup.name}</h2>
      <div dangerouslySetInnerHTML={ { __html: text.meetup.details } } />
      <p>{text.meetup.when}</p>
      <p><a target="_blank" href={text.meetup.where.url}>{text.meetup.where.text}</a></p>
      <p><a target="_blank" href={text.meetup.signup.url}>{text.meetup.signup.text}</a></p>
      <p><a target="_blank" href={text.meetup.streaming.url}>{text.meetup.streaming.text}</a></p>
    </section>
  );

export default Meetup;
