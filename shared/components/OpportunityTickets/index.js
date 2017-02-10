import React from 'react';

const OpportunityTickets = () => {
  return (
    <section className="block OpportunityTickets">
      <div className="content">
        <h2>
          <span className="tickets-title">Opportunity Tickets</span>
          <span> - APPLICATIONS CLOSED</span>
        </h2>
        <p>
          We are dedicated to inclusion and even more so - opportunity at React
          London 2017. We acknowledge that the cost of a conference ticket may
          be out of reach to some in our community. As a result we have
          created opportunity tickets which will be free of charge.
        </p>
        <p>
          <strong>Applications close:</strong> 13th January, 2017<br />
          <strong>Application notification:</strong> 27th January, 2017
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
