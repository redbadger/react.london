
import React, { PropTypes } from 'react';
import partnerType from '../../prop-types/partner-type';

const ConferenceJobs = (props) => {
  const { gold, silver, bronze, supporter } = props;
  return (
    <div>
      <section className="block ConferenceJobs__about">
        <div className="content">
          <h2>Jobs</h2>
          <p>
            Some Intro about Jobs Section. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
          </p>
        </div>
      </section>
    </div>
  );
};

ConferenceJobs.propTypes = {
  gold: PropTypes.arrayOf(PropTypes.shape(partnerType)),
  silver: PropTypes.arrayOf(PropTypes.shape(partnerType)),
  bronze: PropTypes.arrayOf(PropTypes.shape(partnerType)),
  supporter: PropTypes.arrayOf(PropTypes.shape(partnerType)),
};

export default ConferenceJobs;
