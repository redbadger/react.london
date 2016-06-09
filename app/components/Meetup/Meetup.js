import React, { Component } from 'react';

function maybeLink(attrs = {}) {
  const { text, url } = attrs;
  if (text && url) {
    return <a target="_blank" href={url}>{text}</a>
  } else {
    return null;
  }
}

const Meetup = ({ text }) => {
  const meetup = text.meetup;
  return <section className="upcoming-meetup">
    <h2>{meetup && meetup.name ? meetup.name: null}</h2>
    <div
      className="details"
      dangerouslySetInnerHTML={ meetup ? { __html: meetup.details } : null }
    />
    <p>{ meetup ? meetup.when: null }</p>
    <p>{ maybeLink(meetup.where) }</p>
    <p>{ maybeLink(meetup.signup) }</p>
    <p>{ maybeLink(meetup.streaming) }</p>
  </section>;
};

export default Meetup;
