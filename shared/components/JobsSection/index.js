import React, { PropTypes } from 'react';
import partnerType from '../../prop-types/partner-type';

const defaultImage = '/img/PNG/partner.png';

const isEmpty = array => !Array.isArray(array) || !array.length > 0;

const Job = ({ title, location, description, displayDescription }) => (
  <div className="Job">
    <h4 className="Job__title">{title}</h4>
    <p className="Job__location">{location}</p>
    {displayDescription && <p className="Job__description">{description}</p>}
    <a href="#" target="_blank" rel="noopener">Read more</a>
  </div>
);

const JobPartner = ({ name, description, imageURL, partnerURL, displayDescription, jobs }) => {
  if (isEmpty(jobs)) { return null; }
  return (
    <div className="content JobPartner">
      <a href={partnerURL} target="_blank" rel="noopener">
        <img className="JobPartner__image" src={imageURL || defaultImage} alt={name} />
      </a>
      <h4 className="JobPartner__title">{name}</h4>
      <p className="JobPartner__description">{description}</p>

      {jobs.map((job, index) =>
        <Job key={index} {...job} displayDescription={displayDescription} />)}
    </div>
  );
};

JobPartner.propTypes = {
  ...partnerType,
  displayDescription: PropTypes.bool,
};

const JobsSection = ({ partners, displayDescription }) => {
  if (isEmpty(partners)) { return null; }
  return (
    <section className={'block JobsSection'}>
      {partners.map((partner, index) =>
        <JobPartner key={index} {...partner} displayDescription={displayDescription} />)}
    </section>
  );
};

JobsSection.propTypes = {
  partners: PropTypes.arrayOf(PropTypes.shape(partnerType)),
  displayDescription: PropTypes.bool,
};

export default JobsSection;
