import React, { Component } from 'react';

const Meetup = ({ text }) => {
  const meetup = text.meetup;
  return <section className="upcoming-meetup">
    <h2>{meetup && meetup.name ? meetup.name: null}</h2>
    <div
      className="details"
      dangerouslySetInnerHTML={ meetup ? { __html: meetup.details } : null }
    />
    <p>{meetup ? meetup.when: null}</p>
    {(meetup && meetup.where) && <p><a target="_blank" href={meetup.where.url}>{meetup.where.text}</a></p>}
    {(meetup && meetup.signup) && <p><a target="_blank" href={meetup.signup.url}>{meetup.signup.text}</a></p>}
    {(meetup && meetup.streaming) && <p><a target="_blank" href={meetup.streaming.url}>{meetup.streaming.text}</a></p>}
  </section>;
};

export default Meetup;
