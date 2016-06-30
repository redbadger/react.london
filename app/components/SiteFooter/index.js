import React from 'react';

const SiteFooter = () => (
  <footer className="SiteFooter block">
    <div className="content space-between">

      <ul className="SiteFooter__links">
        <li>
          <a className="SiteFooter__link SiteFooter__link--mail" href="mailto:hello@react.london">
            <span>hello@react.london</span>
          </a>
        </li>
        <li>
          <a className="SiteFooter__link SiteFooter__link--slack" target="_blank" href="http://slack.red-badger.com/" target="_blank">
            <span>Join the conversation</span>
          </a>
        </li>
        <li>
          <a className="SiteFooter__link SiteFooter__link--youtube" target="_blank" href="https://www.youtube.com/playlist?list=PLW6ORi0XZU0BL3Up9mXpP75ilJBDOjMsQ" target="_blank">
            <span>Watch previous Meetups</span>
          </a>
        </li>
        <li>
          <a className="SiteFooter__link SiteFooter__link--twitter" target="_blank" href="https://twitter.com/ReactLondon_" target="_blank">
            <span>@ReactLondon_</span>
          </a>
        </li>
        <li>
          <a className="SiteFooter__link SiteFooter__link--hashtag" target="_blank" href="https://twitter.com/search?q=%23reactlondon" target="_blank">
            #reactlondon
          </a>
        </li>
      </ul>

      <a className="SiteFooter__logo" href="http://red-badger.com/" target="_blank">
        <object
          className="SiteFooter__logo--svg"
          data="/img/SVG/ReactLondon_SaveTheDate_Icons-02.svg"
          type="image/svg+xml"
        >
          <img
            className="SiteFooter__logo--img"
            srcSet="/img/PNG/ReactLondon_SaveTheDate_Icons_x2-02.png"
            src="/img/PNG/ReactLondon_SaveTheDate_Icons-02.png"
            alt="Red Badger logo"
          />
        </object>
      </a>

    </div>
  </footer>
);

export default SiteFooter;
