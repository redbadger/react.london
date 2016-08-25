import React, { PropTypes } from 'react';
import partnerType from '../../prop-types/partner-type';
import JobsSection from '../JobsSection';

const ConferenceJobs = (props) => {
  const { gold, silver, bronze } = props;
  return (
    <div>
      <section className="block ConferenceJobs__about">
        <div className="content">
          <h2>Jobs</h2>
          <p>
            Some Intro about Jobs Section. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incidid
            unt ut labore et dolore magna aliqua. Utenim ad minim veni
            am, quis nostrud exercitation ullamco laboris nisi.
          </p>
        </div>
      </section>

      <JobsSection
        partners={gold || []}
        displayDescription
      />

      <JobsSection
        partners={silver || []}
      />

      <JobsSection
        partners={bronze || []}
      />

    </div>
  );
};

ConferenceJobs.propTypes = {
  gold: PropTypes.arrayOf(PropTypes.shape(partnerType)),
  silver: PropTypes.arrayOf(PropTypes.shape(partnerType)),
  bronze: PropTypes.arrayOf(PropTypes.shape(partnerType)),
};

export default ConferenceJobs;
