import React, { PropTypes } from 'react';
import partnerType from '../../prop-types/partner-type';

const defaultImage = '/img/PNG/partner.png';

const isEmpty = array => !Array.isArray(array) || array.length === 0;

const Job = ({ title, location, description, displayCareerBrief, jobURL }) => (
  <div className="Job">
    <h4 className="Job__title">{title}</h4>
    <p className="Job__location">{location}</p>
    {displayCareerBrief && <p className="Job__description">{description}</p>}
    {jobURL && <a className="Job__link" href={jobURL} target="_blank" rel="noopener">Read more</a>}
  </div>
);

Job.propTypes = {
  title: PropTypes.string,
  location: PropTypes.string,
  careerBrief: PropTypes.string,
  displayCareerBrief: PropTypes.bool,
  jobURL: PropTypes.string,
};

const JobPartner = ({ name, careerBrief, imageURL, partnerURL, displayCareerBrief, jobs }) => {
  if (isEmpty(jobs)) { return null; }
  return (
    <div className="content JobPartner">
      <div className="JobPartner__image">
        <a href={partnerURL} target="_blank" rel="noopener">
          <img src={imageURL || defaultImage} alt={name} />
        </a>
        <h4 className="JobPartner__title">{name}</h4>
      </div>
      <article className="JobPartner__details">
        <p className="JobPartner__description">{careerBrief}</p>
        {jobs.map((job, index) =>
          <Job key={index} {...job} displayCareerBrief={displayCareerBrief} />)}
      </article>
    </div>
  );
};

JobPartner.propTypes = {
  ...partnerType,
  displayCareerBrief: PropTypes.bool,
};

const JobsSection = ({ partners, displayCareerBrief }) => {
  if (isEmpty(partners)) { return null; }
  return (
    <section className={'block JobsSection'}>
      {partners.map((partner, index) =>
        <JobPartner key={index} {...partner} displayCareerBrief={displayCareerBrief} />)}
    </section>
  );
};

JobsSection.propTypes = {
  partners: PropTypes.arrayOf(PropTypes.shape(partnerType)),
  displayCareerBrief: PropTypes.bool,
};

export default JobsSection;
