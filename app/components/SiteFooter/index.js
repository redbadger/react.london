import React from 'react';

const SiteFooter = () => (
  <footer className="block">
    <div className="content space-between">

      <ul className="semantic-only">
        <li>
          <a href="mailto:hello@react.london">hello@react.london</a>
        </li>
        <li>
          <a href="https://twitter.com/londonreact" target="_blank">@londonreact</a>
        </li>
        <li>
          <a href="https://twitter.com/search?q=%23londonreact" target="_blank">#londonreact</a>
        </li>
        <li>
          {/* TODO: Get slack link */}
          <a href="#" target="_blank">Join the conversation</a>
        </li>
        <li>
          {/* TODO: Get video archive link */}
          <a href="#" target="_blank">Watch videos</a>
        </li>
      </ul>

      <a href="https://red-badger.com/" className="footer-logo" target="_blank">
        <object data="/img/SVG/ReactLondon_SaveTheDate_Icons-02.svg" type="image/svg+xml">
          <img
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
