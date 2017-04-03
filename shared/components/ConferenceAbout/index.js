import React from 'react';

const ConferenceAbout = ({ isAfterConference }) => (
  <section className="block ConferenceAbout">
    <div className="content">
      {isAfterConference ? (
        <div>
          <h2>The conference has finished now.</h2>
          <p>Thanks for coming, we had a blast.</p>
        </div>
      ) : (
        <div>
          <h2>Let’s explore!</h2>
          <p>Red Badger is launching a new conference focused on React in London for
            2017 – we’re calling it <strong>React London 2017.</strong></p>
          <p>We’re bringing together some great speakers and events
            – get involved!
          </p>
        </div>
      )}
    </div>
  </section>
);

export default ConferenceAbout;
