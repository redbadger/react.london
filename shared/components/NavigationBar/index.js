import React from 'react';
import { Link } from 'react-router';

const NavigationBar = () => (
  <nav className={'NavigationBar block NavigationBar--Conference'}>
    <ul className="NavigationBar__tabs">
      <li>
        <Link to="community">Meetups</Link>
      </li>
      <li>
        <Link to="conference" activeClassName={"NavigationBar__tab--active"}>Conference</Link>
      </li>
    </ul>
  </nav>
);

export default NavigationBar;
