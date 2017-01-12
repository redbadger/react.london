import React from 'react';
import PartnersSection from '../PartnersSection';

function stripDescription(objects = []) {
  return objects.map(({ name, imageURL, url }) => {
    return { name, imageURL, url };
  });
}

function stripText(objects = []) {
  return objects.map(({ imageURL, url }) => {
    return { imageURL, url };
  });
}

const ConferencePartners = (props) => {
  const { gold, silver, bronze, supporter } = props;
  return (
    <div>
      <section className="block ConferencePartners__about">
        <div className="content">
          <h2>
            Partners
          </h2>
          <p>
            React London 2017 is possible due to the kind support
            of<strong> our amazing partners</strong>.
          </p>
        </div>
      </section>

      <PartnersSection
        partners={gold || []}
        title="Pioneer partners"
        level="gold"
      />

      <PartnersSection
        partners={silver || []}
        title="Explorer partners"
        level="silver"
      />

      <PartnersSection
        partners={stripDescription(bronze)}
        title="Trekker partners"
        level="bronze"
      />

      <PartnersSection
        partners={stripText(supporter)}
        title="Supporters"
        level="supporters"
      />

      <div className="InterestedPartner block">
        <h3 className="InterestedPartner__heading">
          Interested in becoming a partner? Get in touch.
        </h3>
        <div className="content">
          <a
            rel="noopener"
            target="_blank"
            href="mailto:hello@react.london?subject=Partnership Enquiry- React London 2017"
            className="InterestedPartner__btn"
          >
            Become a partner
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
