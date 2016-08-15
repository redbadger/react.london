import React from 'react';

const NavigationBar = () => (
  <nav className={'NavigationBar block NavigationBar--Conference'}>
    <input className="trigger" type="checkbox" id="mainNavButton" />
    <label htmlFor="mainNavButton">Menu</label>
    <ul>
      <li><a href="#">About</a></li>
      <li><a href="#">Speakers</a></li>
      <li><a href="#">Schedule</a></li>
      <li><a href="#">Venue</a></li>
      <li><a href="#">Partners</a></li>
      <li><a href="#">Jobs</a></li>
    </ul>
    <div className='wild'>
      <a href="#" className='ticket__button'>Buy tickets</a>
    </div>
  </nav>
);

export default NavigationBar;
