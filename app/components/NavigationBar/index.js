import React from 'react';

const NavigationBar = () => (
  <nav className="NavBar block">
    <ul className="NavBar__tabs">
      <li><a className="NavBar__tab--active" href="#">Meetups</a></li>
      <li><a href="/conference">Conference</a></li>
    </ul>
  </nav>
);

export default NavigationBar;
