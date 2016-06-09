import React, { Component } from 'react';

function maybeLink(attrs = {}) {
  const { text, url } = attrs;
  if (text && url) {
    return <a target="_blank" href={url}>{text}</a>
  } else {
    return null;
  }
}

const Meetup = ({ name, details, where, when, signup, streaming }) => (
  <section className="upcoming-meetup">
    <h2>{ name }</h2>
    <div
      className="details"
      dangerouslySetInnerHTML={ details ? { __html: details } : null }
    />
    <p>{ when }</p>
    <p>{ maybeLink(where) }</p>
    <p>{ maybeLink(signup) }</p>
    <p>{ maybeLink(streaming) }</p>
  </section>
);

export default Meetup;
