import React from 'react';

const SchedulePageOverview = (props) => {
  return (
    <div className="SchedulePageOverview block">
      <div className="content">
        <div className="SchedulePageOverview__container">
          <div className="SchedulePageOverview__details">
            <div>
              8:30am - 9pm
            </div>
            <a
              className="SchedulePageOverview__date"
              href={props.calendarURL}
              target="_blank"
              rel="noopener"
            >
              28 March 2017
            </a>
            <div>
              QE11 Centre, Westminster
            </div>
          </div>
          <div className="SchedulePageOverview__cfp">
            <span
              className="SchedulePageOverview__button"
            >
              Call for papers closed
            </span>
            <div>
              Too late? Talk at our monthly <a
                href="/community"
                target="_blank"
                rel="noopener"
              >
                React meetup
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SchedulePageOverview.propTypes = {
  calendarURL: React.PropTypes.string,
};

export default SchedulePageOverview;
