import React, { PropTypes } from 'react';

const pageType = PropTypes.oneOf(['Conference', 'Community']).isRequired;

function Title({ page }) {
  if (page === 'Community') {
    return (
      <div>
        <h1 className="Hero__title">React London</h1>
        <h2 className="Hero__subtitle">Meetup</h2>
      </div>
    );
  }
  return (
    <div>
      <h1 className="Hero__title">React London 2017</h1>
      <h2 className="Hero__subtitle">Conference</h2>
    </div>
  );
}

Title.propTypes = {
  page: pageType,
};


const Hero = ({ page }) => (
  <header className={`Hero block Hero--${page}`}>
    <a href="/">
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
      <Title page={page} />
    </a>
  </header>
);

Hero.propTypes = {
  page: pageType,
};

export default Hero;
