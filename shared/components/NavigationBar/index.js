import React from 'react';
import { Link } from 'react-router';

class NavigationBar extends React.Component {
  constructor() {
    super();
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.input.checked = false;
  }

  render() {
    return (
      <nav className="NavigationBar block NavigationBar--Conference">
        <div className="NavigationBar__links-container block">
          <input
            className="trigger"
            ref={c => { this.input = c; }}
            type="checkbox"
            id="burger"
          />
          <label htmlFor="burger">MENU</label>
          <ul className="content">
            <li>
              <Link activeClassName="active" to="/" onClick={this.toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link activeClassName="active" to="/speakers" onClick={this.toggleMenu}>
                Speakers
              </Link>
            </li>
            <li>
              <Link activeClassName="active" to="/schedule" onClick={this.toggleMenu}>
                Schedule
              </Link>
            </li>
            <li>
              <Link activeClassName="active" to="/partners" onClick={this.toggleMenu}>
                Partners
              </Link>
            </li>
            <li>
              <Link activeClassName="active" to="/jobs" onClick={this.toggleMenu}>
                Jobs
              </Link>
            </li>
            <div className="ticket__button__container ticket__button__container--tablet">
              <Link
                activeClassName="active"
                className="ticket__button"
                to="/tickets"
                onClick={this.toggleMenu}
              >
                Tickets
              </Link>
            </div>
          </ul>
        </div>
        <div className="ticket__button__container ticket__button__container--mobile">
          <Link
            activeClassName="active"
            className="ticket__button"
            to="/tickets"
            onClick={this.toggleMenu}
          >
            Tickets
          </Link>
        </div>
      </nav>
    );
  }
}

export default NavigationBar;
