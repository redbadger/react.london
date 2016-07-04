import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const NavigationBar = ({ page }) => (
  <nav className={`NavigationBar block NavigationBar--${page}`}>
    <ul className="NavigationBar__tabs">
      <li>
        <Link to="community" activeClassName={"NavigationBar__tab--active"}>Meetups</Link>
      </li>
      <li>
        <Link to="conference" activeClassName={"NavigationBar__tab--active"}>Conference</Link>
      </li>
    </ul>
  </nav>
);

NavigationBar.propTypes = {
  page: PropTypes.oneOf(['Conference', 'Community']).isRequired,
};

export default NavigationBar;
