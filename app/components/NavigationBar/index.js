import React from 'react';

const NavigationBar = () => (
  <nav className="NavigationBar block">
    <ul className="NavigationBar__tabs">
      <li><a className="NavigationBar__tab--active" href="#">Meetups</a></li>
      <li><a href="/conference">Conference</a></li>
    </ul>
  </nav>
);

export default NavigationBar;
