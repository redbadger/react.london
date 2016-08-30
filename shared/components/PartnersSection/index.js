import React, { PropTypes } from 'react';

const defaultImage = '/img/PNG/partner.png';

const Partner = ({ name, description, imageURL, partnerURL }) => {
  return (
    <li className="Partner">
      <a href={partnerURL} target="_blank" rel="noopener">
        <img className="Partner__image" src={imageURL || defaultImage} alt={name} />
      </a>
      {name && <h4 className="Partner__title">{name}</h4>}
      {description && <p className="Partner__description">{description}</p>}
    </li>
  );
};

Partner.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  imageURL: PropTypes.string,
  partnerURL: PropTypes.string,
};


const PartnersSection = ({ partners, level, title }) => {
  if (!Array.isArray(partners) || !partners.length > 0) { return null; }
  return (
    <section className={'block PartnersSection PartnersSection__' + level}>
      <div className="content">
        <h3 className="PartnersSection__title">
          {title}
        </h3>
      </div>

      <ul className="content PartnersSection__list">
        {partners.map((partner, index) =>
          <Partner key={index} {...partner} />)}
      </ul>
    </section>
  );
};

PartnersSection.propTypes = {
  partners: PropTypes.arrayOf(PropTypes.shape(Partner.propTypes)),
  level: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default PartnersSection;
