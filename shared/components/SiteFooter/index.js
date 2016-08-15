import React from 'react';

const SiteFooter = () => (
  <footer className="SiteFooter block">
    <div className="SiteFooter__conference block">
      <h2>React London 2017</h2>
      <p>We're launching a new conference<br />focused on React</p>
      <a className="SiteFooter__conference-cta" href="#">Find out more</a>
    </div>
    <div className="SiteFooter__content block">
      <div className="content">
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

        <h2>Serious Stuff</h2>
        <ul className="SiteFooter__links SiteFooter__serious">
          <li><a href="#">Our Code of Conduct</a></li>
        </ul>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
