import React from 'react';

const RedBadgerBanner = () => (
  <section className="RedBadgerBanner block">
    <div className="content space-between">
      <object
        className="RedBadgerBanner__logo"
        data="/img/SVG/Badger.svg"
        type="image/svg+xml"
      >
        <img
          className="RedBadgerBanner__logo"
          srcSet="/img/PNG/ReactLondon_SaveTheDate_Icons_x2-01.png"
          src="/img/PNG/ReactLondon_SaveTheDate_Icons-01.png"
          alt="Red Badger logo"
        />
      </object>
    </div>
  </section>
);

export default RedBadgerBanner;
