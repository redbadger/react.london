import React from 'react';

const Hero = () => (
  <header className="Hero block">
    <object className="Hero--svg" data="/img/SVG/Community_header_transparent.svg" type="image/svg+xml">
      <img className="Hero--img" srcSet="/img/PNG/Community_header_transparent_x2.png" src="/img/PNG/Community_header_transparent.png" alt="Red Badger logo" />
    </object>
    <h1 className="Hero__title">React London</h1>
  </header>
);

export default Hero;
