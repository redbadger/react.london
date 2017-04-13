import { SLACK_URL } from '../../../server/constants.js';
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

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
            We hosted the first React conference<br />in London in March 2017.
          </span>
        </p>
        <a
          className="SiteFooter__banner-cta"
          href="/conference"
          target="_blank"
          rel="noopener"
        >
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
      <a
        className="SiteFooter__banner-cta"
        href="/community"
        target="_blank"
        rel="noopener"
      >
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
          <li key={index}><Link to={url}>{text}</Link></li>
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
    return 'Red Badger runs the React London meetups to help chart what’s possible,' +
      ' and give the community a place to share discoveries.';
  }
  return 'Red Badger is running the React London Conference to help chart what’s' +
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
            className="SiteFooter__badger icon-Badger"
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
                title="React London email"
              >
              </a>
              <a
                className="SiteFooter__social-link SiteFooter__slack"
                href={SLACK_URL}
                target="_blank"
                rel="noopener"
                title="React London community slack (opens in a new window)"
              >
              </a>
              <a
                className="SiteFooter__social-link SiteFooter__youtube"
                href="https://www.youtube.com/playlist?list=PLW6ORi0XZU0BL3Up9mXpP75ilJBDOjMsQ"
                target="_blank"
                rel="noopener"
                title="React London youtube account (opens in a new window)"
              >
              </a>
              <a
                className="SiteFooter__social-link SiteFooter__twitter"
                href="https://twitter.com/ReactLondon_"
                target="_blank"
                rel="noopener"
                title="React London twitter account (opens in a new window)"
              >
              </a>
              <a
                className="SiteFooter__social-link SiteFooter__instagram"
                href="https://instagram.com/reactlondon_"
                target="_blank"
                rel="noopener"
                title="React London instagram account (opens in a new window)"
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
