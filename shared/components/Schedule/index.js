import React from 'react';

const Schedule = () => {
  return (
    <div className="Schedule block">
      <div className="content">
        <h2 className="Schedule__header">Schedule</h2>
        <ol className="Schedule__list">
          <li>
            <p
              className="Schedule__item--time Schedule__item--first"
              data-time="8:30am – 9:30am"
            >
              Registration
            </p>
          </li>
          <li>
            <p className="Schedule__item">3 morning talks</p>
          </li>
          <li>
            <p className="Schedule__item">1 panel discussion</p>
          </li>
          <li>
            <p className="Schedule__item--time" data-time="12:40pm – 1:40pm">
              Street food lunch catered by <span className="Schedule__caterer">Leiths</span>
            </p>
          </li>
          <li>
            <p className="Schedule__item">4 lightning talks</p>
          </li>
          <li>
            <p className="Schedule__item">3 afternoon talks</p>
          </li>
          <li>
            <p
              className="Schedule__item--time Schedule__item--last"
              data-time="6:00pm – 9:00pm"
            >
              Join us for a drink
            </p>
          </li>
        </ol>
        <div className="Schedule__subtext">Full schedule to come soon</div>
      </div>
    </div>
  );
};

export default Schedule;

