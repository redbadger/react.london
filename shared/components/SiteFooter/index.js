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
      <div className="SiteFooter__conference block">
        <h2>
          <span className="text-background">
            React London 2017
          </span>
        </h2>
        <p>
          <span className="text-background">
            We're launching a new conference<br />focused on React
          </span>
        </p>
        <a className="SiteFooter__conference-cta" href="#">
          <span className="text-background">
            Find out more
          </span>
        </a>
      </div>
    );
  }
  return (
    null
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

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
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
              {/*
                <a
                  className="SiteFooter__social-link SiteFooter__instagram"
                  href="#TODO"
                  target="_blank"
                >
                </a>
              */}
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
