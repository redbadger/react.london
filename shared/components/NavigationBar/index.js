import React from 'react';
import { Link } from 'react-router';


const NavigationBar = () => (
  <nav className="NavigationBar block NavigationBar--Conference">
    <div className="NavigationBar__links-container block">
      <input className="trigger" type="checkbox" id="burger" />
      <label htmlFor="burger">MENU</label>
      <ul className="content">
        <li>
          <Link activeClassName="active" to="/">
            About
          </Link>
        </li>
        <li>
          <Link activeClassName="active" to="/partners">
            Partners
          </Link>
        </li>
        <li>
          <Link activeClassName="active" to="/jobs">
            Jobs
          </Link>
        </li>
        <div className="ticket__button__container ticket__button__container--tablet">
          <Link activeClassName="active" className="ticket__button" to="/tickets">
            Tickets
          </Link>
        </div>
      </ul>
    </div>
    <div className="ticket__button__container ticket__button__container--mobile">
      <Link activeClassName="active" className="ticket__button" to="/tickets">
        Tickets
      </Link>
    </div>
  </nav>
);

export default NavigationBar;
