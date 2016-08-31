import React from 'react';
import PartnersSection from '../PartnersSection';

function stripDescription(objects = []) {
  return objects.map(({ name, imageURL, partnerURL }) => {
    return { name, imageURL, partnerURL };
  });
}

function stripText(objects = []) {
  return objects.map(({ imageURL, partnerURL }) => {
    return { imageURL, partnerURL };
  });
}

const ConferencePartners = (props) => {
  const { gold, silver, bronze, supporter } = props;
  return (
    <div>
      <section className="block ConferencePartners__about">
        <div className="content">
          <p>
            React London 2017 is possible due to the kind support
            of <strong> our amazing partners</strong>, who help us keep
            tickets affordable.
          </p>
        </div>
      </section>

      <PartnersSection
        partners={gold || []}
        title="Gold Partners"
        level="gold"
      />

      <PartnersSection
        partners={silver || []}
        title="Silver Partners"
        level="silver"
      />

      <PartnersSection
        partners={stripDescription(bronze)}
        title="Bronze Partners"
        level="bronze"
      />

      <PartnersSection
        partners={stripText(supporter)}
        title="Supporters"
        level="supporters"
      />

      <div className="InterestedPartner block">
        <h3 className="InterestedPartner__heading">
          Interested in becoming a partner? Get in touch!
        </h3>
        <div className="content">
          <a
            rel="noopener"
            target="_blank"
            href="mailto:hello@react.london?subject=Partnership Enquiry- React London 2017"
            className="InterestedPartner__btn"
          >
            Become a Partner
          </a>
        </div>
      </div>
    </div>
  );
};

ConferencePartners.propTypes = {
  gold: PartnersSection.propTypes.partners,
  silver: PartnersSection.propTypes.partners,
  bronze: PartnersSection.propTypes.partners,
  supporter: PartnersSection.propTypes.partners,
};

export default ConferencePartners;
