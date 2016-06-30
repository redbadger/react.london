import React from 'react';

const RedBadgerBanner = () => (
  <section className="RedBadgerBanner block">
    <div className="content space-between">
      <span className="RedBadgerBanner__tag">Powered by Red Badger</span>
      <object
        className="RedBadgerBanner__logo--svg"
        data="/img/SVG/ReactLondon_SaveTheDate_Icons-01.svg"
        type="image/svg+xml"
      >
        <img
          className="RedBadgerBanner__logo--img"
          srcSet="/img/PNG/ReactLondon_SaveTheDate_Icons_x2-01.png"
          src="/img/PNG/ReactLondon_SaveTheDate_Icons-01.png"
          alt="Red Badger logo"
        />
      </object>
    </div>
  </section>
);

export default RedBadgerBanner;
