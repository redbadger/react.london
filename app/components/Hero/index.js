import React, { PropTypes } from 'react';

const Hero = ({ page }) => (
  <header className={`Hero block Hero--${page}`}>
    <object
      data={`/img/SVG/${page}_header_transparent.svg`}
      type="image/svg+xml"
    >
      <img
        srcSet={`/img/PNG/${page}_header_transparent_x2.png`}
        src={`/img/PNG/${page}_header_transparent.png`}
        alt="Red Badger logo"
      />
    </object>
    <h1 className="Hero__title">React London</h1>
  </header>
);

Hero.propTypes = {
  page: PropTypes.oneOf(['Conference', 'Community']).isRequired,
};

export default Hero;
