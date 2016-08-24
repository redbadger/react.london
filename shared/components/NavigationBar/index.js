import React from 'react';
import { Link } from 'react-router';


const NavigationBar = () => (
  <nav className="NavigationBar block NavigationBar--Conference">
    <div className="NavigationBar__links-container">
      <input className="trigger" type="checkbox" id="burger" />
      <label htmlFor="burger">Menu</label>
      <ul>
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
      </ul>
    </div>
    {/*
    <div className="ticket__button__container">
      <a href="#" className="ticket__button">Tickets</a>
    </div>
    */}
  </nav>
);

export default NavigationBar;
