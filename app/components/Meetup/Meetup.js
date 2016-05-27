import React, { Component } from 'react';

class Meetup extends Component {
  render() {
    const meetup = this.props.text.meetup;
    return (
      <section className="UpcomingMeetup">
        <h2>{meetup ? meetup.name: null}</h2>
        <div dangerouslySetInnerHTML={ meetup ? { __html: meetup.details } : null } />
        <p>{meetup ? meetup.when: null}</p>
        <p><a target="_blank" href={meetup ? meetup.where.url: null}>{meetup ? meetup.where.text : null}</a></p>
        <p><a target="_blank" href={meetup ? meetup.signup.url : null}>{meetup ? meetup.signup.text: null}</a></p>
        <p><a target="_blank" href={meetup ? meetup.streaming.url : null}>{meetup ? meetup.streaming.text: null}</a></p>
      </section>
    );
  };
}

export default Meetup;
