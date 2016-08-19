import React, { PropTypes } from 'react';

const pageType = PropTypes.oneOf([
  'Conference',
  'Community',
]).isRequired;

const linkType = PropTypes.shape({
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
});

function Banner({ page }) {
  if (page === 'Community') {
    return (
      <div className="SiteFooter__banner SiteFooter__conference block">
        <h2 className="SiteFooter__banner-title">
          React London 2017
        </h2>
        <p>
          <span className="text-background">
            We&rsquo;re launching a new conference<br />focused on React
          </span>
        </p>
        <a className="SiteFooter__banner-cta" href="/conference">
          <span className="text-background">
            Find out more
          </span>
        </a>
      </div>
    );
  }
  return (
    <div className="SiteFooter__banner SiteFooter__community block">
      <h2 className="SiteFooter__banner-title">
        React London Meetup
      </h2>
      <p>
        <span className="text-background">
          Looking for our meetups?
        </span>
      </p>
      <a className="SiteFooter__banner-cta" href="/community">
        <span className="text-background">
          Find out more
        </span>
      </a>
    </div>
  );
}

Banner.propTypes = {
  page: pageType,
};

function LinkList({ title, className, links = [] }) {
  if (links.length < 1) { return null; }
  return (
    <div className={'SiteFooter__' + className}>
      <h2>{title}</h2>
      <ul className="SiteFooter__links">
        {links.map(({ url, text }, index) => (
          <li key={index}><a href={url}>{text}</a></li>
        ))}
      </ul>
    </div>
  );
}

LinkList.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(linkType),
};

function footerBlerb(page) {
  if (page === 'Community') {
    return 'Red Badger run the React.London meetups to help chart what’s possible' +
      ' and give the community a place to share discoveries.';
  }
  return 'Red Badger are running the React.London Conference to help chart what’s' +
    ' possible and give the community a place to share discoveries. This is' +
    ' not-for-profit, the money generated will help cover our costs for this' +
    ' and future events.';
}

const SiteFooter = ({ page, seriousLinks, usefulLinks }) => (
  <footer className={'block SiteFooter SiteFooter__' + page}>
    <Banner page={page} />

    <div className="SiteFooter__content block">
      <div className="SiteFooter__content-container content">
        <div className="SiteFooter__blerb">
          <object
            className="SiteFooter__badger"
            data="/img/SVG/Badger.svg"
            type="image/svg+xml"
          />

          <p>{footerBlerb(page)}</p>
        </div>

        <div className="SiteFooter__additional-info">
          <div className="SiteFooter__social">
            <h2>Talk to us</h2>
            <div className="SiteFooter__links SiteFooter__social-links">
              <a
                className="SiteFooter__social-link SiteFooter__mail"
                href="mailto:hello@react.london"
              >
              </a>
              <a
                className="SiteFooter__social-link SiteFooter__slack"
                href="http://slack.red-badger.com/"
                target="_blank"
              >
              </a>
              <a
                className="SiteFooter__social-link SiteFooter__youtube"
                href="https://www.youtube.com/playlist?list=PLW6ORi0XZU0BL3Up9mXpP75ilJBDOjMsQ"
                target="_blank"
              >
              </a>
              <a
                className="SiteFooter__social-link SiteFooter__twitter"
                href="https://twitter.com/ReactLondon_"
                target="_blank"
              >
              </a>
            </div>
          </div>

          <LinkList title="Serious Stuff" className="serious" links={seriousLinks} />
          <LinkList title="Useful Links" className="useful" links={usefulLinks} />
        </div>
      </div>
    </div>
  </footer>
);

SiteFooter.propTypes = {
  page: pageType,
  seriousLinks: LinkList.propTypes.links,
  usefulLinks: LinkList.propTypes.links,
};

export default SiteFooter;
