import React from 'react';

const formUrl = 'https://redbadger.typeform.com/to/eacPbb';

const OpportunityTickets = () => {
  return (
    <section className="block OpportunityTickets">
      <div className="content">
        <h2>Opportunity Tickets</h2>
        <p>
          We are dedicated to inclusion and even more so - opportunity at React
          London 2017. We acknowledge that the cost of a conference ticket may
          be out of reach to some in our community. As a result we have
          created opportunity tickets which will be free of charge.
        </p>
        <p>
          To apply, please fill out this short
          application <a href={formUrl} target="_blank" rel="noopener">form
          </a> and tell us about your story so far. All information will be
          kept confidential with the exception of the review committee.
        </p>
        <p>
          Applications close: 13th January, 2017<br />
          Application notification: 27th January, 2017
        </p>
        <p>
          If you have any questions please email the team
          &mdash; <a href="mailto:hello@react.london" rel="noopener" target="_blank">
          hello@react.london</a>
        </p>
      </div>
    </section>

  );
};

export default OpportunityTickets;
