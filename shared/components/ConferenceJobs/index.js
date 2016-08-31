import React, { PropTypes } from 'react';
import partnerType from '../../prop-types/partner-type';
import JobsSection from '../JobsSection';

const isEmpty = array => !Array.isArray(array) || array.length === 0;

const hasNoJobs = array => !Array.isArray(array) || array.every(partner => isEmpty(partner.jobs));

const ConferenceJobs = ({ gold, silver, bronze }) => (
  <div>
    <section className="block ConferenceJobs__about">
      <div className="content">
        <h2>Jobs</h2>
        <p>
          Our partners are looking for great React developers to join their team.
          Take a look at the current vacancies on offer from the people who
          are helping make React London possible.
        </p>
      </div>
    </section>

    {(hasNoJobs(gold) && hasNoJobs(silver) && hasNoJobs(bronze)) &&
      <section className="block ConferenceJobs__no-jobs">
        <p className="content">
          Currently none of our partners have any jobs available,
          but please keep checking back for opportunities.
        </p>
      </section>}

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

ConferenceJobs.propTypes = {
  gold: PropTypes.arrayOf(PropTypes.shape(partnerType)),
  silver: PropTypes.arrayOf(PropTypes.shape(partnerType)),
  bronze: PropTypes.arrayOf(PropTypes.shape(partnerType)),
};

export default ConferenceJobs;
